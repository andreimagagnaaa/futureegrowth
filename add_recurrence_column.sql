ALTER TABLE tasks 
ADD COLUMN IF NOT EXISTS recurrence TEXT CHECK (recurrence IN ('none', 'daily', 'weekly', 'monthly')) DEFAULT 'none';
