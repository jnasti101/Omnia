-- Debug script to check availability data
SELECT 'Current availability records:' as info;
SELECT * FROM availability ORDER BY day_of_week;

SELECT 'Current bookings:' as info;
SELECT * FROM bookings ORDER BY booking_date, booking_time;

SELECT 'Blocked dates:' as info;
SELECT * FROM blocked_dates ORDER BY blocked_date;

-- Check if we have availability for Tuesday (day 2)
SELECT 'Tuesday availability:' as info;
SELECT * FROM availability WHERE day_of_week = 2 AND is_active = true;

-- Check for any bookings on 2025-07-29
SELECT 'Bookings for 2025-07-29:' as info;
SELECT * FROM bookings WHERE booking_date = '2025-07-29';
