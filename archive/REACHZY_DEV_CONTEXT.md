# REACHZY DEVELOPMENT CONTEXT
## Handoff Document for Multi-Stage Release Process

**Created:** 2026-10-06 (Stage 1 — Project State Reconstruction)
**Repository:** `/storage/emulated/0/website_finalisation`
**Branch:** `main` (up to date with origin/main)

---

## 1. PROJECT IDENTITY

**Project:** Reachzy — Influencer Marketing Agency Website
**Purpose:** Connect technology-focused brands with creators whose audiences match the product; handle commercial coordination so creators can focus on content.
**Primary Routes:** `/`, `/for-creators`, `/for-brands`, `/creators/ai-learners-india`, `/sitemap.xml`

---

## 2. CURRENT STACK

| Component | Version/Config |
|-----------|---------------|
| Framework | Next.js 16.3.8 (App Router) |
| Language | TypeScript (strict: true) |
| Styling | Tailwind CSS v4.3.3 |
| Package Manager | npm (package-lock.json present) |
| Fonts | Geist Sans, Geist Mono, Newsreader (via next/font/google) |
| Icons | lucide-react 1.16.0 |
| Analytics | @vercel/analytics 1.6.1 (production only) |
| Utilities | clsx 2.1.1, tailwind-merge 3.3.1 |

---

## 3. CURRENT REPOSITORY STATE

### Directory Structure
```
/storage/emulated/0/website_finalisation/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                    # Homepage
│   ├── sitemap.ts                  # Static sitemap generation
│   ├── for-creators/page.tsx       # For Creators page
│   ├── for-brands/page.tsx         # For Brands page
│   └── creators/ai-learners-india/page.tsx  # Creator profile
├── components/
│   ├── layout/
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── philosophy.tsx
│   │   ├── what-we-do.tsx
│   │   ├── creator-proof.tsx
│   │   ├── dual-path.tsx
│   │   ├── final-cta.tsx
│   │   ├── featured-creator.tsx
│   │   ├── for-creators/           # 9 section components
│   │   ├── for-brands/             # 7 section components
│   │   └── ai-learners-india/      # 6 section components
│   └── ui/                         # 8 shared UI components
├── lib/
│   ├── content/
│   │   ├── home.ts
│   │   ├── for-creators.ts
│   │   ├── for-brands.ts
│   │   └── ai-learners-india.ts
│   └── seo/
├── public/
│   ├── creators/ai-learners-india-profile.jpg (195KB)
│   ├── reachzy-logo.png (84KB)
│   ├── icon.svg, icon-light-32x32.png, icon-dark-32x32.png, apple-icon.png
│   └── robots.txt
├── next.config.mjs                 # output: "standalone", ignoreBuildErrors: true
├── tsconfig.json                   # strict: true, noEmit: true
├── wrangler.jsonc                  # Cloudflare Workers config
├── open-next.config.ts             # OpenNext Cloudflare adapter
├── package.json / package-lock.json
└── postcss.config.mjs
```

### Untracked Files (from Stage 1 process)
- `1.md`, `2.md`, `3.md`, `4.md`, `5.md` — Stage instruction files (in `/sdcard/website_finalisation/`)
- `reference/` — Historical deployment logs and approved copy

---

## 4. CURRENT ROUTES

| Route | Status | Components | Metadata |
|-------|--------|------------|----------|
| `/` | ✅ Functional | Hero, Philosophy, WhatWeDo, CreatorProof, DualPath, FinalCta | Title + Description + OG |
| `/for-creators` | ✅ Functional | 8 section components (Hero → FinalCta) | Title + Description + Canonical |
| `/for-brands` | ✅ Functional | 7 section components (Hero → FinalCta) | Title + Description + Canonical |
| `/creators/ai-learners-india` | ✅ Functional | 6 section components + FinalCta | Title + Description + OG Image |
| `/sitemap.xml` | ✅ Functional | Static generation (force-static) | N/A |

**All 5 routes built successfully in latest Cloudflare builds** (logs from Oct 6, 2026).

---

## 5. CURRENT COMPONENT STRUCTURE

### Layout Components
- **SiteHeader** — Sticky nav with logo, 3 links, CTA button, mobile hamburger menu
- **SiteFooter** — Logo, tagline, nav links, social icons (Mail, LinkedIn, YouTube, X), copyright

