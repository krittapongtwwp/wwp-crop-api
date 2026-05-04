-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "homepage_sections" (
    "id" SERIAL NOT NULL,
    "section_key" TEXT NOT NULL,
    "title_en" TEXT,
    "title_th" TEXT,
    "subtitle_en" TEXT,
    "subtitle_th" TEXT,
    "description_en" TEXT,
    "description_th" TEXT,
    "is_visible" INTEGER NOT NULL DEFAULT 1,
    "sort_order" INTEGER,
    "data" JSONB,

    CONSTRAINT "homepage_sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solutions" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title_en" TEXT,
    "title_th" TEXT,
    "description_en" TEXT,
    "description_th" TEXT,
    "content_en" TEXT,
    "content_th" TEXT,
    "category" TEXT,
    "icon" TEXT,
    "image_url" TEXT,
    "is_published" INTEGER NOT NULL DEFAULT 1,
    "is_featured" INTEGER NOT NULL DEFAULT 0,
    "sort_order" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "solutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title_en" TEXT,
    "title_th" TEXT,
    "description_en" TEXT,
    "description_th" TEXT,
    "content_en" TEXT,
    "content_th" TEXT,
    "client_name_en" TEXT,
    "client_name_th" TEXT,
    "industry" TEXT,
    "challenge_en" TEXT,
    "challenge_th" TEXT,
    "solution_en" TEXT,
    "solution_th" TEXT,
    "result_en" TEXT,
    "result_th" TEXT,
    "cover_image" TEXT,
    "completion_date" TIMESTAMP(3),
    "website_url" TEXT,
    "gallery" JSONB,
    "tags" JSONB,
    "tech_stack" JSONB,
    "is_published" INTEGER NOT NULL DEFAULT 1,
    "is_featured" INTEGER NOT NULL DEFAULT 0,
    "sort_order" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "logo_url" TEXT,
    "category" TEXT,
    "is_published" INTEGER NOT NULL DEFAULT 1,
    "is_featured" INTEGER NOT NULL DEFAULT 0,
    "sort_order" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title_en" TEXT,
    "title_th" TEXT,
    "description_en" TEXT,
    "description_th" TEXT,
    "content_en" TEXT,
    "content_th" TEXT,
    "icon" TEXT,
    "image_url" TEXT,
    "is_published" INTEGER NOT NULL DEFAULT 1,
    "is_featured" INTEGER NOT NULL DEFAULT 0,
    "sort_order" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "press" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title_en" TEXT,
    "title_th" TEXT,
    "category" TEXT,
    "image_url" TEXT,
    "author" TEXT,
    "excerpt_en" TEXT,
    "excerpt_th" TEXT,
    "content_en" TEXT,
    "content_th" TEXT,
    "is_published" INTEGER NOT NULL DEFAULT 1,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "press_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "career" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title_en" TEXT,
    "title_th" TEXT,
    "department" TEXT,
    "location" TEXT,
    "employment_type" TEXT,
    "description_en" TEXT,
    "description_th" TEXT,
    "requirements_en" TEXT,
    "requirements_th" TEXT,
    "responsibilities_en" TEXT,
    "responsibilities_th" TEXT,
    "status" TEXT NOT NULL DEFAULT 'open',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applicants" (
    "id" SERIAL NOT NULL,
    "career_id" INTEGER,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "cv_url" TEXT,
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'new',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "applicants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leads" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "company" TEXT,
    "phone" TEXT,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'new',
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media" (
    "id" SERIAL NOT NULL,
    "filename" TEXT,
    "url" TEXT,
    "alt_text" TEXT,
    "folder" TEXT NOT NULL DEFAULT 'general',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" JSONB,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_knowledge" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "category" TEXT,
    "is_active" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_knowledge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_logs" (
    "id" SERIAL NOT NULL,
    "session_id" TEXT,
    "user_message" TEXT,
    "ai_response" TEXT,
    "sentiment" TEXT,
    "is_lead_captured" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_image_history" (
    "id" SERIAL NOT NULL,
    "prompt" TEXT,
    "image_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_image_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hero_banners" (
    "id" SERIAL NOT NULL,
    "title_en" TEXT,
    "title_th" TEXT,
    "subtitle_en" TEXT,
    "subtitle_th" TEXT,
    "description_en" TEXT,
    "description_th" TEXT,
    "media_type" TEXT NOT NULL DEFAULT 'image',
    "media_url" TEXT,
    "button_text_en" TEXT,
    "button_text_th" TEXT,
    "button_link" TEXT,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "is_active" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hero_banners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "changelog" (
    "id" SERIAL NOT NULL,
    "version" TEXT,
    "title_en" TEXT,
    "title_th" TEXT,
    "content_en" TEXT,
    "content_th" TEXT,
    "type" TEXT NOT NULL DEFAULT 'improvement',
    "is_published" INTEGER NOT NULL DEFAULT 1,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "changelog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "homepage_sections_section_key_key" ON "homepage_sections"("section_key");

-- CreateIndex
CREATE UNIQUE INDEX "solutions_slug_key" ON "solutions"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "portfolio_slug_key" ON "portfolio"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "services_slug_key" ON "services"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "press_slug_key" ON "press"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "career_slug_key" ON "career"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "settings_key_key" ON "settings"("key");

-- AddForeignKey
ALTER TABLE "applicants" ADD CONSTRAINT "applicants_career_id_fkey" FOREIGN KEY ("career_id") REFERENCES "career"("id") ON DELETE SET NULL ON UPDATE CASCADE;
