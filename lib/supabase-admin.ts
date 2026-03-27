import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publicKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL environment variable.");
}

if (!publicKey && !serviceRoleKey) {
  throw new Error(
    "Missing Supabase server credentials. Add SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY.",
  );
}

// Prefer the service role key for server-side access, but allow a fallback
// to the public key for simple academic demos when server credentials are not set.
export const supabaseAdmin = createClient(
  supabaseUrl,
  serviceRoleKey || publicKey!,
  {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  },
);
