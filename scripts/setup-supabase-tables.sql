-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  timezone TEXT DEFAULT 'America/New_York',
  status TEXT DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled', 'completed')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create availability table
CREATE TABLE IF NOT EXISTS availability (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create blocked_dates table
CREATE TABLE IF NOT EXISTS blocked_dates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  blocked_date DATE NOT NULL,
  reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default availability (Monday-Friday, 9 AM - 5 PM)
INSERT INTO availability (day_of_week, start_time, end_time) VALUES
(1, '09:00:00', '17:00:00'), -- Monday
(2, '09:00:00', '17:00:00'), -- Tuesday
(3, '09:00:00', '17:00:00'), -- Wednesday
(4, '09:00:00', '17:00:00'), -- Thursday
(5, '09:00:00', '17:00:00')  -- Friday
ON CONFLICT DO NOTHING;

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE blocked_dates ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Allow public read access on bookings" ON bookings FOR SELECT USING (true);
CREATE POLICY "Allow public insert on bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on bookings" ON bookings FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on bookings" ON bookings FOR DELETE USING (true);

CREATE POLICY "Allow public read access on availability" ON availability FOR SELECT USING (true);
CREATE POLICY "Allow public update on availability" ON availability FOR UPDATE USING (true);

CREATE POLICY "Allow public read access on blocked_dates" ON blocked_dates FOR SELECT USING (true);
CREATE POLICY "Allow public insert on blocked_dates" ON blocked_dates FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public delete on blocked_dates" ON blocked_dates FOR DELETE USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_date_time ON bookings(booking_date, booking_time);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_availability_day ON availability(day_of_week);
CREATE INDEX IF NOT EXISTS idx_blocked_dates_date ON blocked_dates(blocked_date);

-- Add some sample data for testing (optional)
INSERT INTO blocked_dates (blocked_date, reason) VALUES
('2024-12-25', 'Christmas Day'),
('2024-01-01', 'New Year''s Day')
ON CONFLICT DO NOTHING;
