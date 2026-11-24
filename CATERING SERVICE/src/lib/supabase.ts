import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type CateringInquiry = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string;
  guests: number;
  service_style: string;
  menu_items: string[];
  dietary_notes: string;
  budget: string;
  message: string;
  status?: string;
  created_at?: string;
};
