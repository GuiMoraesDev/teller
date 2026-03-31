# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `yarn dev`
- **Build**: `yarn build`
- **Lint**: `yarn lint`
- **Test all**: `yarn test`
- **Test single file**: `yarn test --testPathPattern=<path>`
- **Test changed only**: `yarn test --onlyChanged`
- **Storybook**: `yarn storybook` (port 6006)

## Architecture

This is a Next.js 12 social media app (Twitter-like POC) using styled-components with SSR.

### Layer hierarchy: Pages → Layouts → Views → Templates → Components/Patterns

- **Pages** (`src/pages/`): Next.js routing + SSR auth checks via `getServerSideProps` with nookies. Root `/` permanently redirects to `/signin`.
- **Layouts** (`src/layouts/`): `Private` (authenticated pages with header/nav) and `Sign` (auth pages with logo only).
- **Views** (`src/views/`): Business logic, data fetching (React Query), mutations, and state. Each view has a `template/` subfolder for presentational rendering.
- **Templates** (`src/views/*/template/`): Receive props from views, handle form rendering and validation schemas.
- **Components** (`src/components/`): Reusable UI primitives (Button, Input, Text, TextArea, Img, Logo, etc.).
- **Patterns** (`src/patterns/`): Complex composites (Modal, FloatSubMenu).

### Services (`src/services/`)

Axios-based API layer. `api.ts` creates a configured instance that reads JWT from cookies and sets `Authorization: Bearer` header. Domain-specific files (`posts.api.ts`, `users.api.ts`, `sessions.api.ts`) export endpoint functions.

### State & Data

- **Auth**: JWT stored in cookies via nookies, decoded with jwt-decode
- **Server state**: TanStack React Query v4 (`QUERY_KEYS`: sessions, users, posts)
- **Forms**: react-hook-form + yup validation + @hookform/resolvers
- **Styling**: styled-components with theme (`styles/themes/` has colors, breakpoints, borders, sizes, typography)

### Key constants (`src/constant/index.ts`)

`UNPROTECTED_ROUTES`, `LS_KEYS`, `QUERY_KEYS`, `POST_MESSAGE_LENGTH` (144 chars)

## Code Conventions

- **Absolute imports** from `src/` (configured in tsconfig `baseUrl: "./src"`)
- **Import order** enforced by ESLint: react → next → external modules → internal aliases (components, context, helpers, layouts, views, patterns, services, constants, styles) → relative imports, alphabetized within groups
- **Styling**: tabs, 2-space tab width, single quotes, semicolons, always arrow parens (`.prettierrc`)
- **Commits**: conventional commits enforced via commitlint (`@commitlint/config-conventional`)
- **Branch protection**: pre-commit hook blocks commits on main/master, runs lint + tests on changed files
- **Component structure**: each component has `index.tsx`, `styles.ts`, optional `test.spec.tsx`, `*.stories.tsx`, and `__snapshots__/`
- **CI**: PR to main triggers `yarn test --bail` on ubuntu-latest

## Environment Variables

Required (set via `.env` or CI secrets): `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_ENV`, `NEXT_PUBLIC_GITHUB_TOKEN`, `NEXT_PUBLIC_GOOGLE_CLIENT_ID`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_KEY`
