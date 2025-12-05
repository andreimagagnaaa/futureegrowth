-- Fix clients table structure
-- Run this in Supabase SQL Editor

-- 1. Ensure table exists
CREATE TABLE IF NOT EXISTS clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. Add missing columns (safe to run if they exist)
ALTER TABLE clients ADD COLUMN IF NOT EXISTS email TEXT;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS phone TEXT;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS company TEXT;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS project_slug TEXT;

-- 3. Ensure tasks table has client_id
ALTER TABLE tasks ADD COLUMN IF NOT EXISTS client_id UUID;

-- 4. Add Foreign Key constraints (if possible)
-- Note: This assumes 'projects' table has 'slug' as a unique/primary key.
-- If this fails, it might be because projects.slug is not unique.
DO $$ 
BEGIN 
  BEGIN
    ALTER TABLE clients ADD CONSTRAINT clients_project_slug_fkey FOREIGN KEY (project_slug) REFERENCES projects(slug);
  EXCEPTION
    WHEN duplicate_object THEN NULL; -- Constraint already exists
    WHEN invalid_foreign_key THEN NULL; -- projects.slug might not be unique
  END;
END $$;

DO $$ 
BEGIN 
  BEGIN
    ALTER TABLE tasks ADD CONSTRAINT tasks_client_id_fkey FOREIGN KEY (client_id) REFERENCES clients(id);
  EXCEPTION
    WHEN duplicate_object THEN NULL;
  END;
END $$;
