-- Create clients table if it doesn't exist
CREATE TABLE IF NOT EXISTS clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  company TEXT,
  project_slug TEXT REFERENCES projects(slug),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Add client_id to tasks table
ALTER TABLE tasks 
ADD COLUMN IF NOT EXISTS client_id UUID REFERENCES clients(id);

-- Add index for performance
CREATE INDEX IF NOT EXISTS idx_tasks_client_id ON tasks(client_id);
CREATE INDEX IF NOT EXISTS idx_clients_project_slug ON clients(project_slug);
