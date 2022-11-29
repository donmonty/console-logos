import { createClient } from "@supabase/supabase-js";
require("dotenv").config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL, 
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY
);

export default supabase;

const getSupaClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL, 
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY
  );
};
export { getSupaClient };