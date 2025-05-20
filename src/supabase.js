import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://krxbhfscmgrswqrllavk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyeGJoZnNjbWdyc3dxcmxsYXZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0Mzk0MjYsImV4cCI6MjA2MDAxNTQyNn0.cYLynwaj_ZdcplnLv8DUlRu47f2sJtdV755ne1DYWwU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
