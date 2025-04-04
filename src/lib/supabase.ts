import { createClient } from '@supabase/supabase-js';

// Crear una única instancia del cliente Supabase
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default supabase;