import express from 'express';
import { getDb } from '../db.ts';

const router = express.Router();

// Endpoint to save AI image generation history
router.post('/save-image-history', async (req, res) => {
  try {
    const { prompt, imageUrl } = req.body;
    
    if (!prompt || !imageUrl) {
      return res.status(400).json({ error: 'Prompt and imageUrl are required' });
    }

    const db = getDb();
    db.prepare('INSERT INTO ai_image_history (prompt, image_url) VALUES (?, ?)').run(prompt, imageUrl);
    
    res.json({ success: true });
  } catch (error) {
    console.error('Failed to save AI image history:', error);
    res.status(500).json({ error: 'Failed to save history' });
  }
});

export default router;
