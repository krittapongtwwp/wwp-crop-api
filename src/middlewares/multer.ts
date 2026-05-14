import multer from 'multer'
import { config } from '@/constants/config'

const storage = multer.memoryStorage()

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: config.upload.maxFileSize
  }
})

export const handleMultipart = upload.any()