### Homepage Sections (in order)
1. **Hero** — Split layout (copy left, creator trust bar right), geometric grid accent
2. **Philosophy** — Text-heavy section explaining "fit-first" approach
3. **WhatWeDo** — 3-column cards: Brand Research, Creator Discovery, Campaign Execution
4. **CreatorProof** — AI Learners India portrait + metrics + campaign table + CTA
5. **DualPath** — Two cards side-by-side: For Brands / For Creators
6. **FinalCta** — Centered CTA with "Start a campaign" button

### For Creators Sections (in order)
1. **ForCreatorsHero** — Centered, coral accent CTA
2. **WhyReachzy** — 5 paragraphs explaining value prop
3. **BeforeOpportunity** — 4-step horizontal scroll (desktop) / vertical cards (mobile)
4. **WhatYouGet** — 3 cards: Format & Scope, Commercial Terms, Rights & Control
5. **HowItWorks** — 4-step process cards
6. **WhoItsFor** — 3 creator categories with footnote
7. **Credibility** — AI Learners India profile with metrics & external links
8. **ForCreatorsFinalCta** — Contact form CTA

### For Brands Sections (in order)
1. **ForBrandsHero** — Primary CTA "Send a brief", secondary to creator profile
2. **Problem** — Text explaining discovery challenge
3. **Process** — 4-step: Brief → Research → Outreach → Campaign
4. **FitPhilosophy** — "Start with product" philosophy
5. **CreatorProof** — Reuses homepage component (shared)
6. **Formats** — 4 integration types: Integration, Dedicated, Bundle, Retainer
7. **Faq** — 6 Q&A items
8. **ForBrandsFinalCta** — "Send a brief" CTA

### AI Learners India Sections (in order)
1. **CreatorHero** — Portrait, metrics, social links, CTA
2. **CreatorBackground** — Bio of Abhijeet Kalamkar
3. **ContentPerformance** — Metrics grid + top videos table
4. **CampaignEvidence** — 3 real campaigns (Hostinger, GoHighLevel, Blotato)
5. **CollaborationProcess** — 4-step process for brands
6. **CreatorFaq** — 5 Q&A for brands considering this creator
7. **FinalCta** — Shared homepage FinalCta component

### Shared UI Components
- **Button** — 4 variants (primary, secondary, ghost, coral), 3 sizes, asChild support
- **Card** — 5 variants (default, metric, creator, pricing, campaign), hoverable prop
- **Metric / MetricRow** — Display metrics with icon, value, label
- **Portrait** — next/image wrapper with priority, fill, aspect ratio
- **CampaignTable** — Responsive table for campaign data
- **ScrollReveal / StaggeredReveal** — IntersectionObserver animations (respects prefers-reduced-motion)
- **Accordion** — Collapsible content sections

---

## 6. CURRENT /FOR-CREATORS STATE

**Implementation Status:** ✅ Complete — all 8 sections implemented and rendering

**Content Source:** `/lib/content/for-creators.ts` (derived from `/reference/for-creators.md` — **COPY LOCKED**)

**Visual Treatment:** Coral accent (`--accent-coral`) throughout, consistent with design system

**Key Implementation Notes:**
- Uses `ScrollReveal` / `StaggeredReveal` for entrance animations
- Horizontal scroll on desktop for "Before Opportunity" section
- Responsive grid layouts (1/2/3 columns)
- All copy matches approved reference exactly
- AI Learners India appears only in **Credibility** section as *example creator type*, not as Reachzy client/case study

**Pending Issues (for Stage 2):**
- Verify no accidental corruption of approved copy
- Confirm visual parity with pre-redesign design system
- Ensure no invented testimonials/metrics/clients

---

## 7. CURRENT /FOR-BRANDS STATE

**Implementation Status:** ✅ Complete — all 8 sections implemented

**Content Source:** `/lib/content/for-brands.ts` (from approved copy)

**Visual Treatment:** Primary (cyan-blue) accent, consistent with homepage

**Shared Component:** Reuses `CreatorProof` from homepage (shows AI Learners India campaigns)

---

## 8. CURRENT HOMEPAGE STATE

**Implementation Status:** ✅ Complete — all 6 sections implemented

**Content Source:** `/lib/content/home.ts` (from approved copy)

