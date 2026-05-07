import { Router } from 'express'
import healthRounter from './checkhealth'
import v1Router from './v1'

const router = Router()

router.use('/health', healthRounter)
router.use('/v1', v1Router)

export default router
