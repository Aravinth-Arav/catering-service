/*
# Create catering_inquiries table (single-tenant, no auth)

1. New Tables
- `catering_inquiries`
  - `id` (uuid, primary key)
  - `name` (text, contact name)
  - `email` (text, contact email)
  - `phone` (text, contact phone)
  - `event_type` (text, e.g. wedding, corporate, private)
  - `event_date` (date, requested date)
  - `guests` (integer, guest count)
  - `service_style` (text, e.g. plated, buffet, cocktail)
  - `menu_items` (jsonb, array of selected menu item names)
  - `dietary_notes` (text, allergies / dietary restrictions)
  - `budget` (text, optional budget range)
  - `message` (text, additional details)
  - `status` (text, default 'new')
  - `created_at` (timestamptz)

2. Security
- Enable RLS on `catering_inquiries`.
- Allow anon + authenticated CRUD because this is a public inquiry form with no sign-in.
*/

CREATE TABLE IF NOT EXISTS catering_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_type text NOT NULL,
  event_date date NOT NULL,
  guests integer NOT NULL,
  service_style text NOT NULL,
  menu_items jsonb NOT NULL DEFAULT '[]'::jsonb,
  dietary_notes text DEFAULT '',
  budget text DEFAULT '',
  message text DEFAULT '',
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE catering_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_inquiries" ON catering_inquiries;
CREATE POLICY "anon_select_inquiries" ON catering_inquiries FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_inquiries" ON catering_inquiries;
CREATE POLICY "anon_insert_inquiries" ON catering_inquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_inquiries" ON catering_inquiries;
CREATE POLICY "anon_update_inquiries" ON catering_inquiries FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_inquiries" ON catering_inquiries;
CREATE POLICY "anon_delete_inquiries" ON catering_inquiries FOR DELETE
TO anon, authenticated USING (true);
