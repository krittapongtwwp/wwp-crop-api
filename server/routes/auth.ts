import { Router } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
// import { getDb } from '../db.ts'
import { prisma } from '@/libs/prisma.ts'

const router = Router()
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-for-wewebplus'

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  // const db = getDb()

  try {
    // const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
    const user = await prisma.user.findUnique({
      where: { email: email }
    })

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '24h' })
    res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } })
    // res.json(user)
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/me', authenticateToken, async (req: any, res) => {
  // const db = getDb()
  try {
    // const user = db.prepare('SELECT id, email, name, role FROM users WHERE id = ?').get(req.user.id)
    const user = await prisma.user.findUnique({
      where: { id: req.user.id }
    })
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.json(user)
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
})

export function authenticateToken(req: any, res: any, next: any) {
  // Bypass authentication during development
  if (process.env.NODE_ENV !== 'production') {
    req.user = { id: 1, email: 'admin@wewebplus.com', name: 'Admin User', role: 'admin' }
    return next()
  }

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) return res.sendStatus(401)

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

export default router
