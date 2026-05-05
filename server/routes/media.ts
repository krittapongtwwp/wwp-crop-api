import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
// import { getDb } from '../db.ts';
import { authenticateToken } from './auth.ts';
import { prisma } from '@/libs/prisma.ts'

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

router.get('/', async (req, res) => {
  // const db = getDb();
  try {
    // const media = db.prepare('SELECT * FROM media ORDER BY created_at DESC').all();
		const media = await prisma.media.findMany({
			orderBy: { created_at: 'desc' }
		})
    res.json(media);
  } catch (err: any) {
    res.status(500).json({ error: 'MEDIA_ERR', details: err.message });
  }
});

router.post('/upload', authenticateToken, upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  // const db = getDb();
  const url = `/uploads/${req.file.filename}`;
  const alt_text = req.body.alt_text || req.file.originalname;
  const folder = req.body.folder || 'general';
  try {
    // const result = db.prepare(
    //   'INSERT INTO media (filename, url, alt_text, folder) VALUES (?, ?, ?, ?)'
    // ).run(req.file.filename, url, alt_text, folder);
		const result = await prisma.media.create({
			data: {
				filename: req.file.filename,
				url: url,
				alt_text: alt_text,
				folder: folder
			}
		})
    res.json({
      id: result.id,
      filename: req.file.filename,
      url,
      alt_text,
      folder
    });
  } catch (err: any) {
    res.status(500).json({ error: 'MEDIA_ERROR',details: err.message });
  }
});

router.delete('/:id', authenticateToken, async (req, res) => {
  // const db = getDb();
	const id = Number(req.params.id)
	if(isNaN(Number(id))){ return res.status(404).json({ error: 'Invalid id' }); }

	try {
		// const media = db.prepare('SELECT * FROM media WHERE id = ?').get(req.params.id);
		// if (!media) return res.status(404).json({ error: 'Not found' });
		const result = await prisma.media.findUnique({
			where: { id: id }
		})
		if(!result){ return res.status(404).json({ error: 'Not found' }) }

		const filePath = path.join(uploadsDir, result.filename!);
		if (fs.existsSync(filePath)) {
			fs.unlinkSync(filePath);
		}
		// db.prepare('DELETE FROM media WHERE id = ?').run(req.params.id);
		await prisma.media.delete({ where: { id: id } })

		res.json({ success: true });
	} catch (err: any) {
		res.status(500).json({ error: 'MEDIA_ERROR', details: err.message });
	}
});

export default router;
