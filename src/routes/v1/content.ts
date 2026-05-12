import { Router, Request, Response, NextFunction } from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { z } from 'zod'

import { createApiDoc } from '@/middlewares/scalar.factory'
import { authenticateToken } from '@/middlewares/auth'
import { zvalidate } from '@/middlewares/validation'
import { prisma } from '@/libs/prisma.ts'
import { config } from '@/constants/config'
import { validateUploadedFile } from '@/middlewares/validation-upload'

const ALLOWED_TABLES = [
  'homepage_sections',
  'solutions',
  'portfolio',
  'clients',
  'press',
  'careers',
  'applicants',
  'leads',
  'settings',
  'services',
  'ai_knowledge',
  'ai_logs',
  'hero_banners',
  'ai_image_history',
  'changelog'
]

// ## Schema
const applyBody = z.object({
  job_id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.email(),
  phone: z.string(),
  portfolio_url: z.string().optional(),
  cover_letter: z.string().optional()
})
const leadBody = z.object({
  name: z.string(),
  email: z.email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string()
})
const tableParam = z.object({ table: z.enum(ALLOWED_TABLES) })
const tableIdParam = z.object({ table: z.enum(ALLOWED_TABLES), id: z.string() })
const tableBody = z.object({}).loose()
const listQuery = z.object({
  is_published: z.string().optional(),
  _sort: z.string().optional(),
  _order: z.string().optional()
})
const createResponse = z.object({ success: z.boolean(), id: z.number() })
const genericResponse = z.object({ success: z.boolean(), data: z.any().optional() })
// ##

// Ensure ./uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads')
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true })
}

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadsDir)
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
//     cb(null, uniqueSuffix + path.extname(file.originalname))
//   }
// })
// const upload = multer({ storage: storage })
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024, files: 1 }, // 10 MB
  fileFilter: (_req, file, cb) => {
    if (!config.upload.allowedDocMimeType.includes(file.mimetype)) {
      return cb(new Error('INVALID_FILE_TYPE'))
    }
    cb(null, true)
  }
})

const router = Router()
const doc = createApiDoc('/api/content')

router.post(
  '/careers/apply',
  doc({
    path: '/careers/apply',
    method: 'post',
    detail: { summary: 'Upload file resumea', tags: ['Content'] },
    body: applyBody,
    response: createResponse
  }),
  upload.single('resume'),
  zvalidate({ body: applyBody }),
  validateUploadedFile,
  uploadResume
)

router.post(
  '/leads',
  doc({
    path: '/leads',
    method: 'post',
    detail: { summary: 'Sumbit contact lead', tags: ['Content'] },
    body: leadBody,
    response: createResponse
  }),
  zvalidate({ body: leadBody }),
  createLead
)

router.get(
  '/:table',
  doc({
    path: '/{table}',
    method: 'get',
    detail: { summary: 'List items by table', tags: ['Content'] },
    params: tableParam,
    query: listQuery
  }),
  zvalidate({ params: tableParam, query: listQuery }),
  getTable
)

router.get(
  '/:table/:id',
  doc({
    path: '/{table}/{id}',
    method: 'get',
    detail: { summary: 'Items by table id', tags: ['Content'] },
    params: tableIdParam,
    response: genericResponse
  }),
  zvalidate({ params: tableIdParam }),
  getTableById
)

router.post(
  '/:table',
  doc({
    path: '/{table}',
    method: 'post',
    detail: { summary: 'Create item by table', tags: ['Content'] },
    params: tableParam,
    body: tableBody,
    response: genericResponse
  }),
  authenticateToken,
  zvalidate({ params: tableBody, body: tableBody }),
  createTable
)

router.put(
  '/:table/:id',
  doc({
    path: '/{table}/{id}',
    method: 'put',
    detail: { summary: 'Update item by table id', tags: ['Content'] },
    params: tableIdParam,
    body: tableBody,
    response: genericResponse
  }),
  authenticateToken,
  zvalidate({ params: tableIdParam, body: tableBody }),
  updateTableById
)

router.delete(
  '/:table/:id',
  doc({
    path: '/{table}/{id}',
    method: 'delete',
    detail: { summary: 'Delete item by table id', tags: ['Content'] },
    params: tableIdParam,
    response: genericResponse
  }),
  authenticateToken,
  zvalidate({ params: tableIdParam }),
  deleteTableById
)

