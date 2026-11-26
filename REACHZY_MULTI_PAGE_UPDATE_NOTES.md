# Reachzy multi-page update — implementation notes

## Scope
Updates only the homepage (`/`), For Brands (`/for-brands`) and For Creators (`/for-creators`) from the restored 2026-11-01 backup. No creator profile pages are intentionally changed. No generic stock photography or AI-generated workspace imagery is added.

## Homepage
- Removed the AI Learners single-creator Creator Proof section and its statistics/campaign-evidence table.
- Removed the roster card from the hero.
- Replaced the old AI Learners metrics graphic in the hero with a designed product → creator → collaboration visual built from CSS and icons.
- Tightened philosophy and process spacing while preserving their core messages and the five existing process steps.
- Added a compact creator-fit framework that explains research, recommendations, commercial scope and measurement.
- Reworked the Creator Roll into a swipe/drag horizontal carousel with arrows and progress, using approved creator records and real supplied creator assets.
- Preserved the two visitor routes and final CTA.

## For Brands
- Removed the AI Learners creator-proof section, campaign metrics, profile CTA and its creator-specific rate cards from the public page.
- Replaced creator-specific prices with general content-format explanations; no agency-wide price claims were invented.
- Reworked hero, creator-fit criteria, campaign process and FAQs.
- Added the shared Creator Roll carousel as a selected-profile browsing experience without claiming it is the full roster.
- Added an interactive campaign-objective planner, an explicitly illustrative proposal preview, commercial-scope guidance and objective-led measurement guidance.
- No client logos, testimonials, performance claims or stock photographs were added.

## For Creators
- Removed the AI Learners single-creator spotlight from the page composition.
- Removed the visible email-template preview; the final CTA still opens a prefilled email, but the template is not displayed on the page.
- Replaced long repeated explanation blocks with responsibility cards, a four-part fit framework, opportunity-brief preview, three-step journey and creator-control cards.
- Added the shared swipeable Creator Roll and a concise FAQ.
- No stock photographs were added.

## Shared
- Changed the header label `Creators` to `Explore Creators`; it links to the homepage Creator Roll.
- Replaced the global footer's small-roster wording with a neutral, accurate positioning line and added the Explore Creators link.
- No dependencies or deployment configuration changed.
- The official AI Learners image supplied with this task is copied to `public/creators/ai-learners-india-profile.jpg` and used only as the existing creator's supplied channel artwork in the carousel. It is not treated as a campaign image.

## Generated/stock images removed
The overlay does not include generated workspace photographs. The one-command apply instruction removes the obsolete Creator Proof component files and only the exact earlier generated assets, if present:
- `public/homepage/technology-workspace.webp`
- `public/homepage/creator-studio.webp`
- `public/for-brands/technology-workspace.webp`
- `public/for-brands/creator-studio.webp`

Also remove the now-unused components after confirming they are no longer imported by any route:
- `components/sections/creator-proof.tsx`
- `components/sections/for-brands/creator-proof.tsx`

## Validation
- TypeScript/TSX syntax transpilation and import-path checks were run on changed source files.
- ZIP integrity was verified.
- Full Next.js type-check, production build, local browser QA and Cloudflare deployment cannot be claimed from this source-only environment because the backup ZIP does not contain installed dependencies or the user's Termux runtime.