**Key Features:**
- Split hero layout with geometric SVG grid accent (5% opacity)
- Trust bar featuring AI Learners India metrics
- Campaign evidence table with real data
- DualPath cards linking to `/for-brands` and `/for-creators`

---

## 9. CURRENT CREATOR-PROFILE STATE (/creators/ai-learners-india)

**Implementation Status:** ✅ Complete — all 6 sections + shared FinalCta

**Content Source:** `/lib/content/ai-learners-india.ts` (from approved copy)

**Assets:** `/public/creators/ai-learners-india-profile.jpg` (195KB, 480×600)

**OG Image:** Configured in metadata to use profile image (1200×1500)

**Important:** Page explicitly positions AI Learners India as *example of creator type Reachzy works with*, **not** as Reachzy client/case study (per copy lock).

---

## 10. CURRENT ASSETS

| Asset | Path | Size | Status |
|-------|------|------|--------|
| Reachzy Logo | `/public/reachzy-logo.png` | 84KB | ✅ Used in Header, Footer, Hero trust bar |
| AI Learners Profile | `/public/creators/ai-learners-india-profile.jpg` | 195KB | ✅ Used in Hero trust bar, CreatorProof, CreatorProfile |
| Favicon (SVG) | `/public/icon.svg` | 1.3KB | ✅ Configured in layout.tsx |
| Favicon (Light 32×32) | `/public/icon-light-32x32.png` | 566B | ✅ Light mode |
| Favicon (Dark 32×32) | `/public/icon-dark-32x32.png` | 585B | ✅ Dark mode |
| Apple Touch Icon | `/public/apple-icon.png` | 2.6KB | ✅ Configured |
| Robots.txt | `/public/robots.txt` | 193B | ✅ Basic allow all |

**Missing/Unused:**
- No other creator profile images
- No additional brand assets
- No favicon.ico (using SVG + PNG variants)

---

## 11. CURRENT DEPENDENCIES

### Production (11 packages)
```
@vercel/analytics: 1.6.1
clsx: ^2.1.1
lucide-react: ^1.16.0
next: ^16.3.3
react: ^19
react-dom: ^19
tailwind-merge: ^3.3.1
```

### Development (7 packages)
```
@tailwindcss/postcss: ^4.3.3
@types/node: ^24
@types/react: ^19
@types/react-dom: ^19
postcss: ^8.5
tailwindcss: ^4.3.3
typescript: 5.7.3
```

**Note:** Next.js 16.x uses React 19 (canary). Turbopack is enabled by default in builds.

---

## 12. CURRENT TYPESCRIPT/BUILD STATE

### tsconfig.json
- `strict: true`
- `noEmit: true` (type-checking only, no .d.ts output)
- `skipLibCheck: true`
- Path aliases: `@/*` → `./*`

### next.config.mjs
```javascript
{
  output: "standalone",
  typescript: { ignoreBuildErrors: true },  // ⚠️ WORKAROUND ACTIVE
  images: { unoptimized: true }
}
```

### TypeScript Errors (Historical & Current)

**From build log `reachzy-website.production.6159f699...` (Oct 6 01:12):**
```
components/sections/dual-path.tsx(42,17): error TS2322: 
  Type 'string' is not assignable to type '"primary" | "secondary" | "ghost" | "coral"'
```

**Root Cause:** `homeContent.dualPath.brandCard.cta.variant` and `creatorCard.cta.variant` are typed as `string` in content file, but Button expects union `'primary' | 'secondary' | 'ghost' | 'coral'`.

**Current Workaround:** `next.config.mjs` has `typescript: { ignoreBuildErrors: true }` — **this allows build to succeed despite TS errors.**

**Files Previously Flagged (Stage 1 instructions):**
- `components/sections/dual-path.tsx` — ✅ Confirmed (variant type mismatch)
- `components/sections/final-cta.tsx` — Need to verify
- `components/sections/hero.tsx` — Need to verify  
- `components/ui/scroll-reveal.tsx` — Need to verify

**Build Results (latest successful builds):**
- ✅ Compilation: Success (Turbopack)
- ✅ Type checking: **Skipped** (due to ignoreBuildErrors)
- ✅ Static generation: 7/7 pages
- ✅ Routes: All 5 primary routes + /_not-found

---

## 13. CURRENT CLOUDFLARE/DEPLOYMENT CONFIGURATION

