-- Add availability for Tuesday (day 2) since July 29th, 2025 is a Tuesday
INSERT INTO availability (day_of_week, start_time, end_time, is_active) 
VALUES (2, '09:00:00', '17:00:00', true)
ON CONFLICT DO NOTHING;

-- Let's also check what we currently have
SELECT 'Current availability:' as info;
SELECT day_of_week, start_time, end_time, is_active FROM availability ORDER BY day_of_week;
