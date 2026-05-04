import bcrypt from 'bcryptjs'
import { prisma } from '@/libs/prisma'

async function main() {
  console.log('🌱 Starting seeding...')

  // 1. Seed Users (Admin)
  const adminPassword = await bcrypt.hash('password123', 10)
  const userPassword = await bcrypt.hash('472346', 10)

  await prisma.user.upsert({
    where: { email: 'admin@wewebplus.com' },
    update: {},
    create: {
      email: 'admin@wewebplus.com',
      password: adminPassword,
      name: 'Admin User',
      role: 'admin'
    }
  })

  await prisma.user.upsert({
    where: { email: 'natthapon.kh@wewebplus.com' },
    update: {},
    create: {
      email: 'natthapon.kh@wewebplus.com',
      password: userPassword,
      name: 'Natthapon KH',
      role: 'admin'
    }
  })

  // 2. Seed Homepage Sections
  const defaultSections = [
    { key: 'hero', title_en: 'Transform Your Business', title_th: 'พลิกโฉมธุรกิจของคุณ', sort_order: 1 },
    { key: 'solutions', title_en: 'Strategic Solutions', title_th: 'โซลูชันเชิงกลยุทธ์', sort_order: 2 },
    { key: 'portfolio', title_en: 'Selected Works', title_th: 'ผลงานที่โดดเด่น', sort_order: 3 },
    { key: 'clients', title_en: 'Trusted By', title_th: 'ได้รับความไว้วางใจจาก', sort_order: 4 },
    { key: 'manifesto', title_en: 'Built for Scale', title_th: 'สร้างมาเพื่อการขยายตัว', sort_order: 5 },
    { key: 'cta', title_en: 'Initiate the Future', title_th: 'เริ่มต้นอนาคต', sort_order: 6 }
  ]

  for (const sec of defaultSections) {
    await prisma.homepage_sections.upsert({
      where: { section_key: sec.key },
      update: {},
      create: {
        section_key: sec.key,
        title_en: sec.title_en,
        title_th: sec.title_th,
        sort_order: sec.sort_order,
        is_visible: 1
      }
    })
  }

  // 3. Seed Initial Changelog
  await prisma.changelog.upsert({
    where: { id: 1 }, // ใช้ ID หรือเงื่อนไขอื่นที่เหมาะสม
    update: {},
    create: {
      version: 'v1.0.2',
      title_en: 'Admin Panel UI Refactoring',
      title_th: 'ปรับปรุง UI ระบบหลังบ้าน',
      content_en: 'Refactored the admin panel with WeWebPlus premium styling and Thai language support.',
      content_th: 'ปรับปรุงระบบหลังบ้านด้วยดีไซน์ WeWebPlus Premium และรองรับภาษาไทยเต็มรูปแบบ',
      type: 'improvement',
      is_published: 1
    }
  })

  console.log('✅ Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
