import { Router } from 'express'

import authRouter from '@/routes/v1/auth'
import contentRouter from '@/routes/v1/content'

const router = Router()

router.use('/auth', authRouter)
router.use('/content', contentRouter)

export default router
