import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

type Schemas = {
  body?: z.ZodObject<any>
  params?: z.ZodObject<any>
  query?: z.ZodObject<any>
}

export const zvalidate = (schemas: Schemas) => {
  return (req: Request, res: Response, next: NextFunction) => {
    for (const key of ['body', 'params', 'query'] as const) {
      const schema = schemas[key]
      if (!schema) continue
      const result = schema.safeParse(req[key])
      if (!result.success) {
        return res.status(400).json({ error: result.error.message })
      }
      ;(req as any)[key] = result.data
    }
    next()
  }
}
