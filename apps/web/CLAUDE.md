# CLAUDE.md — apps/web

Astro 5 frontend with React islands and Tailwind CSS v4. Twitter-like social media POC.

## Commands

- **Dev**: `npm run dev` (Astro dev server)
- **Build**: `npm run build` (Astro SSR build via `@astrojs/node`)
- **Preview**: `npm run preview`
- **Lint**: `npm run lint`
- **Test**: `npm test` / `npm test -- --testPathPattern=<path>`

## Architecture

### Rendering Model

Astro SSR (`output: 'server'`) with `@astrojs/node` adapter. Pages are `.astro` files that render server-side HTML and hydrate React components via `client:load` islands.

### Layer Hierarchy

```
.astro Pages → .astro Layouts → React Views → React Templates → React Components/Patterns
```

- **Pages** (`src/pages/`): `.astro` routing files. Auth is handled by middleware, so pages only render content.
- **Layouts** (`src/layouts/`):
  - `BaseLayout.astro` — HTML shell (head, meta, fonts, Google GSI script)
  - `PrivateLayout.astro` — authenticated pages (header + content)
  - `SignLayout.astro` — public auth pages (logo + content)
  - `Providers.tsx` — React `QueryClientProvider` + `Toaster` wrapper (used as `client:load` island)
  - `PrivateHeader.tsx` — React header with `AvatarSubMenu`, `Logo`, activity button
- **Views** (`src/views/`): React business logic (React Query, mutations, state). Each has `template/` for presentational rendering.
- **Components** (`src/components/`): React UI primitives styled with Tailwind + `clsx`.
- **Patterns** (`src/patterns/`): Complex composites (Modal, FloatSubMenu).

### Auth Flow

1. **Middleware** (`src/middleware.ts`): Reads `user` cookie via `Astro.cookies`. Redirects unauthenticated users to `/signin`, authenticated users away from `/signin`/`/signup`.
2. **Login**: Views call API via `services/sessions.api.ts`, store JWT in cookies via `helpers/cookies.ts`.
3. **API interceptor**: `services/api.ts` reads `token` cookie from `document.cookie` and adds `Authorization: Bearer` header.
4. **Logout**: `AvatarSubmenu` deletes cookies and redirects to `/signin`.

### Services (`src/services/`)

- `api.ts` — Axios instance with JWT Bearer interceptor (reads from `document.cookie`)
- `sessions.api.ts` — `postNewSession`, `postNewGoogleSession`
- `posts.api.ts` — `getAllPosts`, `getUserPosts`, `postNewPost`
- `users.api.ts` — `postNewUser`

### Helpers (`src/helpers/`)

- `cookies.ts` — `getCookie`, `setCookie`, `deleteCookie` (browser `document.cookie` wrapper)
- `logYupErrors.ts` — Dev-only yup error logger

## Styling

Tailwind CSS v4 with custom theme tokens defined in `src/styles/global.css` using `@theme` directive.

Key design tokens:
- Colors: `neutral-*`, `primary-*`, `secondary-*`, `success-*`, `alert-*`, `danger-*`, `info-*`
- Semantic colors: `canvas`, `canvas-dark`, `text-primary`, `text-light`, `text-inverted`, `brand-primary`, `border`, etc.
- Fonts: `font-heading` (Montserrat), `font-body` (Roboto)
- Breakpoints: `tablet` (768px), `laptop` (1024px)

Conditional classes use `clsx`. No CSS-in-JS or styled-components.

## Import Aliases

Configured in `astro.config.mjs` (Vite aliases) and `tsconfig.json` (TS paths):

- `@types` → `src/@types`
- `components/*` → `src/components/*`
- `constant` → `src/constant`
- `helpers/*` → `src/helpers/*`
- `layouts/*` → `src/layouts/*`
- `patterns/*` → `src/patterns/*`
- `services/*` → `src/services/*`
- `views/*` → `src/views/*`

## Environment Variables

All use `PUBLIC_` prefix (Astro convention for client-exposed vars):

- `PUBLIC_API_URL` — Backend API base URL
- `PUBLIC_ENV` — Environment name (used to skip Google Sign in tests)
- `PUBLIC_GOOGLE_CLIENT_ID` — Google OAuth client ID
- `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_KEY` — Supabase config
- `PUBLIC_GITHUB_TOKEN` — GitHub token

Typed in `src/env.d.ts`.

## Key Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro config (React, Node adapter, Tailwind, Vite aliases) |
| `src/middleware.ts` | Auth cookie checks + route redirects |
| `src/styles/global.css` | Tailwind theme tokens + base resets |
| `src/layouts/Providers.tsx` | React Query + Toaster provider wrapper |
| `src/helpers/cookies.ts` | Browser cookie utility (get/set/delete) |
| `src/constant/index.ts` | App constants (routes, query keys, post length) |
| `src/@types/index.ts` | Shared types (UserProps, DimensionsProps) |
