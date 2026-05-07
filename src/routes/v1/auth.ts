import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import { config } from '@/constants/config'
import { prisma } from '@/libs/prisma.ts'
import { createApiDoc } from '@/middlewares/scalar.factory'
import { AuthedRequest, authenticateToken } from '@/middlewares/auth'

const doc = createApiDoc('/v1/auth')

// ## Schema
const loginBody = z.object({
  email: z.email(),
  password: z.string().min(1)
})
const userPublic = z.object({
  id: z.number(),
  email: z.email(),
  name: z.string().nullable(),
  role: z.string()
})
const loginResponse = z.object({
  token: z.string(),
  user: userPublic
})
const errorResponse = z.object({ error: z.string() })
// ##

const router = Router()

router.post(
  '/login',
  doc({
    path: '/login',
    method: 'post',
    detail: { summary: 'Login', tags: ['Auth'] },
    body: loginBody,
    response: loginResponse
  }),
  signIn
)

router.get(
  '/me',
  doc({
    path: '/me',
    method: 'get',
    detail: { summary: 'Get current user', tags: ['Auth'] },
    response: userPublic
  }),
  authenticateToken,
  me
)

async function signIn(req: Request, res: Response, next: NextFunction) {
  const result = loginBody.safeParse(req.body)
  if (!result.success) {
    const response: z.infer<typeof errorResponse> = {
      error: result.error.message
    }
    return res.status(400).json(response)
  }

  const { email, password } = result.data
  try {
    const user = await prisma.user.findUnique({
      where: { email: email }
    })
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' })

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, config.jwt.secret, { expiresIn: '24h' })
    const response: z.infer<typeof loginResponse> = {
      token: token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    }
    res.status(200).json(response)
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
}

async function me(req: AuthedRequest, res: Response) {
  if (!req.user) return res.status(401).json({ error: 'Unauthorized' })

  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, email: true, name: true, role: true }
    })
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.json(user)
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
}

export default router
