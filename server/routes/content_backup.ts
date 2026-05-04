import { Router } from 'express';
import { getDb } from '../db.ts';
import { authenticateToken } from './auth.ts';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = Router();
console.log('CONTENT_ROUTES_LOADED_V4');

const ALLOWED_TABLES = [
  'homepage_sections', 'solutions', 'portfolio', 'clients', 
  'press', 'careers', 'applicants', 'leads', 'settings', 'services',
  'ai_knowledge', 'ai_logs'
];

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Specific route for job application
router.post('/careers/apply', upload.single('resume'), (req, res) => {
  const db = getDb();
  const { job_id, first_name, last_name, email, phone, portfolio_url, cover_letter } = req.body;
  const name = `${first_name} ${last_name}`;
  const cv_url = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const result = db.prepare(`
      INSERT INTO applicants (career_id, name, email, phone, cv_url, notes, status)
      VALUES (?, ?, ?, ?, ?, ?, 'new')
    `).run(job_id, name, email, phone, cv_url, `Portfolio: ${portfolio_url}\n\nCover Letter:\n${cover_letter}`);
    
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Specific route for contact form (leads)
router.post('/leads', (req, res) => {
  const db = getDb();
  const { name, email, company, phone, message } = req.body;

  try {
    const result = db.prepare(`
      INSERT INTO leads (name, email, company, phone, message, status)
      VALUES (?, ?, ?, ?, ?, 'new')
    `).run(name, email, company, phone, message);
    
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Generic GET all
router.get('/:table', (req, res) => {
  const { table } = req.params;
  console.log(`GET_ALL_REQUEST_UNIQUE_V6: ${table}`);
  if (!ALLOWED_TABLES.includes(table)) {
    console.log(`INVALID_TABLE_REQUEST: ${table}`);
    return res.status(400).json({ error: 'Invalid table' });
  }
  
  const db = getDb();
  try {
    console.log(`EXECUTING_SELECT_ALL: ${table}`);
    const data = db.prepare(`SELECT * FROM ${table}`).all();
    console.log(`SELECT_ALL_SUCCESS: ${table}, count: ${data.length}`);
    res.json(data);
  } catch (err: any) {
    console.error(`SELECT_ALL_ERROR: ${table}`, err);
    res.status(500).json({ 
      error: `V8_ERROR: ${err.message}`,
      stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined
    });
  }
});

// Generic GET one
router.get('/:table/:id', (req, res) => {
  const { table, id } = req.params;
  if (!ALLOWED_TABLES.includes(table)) return res.status(400).json({ error: 'Invalid table' });
  
  const db = getDb();
  try {
    let data;
    if (isNaN(Number(id))) {
      // Try querying by slug
      try {
        data = db.prepare(`SELECT * FROM ${table} WHERE slug = ?`).get(id);
      } catch (e) {
        // Table might not have slug column
        data = null;
      }
    } else {
      data = db.prepare(`SELECT * FROM ${table} WHERE id = ?`).get(id);
    }
    
    if (!data) return res.status(404).json({ error: 'Not found' });
    res.json(data);
  } catch (err: any) {
    console.error(`Error fetching ${table}/${id}:`, err);
    res.status(500).json({ error: `DB_FETCH_ONE_ERROR: ${err.message}` });
  }
});

// Generic POST (Create)
router.post('/:table', authenticateToken, (req, res) => {
  const { table } = req.params;
  if (!ALLOWED_TABLES.includes(table)) return res.status(400).json({ error: 'Invalid table' });
  
  const db = getDb();
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const placeholders = keys.map(() => '?').join(', ');
  
  try {
    const result = db.prepare(`INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders})`).run(...values);
    res.json({ id: result.lastInsertRowid, ...req.body });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Generic PUT (Update)
router.put('/:table/:id', authenticateToken, (req, res) => {
  const { table, id } = req.params;
  if (!ALLOWED_TABLES.includes(table)) return res.status(400).json({ error: 'Invalid table' });
  
  const db = getDb();
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const setClause = keys.map(k => `${k} = ?`).join(', ');
  
  try {
    db.prepare(`UPDATE ${table} SET ${setClause} WHERE id = ?`).run(...values, id);
    res.json({ id, ...req.body });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Generic DELETE
router.delete('/:table/:id', authenticateToken, (req, res) => {
  const { table, id } = req.params;
  if (!ALLOWED_TABLES.includes(table)) return res.status(400).json({ error: 'Invalid table' });
  
  const db = getDb();
  try {
    db.prepare(`DELETE FROM ${table} WHERE id = ?`).run(id);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
