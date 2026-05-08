import { Router } from 'express'

import authRouter from '@/routes/v1/auth'
import contentRouter from '@/routes/v1/content'
import mediaRouter from '@/routes/v1/media'
import aiRouter from '@/routes/v1/ai'

const router = Router()

router.use('/auth', authRouter)
router.use('/content', contentRouter)
router.use('/media', mediaRouter)

export default router
