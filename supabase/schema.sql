create extension if not exists pgcrypto;

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  password text not null,
  created_at timestamptz not null default now()
);

delete from public.users
where username = 'daca';

insert into public.users (username, password)
values
  (
    'daca',
    crypt('Briones@3rd', gen_salt('bf'))
  );

-- Sample user credentials:
-- username: daca
-- password: Briones@3rd
