import { LoginForm } from "@/components/login-form";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/70 bg-white/55 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <div className="grid min-h-[680px] lg:grid-cols-[1.1fr_0.9fr]">
          <section className="relative hidden overflow-hidden bg-slate-950 px-10 py-12 text-white lg:flex lg:flex-col lg:justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.25),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25),_transparent_30%)]" />
            <div className="relative z-10 max-w-md space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight">
                  Secure academic login system with a polished modern interface.
                </h1>
                <p className="text-base leading-7 text-slate-300">
                  Built with Next.js App Router, Supabase database integration,
                  API-based credential checking, and client-side failed-attempt
                  handling.
                </p>
              </div>
            </div>

            <div className="relative z-10 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
                  Included Features
                </p>
                <ul className="mt-3 space-y-3 text-sm text-slate-200">
                  <li>Responsive login card layout</li>
                  <li>Supabase-backed API authentication</li>
                  <li>Login lockout after 3 failed tries</li>
                  <li>Loading state, alerts, and redirect flow</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center px-6 py-10 sm:px-10">
            <LoginForm />
          </section>
        </div>
      </div>
    </main>
  );
}