async function uploadResume(req: Request, res: Response) {
  // const result = applyBody.safeParse(req.body)
  // if (!result.success) {
  //   return res.status(400).json({ error: '' })
  // }
  // const { job_id, first_name, last_name, email, phone, portfolio_url, cover_letter } = result.data

  const { job_id, first_name, last_name, email, phone, portfolio_url, cover_letter } = req.body as z.infer<
    typeof applyBody
  >

  // ## file manage
  const foldername = 'resume'
  const filename = `${first_name.slice(0, 5)}-${last_name.slice(0, 5)}-${Math.round(Math.random() * 1e9)}${path.extname(req.file.originalname)}`
  const targetDir = path.join(uploadsDir, foldername)
  const filePath = path.join(targetDir, filename)

  const name = `${first_name} ${last_name}`
  const cv_url = `/uploads/${foldername}/${filename}`

  let fileWritten = false
  try {
    await fs.promises.mkdir(targetDir, { recursive: true })
    await fs.promises.writeFile(filePath, req.file.buffer)
    fileWritten = true

    const result = await prisma.applicants.create({
      data: {
        career_id: Number(job_id),
        name: name,
        email: email,
        phone: phone,
        cv_url: cv_url,
        notes: `Portfolio: ${portfolio_url}\n\nCover Letter:\n${cover_letter}`,
        status: 'new'
      }
    })
    const response: z.infer<typeof createResponse> = {
      success: true,
      id: result.id
    }
    res.status(200).json(response)
  } catch (err: any) {
    if (fileWritten) await fs.promises.unlink(filePath).catch(() => {})
    console.error('APPLY_ERROR:', err)
    res.status(500).json({ error: err.message })
  }
}

async function createLead(req: Request, res: Response) {
  // const result = leadBody.safeParse(req.body)
  // if (!result.success) {
  //   const response: z.infer<typeof errorResponse> = {
  //     error: result.error.message
  //   }
  //   return res.status(400).json(response)
  // }
  // const { name, email, company, phone, message } = result.data

  const { name, email, company, phone, message } = req.body as z.infer<typeof leadBody>
  try {
    const result = await prisma.leads.create({
      data: {
        name: name,
        email: email,
        company: company,
        phone: phone,
        message: message,
        status: 'new'
      }
    })
    const response: z.infer<typeof createResponse> = {
      success: true,
      id: result.id
    }
    res.status(200).json(response)
  } catch (err: any) {
    console.error('LEADS_ERROR:', err)
    res.status(500).json({ error: err.message })
  }
}

async function getTable(req: Request, res: Response) {
  // const paramResult = tableParam.safeParse(req.params)
  // if (!paramResult.success) {
  //   const response: z.infer<typeof errorResponse> = {
  //     error: paramResult.error.message
  //   }
  //   return res.status(400).json(response)
  // }
  // const queryResult = listQuery.safeParse(req.query)
  // if (!queryResult.success) {
  //   const response: z.infer<typeof errorResponse> = {
  //     error: queryResult.error.message
  //   }
  //   return res.status(400).json(response)
  // }
  // const { is_published, _sort, _order } = queryResult.data
  // const { table } = paramResult.data

  const { is_published, _sort, _order } = req.query as z.infer<typeof listQuery>
  const { table } = req.params as z.infer<typeof tableParam>
  const model = prisma[table]
  try {
    const whereClaues: any = {}
    if (is_published !== undefined) {
      const valNum = Number(is_published)
      if (['solutions', 'portfolio', 'clients', 'press', 'services', 'changelog'].includes(table)) {
        whereClaues.is_published = valNum
      } else if (table === 'homepage_sections') {
        whereClaues.is_visible = valNum
      } else if (['hero_banners', 'ai_knowledge'].includes(table)) {
        whereClaues.is_active = valNum
      } else if (table === 'careers') {
        whereClaues.status = valNum === 1 ? 'open' : 'closed'
      }
    }
    const orderBy: any = {}
    if (_sort) {
      const sortField = String(_sort)
      const sortOrder = _order === 'asc' ? 'asc' : 'desc'
      orderBy[sortField] = sortOrder
    }
    const data = await model.findMany({
      where: whereClaues,
      orderBy: _sort ? orderBy : undefined
    })
    // const response: z.infer<typeof genericResponse> = {
    //   success: true,
    //   data: data
    // }
    res.status(200).json(data)
  } catch (err: any) {
    console.error('TABLE_ERROR', err)
    res.status(500).json({ error: err.message })
  }
}

