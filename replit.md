# Clyde Miles Bonita Portfolio

A multi-path personal portfolio with color-coded, printable resumes for housekeeping, technology, security, finance, gaming QA, and an all-in-one profile.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio preview
- `pnpm --filter @workspace/api-server run dev` — run the shared API server when API routes are added
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- No database or AI service is required for the portfolio.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

- Browse five career-focused portfolio paths plus an all-in-one profile.
- View and print/save each path as a two-page resume.
- Printed resume headings, name, email, and photo border use a career-specific accent color so printed copies are easy to sort.
- Send a message through the existing contact form.

## User preferences

- Keep this website free of AI and database dependencies.
- When improving printed resumes, prefer simple color differences over changing the resume content or structure.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
