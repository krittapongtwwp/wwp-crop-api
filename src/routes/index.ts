import { Router } from 'express'
import healthRounter from './checkhealth'
import v1Router from './v1'

const router = Router()

router.use('/api/health', healthRounter)
// router.use('/api/v1', v1Router)
router.use('/api/', v1Router)

export default router
