# Reachzy Desktop Rendering Issue — Reference Note

**Purpose:** Help Codex diagnose the desktop-only layout defect shown in the supplied screenshots. This is a targeted repair, not a redesign.

## Observed symptoms

### 1. Home page — “What We Do” process section
- The main heading is squeezed into an unusually narrow column, causing excessive line wrapping.
- The numbered process steps and their descriptions are also compressed into narrow columns even though substantial horizontal space is unused.
- Elements around the step numbers and section content appear crowded, with spacing and alignment that make the section difficult to read.

### 2. Home page — hero statistics panel
- The panel is broadly visible, but its internal layout is unbalanced.
- The large subscriber count takes up substantial space while the creator/audience description is squeezed into a very narrow column.
- The panel needs proportionate columns and clear grouping of the primary and secondary statistics. Do not change or invent the underlying figures as part of a layout fix.

### 3. For Creators page — featured creator section
- The creator image, title/details and explanatory copy are compressed into narrow columns.
- The description wraps excessively, often into very short lines, while much of the available page width remains unused.
- Several figures and statistic labels near the lower part of the screenshot visibly overlap or collide, making the metrics difficult to read.
- This is the clearest visible rendering failure and should be included in reproduction and verification.

## Reported reproduction context

The issue is visible in the supplied desktop-browser screenshots. The site reportedly appears normal on the user's Android device and in the user's “Desktop side mode.” Treat those as regression checks, and confirm the exact viewport and browser conditions when reproducing the issue.

## What is known — and what is not

The screenshots establish the visible layout symptoms; they do **not** establish the underlying CSS or component-level root cause. Do not assume the cause before inspecting and reproducing it.

Investigate, as relevant:
- Desktop breakpoint and media-query behavior.
- Grid column definitions, flex sizing/shrink, and minimum widths.
- Fixed widths/heights, overflow, and absolute positioning or transforms.
- Container width and horizontal padding.
- Browser zoom, viewport dimensions, and font-loading behavior.

These are investigation leads, not confirmed causes. Fix the underlying rule rather than masking the symptoms with arbitrary offsets or hidden content.

## Required scope and constraints

1. Reproduce the affected sections and identify the root cause before editing.
2. Make the smallest reliable fix for the desktop layout.
3. Preserve Reachzy's black, white and cyan palette, editorial typography, content, routes, and working CTAs.
4. Do not perform a full redesign, change unrelated sections, invent metrics, or start creator-page work as part of this repair.
5. Verify the affected desktop layouts and check Android/mobile and “Desktop side mode” for regressions where testing is available.
6. This repository is shared with another Codex agent. Read `/log/agent2/` before working, check for overlapping changes, and do not overwrite or revert the other agent's work. Record actions, changed files, reasons and test results in your own log under `/log/agent1/`.
7. Record anything not tested or not resolved honestly. A screenshot review alone is not proof that the root cause has been fixed.

## Completion criteria

The process section and featured creator section use the available desktop width sensibly; text and statistics are readable and no longer overlap; the hero statistics panel is proportioned correctly; reported unaffected layouts remain unaffected; and the root cause, file changes and verification results are documented in the Agent 1 log.
