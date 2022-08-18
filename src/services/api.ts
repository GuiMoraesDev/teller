import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
	throw new Error('NEXT_PUBLIC_SUPABASE_URL is missing');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_KEY) {
	throw new Error('NEXT_PUBLIC_SUPABASE_KEY is missing');
}

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export default supabase;
