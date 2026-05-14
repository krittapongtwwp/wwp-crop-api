import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import bcrypt from 'bcryptjs'

import { prisma } from '@/libs/prisma.ts'
import { createApiDoc } from '@/middlewares/scalar.factory'
import { AuthedRequest, authenticateToken, requireRole } from '@/middlewares/auth'
import { zvalidate } from '@/middlewares/validation'

// ## Scheme
const roleEnum = ['admin', 'editor', 'viewer']
const userPublic = z.object({
  id: z.number(),
  email: z.email(),
  name: z.string().nullable(),
  role: z.string()
})
const userIdParams = z.object({ id: z.string().regex(/^\d+$/) })
const createUserBody = z.object({
  email: z.email(),
  password: z.string().min(1),
  name: z.string().nullable(),
  role: z.enum(roleEnum)
})
const createUserResponse = z.object({
  success: z.boolean(),
  id: z.number()
})
const updateUserBody = z.object({
  email: z.email(),
  password: z.string().min(1).optional(),
  name: z.string().nullable(),
  role: z.enum(roleEnum)
})
const deleteUserResponse = z.object({
  success: z.boolean()
})
// ##

const doc = createApiDoc('/api/v1/user')
const router = Router()

router.get(
  '/',
  doc({
    path: '/',
    method: 'get',
    detail: { summary: 'Get users', tags: ['User'] },
    response: userPublic
  }),
  authenticateToken,
  async (req: Request, res: Response) => {
    try {
      const data = await prisma.user.findMany({
        orderBy: { id: 'desc' },
        select: { id: true, email: true, name: true, role: true }
      })
      res.status(200).json(data)
    } catch (err: any) {
      res.status(500).json({ error: 'GET_USER_ERROR' })
    }
  }
)

router.get(
  '/:id',
  doc({
    path: '/{id}',
    method: 'get',
    detail: { summary: 'Get user by id', tags: ['User'] },
    params: userIdParams,
    response: userPublic
  }),
  authenticateToken,
  zvalidate({ params: userIdParams }),
  async (req: Request, res: Response) => {
    const { id } = req.params as z.infer<typeof userIdParams>
    try {
      const data = await prisma.user.findUnique({
        where: { id: Number(id) },
        select: { id: true, email: true, name: true, role: true }
      })
      res.status(200).json(data)
    } catch (err: any) {
      res.status(500).json({ error: 'GET_USER_BY_ID_ERROR' })
    }
  }
)

router.post(
  '/',
  doc({
    path: '/',
    method: 'post',
    detail: { summary: 'Create user', tags: ['User'] },
    body: createUserBody
  }),
  authenticateToken,
  requireRole('admin'),
  zvalidate({ body: createUserBody }),
  async (req: Request, res: Response) => {
    const data = req.body as z.infer<typeof createUserBody>
    const hashedPassword = await bcrypt.hash(data.password, 10)
    try {
      const result = await prisma.user.create({
        data: { ...data, password: hashedPassword },
        select: { id: true }
      })
      const response: z.infer<typeof createUserResponse> = {
        success: true,
        id: result.id
      }
      res.status(200).json(response)
    } catch (err: any) {
      res.status(500).json({ error: 'CREATE_USER_ERROR' })
    }
  }
)

router.put(
  '/:id',
  doc({
    path: '/{id}',
    method: 'put',
    detail: { summary: 'Update user', tags: ['User'] },
    params: userIdParams,
    body: updateUserBody
  }),
  authenticateToken,
  requireRole('admin'),
  zvalidate({ params: userIdParams, body: updateUserBody }),
  async (req: Request, res: Response) => {
    const { id } = req.params as z.infer<typeof userIdParams>
    const data = req.body as z.infer<typeof updateUserBody>
    try {
      const updateData = { ...data }
      if (updateData.password) {
        updateData.password = await bcrypt.hash(updateData.password, 10)
      }
      const result = await prisma.user.update({
        where: { id: Number(id) },
        data: updateData,
        select: { id: true }
      })
      res.status(200).json({ success: true, id: result.id })
    } catch (err: any) {
      if (err.code === 'P2025') return res.status(404).json({ error: 'USER_NOT_FOUND' })
      if (err.code === 'P2002') return res.status(409).json({ error: 'EMAIL_ALREADY_EXISTS' })
      res.status(500).json({ error: 'UPDATE_USER_ERROR' })
    }
  }
)

router.delete(
  '/:id',
  doc({
    path: '/{id}',
    method: 'delete',
    detail: { summary: 'Delete user by id', tags: ['User'] },
    params: userIdParams,
    response: deleteUserResponse
  }),
  authenticateToken,
  zvalidate({ params: userIdParams }),
  requireRole('admin'),
  async (req: AuthedRequest, res: Response) => {
    const { id } = req.params as z.infer<typeof userIdParams>
    const targetId = Number(id)

    if (req.user?.id === targetId) {
      return res.status(400).json({ error: 'CANNOT_DELETE_SELF' })
    }

    try {
      const result = await prisma.user.delete({ where: { id: targetId } })
      res.status(200).json({ success: true })
    } catch (err: any) {
      if (err.code === 'P2025') return res.status(404).json({ error: 'USER_NOT_FOUND' })
      res.status(500).json({ error: 'DELETE_USER_ERROR' })
    }
  }
)

export default router
