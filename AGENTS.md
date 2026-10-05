# Repository Guidelines

Reachzy marketing site: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 — a credibility surface for an influencer marketing agency.

## Project Structure & Module Organization

- `app/` — Routes and composition: `/`, `/creators`, `/creators/ai-learners-india`, `/for-creators`; `app/layout.tsx` owns fonts/metadata, `app/globals.css` holds design tokens.
- `components/` — `site-header.tsx` (only client component), `site-footer.tsx`, and sections under `components/sections/` (`creators/`, `ai-learners-india/`, `for-creators/`).
- `lib/utils.ts` — Shared `cn()` helper (currently unused, kept for future). `public/` — Static assets served at `/creators/<file>` and `/icon*`.
- Import through the `@/*` alias, not relative paths.

## Build, Test, and Development Commands

```bash
bun install                  # install dependencies (bun preferred)
npm install --no-bin-links   # fallback for Termux/Android
bun run dev                  # start Next.js dev server
bun run build                # production build — run on standard host
bun run start                # serve production build
npx tsc --noEmit             # TypeScript check (type errors fail build)
```

No lint or test scripts exist; verify with TypeScript check plus browser QA.

## Coding Style & Naming Conventions

- 2-space indentation, single quotes, no semicolons, no trailing commas — match existing files.
- `PascalCase` component filenames with named exports (`export function Hero()`); lowercase route folders; `camelCase` utilities.
- Pages are server components exporting `metadata: Metadata` and wrapping `<SiteHeader />`, stacked `<main>` sections, `<SiteFooter />`.
- Use Tailwind v4 tokens from `app/globals.css` (`font-serif`, `text-accent`, `bg-primary`); avoid arbitrary colors.

## Content Guardrails

Business facts are locked: never invent counts, testimonials, logos, or scale; never publish commission percentages; never present an individual as the public face. Contact is `partnerships@reachzy.space`. Read `1.md` and `STAGE_*` docs before editing copy; do not reintroduce `/contact`, forms, `ignoreBuildErrors`, or `generator: 'v0.app'`.

## Commit & Pull Request Guidelines

Use short imperative subjects (e.g., `Add creators page section`) with an explanatory body. PRs should list affected routes, attach screenshots, and confirm TypeScript passes.
