import { Router } from 'express'
import healthRounter from './checkhealth'

const router = Router()

router.use('/health', healthRounter)
// router.use('/v1', )

export default router
