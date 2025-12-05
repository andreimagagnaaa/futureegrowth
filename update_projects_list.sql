-- First, ensure the status column exists
ALTER TABLE projects ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active';

-- Now insert or update the projects
INSERT INTO projects (title, slug, description, status) VALUES
('Futuree Growth', 'futuree-growth', 'Growth hacking and marketing strategies', 'active'),
('Futuree Platform', 'futuree-platform', 'Core platform development', 'active'),
('Futuree Solutions', 'futuree-solutions', 'Custom software solutions', 'active'),
('Futuree AI', 'futuree-ai', 'Artificial Intelligence initiatives', 'active'),
('Futuree Business School', 'futuree-business-school', 'Educational content and courses', 'active'),
('Futuree Pages', 'futuree-pages', 'Landing page builder and templates', 'active'),
('Futuree Vision AI', 'futuree-vision-ai', 'Computer vision projects', 'active'),
('Futuree Agents', 'futuree-agents', 'Autonomous AI agents', 'active')
ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, status = EXCLUDED.status;

-- If you want to REMOVE any other projects that are not in this list, uncomment and run the following:
-- DELETE FROM projects WHERE slug NOT IN (
--   'futuree-growth', 'futuree-platform', 'futuree-solutions', 'futuree-ai',
--   'futuree-business-school', 'futuree-pages', 'futuree-vision-ai', 'futuree-agents'
-- );
