# ITE 308 Exam Output - Login System

This project is a complete login system built with Next.js App Router, Supabase, Tailwind CSS, and a Vercel-compatible structure.

## Features

- Modern responsive login page
- Supabase-backed credential checking
- API route at `/api/login`
- Failed login attempt tracking on the client
- Lockout after 3 failed attempts
- Password hashing using `bcryptjs`
- Success redirect to a dashboard page
- Ready for local development and Vercel deployment

## Folder Structure

```text
.
├── app
│   ├── api
│   │   └── login
│   │       └── route.ts
│   ├── dashboard
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── alert.tsx
│   ├── loading-spinner.tsx
│   └── login-form.tsx
├── lib
│   ├── supabase-admin.ts
│   ├── supabase-browser.ts
│   └── utils.ts
├── supabase
│   └── schema.sql
├── .env.example
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## 1. Install Dependencies

```bash
npm install
```

## 2. Set Up Supabase

1. Create a new Supabase project.
2. Open the SQL Editor in Supabase.
3. Copy the contents of `supabase/schema.sql` and run it.
4. This will create the `users` table with `username` and `password` columns and add one sample user.

### Sample User

- Username: `daca`
- Password: `Briones@3rd`

## 3. Add Environment Variables

Create a file named `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Where to find them

- Supabase URL: Project Settings > Data API
- Anon/Publishable Key: Project Settings > API Keys
- Service Role Key: Project Settings > API Keys

If you only have the publishable key for now, the project can still run for academic demo purposes. For the recommended server-side setup, also add the service role key.

## 4. Run the Project Locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## 5. How Login Works

1. The user enters a username and password on the login page.
2. The form sends a POST request to `/api/login`.
3. The API route reads the matching user from Supabase.
4. The password is checked using `bcryptjs.compare`.
5. If valid:
   - a success message is shown
   - failed attempts reset to zero
   - the user is redirected to `/dashboard`
6. If invalid:
   - an error message is shown
   - failed attempts increase
   - after 3 failed attempts, login is locked

## 6. Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. In Vercel Project Settings > Environment Variables, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy the project.

## 7. Notes for Academic Submission

- The `users` table SQL is included in `supabase/schema.sql`.
- The API route is in `app/api/login/route.ts`.
- The main login UI is in `components/login-form.tsx`.
- The database follows the required `username` and `password` structure.
- Password hashing is included for extra credit.

## 8. Optional Improvement

If your instructor allows it, you can later replace the custom `users` table with Supabase Auth for a more production-ready authentication flow.
