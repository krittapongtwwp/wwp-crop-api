import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'
import { registerEndpoint } from '@/utils/openapi-registry'

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

interface ApiDocOptions {
  path: string
  method: HttpMethod
  detail: {
    description?: string
    summary?: string
    tags?: string[]
  }
  headers?: z.ZodObject<any>
  query?: z.ZodObject<any>
  params?: z.ZodObject<any>
  body?: z.ZodObject<any>
  response?: z.ZodObject<any>
}

/**
 * Middleware factory that registers API documentation at load time
 *
 * Usage:
 * router.post("/login", beforeHandler({
 *   path: '/v1/auth/login',
 *   method: 'post',
 *   detail: { description: 'Login', tags: ['Auth'] },
 * }), handler);
 */
export const beforeHandler = (options: ApiDocOptions) => {
  // Register immediately at module load time
  registerEndpoint(options)

  // Return passthrough middleware
  return (req: Request, res: Response, next: NextFunction) => {
    next()
  }
}

/**
 * Create a scoped beforeHandler with base path prefix
 *
 * Usage:
 * const doc = createApiDoc('/v1/auth');
 * router.post("/login", doc({ path: '/login', method: 'post', ... }), handler);
 * // Registers as: /v1/auth/login
 */
export const createApiDoc = (basePath: string) => {
  return (options: Omit<ApiDocOptions, 'path'> & { path: string }) => {
    const fullPath = basePath + options.path
    return beforeHandler({ ...options, path: fullPath })
  }
}

export default beforeHandler
