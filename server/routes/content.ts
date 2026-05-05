import { Router } from 'express'
// import { getDb } from '../db.ts'
import { authenticateToken } from './auth.ts'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { prisma } from '@/libs/prisma.ts'

const router = Router()
console.log('CONTENT_ROUTES_LOADED_V5')

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

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads')
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true })
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, uniqueSuffix + path.extname(file.originalname))
  }
})

// Specific route for job application
const upload = multer({ storage: storage })
router.post('/careers/apply', upload.single('resume'), async (req, res) => {
  // const db = getDb();
  const { job_id, first_name, last_name, email, phone, portfolio_url, cover_letter } = req.body
  const name = `${first_name} ${last_name}`
  const cv_url = req.file ? `/uploads/${req.file.filename}` : null

  try {
    // const result = db
    //   .prepare(
    //     `
    // 			INSERT INTO applicants (career_id, name, email, phone, cv_url, notes, status)
    // 			VALUES (?, ?, ?, ?, ?, ?, 'new')
    // 		`
    //   )
    //   .run(job_id, name, email, phone, cv_url, `Portfolio: ${portfolio_url}\n\nCover Letter:\n${cover_letter}`)
    const result = await prisma.applicants.create({
      data: {
        career_id: job_id,
        name: name,
        email: email,
        phone: phone,
        cv_url: cv_url,
        notes: `Portfolio: ${portfolio_url}\n\nCover Letter:\n${cover_letter}`,
        status: 'new'
      }
    })

    // res.json({ success: true, id: result.lastInsertRowid })
    res.json({ success: true, id: result.career_id })
  } catch (err: any) {
    console.error('APPLY_ERROR:', err)
    res.status(500).json({ error: err.message })
  }
})

// Specific route for contact form (leads)
router.post('/leads', async (req, res) => {
  // const db = getDb()
  const { name, email, company, phone, message } = req.body
  try {
    // const result = db
    //   .prepare(
    //     `
    //   INSERT INTO leads (name, email, company, phone, message, status)
    //   VALUES (?, ?, ?, ?, ?, 'new')
    // `
    //   )
    //   .run(name, email, company, phone, message)
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
    // res.json({ success: true, id: result.lastInsertRowid })
    res.json({ success: true, id: result.id })
  } catch (err: any) {
    console.error('LEADS_ERROR:', err)
    res.status(500).json({ error: err.message })
  }
})

// Generic GET all
router.get('/:table', async (req, res) => {
  console.log('ROUTER_GET_HIT')
  const { table } = req.params
  const tableInput = table.toLowerCase()

  if (!ALLOWED_TABLES.includes(tableInput)) {
    return res.status(400).json({ error: 'Invalid table' })
  }
  const model = (prisma as any)[tableInput]
  console.log('GET_TABLE_HIT', tableInput)

  try {
    // const db = getDb()
    // let query = `SELECT * FROM ${table}`
    // const params: any[] = []
    // Basic filtering based on table schema
    // if (req.query.is_published !== undefined) {
    //   const val = Number(req.query.is_published)
    //   if (['solutions', 'portfolio', 'clients', 'press', 'services', 'changelog'].includes(table)) {
    //     query += ` WHERE is_published = ?`
    //     params.push(val)
    //   } else if (table === 'homepage_sections') {
    //     query += ` WHERE is_visible = ?`
    //     params.push(val)
    //   } else if (['hero_banners', 'ai_knowledge'].includes(table)) {
    //     query += ` WHERE is_active = ?`
    //     params.push(val)
    //   } else if (table === 'careers') {
    //     query += ` WHERE status = ?`
    //     params.push(val === 1 ? 'open' : 'closed')
    //   }
    // }
    // // Basic sorting
    // if (req.query._sort) {
    //   const sortField = String(req.query._sort)
    //   const sortOrder = req.query._order === 'asc' ? 'ASC' : 'DESC'
    //   // Only allow alphanumeric field names to prevent injection
    //   if (/^[a-z0-9_]+$/i.test(sortField)) {
    //     query += ` ORDER BY ${sortField} ${sortOrder}`
    //   }
    // }
    // const data = db.prepare(query).all(...params)
    // res.json({ data, logs: ['GET_DB_SUCCESS', 'QUERY_SUCCESS'] })
    const whereClaues: any = {}
    if (req.query.is_published !== undefined) {
      const valNum = Number(req.query.is_published)
      if (['solutions', 'portfolio', 'clients', 'press', 'services', 'changelog'].includes(tableInput)) {
        whereClaues.is_published = valNum
      } else if (tableInput === 'homepage_sections') {
        whereClaues.is_visible = valNum
      } else if (['hero_banners', 'ai_knowledge'].includes(tableInput)) {
        whereClaues.is_active = valNum
      } else if (tableInput === 'careers') {
        whereClaues.status = valNum === 1 ? 'open' : 'closed'
      }
    }
    const orderBy: any = {}
    if (req.query._sort) {
      const sortField = String(req.query._sort)
      const sortOrder = req.query._order === 'asc' ? 'asc' : 'desc'
      orderBy[sortField] = sortOrder
    }
    const data = await model.findMany({
      where: whereClaues,
      orderBy: req.query._sort ? orderBy : undefined
    })
    res.json({ data })
  } catch (err: any) {
    console.error('DATABASE_QUERY_ERROR', err)
    // res.status(502).json({
    //   error: 'DATABASE_ERROR_UNIQUE_12345',
    //   details: err.message,
    //   logs: ['GET_DB_CALLED', 'TRY_BLOCK_HIT', 'ERROR_DETAILS_LOGGED']
    // })
    res.status(502).json({
      error: 'DATABASE_ERROR',
      details: err.message
    })
  }
})

