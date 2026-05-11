import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'

import { createApiDoc } from '@/middlewares/scalar.factory'
import { zvalidate } from '@/middlewares/validation'
import { prisma } from '@/libs/prisma.ts'

const router = Router()
const doc = createApiDoc('/api/ai')

// ## Schema
const saveImageHistoryBody = z.object({
  prompt: z.string().min(1),
  imageUrl: z.url()
})
const saveImageHistoryResponse = z.object({ success: z.boolean(), id: z.number() })
// ##

// Endpoint to save AI image generation history
router.post(
  '/save-image-history',
  doc({
    path: '/save-image-history',
    method: 'post',
    detail: { summary: 'Save AI image generage history', tags: ['AI'] },
    body: saveImageHistoryBody,
    response: saveImageHistoryResponse
  }),
  zvalidate({ body: saveImageHistoryBody }),
  saveImageHistory
)

async function saveImageHistory(req: Request, res: Response) {
  const { prompt, imageUrl } = req.body as z.infer<typeof saveImageHistoryBody>
  try {
    const result = await prisma.ai_image_history.create({
      data: {
        prompt: prompt,
        image_url: imageUrl
      }
    })
    const response: z.infer<typeof saveImageHistoryResponse> = {
      success: true,
      id: result.id
    }
    res.json(response)
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to save ai history', details: err.message })
  }
}

export default router
