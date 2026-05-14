import { Router } from 'express'
import beforeHandler from '@/middlewares/scalar.factory'
import { z } from 'zod'
import { prisma } from '@/libs/prisma'

const router = Router()

router.get(
  '/',
  beforeHandler({
    path: '/api/health',
    method: 'get',
    detail: { summary: 'Health check', tags: ['Health'] },
    response: z.object({ status: z.string(), db: z.string() })
  }),
  async (_req, res) => {
    try {
      await prisma.$queryRaw`SELECT 1`
      res.json({ status: 'ok', db: 'connected' })
    } catch (err) {
      res.status(503).json({ status: 'error', db: 'disconnected', error: String(err) })
    }
  }
)

export default router
