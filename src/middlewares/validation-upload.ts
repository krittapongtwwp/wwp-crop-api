import { Request, Response, NextFunction } from 'express'
import { validateFileContent } from '@/utils/file-validator'

export async function validateUploadedFile(req: Request, res: Response, next: NextFunction) {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' })
  }

  const result = await validateFileContent(req.file.buffer, req.file.mimetype)
  if (result.valid === false) {
    console.warn('[SECURITY] Invalid file upload attempt', {
      ip: req.ip,
      claimedMime: req.file.mimetype,
      originalName: req.file.originalname,
      error: result.code
    })

    return res.status(400).json({
      error: result.error,
      code: result.code
    })
  }

  req.file.mimetype = result.detectedMime
  next()
}
