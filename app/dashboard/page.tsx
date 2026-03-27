const highlights = [
  {
    label: "Project Status",
    value: "Ready to Submit",
    description: "Core login requirements are implemented and deployment-ready.",
  },
  {
    label: "Authentication",
    value: "API + Supabase",
    description: "Credentials are checked through a Next.js API route connected to Supabase.",
  },
  {
    label: "Security",
    value: "Hashed Passwords",
    description: "Passwords are verified with bcrypt for stronger academic output.",
  },
];

const skills = [
  "Next.js App Router development",
  "Supabase database integration",
  "Responsive UI design with Tailwind CSS",
  "API route handling and login validation",
  "Client-side state management for failed attempts",
  "Secure password verification with bcrypt",
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <section className="overflow-hidden rounded-[32px] border border-white/70 bg-slate-950 text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
            <div className="relative">
              <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-teal-400/20 blur-3xl" />
              <div className="absolute bottom-0 right-10 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="relative space-y-5">
                <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm font-medium text-emerald-200">
                  Login Successful
                </span>
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">
                    Dashboard Overview
                  </p>
                  <h1 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                    Welcome to your Dashboard, Briones.
                  </h1>
                  <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    This screen now feels like a proper destination after login:
                    it presents your project identity, core implementation
                    strengths, and a polished summary suitable for an academic
                    demo.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
                  Student Profile
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Cloud Engineer
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Passionate about building modern, functional, and
                  user-friendly systems with a focus on authentication, clean
                  interfaces, and reliable backend integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                About Me
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">
                Building practical and secure web applications
              </h2>
              <p className="text-base leading-7 text-slate-600">
                I am a passionate web developer focused on creating modern,
                functional, and user-friendly applications. I enjoy developing
                systems that improve efficiency and user experience, especially
                projects involving authentication, reservation workflows, and
                full-stack integration.
              </p>
              <p className="text-base leading-7 text-slate-600">
                My goal is to keep improving in API development, system
                integration, and secure authentication while producing clean,
                scalable, and dependable solutions. I am always open to learning
                new technologies and refining my craft through real projects.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Core Skills
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.label}
              className="rounded-[24px] border border-slate-200 bg-white/90 p-6 shadow-[0_16px_45px_rgba(15,23,42,0.07)] backdrop-blur"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                {item.value}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
