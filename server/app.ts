// console.log('APP_TS_MODULE_LOADED_V12');
import express from 'express'
import cors from 'cors'
import path from 'path'
import { prisma } from './libs/prisma.ts'

// import { initDb } from './db.ts'
import authRoutes from './routes/auth.ts'
import contentRoutes from './routes/content.ts'
import mediaRoutes from './routes/media.ts'
import aiRoutes from './routes/ai.ts'

export async function createApp() {
  const app = express()
  console.log('CREATE_APP_CALLED_V8')

  // Initialize Database
  // await initDb()

  app.use((req, res, next) => {
    console.log('CORS_MIDDLEWARE_HIT')
    next()
  })
  const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
      ? (process.env.FRONTEND_URL || 'https://wwp-crop-website.onrender.com')
      : 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
  app.use(cors(corsOptions))

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  console.log('AFTER_MIDDLEWARE')

  // Health check
  app.get('/api/health', async (req, res) => {
		try{
			await prisma.$queryRaw`SELECT 1`
			res.json({ status: 'ok', version: 'V-UNIQUE-V11' })
		}catch(e){
			res.status(503).json({ status: 'ok', db: 'disconnected', error: String(e) })
		}
  })

  // Request logging
  app.use((req, res, next) => {
    const timestamp = new Date().toLocaleTimeString()
    console.log(`[${timestamp}] - [REQUEST] ${req.method} ${req.url}`)
    const oldSend = res.send
    res.send = function (data) {
      console.log(`[${timestamp}] - [RESPONSE] ${req.method} ${req.url} - Status: ${res.statusCode}`)
      return oldSend.apply(res, arguments as any)
    }
    next()
  })

  // API Routes
  app.use((req, res, next) => {
    console.log(`API_ROUTE_HIT: ${req.url}`)
    next()
  })
  app.use('/api/auth', authRoutes)

  app.get('/api/direct_test', (req, res) => {
    res.json({ message: 'DIRECT_TEST_WORKS_V7' })
  })

  console.log('BEFORE_CONTENT_ROUTES')
  app.use('/api/content', contentRoutes)
  app.use('/api/media', mediaRoutes)
  app.use('/api/ai', aiRoutes)

  // Catch-all for /api that didn't match any route
  app.all('/api/*', (req, res) => {
    console.log(`[API_NOT_FOUND] ${req.method} ${req.url}`)
    res.status(404).json({
      error: 'API_ROUTE_NOT_FOUND',
      method: req.method,
      url: req.url,
      path: req.path
    })
  })

  // Serve uploaded files
  app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')))

  // Global error handler
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('GLOBAL_ERROR_HANDLER:', err)
    res.status(500).json({
      error: 'GLOBAL_ERROR_CATCH',
      message: err.message,
      stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined
    })
  })

  return app
}
