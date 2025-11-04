# Finance Dashboard

Modern Next.js 14 + React + TypeScript app for exploring personal finance data.  
Includes Prisma (SQLite for local dev), Storybook, Jest (unit), and Playwright (E2E).

## Tech Stack

- **Frontend:** Next.js 14 (App Router), React 19, TypeScript, TailwindCSS
- **Data:** Prisma + SQLite (dev). Easily swap to Postgres later.
- **Testing:** Jest + Testing Library (unit), Playwright (E2E)
- **Docs:** Storybook
- **Tooling:** pnpm, ESLint, Prettier, Husky, lint-staged

## Quick Start

```bash
pnpm install
pnpm prisma migrate dev -n init
pnpm prisma db seed
pnpm dev
```
