# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Structure

Turborepo monorepo with npm workspaces.

- `apps/web` — Astro 5 frontend with React islands (Twitter-like social media POC)
- `packages/` — shared packages (future)

## Commands

Root-level commands run via Turbo across all workspaces:

- **Dev server**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Test all**: `npm test`

App-specific commands (run from `apps/web/`):

- **Preview**: `npm run preview`
- **Test single file**: `npm test -- --testPathPattern=<path>`
- **Test changed only**: `npm test -- --onlyChanged`

## Web App Architecture (`apps/web`)

Astro 5 app with React islands (`client:load`) and Tailwind CSS v4.

### Layer hierarchy: Astro Pages → Astro Layouts → React Views → React Templates → React Components/Patterns

- **Pages** (`src/pages/`): `.astro` files for routing. Auth handled by middleware (`src/middleware.ts`). Root `/` redirects to `/signin`.
- **Layouts** (`src/layouts/`): Astro layouts (`BaseLayout.astro`, `PrivateLayout.astro`, `SignLayout.astro`) wrap pages. `Providers.tsx` wraps React islands with QueryClientProvider + Toaster.
- **Views** (`src/views/`): React components with business logic, data fetching (React Query), mutations, and state. Each view has a `template/` subfolder for presentational rendering.
- **Templates** (`src/views/*/template/`): Receive props from views, handle form rendering and validation schemas.
- **Components** (`src/components/`): Reusable React UI primitives (Button, Input, Text, TextArea, Img, Logo, etc.) styled with Tailwind CSS.
- **Patterns** (`src/patterns/`): Complex React composites (Modal, FloatSubMenu).

### Auth Middleware (`src/middleware.ts`)

Replaces Next.js `getServerSideProps`. Reads `user` cookie via `Astro.cookies`, redirects unauthenticated users from protected routes to `/signin`, and redirects authenticated users from `/signin`/`/signup` to `/home`.

### Services (`src/services/`)

Axios-based API layer. `api.ts` creates a configured instance that reads JWT from `document.cookie` and sets `Authorization: Bearer` header. Domain-specific files (`posts.api.ts`, `users.api.ts`, `sessions.api.ts`) export endpoint functions.

### State & Data

- **Auth**: JWT stored in browser cookies via `helpers/cookies.ts` utility, decoded with jwt-decode
- **Server state**: TanStack React Query v4 (`QUERY_KEYS`: sessions, users, posts)
- **Forms**: react-hook-form + yup validation + @hookform/resolvers
- **Styling**: Tailwind CSS v4 with custom theme tokens in `src/styles/global.css`

### Key constants (`src/constant/index.ts`)

`UNPROTECTED_ROUTES`, `LS_KEYS`, `QUERY_KEYS`, `POST_MESSAGE_LENGTH` (144 chars)

## Testing

Jest + React Testing Library with ts-jest (`jest.config.cjs`).

- **`import.meta.env`**: ts-jest cannot parse this syntax. Mock components that use it (e.g., `GoogleSign`) in tests.
- **Tailwind visibility**: Use `toHaveClass('invisible')` instead of `not.toBeVisible()` — JSDOM doesn't compute CSS from class names.
- **Snapshots**: Reflect Tailwind classes. Update with `npm test -- -u` after styling changes.

## Code Conventions

- **Absolute imports** from `src/` (configured in tsconfig `baseUrl: "./src"` and Vite aliases in `astro.config.mjs`)
- **Styling**: Tailwind CSS utility classes + `clsx` for conditional classes
- **Commits**: conventional commits enforced via commitlint (`@commitlint/config-conventional`)
- **Branch protection**: pre-commit hook blocks commits on main/master, runs lint + tests on changed files
- **Component structure**: each component has `index.tsx`, optional `test.spec.tsx`
- **CI**: PR to main triggers `npm test --bail` on ubuntu-latest

## Environment Variables

Required (set via `.env` in `apps/web/` or CI secrets): `PUBLIC_API_URL`, `PUBLIC_ENV`, `PUBLIC_GITHUB_TOKEN`, `PUBLIC_GOOGLE_CLIENT_ID`, `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_KEY`

Note: Astro uses `PUBLIC_` prefix (not `NEXT_PUBLIC_`) for client-exposed env vars.