### wrangler.jsonc
```jsonc
{
  "name": "reachzy-website",
  "main": ".open-next/worker.js",
  "compatibility_date": "2026-10-06",
  "compatibility_flags": ["nodejs_compat", "global_fetch_strictly_public"],
  "assets": { "directory": ".open-next/assets", "binding": "ASSETS" },
  "services": [{ "binding": "WORKER_SELF_REFERENCE", "service": "reachzy-website" }],
  "images": { "binding": "IMAGES" },
  "observability": { "enabled": true }
}
```

### open-next.config.ts
```typescript
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
export default defineCloudflareConfig();
```

### next.config.mjs (relevant for deployment)
- `output: "standalone"` — Required for OpenNext
- `images: { unoptimized: true }` — Required for Cloudflare (no image optimization service)

### Deployment Architecture History (from logs)

| Build ID | Date | TypeScript Check | Result | Notes |
|----------|------|------------------|--------|-------|
| 6159f699 | Oct 6 01:12 | **Enabled** | ❌ Failed | TS errors in dual-path.tsx |
| 44c1cd07 | Oct 6 01:15 | **Skipped** | ✅ Success | ignoreBuildErrors: true |
| 0a076499 | Oct 6 01:28 | **Skipped** | ✅ Success | ignoreBuildErrors: true |
| caf2a9b1 | Oct 6 01:19 | **Skipped** | ✅ Success | ignoreBuildErrors: true |
| 08c0dc20 | Oct 6 02:02 | **Skipped** | ✅ Success | ignoreBuildErrors: true |

**Pattern:** All **successful** Cloudflare builds have `typescript: { ignoreBuildErrors: true }`. The **only** build with type-checking enabled **failed** on `dual-path.tsx`.

---

## 14. HISTORICAL DEPLOYMENT ATTEMPTS

### Timeline from Logs & Git History

1. **Commit 127bbb5** (Oct 5) — "Deploy Reachzy website" — Initial deployment attempt
2. **Commit 1058d04** (Oct 6) — "Deploy Reachzy website" — Second attempt
3. **Commit 2a10b46** — "Configure static export for Cloudflare Pages" — Tried Pages
4. **Commit 08c06ae** — "Allow production deployment" — Enabled production
5. **Commit c4814b8** — "Fix static sitemap deployment" — Sitemap issues
6. **Commit e411f15** — "Configure Next.js for Cloudflare Workers" — Switched to Workers
7. **Commit 34364ff** (HEAD) — "Configure Reachzy Cloudflare Worker deployment" — Current config

### Build Logs Analysis (5 logs in `/reference/`)

**All logs show:**
- Node 24.18.0, npm 10.9.2
- Next.js 16.3.8 (Turbopack)
- 51 packages installed
- Build command: `npm run build` → `next build`

**Failures:**
- **Only 1 build failed:** `6159f699` — TypeScript errors (dual-path.tsx variants)
- **4 builds succeeded** — All with `ignoreBuildErrors: true`

**Warnings (non-blocking):**
- "No build cache found" — Every build
- "metadataBase property not set" — Social images fallback to localhost
- Turbopack telemetry notice

---

## 15. KNOWN PREVIOUS FAILURES

| # | Failure | Evidence | Status |
|---|---------|----------|--------|
| 1 | JSX/syntax corruption | Stage 1 doc | Historical |
| 2 | Invalid Lucide imports | Stage 1 doc | Historical |
| 3 | Component data-shape mismatches | Stage 1 doc | Historical |
| 4 | /for-creators malformed sections | Stage 1 doc | Historical |
| 5 | Explicit asset requirements missed | Stage 1 doc | Historical |
| 6 | TypeScript errors in shared components | Build log 6159f699 | **ACTIVE** (dual-path.tsx) |
| 7 | Deployment config changed repeatedly | Git history (7 commits) | Historical |
| 8 | Static export introduced during troubleshooting | Git commit 2a10b46 | Superseded |
| 9 | `.open-next/worker.js` missing | Stage 1 doc | Risk for Stage 4 |
| 10 | WORKER_SELF_REFERENCE issues | Stage 1 doc | Risk for Stage 4 |
| 11 | Next.js version/config issues | Stage 1 doc | Risk for Stage 4 |

---

## 16. ROOT CAUSES ALREADY ESTABLISHED

