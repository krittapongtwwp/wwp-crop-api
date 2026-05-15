import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { config } from '@/constants/config'

export interface AuthedRequest extends Request {
  user?: { id: number; email: string; name?: string; role: string }
}

export function authenticateToken(req: AuthedRequest, res: Response, next: NextFunction) {
  // Bypass authentication during development
  // if (process.env.NODE_ENV !== 'production') {
  //   req.user = { id: 1, email: 'admin@wewebplus.com', name: 'Admin User', role: 'admin' }
  //   return next()
  // }

  const token = req.headers['authorization']?.split(' ')[1]
  if (!token) return res.sendStatus(401)

  jwt.verify(token, config.jwt.secret, (err, user: any) => {
    // if (err) return res.sendStatus(403)
    if (err) return res.sendStatus(401)

    req.user = user
    next()
  })
}

export function requireRole(...allowedRoles: string[]) {
  return (req: AuthedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' })
    }
    next()
  }
}
