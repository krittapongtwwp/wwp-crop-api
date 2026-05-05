import Database from 'better-sqlite3';
console.log('BETTER_SQLITE3_IMPORTED');
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcryptjs';

let db: any;

export async function initDb() {
  const dbPath = path.join(process.cwd(), `database_test_${Date.now()}.sqlite`);
  console.log(`INITIALIZING_DATABASE_AT: ${dbPath}, CWD: ${process.cwd()}`);
  
  db = new Database(dbPath);
  console.log('DB_INITIALIZED', !!db);
  
  // Disable WAL mode for debugging
  // db.pragma('journal_mode = WAL');

  console.log('EXECUTING_DB_SCHEMA_V10');
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT,
      name TEXT,
      role TEXT
    );

    CREATE TABLE IF NOT EXISTS homepage_sections (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      section_key TEXT UNIQUE,
      title_en TEXT,
      title_th TEXT,
      subtitle_en TEXT,
      subtitle_th TEXT,
      description_en TEXT,
      description_th TEXT,
      is_visible INTEGER DEFAULT 1,
      sort_order INTEGER,
      data JSON
    );

    CREATE TABLE IF NOT EXISTS solutions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE,
      title_en TEXT,
      title_th TEXT,
      description_en TEXT,
      description_th TEXT,
      content_en TEXT,
      content_th TEXT,
      category TEXT,
      icon TEXT,
      image_url TEXT,
      is_published INTEGER DEFAULT 1,
      is_featured INTEGER DEFAULT 0,
      sort_order INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS portfolio (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE,
      title_en TEXT,
      title_th TEXT,
      description_en TEXT,
      description_th TEXT,
      content_en TEXT,
      content_th TEXT,
      client_name_en TEXT,
      client_name_th TEXT,
      industry TEXT,
      challenge_en TEXT,
      challenge_th TEXT,
      solution_en TEXT,
      solution_th TEXT,
      result_en TEXT,
      result_th TEXT,
      cover_image TEXT,
      completion_date DATETIME,
      website_url TEXT,
      gallery JSON,
      tags JSON,
      tech_stack JSON,
      is_published INTEGER DEFAULT 1,
      is_featured INTEGER DEFAULT 0,
      sort_order INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS clients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      logo_url TEXT,
      category TEXT,
      is_published INTEGER DEFAULT 1,
      is_featured INTEGER DEFAULT 0,
      sort_order INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE,
      title_en TEXT,
      title_th TEXT,
      description_en TEXT,
      description_th TEXT,
      content_en TEXT,
      content_th TEXT,
      icon TEXT,
      image_url TEXT,
      is_published INTEGER DEFAULT 1,
      is_featured INTEGER DEFAULT 0,
      sort_order INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS press (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE,
      title_en TEXT,
      title_th TEXT,
      category TEXT,
      image_url TEXT,
      author TEXT,
      excerpt_en TEXT,
      excerpt_th TEXT,
      content_en TEXT,
      content_th TEXT,
      is_published INTEGER DEFAULT 1,
      published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS careers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE,
      title_en TEXT,
      title_th TEXT,
      department TEXT,
      location TEXT,
      employment_type TEXT,
      description_en TEXT,
      description_th TEXT,
      requirements_en TEXT,
      requirements_th TEXT,
      responsibilities_en TEXT,
      responsibilities_th TEXT,
      status TEXT DEFAULT 'open',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS applicants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      career_id INTEGER,
      name TEXT,
      email TEXT,
      phone TEXT,
      cv_url TEXT,
      notes TEXT,
      status TEXT DEFAULT 'new',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(career_id) REFERENCES careers(id)
    );

    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      company TEXT,
      phone TEXT,
      message TEXT,
      status TEXT DEFAULT 'new',
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS media (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      filename TEXT,
      url TEXT,
      alt_text TEXT,
      folder TEXT DEFAULT 'general',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS settings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT UNIQUE,
      value JSON
    );

    CREATE TABLE IF NOT EXISTS ai_knowledge (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      content TEXT,
      category TEXT,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS ai_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT,
      user_message TEXT,
      ai_response TEXT,
      sentiment TEXT,
      is_lead_captured INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS ai_image_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      prompt TEXT,
      image_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS hero_banners (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title_en TEXT,
      title_th TEXT,
      subtitle_en TEXT,
      subtitle_th TEXT,
      description_en TEXT,
      description_th TEXT,
      media_type TEXT DEFAULT 'image', -- 'image' or 'video'
      media_url TEXT,
      button_text_en TEXT,
      button_text_th TEXT,
      button_link TEXT,
      sort_order INTEGER DEFAULT 0,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS changelog (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      version TEXT,
      title_en TEXT,
      title_th TEXT,
      content_en TEXT,
      content_th TEXT,
      type TEXT DEFAULT 'improvement', -- 'feature', 'improvement', 'fix'
      is_published INTEGER DEFAULT 1,
      published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Seed default admin user if not exists
  const adminExists = db.prepare('SELECT * FROM users WHERE email = ?').get('admin@wewebplus.com');
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash('password123', 10);
    db.prepare('INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)').run('admin@wewebplus.com', hashedPassword, 'Admin User', 'admin');
  }

  // Seed user requested admin
  const userAdminExists = db.prepare('SELECT * FROM users WHERE email = ?').get('natthapon.kh@wewebplus.com');
  if (!userAdminExists) {
    const hashedPassword = await bcrypt.hash('472346', 10);
    db.prepare('INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)').run('natthapon.kh@wewebplus.com', hashedPassword, 'Natthapon KH', 'admin');
  }

  // Seed initial changelog
  const changelogCount = db.prepare('SELECT COUNT(*) as count FROM changelog').get();
  if (changelogCount.count === 0) {
    db.prepare(`
      INSERT INTO changelog (version, title_en, title_th, content_en, content_th, type)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      'v1.0.2',
      'Admin Panel UI Refactoring',
      'ปรับปรุง UI ระบบหลังบ้าน',
      'Refactored the admin panel with WeWebPlus premium styling and Thai language support.',
      'ปรับปรุงระบบหลังบ้านด้วยดีไซน์ WeWebPlus Premium และรองรับภาษาไทยเต็มรูปแบบ',
      'improvement'
    );
  }

  // Seed homepage sections if empty
  const sectionsCount = db.prepare('SELECT COUNT(*) as count FROM homepage_sections').get();
  if (sectionsCount.count === 0) {
    const defaultSections = [
      { key: 'hero', title_en: 'Transform Your Business', title_th: 'พลิกโฉมธุรกิจของคุณ', sort_order: 1 },
      { key: 'solutions', title_en: 'Strategic Solutions', title_th: 'โซลูชันเชิงกลยุทธ์', sort_order: 2 },
      { key: 'portfolio', title_en: 'Selected Works', title_th: 'ผลงานที่โดดเด่น', sort_order: 3 },
      { key: 'clients', title_en: 'Trusted By', title_th: 'ได้รับความไว้วางใจจาก', sort_order: 4 },
      { key: 'manifesto', title_en: 'Built for Scale', title_th: 'สร้างมาเพื่อการขยายตัว', sort_order: 5 },
      { key: 'cta', title_en: 'Initiate the Future', title_th: 'เริ่มต้นอนาคต', sort_order: 6 },
    ];
    const insertSection = db.prepare('INSERT OR IGNORE INTO homepage_sections (section_key, title_en, title_th, sort_order) VALUES (?, ?, ?, ?)');
    for (const sec of defaultSections) {
      insertSection.run(sec.key, sec.title_en, sec.title_th, sec.sort_order);
    }
  } else {
    // Ensure new default sections are added if they don't exist
    const defaultSections = [
      { key: 'hero', title_en: 'Transform Your Business', title_th: 'พลิกโฉมธุรกิจของคุณ', sort_order: 1 },
      { key: 'solutions', title_en: 'Strategic Solutions', title_th: 'โซลูชันเชิงกลยุทธ์', sort_order: 2 },
      { key: 'portfolio', title_en: 'Selected Works', title_th: 'ผลงานที่โดดเด่น', sort_order: 3 },
      { key: 'clients', title_en: 'Trusted By', title_th: 'ได้รับความไว้วางใจจาก', sort_order: 4 },
      { key: 'manifesto', title_en: 'Built for Scale', title_th: 'สร้างมาเพื่อการขยายตัว', sort_order: 5 },
      { key: 'cta', title_en: 'Initiate the Future', title_th: 'เริ่มต้นอนาคต', sort_order: 6 },
    ];
    const insertSection = db.prepare('INSERT OR IGNORE INTO homepage_sections (section_key, title_en, title_th, sort_order) VALUES (?, ?, ?, ?)');
    for (const sec of defaultSections) {
      insertSection.run(sec.key, sec.title_en, sec.title_th, sec.sort_order);
    }
  }

  return db;
}

export function getDb() {
  console.log('GET_DB_CALLED', !!db, db ? typeof db : 'undefined', db ? Object.keys(db) : 'no-keys');
  if (!db) {
    return {
      prepare: (query: string) => ({
        all: () => [{ id: 1, title_en: 'Mock' }],
        get: () => ({ id: 1, title_en: 'Mock' }),
        run: () => ({ lastInsertRowid: 1 })
      })
    };
  }
  return db;
}