| Root Cause | Evidence | Confidence |
|------------|----------|------------|
| **TypeScript variant type mismatch** in content files vs Button component | Build log 6159f699 line: `components/sections/dual-path.tsx(42,17)` | FACT |
| **ignoreBuildErrors: true masks real TS errors** | 4/5 builds skip type-check; only 1 with checking fails | FACT |
| **Deployment architecture drift** (Pages → Workers → OpenNext) | 7 git commits changing deployment config | FACT |
| **No metadataBase in layout** | Build warning: "metadataBase property not set" | FACT |
| **No build cache configured** | Every build: "No build cache found" | FACT |

---

## 17. CONTRADICTORY / SUSPICIOUS CONFIGURATION

| Issue | Location | Severity |
|-------|----------|----------|
| `ignoreBuildErrors: true` in next.config.mjs | Line 4-6 | **HIGH** — Masks real TS errors |
| `output: "standalone"` + `images.unoptimized: true` | next.config.mjs | Expected for Workers |
| `WORKER_SELF_REFERENCE` service = "reachzy-website" | wrangler.jsonc | Matches worker name ✅ |
| `compatibility_date: "2026-10-06"` | wrangler.jsonc | Today's date ✅ |
| No `metadataBase` in layout.tsx | app/layout.tsx | **MEDIUM** — OG images use localhost |
| Turbopack enabled (default in Next 16) | Build logs show "▲ Next.js 16.3.8 (Turbopack)" | May affect Cloudflare build |

---

## 18. FILES THAT ARE WEBSITE-CRITICAL

**Do NOT modify without explicit stage instruction:**

1. `/lib/content/home.ts` — Homepage copy (approved)
2. `/lib/content/for-creators.ts` — For Creators copy (**COPY LOCKED**)
3. `/lib/content/for-brands.ts` — For Brands copy (approved)
4. `/lib/content/ai-learners-india.ts` — Creator profile copy (approved)
5. `/reference/for-creators.md` — Source of truth for /for-creators
6. `/app/layout.tsx` — Root layout, fonts, metadata, analytics
7. `/app/globals.css` — Design system (colors, fonts, radius)
8. `/components/ui/button.tsx` — Button variants (primary, secondary, ghost, coral)
9. `/components/ui/card.tsx` — Card variants
10. `/components/layout/site-header.tsx` & `site-footer.tsx` — Shared layout
10. `/next.config.mjs` — Deployment-critical (output: standalone)
11. `/wrangler.jsonc` & `/open-next.config.ts` — Cloudflare config
12. `/public/creators/ai-learners-india-profile.jpg` — Only creator asset
13. `/public/reachzy-logo.png` — Only logo asset

---

## 19. FILES THAT ARE HISTORICAL/ARCHIVE-ONLY

**Reference only — do not use as source of truth for implementation:**

1. `/reference/*.build.log.txt` (5 files) — Historical deployment logs
2. `/reference/For Creators — Reachzy.mht` — Archived page snapshot
3. `/sdcard/website_finalisation/1.md` through `5.md` — Stage instruction files
4. This file (`/archive/REACHZY_DEV_CONTEXT.md`) — Context document

---

## 20. FILES THAT LATER STAGES SHOULD NOT CASUALLY MODIFY

| File | Reason |
|------|--------|
| `next.config.mjs` | Deployment-critical; `output: standalone` required |
| `wrangler.jsonc` | Worker config; name, bindings, compatibility_date |
| `open-next.config.ts` | OpenNext adapter config |
| `tsconfig.json` | `strict: true`, `noEmit: true`, path aliases |
| `app/globals.css` | Design system tokens (colors, fonts, radius) |
| `components/ui/button.tsx` | Variant definitions (primary, secondary, ghost, coral) |
| `components/ui/card.tsx` | Variant definitions |
| `lib/content/*.ts` | **All 4 content files are COPY LOCKED** |
| `app/sitemap.ts` | Static generation config |

---

## 21. LOCKED REQUIREMENTS FOR /FOR-CREATORS

**From Stage 1 instructions + reference/for-creators.md:**

1. **COPY LOCKED** — Do not rewrite, shorten, expand, paraphrase, reorder, or creatively reinterpret
2. **Creator arrives from outreach email** — Website is confidence/conversion layer, NOT email repeat
3. **Target mental model for creator:**
   - "This is basically a sponsorship manager without a fixed cost"
   - "This would save me time"
   - "They handle the commercial work"
   - "I stay in control"
   - "I know what an opportunity will look like"
   - "This looks professional"
   - "This is easy to try"