// Generic GET one
router.get('/:table/:id', async (req, res) => {
  const { table, id } = req.params

  if (!ALLOWED_TABLES.includes(table)) {
    return res.status(400).json({ error: 'Invalid table' })
  }

  const model = (prisma as any)[table]

  try {
    // const db = getDb()
    let data
    if (isNaN(Number(id))) {
      // Try querying by slug
      try {
        // data = db.prepare(`SELECT * FROM ${table} WHERE slug = ?`).get(id)
        data = await model.findMany({
          where: {
            slug: id
          }
        })
      } catch (e) {
        data = null
      }
    } else {
      // data = db.prepare(`SELECT * FROM ${table} WHERE id = ?`).get(id)
      data = await model.findMany({
        where: {
          id: id
        }
      })
    }
    if (!data) return res.status(404).json({ error: 'Not found' })
  } catch (err: any) {
    console.error(`GET_ONE_ERROR (${table}/${id}):`, err)
    res.status(500).json({ error: 'DATABASE_ERROR_TABLE_ID', details: err.message })
  }
})

// Generic POST (Create)
router.post('/:table', authenticateToken, async (req, res) => {
  const { table } = req.params
  if (!ALLOWED_TABLES.includes(table)) {
    return res.status(400).json({ error: 'Invalid table' })
  }
  const model = (prisma as any)[table]

  const data = req.body || {}
  if (Object.keys(data).length === 0) {
    return res.status(400).json({ error: 'Missing request body' })
  }

  // const db = getDb()
  // const keys = Object.keys(req.body)
  // const values = Object.values(req.body)
  // const placeholders = keys.map(() => '?').join(', ')
  try {
    // const result = db.prepare(`INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders})`).run(...values)
    // res.json({ id: result.lastInsertRowid, ...req.body })
    const result = await model.create({ data })
    res.json({ success: true, data: result })
  } catch (err: any) {
    console.error(`POST_ERROR (${table}):`, err)
    res.status(500).json({ error: err.message })
  }
})

// Generic PUT (Update)
router.put('/:table/:id', authenticateToken, async (req, res) => {
  const { table, id } = req.params
  if (!ALLOWED_TABLES.includes(table)) {
    return res.status(400).json({ error: 'Invalid table' })
  }
  const model = (prisma as any)[table]

  const data = req.body || {}
  if (Object.keys(data).length === 0) {
    return res.status(400).json({ error: 'Missing request body' })
  }

  // const db = getDb()
  // const keys = Object.keys(req.body)
  // const values = Object.values(req.body)
  // const setClause = keys.map((k) => `${k} = ?`).join(', ')
  try {
    // db.prepare(`UPDATE ${table} SET ${setClause} WHERE id = ?`).run(...values, id)
    // res.json({ id, ...req.body })
    const result = await model.update({ data })
    res.json({ success: true, data: result })
  } catch (err: any) {
    console.error(`PUT_ERROR (${table}/${id}):`, err)
    res.status(500).json({ error: err.message })
  }
})

// Generic DELETE
router.delete('/:table/:id', authenticateToken, async (req, res) => {
  const { table, id } = req.params
  if (!ALLOWED_TABLES.includes(table)) {
    return res.status(400).json({ error: 'Invalid table' })
  }
  const model = (prisma as any)[table]

  // const db = getDb()
  try {
    // db.prepare(`DELETE FROM ${table} WHERE id = ?`).run(id)
    // res.json({ success: true })
    const result = await model.delete({
      where: { id: id }
    })
    res.json({ success: true, data: result })
  } catch (err: any) {
    console.error(`DELETE_ERROR (${table}/${id}):`, err)
    res.status(500).json({ error: err.message })
  }
})

export default router
