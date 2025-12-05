-- Add new columns to the tasks table
ALTER TABLE tasks 
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS priority TEXT CHECK (priority IN ('low', 'medium', 'high')) DEFAULT 'medium',
ADD COLUMN IF NOT EXISTS due_date TIMESTAMP WITH TIME ZONE;

-- Update existing tasks to have a default priority if needed (optional, handled by default above)
-- UPDATE tasks SET priority = 'medium' WHERE priority IS NULL;