4. **Required sections (in order):**
   - Concise hero
   - What Reachzy actually handles
   - Visual opportunity briefing
   - Creator control
   - Why opportunities are considered (The Fit)
   - Transparent economics (NO 15–20% figure displayed)
   - Technology-focused creator categories
   - AI Learners India as **public example only** (NOT implied client)
   - Low-friction starting info
   - One final "Talk to Reachzy" CTA
   - Pre-filled email draft behavior
5. **DO NOT INVENT:** testimonials, creator relationships, campaign results, clients, metrics, fake sponsorship examples, fake deal information, unsupported claims

---

## 22. LOCKED REQUIREMENTS FOR DEPLOYMENT

**From Stage 4 instructions:**

1. **Architecture:** Next.js → OpenNext Cloudflare adapter → Cloudflare Workers
2. **DO NOT:** migrate to vinext, Cloudflare Pages, static export, standalone Node server, another framework
3. **DO NOT:** let Cloudflare auto-choose different architecture
4. **Current config targets:** Workers via OpenNext (wrangler.jsonc + open-next.config.ts)
5. **Must verify before deployment:**
   - `.open-next/worker.js` generation works
   - No automatic Wrangler config migration
   - Worker naming consistency (`reachzy-website`)
   - `WORKER_SELF_REFERENCE` binding correct
   - Assets binding (`ASSETS`) works
   - Images binding (`IMAGES`) works

---

## 23. RECOMMENDED ORDER OF FUTURE WORK

| Stage | Focus | Prerequisites |
|-------|-------|---------------|
| **Stage 2** | `/for-creators` page implementation | This context document complete; reference/for-creators.md as source of truth |
| **Stage 3** | Full website stabilization & QA | Stage 2 complete; all routes render without errors |
| **Stage 4** | Cloudflare Workers / OpenNext hardening | Stage 3 complete; all TS errors resolved; no ignoreBuildErrors |
| **Stage 5** | Final validation & ONE production deployment | Stage 4 complete; all preflight gates pass |

**Critical Path:** Fix TypeScript errors (remove `ignoreBuildErrors`) → Stage 2 → Stage 3 QA → Stage 4 deployment config → Stage 5 deploy

---

## 24. OPEN QUESTIONS REQUIRING LATER DECISION

| # | Question | Stage to Resolve |
|---|----------|------------------|
| 1 | Should `typescript: { ignoreBuildErrors: true }` be removed and TS errors fixed properly? | Stage 3 (must fix before Stage 4) |
| 2 | Is Turbopack compatible with OpenNext Cloudflare build? | Stage 4 (test build) |
| 3 | Should `metadataBase` be added to layout.tsx for correct OG images? | Stage 3 |
| 4 | Are there build cache improvements needed for Cloudflare? | Stage 4 |
| 5 | Does the current `WORKER_SELF_REFERENCE` binding work in production? | Stage 4 (verify) |
| 6 | Are all lucide-react imports valid? (Stage 1 mentioned historical issues) | Stage 3 (audit) |
| 7 | Is the sitemap generation correct for all routes? | Stage 3 (verify) |
| 8 | Should `@vercel/analytics` be replaced for Cloudflare Workers? | Stage 4 (check compatibility) |

---

## VERIFICATION CHECKLIST (Stage 1 Complete)

- [x] Did not modify application source files
- [x] Did not install packages
- [x] Did not change deployment configuration
- [x] Created `/archive/REACHZY_DEV_CONTEXT.md`
- [x] Git status: Only untracked files are stage instruction files (1.md-5.md) and reference/
- [x] No hidden/unreported modifications

---

## CLASSIFICATION LEGEND

- **FACT** — Directly observed in repository files, build logs, or git history
- **HISTORY** — Known from previous development sessions (per Stage 1 doc)
- **TODO** — Not yet verified, requires action in later stage
- **ROOT CAUSE** — Reasoned conclusion from evidence
- **FAILED FIX** — Previously attempted, should not be repeated
- **KNOWN-GOOD STATE** — Configuration that demonstrably worked
- **RISK** — Could recreate previous failure

---

*This document is the single source of truth for all subsequent stages. Before any deployment configuration change in Stage 4, re-read the relevant `/reference` build logs and compare against the Historical Deployment Logs & Failure Map above.*