async function getTableById(req: Request, res: Response) {
  // const result = tableIdParam.safeParse(req.params)
  // if (!result.success) {
  //   const response: z.infer<typeof errorResponse> = {
  //     error: result.error.message
  //   }
  //   return res.status(400).json(response)
  // }
  // const { table, id } = result.data

  const { table, id } = req.params as z.infer<typeof tableIdParam>
  const model = prisma[table]
  const numId = Number(id)
  const where = Number.isInteger(numId) && id.trim() !== '' ? { id: numId } : { slug: id }
  try {
    const data = await model.findUnique({ where })
    if (!data) return res.status(404).json({ error: 'Not found' })
    res.json(data)
  } catch (err: any) {
    console.error(`TABLE_BY_ID_ERROR (${table}/${id}):`, err)
    res.status(500).json({ error: err.message })
  }
}

async function createTable(req: Request, res: Response) {
  // const paramResult = tableParam.safeParse(req.params)
  // if (!paramResult.success) {
  //   const response: z.infer<typeof errorResponse> = {
  //     error: paramResult.error.message
  //   }
  //   return res.status(400).json(response)
  // }
  // const bodyResult = tableBody.safeParse(req.body)
  // if (!bodyResult.success) {
  //   const response: z.infer<typeof errorResponse> = {
  //     error: bodyResult.error.message
  //   }
  //   return res.status(400).json(response)
  // }
  // const { table } = paramResult.data
  // const model = prisma[table]

  const { table } = req.params as z.infer<typeof tableParam>
  const resultData = req.body as z.infer<typeof tableBody>
  const model = prisma[table]
  const data = normalizeTableBody(table, resultData)
  try {
    const result = await model.create({ data })
    const response: z.infer<typeof genericResponse> = {
      success: true,
      data: result
    }
    res.status(200).json(response)
  } catch (err: any) {
    console.error(`POST_TABLE_ERROR (${table}):`, data, err)
    res.status(500).json({ error: err.message })
  }
}

async function updateTableById(req: Request, res: Response) {
  // const paramResult = tableIdParam.safeParse(req.params)
  // if (!paramResult.success) {
  //   const response: z.infer<typeof errorResponse> = {
  //     error: paramResult.error.message
  //   }
  //   return res.status(400).json(response)
  // }
  // const bodyResult = tableBody.safeParse(req.body)
  // if (!bodyResult.success) {
  //   const response: z.infer<typeof errorResponse> = {
  //     error: bodyResult.error.message
  //   }
  //   return res.status(400).json(response)
  // }
  // const { table, id } = paramResult.data
  // const data = bodyResult.data

  const { table, id } = req.params as z.infer<typeof tableIdParam>
  const data = req.body as z.infer<typeof tableBody>
  const model = prisma[table]
  try {
    const result = await model.update({ where: { id: Number(id) }, data })
    const response: z.infer<typeof genericResponse> = {
      success: true,
      data: result
    }
    res.status(200).json(response)
  } catch (err: any) {
    console.error(`PUT_ERROR (${table}/${id}):`, err)
    res.status(500).json({ error: err.message })
  }
}

async function deleteTableById(req: Request, res: Response) {
  // const paramResult = tableIdParam.safeParse(req.params)
  // if (!paramResult.success) {
  //   const response: z.infer<typeof errorResponse> = {
  //     error: paramResult.error.message
  //   }
  //   return res.status(400).json(response)
  // }
  // const { table, id } = paramResult.data

  const { table, id } = req.params as z.infer<typeof tableIdParam>
  const model = prisma[table]
  try {
    const result = await model.delete({
      where: { id: Number(id) }
    })
    const response: z.infer<typeof genericResponse> = {
      success: true,
      data: result
    }
    res.status(200).json(response)
  } catch (err: any) {
    console.error(`DELETE_TABLE_BY_ID_ERROR (${table}/${id}):`, err)
    res.status(500).json({ error: err.message })
  }
}

/**
 * TEMP: frontend ส่งข้อมูลไม่ตรงใน db
 */
const tableNormalizers: Record<string, (data: any) => any> = {
  portfolio: (data) => {
    if (!('client_name' in data)) return data
    const { client_name, ...rest } = data
    return {
      ...rest,
      client_name_en: rest.client_name_en ?? client_name,
      client_name_th: rest.client_name_th ?? client_name
    }
  },
  press: (data) => {
    if (!('cover_image' in data)) return data
    const { cover_image, ...rest } = data
    return {
      ...rest,
      image_url: rest.image_url ?? cover_image
    }
  }
}

function normalizeTableBody(table: string, data: any) {
  return tableNormalizers[table]?.(data) ?? data
}

export default router
