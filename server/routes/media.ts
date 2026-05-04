import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { getDb } from '../db.ts';
import { authenticateToken } from './auth.ts';

const router = Router();

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

router.get('/', (req, res) => {
  const db = getDb();
  try {
    const media = db.prepare('SELECT * FROM media ORDER BY created_at DESC').all();
    res.json(media);
  } catch (err: any) {
    res.status(500).json({ error: 'MEDIA_ERR' });
  }
});

router.post('/upload', authenticateToken, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const db = getDb();
  const url = `/uploads/${req.file.filename}`;
  const alt_text = req.body.alt_text || req.file.originalname;
  const folder = req.body.folder || 'general';

  try {
    const result = db.prepare(
      'INSERT INTO media (filename, url, alt_text, folder) VALUES (?, ?, ?, ?)'
    ).run(req.file.filename, url, alt_text, folder);
    
    res.json({
      id: result.lastInsertRowid,
      filename: req.file.filename,
      url,
      alt_text,
      folder
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const media = db.prepare('SELECT * FROM media WHERE id = ?').get(req.params.id);
    if (!media) return res.status(404).json({ error: 'Not found' });

    // Delete file
    const filePath = path.join(uploadsDir, media.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete record
    db.prepare('DELETE FROM media WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
