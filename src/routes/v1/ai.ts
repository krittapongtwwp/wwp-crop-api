import { Router, Request, Response, NextFunction } from 'express'
import path from 'path'
import fs from 'fs'
import { z } from 'zod'
import { GoogleGenAI } from '@google/genai'

import { createApiDoc } from '@/middlewares/scalar.factory'
import { zvalidate } from '@/middlewares/validation'
import { prisma } from '@/libs/prisma.ts'
import { authenticateToken } from '@/middlewares/auth'

const AI_IMAGES_FOLDER = 'ai_images'
const AI_IMAGES_DIR = path.join(process.cwd(), 'uploads', AI_IMAGES_FOLDER)
if (!fs.existsSync(AI_IMAGES_DIR)) {
  fs.mkdirSync(AI_IMAGES_DIR, { recursive: true })
}
const model = 'gemini-2.5-flash'
const modelImage = 'gemini-2.5-flash'

const router = Router()
const doc = createApiDoc('/api/ai')
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

// ## Schema
const chatBody = z.object({
  message: z.string().min(1).max(2000)
})
const genContentBody = z.object({
  prompt: z.string(),
  isJson: z.boolean()
})
const genImageBody = z.object({
  prompt: z.string()
})
const genImageResponse = z.object({
  id: z.number(),
  prompt: z.string(),
  image_url: z.string()
})
const saveImageHistoryBody = z.object({
  prompt: z.string().min(1),
  image_url: z.url()
})
const saveImageHistoryResponse = z.object({ success: z.boolean(), id: z.number() })
// ##

router.post(
  '/chat',
  doc({
    path: '/chat',
    method: 'post',
    detail: { summary: 'Chat with ai', tags: ['AI'] },
    body: chatBody
  }),
  zvalidate({ body: chatBody }),
  chatWithAI
)

router.post(
  '/gen-content',
  doc({
    path: '/gen-content',
    method: 'post',
    detail: { summary: 'AI generate content', tags: ['AI'] },
    body: genContentBody
  }),
  authenticateToken,
  zvalidate({ body: genContentBody }),
  async (req: Request, res: Response) => {
    const { prompt, isJson } = req.body as z.infer<typeof genContentBody>
    try {
      const data = await ai.models.generateContent({
        model: model,
        contents: prompt,
        config: isJson ? { responseMimeType: 'application/json' } : undefined
      })
      res.json({ text: data.text })
    } catch (err: any) {
      res.status(500).json({ error: 'Failed to chat with ai', details: err.message })
    }
  }
)

router.post(
  '/gen-image',
  doc({
    path: '/gen-image',
    method: 'post',
    detail: { summary: 'AI generate image', tags: ['AI'] },
    body: genImageBody
  }),
  authenticateToken,
  zvalidate({ body: genImageBody }),
  async (req: Request, res: Response) => {
    const { prompt } = req.body as z.infer<typeof genImageBody>

    let filePath: string | null = null
    try {
      const data = await ai.models.generateContent({
        model: modelImage,
        contents: prompt,
        config: {
          imageConfig: { aspectRatio: '16:9', imageSize: '1K' }
        }
      })

      const parts = data.candidates?.[0]?.content?.parts ?? []
      const imagePart = parts.find((p) => p.inlineData?.data)

      if (!imagePart?.inlineData?.data) {
        return res.status(422).json({
          error: 'NO_IMAGE_GENERATED',
          details: 'Model did not return an image (possibly blocked by safety filter)'
        })
      }

      // ## save file
      const ext = mimeToExt(imagePart.inlineData.mimeType)
      const filename = `${Math.round(Math.random() * 1e9)}${ext}`
      const url = `/uploads/${AI_IMAGES_FOLDER}/${filename}`

      await fs.promises.writeFile(filePath, Buffer.from(imagePart.inlineData.data, 'base64'))
      const result = await prisma.ai_image_history.create({
        data: { prompt, image_url: url }
      })

      const response: z.infer<typeof genImageResponse> = {
        id: result.id,
        prompt,
        image_url: url
      }
      res.json(response)
    } catch (err: any) {
      if (filePath) await fs.promises.unlink(filePath).catch(() => {})
      res.status(500).json({ error: 'AI Image Error', details: err.message })
    }
  }
)

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
  const { prompt, image_url } = req.body as z.infer<typeof saveImageHistoryBody>
  try {
    const result = await prisma.ai_image_history.create({
      data: {
        prompt: prompt,
        image_url: image_url
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

async function chatWithAI(req: Request, res: Response) {
  const { message } = req.body as z.infer<typeof chatBody>
  try {
    const data = await ai.models.generateContent({
      model: model,
      contents: message
    })
    res.json({ text: data.text })
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to chat with ai', details: err.message })
  }
}

function mimeToExt(mime?: string): string {
  switch (mime) {
    case 'image/png':
      return '.png'
    case 'image/jpeg':
      return '.jpg'
    case 'image/webp':
      return '.webp'
    default:
      return '.png'
  }
}

export default router
