import { z } from 'zod'
import { config } from '@/constants/config'

// Types for API documentation
type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

interface ApiEndpoint {
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

// Registry to store all endpoints
const endpoints: ApiEndpoint[] = []

// Helper function to unwrap optional and nullable types
function unwrapZodType(zodType: z.ZodTypeAny): { innerType: z.ZodTypeAny; isOptional: boolean; isNullable: boolean } {
  let isOptional = false
  let isNullable = false
  let innerType: z.ZodTypeAny = zodType

  // Unwrap ZodOptional
  if (zodType instanceof z.ZodOptional) {
    isOptional = true
    innerType = (zodType as any)._def.innerType as z.ZodTypeAny
  }

  // Unwrap ZodNullable
  if (innerType instanceof z.ZodNullable) {
    isNullable = true
    innerType = (innerType as any)._def.innerType as z.ZodTypeAny
  }

  // Handle ZodOptional<ZodNullable<...>>
  if (innerType instanceof z.ZodOptional) {
    isOptional = true
    innerType = (innerType as any)._def.innerType as z.ZodTypeAny
  }

  return { innerType, isOptional, isNullable }
}

// Convert a single Zod type to OpenAPI schema property
function zodTypeToOpenApi(zodType: z.ZodTypeAny): any {
  const { innerType, isNullable } = unwrapZodType(zodType)
  let schemaProperty: any = {}

  if (innerType instanceof z.ZodString) {
    schemaProperty = { type: 'string' }
  } else if (innerType instanceof z.ZodNumber) {
    schemaProperty = { type: 'number' }
  } else if (innerType instanceof z.ZodBoolean) {
    schemaProperty = { type: 'boolean' }
  } else if (innerType instanceof z.ZodArray) {
    const arrayType = innerType as z.ZodArray<any>
    const itemType = (arrayType as any)._def.type as z.ZodTypeAny
    const itemSchema = zodTypeToOpenApi(itemType)
    schemaProperty = { type: 'array', items: itemSchema }
  } else if (innerType instanceof z.ZodObject) {
    // Handle nested objects recursively
    schemaProperty = zodToOpenApi(innerType)
  } else {
    // Default to string for unknown types
    schemaProperty = { type: 'string' }
  }

  // Add nullable if needed
  if (isNullable) {
    schemaProperty.nullable = true
  }

  return schemaProperty
}

// Convert Zod schema to OpenAPI schema
function zodToOpenApi(schema: z.ZodObject<any>): Record<string, any> {
  const shape = schema.shape
  const properties: Record<string, any> = {}
  const required: string[] = []

  for (const [key, value] of Object.entries(shape)) {
    const zodType = value as z.ZodTypeAny
    const { isOptional } = unwrapZodType(zodType)

    properties[key] = zodTypeToOpenApi(zodType)

    if (!isOptional) {
      required.push(key)
    }
  }

  return { type: 'object', properties, required: required.length > 0 ? required : undefined }
}

// Register an endpoint
export function registerEndpoint(endpoint: ApiEndpoint) {
  endpoints.push(endpoint)
}

// Generate OpenAPI spec from registry
export function generateOpenApiSpec() {
  const paths: Record<string, any> = {}

  for (const ep of endpoints) {
    if (!paths[ep.path]) {
      paths[ep.path] = {}
    }

    const operation: Record<string, any> = {
      summary: ep.detail.summary,
      description: ep.detail.description,
      tags: ep.detail.tags,
      responses: {
        200: {
          description: 'Successful response',
          content: ep.response
            ? {
                'application/json': { schema: zodToOpenApi(ep.response) }
              }
            : undefined
        }
      }
    }

    // Add parameters
    const parameters: any[] = []

    if (ep.headers) {
      for (const [key, value] of Object.entries(ep.headers.shape)) {
        parameters.push({
          name: key,
          in: 'header',
          required: !(value as z.ZodTypeAny).isOptional(),
          schema: { type: 'string' }
        })
      }
    }

    if (ep.query) {
      for (const [key, value] of Object.entries(ep.query.shape)) {
        parameters.push({
          name: key,
          in: 'query',
          required: !(value as z.ZodTypeAny).isOptional(),
          schema: { type: 'string' }
        })
      }
    }

    if (ep.params) {
      for (const [key, value] of Object.entries(ep.params.shape)) {
        parameters.push({
          name: key,
          in: 'path',
          required: true,
          schema: { type: 'string' }
        })
      }
    }

    if (parameters.length > 0) {
      operation.parameters = parameters
    }

    // Add request body
    if (ep.body) {
      operation.requestBody = {
        required: true,
        content: {
          'application/json': { schema: zodToOpenApi(ep.body) }
        }
      }
    }

    paths[ep.path][ep.method] = operation
  }

  return {
    openapi: '3.0.0',
    info: {
      title: config.app.name || 'API',
      version: config.app.version || '1.0.0',
      description: 'API documentation'
    },
    servers: [{ url: `${config.app.host}:${config.app.port}` }],
    paths
  }
}

export { endpoints }
