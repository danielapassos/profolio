import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fdbshsyfnzrtfenpvxzw.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_PUBLIC_KEY

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
