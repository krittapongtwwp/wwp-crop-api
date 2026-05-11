import { Router, Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { z } from 'zod'

import { createApiDoc } from '@/middlewares/scalar.factory'
import { authenticateToken } from '@/middlewares/auth'
import { zvalidate } from '@/middlewares/validation'
import { prisma } from '@/libs/prisma.ts'
import { config } from '@/constants/config'

// ## Schema
const idParam = z.object({ id: z.string().regex(/^\d+$/) })
const uploadBody = z.object({
  alt_text: z.string().optional(),
  folder: z.string().optional()
})
const uploadResponse = z.object({
  id: z.number(),
  filename: z.string(),
  url: z.string(),
  alt_text: z.string().optional(),
  folder: z.string().optional()
})
// const mediaItem = z.object({
//   id: z.number(),
//   filename: z.string().nullable(),
//   url: z.string(),
//   alt_text: z.string().nullable(),
//   folder: z.string().nullable(),
//   created_at: z.date().or(z.string()).optional()
// })
// const mediaList = z.array(mediaItem)
const successResponse = z.object({ success: z.boolean() })
const errorResponse = z.object({ error: z.string(), details: z.string().optional() })
// ##

// Ensure ./uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads')
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true })
}
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // cb(null, uploadsDir)
//     const folder = sanitizeFolder(req.body?.folder)
//     const targetDir = path.join(uploadsDir, folder)

//     fs.mkdir(targetDir, { recursive: true }, (err) => {
//       if (err) return cb(err, '')
//       cb(null, targetDir)
//     })
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
//     cb(null, uniqueSuffix + path.extname(file.originalname))
//   }
// })
// const upload = multer({ storage: storage })
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 60 * 1024 * 1024 }, // 60 MB
  fileFilter: (_req, file, cb) => {
    if (!config.upload.allowedImgMimeType.includes(file.mimetype)) {
      return cb(new Error('INVALID_FILE_TYPE'))
    }
    cb(null, true)
  }
})

const router = Router()
const doc = createApiDoc('/api/media')

router.get(
  '/',
  doc({
    path: '/',
    method: 'get',
    detail: { summary: 'List media', tags: ['Media'] }
  }),
  listMedia
)

router.post(
  '/upload',
  doc({
    path: '/upload',
    method: 'post',
    detail: { summary: 'Upload media', tags: ['Media'] },
    body: uploadBody,
    response: uploadResponse
  }),
  authenticateToken,
  upload.single('file'),
  zvalidate({ body: uploadBody }),
  uploadMedia
)

router.delete(
  '/:id',
  doc({
    path: '/{id}',
    method: 'delete',
    detail: { summary: 'Delete media', tags: ['Media'] },
    params: idParam
  }),
  authenticateToken,
  zvalidate({ params: idParam }),
  deleteMedia
)

async function listMedia(req: Request, res: Response) {
  try {
    const media = await prisma.media.findMany({
      orderBy: { created_at: 'desc' }
    })
    res.status(200).json(media)
  } catch (err: any) {
    const response: z.infer<typeof errorResponse> = {
      error: 'MEDIA_ERROR',
      details: err.message
    }
    res.status(500).json(response)
  }
}

async function uploadMedia(req: Request, res: Response) {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' })
  }
  const { alt_text, folder } = req.body as z.infer<typeof uploadBody>
  const foldername = sanitizeFolder(folder)
  const filename = `${formatDateYYMMDD()}-${Math.round(Math.random() * 1e9)}${path.extname(req.file.originalname)}`

  const targetDir = path.join(uploadsDir, foldername)
  const filePath = path.join(targetDir, filename)
  const url = `/uploads/${foldername}/${filename}`

  let fileWritten = false
  try {
    await fs.promises.mkdir(targetDir, { recursive: true })
    await fs.promises.writeFile(filePath, req.file.buffer)
    fileWritten = true

    const result = await prisma.media.create({
      data: {
        filename: filename,
        url: url,
        alt_text: alt_text || req.file.originalname,
        folder: foldername
      }
    })
    const response: z.infer<typeof uploadResponse> = {
      id: result.id,
      alt_text: result.alt_text ?? undefined,
      filename: result.filename,
      url: result.url,
      folder: result.folder ?? undefined
    }
    res.json(response)
  } catch (err: any) {
    if (fileWritten) await fs.promises.unlink(filePath).catch(() => {})
    res.status(500).json({ error: 'MEDIA_ERROR', details: err.message })
  }
}

async function deleteMedia(req: Request, res: Response) {
  const { id } = req.params as z.infer<typeof idParam>
  const numId = Number(id)
  try {
    const result = await prisma.media.findUnique({
      where: { id: numId }
    })
    if (!result) {
      return res.status(404).json({ error: 'Not found' })
    }

    if (result.filename && result.folder) {
      const filePath = path.join(uploadsDir, result.folder, result.filename)
      // if (fs.existsSync(filePath)) await fs.promises.unlink(filePath)
      await fs.promises.unlink(filePath).catch((err) => {
        if (err.code !== 'ENOENT') throw err
      })
    }

    await prisma.media.delete({ where: { id: numId } })
    const response: z.infer<typeof successResponse> = {
      success: true
    }
    res.json(response)
  } catch (err: any) {
    res.status(500).json({ error: 'MEDIA_ERROR', details: err.message })
  }
}

function sanitizeFolder(input?: string): string {
  const defaultFolder = 'general'
  if (!input) return defaultFolder
  const clean = input.toLowerCase().replace(/[^a-z0-9_-]/g, '')
  return clean || defaultFolder
}

function formatDateYYMMDD(d: Date = new Date()): string {
  const yy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yy}${mm}${dd}`
}

export default router
