// 1. Tus credenciales de Supabase
const SUPABASE_URL = "https://eutnzmtduskpqjghecgd.supabase.co"
const SUPABASE_KEY = "sb_publishable_4mfxfYs-0sxV3Vkr3AYtfQ_MCmve7E6";

// 2. Crear la conexión
var supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
