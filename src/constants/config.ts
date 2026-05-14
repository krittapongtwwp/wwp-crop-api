export const config = {
  app: {
    name: process.env.APP || 'API',
    version: process.env.VERSION || '1.0.0',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'super-secret-key-for-wewebplus'
  },
  upload: {
    maxFileSize: Number(process.env.UPLOAD_MAX_SIZE) * 1024 * 1024 || 10 * 1024 * 1024, // 20MB
    local: {
      path: process.env.UPLOAD_LOCAL_PATH || 'upload'
    },
    publicBaseUrl: (process.env.API_PUBLIC_URL || '').replace(/\/+$/, ''),
    allowedImgMimeType: ['image/jpeg', 'image/png', 'image/webp'],
    allowedDocMimeType: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
  }
}
