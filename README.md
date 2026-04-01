# Teller

<img src="https://raw.githubusercontent.com/GuiMoraesDev/teller/main/public/img/Icon.png" alt="Teller logo" height="100px" align="right" />

[![astro](https://img.shields.io/badge/astro-5-BC52EE?logo=Astro)](https://astro.build/)
[![react](https://img.shields.io/badge/react-18-61DAFB?logo=React)](https://react.dev/)
[![typescript](https://img.shields.io/badge/typescript-5-blue?logo=Typescript)](https://www.typescriptlang.org/)
[![tailwindcss](https://img.shields.io/badge/tailwindcss-4-06B6D4?logo=Tailwind-CSS)](https://tailwindcss.com/)
[![react-hook-form](https://img.shields.io/badge/react--hook--form-7-EC5990?logo=React-Hook-Form)](https://react-hook-form.com/)
[![@tanstack/react-query](https://img.shields.io/badge/react--query-4-FF4154?logo=React-Query)](https://tanstack.com/query/v4/)

<small>All badges are links to each doc</small>

## Description

Teller is a POC of a Twitter-like social media app built to explore modern web technologies. This is a playground project for testing architectural concepts and tooling.

## Project Links

- [Figma Project](https://www.figma.com/file/Jtw62Q7XIKtG4wwemhBzgV/Teller)
- [Server project](https://github.com/GuiMoraesDev/teller-api)

## Monorepo Structure

Turborepo monorepo with npm workspaces.

```
.
├── apps/
│   └── web/                # Astro 5 frontend with React islands
│       ├── src/
│       │   ├── @types/     # Shared TypeScript types
│       │   ├── components/ # Reusable React UI primitives
│       │   ├── constant/   # App-wide constants
│       │   ├── helpers/    # Utility functions (cookies, logging)
│       │   ├── layouts/    # Astro layouts + React providers
│       │   ├── pages/      # Astro page routes (.astro files)
│       │   ├── patterns/   # Complex React composites (Modal, FloatSubMenu)
│       │   ├── services/   # Axios-based API layer
│       │   ├── styles/     # Tailwind theme tokens (global.css)
│       │   ├── tests/      # Test utilities
│       │   └── views/      # React views with business logic + templates
│       ├── astro.config.mjs
│       ├── jest.config.cjs
│       └── tsconfig.json
├── packages/               # Shared packages (future)
├── turbo.json
└── package.json
```

## Requirements

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run linting
npm run lint
```

## Architecture

Astro 5 SSR app with React islands (`client:load`) and Tailwind CSS v4.

### Layer Hierarchy

```
.astro Pages → .astro Layouts → React Views → React Templates → React Components/Patterns
```

- **Pages**: `.astro` files for routing, auth handled by middleware
- **Layouts**: Astro wrappers (`BaseLayout`, `PrivateLayout`, `SignLayout`) + React providers
- **Views**: React components with business logic, data fetching (React Query), and state
- **Templates**: Presentational components receiving props from views
- **Components**: Reusable UI primitives styled with Tailwind CSS + `clsx`
- **Patterns**: Complex composites (Modal, FloatSubMenu)

### Key Technologies

| Area       | Technology                            |
| ---------- | ------------------------------------- |
| Framework  | Astro 5 (SSR with `@astrojs/node`)    |
| UI Islands | React 18 (`client:load`)              |
| Styling    | Tailwind CSS v4 + `clsx`              |
| State      | TanStack React Query v4               |
| Forms      | react-hook-form + yup                 |
| API        | Axios                                 |
| Auth       | JWT in cookies + middleware redirects |
| Testing    | Jest + React Testing Library          |
| Linting    | ESLint                                |
| CI         | GitHub Actions (test on PR to main)   |
| Monorepo   | Turborepo + npm workspaces            |

## Code Conventions

- **Commits**: conventional commits enforced via commitlint
- **Branch protection**: pre-commit hook blocks commits on main/master, runs lint + tests
- **Imports**: absolute imports from `src/` via aliases
- **Styling**: Tailwind utility classes, conditional via `clsx`
