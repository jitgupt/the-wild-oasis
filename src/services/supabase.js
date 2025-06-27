import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rktnjbvficgdnazuqqok.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrdG5qYnZmaWNnZG5henVxcW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0ODI5NTksImV4cCI6MjA2MzA1ODk1OX0.l5P5ioFcyUTAElZzwTByE3dyfNmQIMfUSjF7HBbJcZY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
