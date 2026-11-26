# Reachzy Creator Roll List

**Purpose:** Single source of truth for the creator cards shown in the Creator Roll section across Reachzy creator pages.

**Status:** Final implementation configuration. Creator inclusion in this file does not, by itself, mean the creator has approved public use of their name, image, profile details, analytics, or rates.

## Global implementation rules

1. Read this file whenever implementing or updating a Creator Roll. Do not create a separate hard-coded creator list inside individual creator pages.
2. Keep the order below: Pavan Lalwani, Punit Chawla, TechVishal VSB, AI Learners India.
3. Only render a creator card when `public_profile_status` is `approved`. Until then, omit that card from the public website.
4. Do not invent, infer, or fabricate profile images, logos, social URLs, audience counts, analytics, or other creator facts.
5. Use only the audience count and wording explicitly provided for each entry. If a count needs refreshing, verify it before changing this file and update `stats_last_verified`.
6. Each visible card should contain:
   - Creator image or logo, only if an approved asset is available
   - Public creator name
   - Primary niche
   - One-line description
   - Primary-platform audience count, only when available and approved
   - Link to the creator's dedicated Reachzy page
7. The whole card should link to `destination_page`. Do not link to an unverified social profile in place of the dedicated Reachzy page.
8. Do not show private rates, personal email addresses, internal evaluation notes, negotiation status, or other confidential details in Creator Roll cards.
9. If an approved image or verified audience count is unavailable, omit that element rather than using a placeholder presented as fact.
10. Update creator details centrally in this file. Individual pages should reference this file rather than duplicating the card list.
11. Vaibhav Sisinty is intentionally excluded from the active Creator Roll. Do not add him unless his team's no-intermediaries position and the commercial arrangement are resolved and public-profile permission is obtained.

---

## Creator entries

### 1. Pavan Lalwani

- `public_profile_status`: `pending_creator_permission`
- `public_name`: `Pavan Lalwani`
- `primary_niche`: `AI tools, data analytics, Excel, Power BI and productivity`
- `one_line_description`: `Practical tutorials that help learners and professionals build useful data, analytics and productivity skills.`
- `primary_platform`: `YouTube`
- `primary_platform_audience`: `339.9K subscribers`
- `combined_audience`: `Not provided`
- `image_asset`: `Not supplied — use only after an approved asset is obtained`
- `verified_social_profile_url`: `Not supplied — verify before use`
- `destination_page`: `/creators/pavan-lalwani`
- `stats_last_verived`: `2026-10-08 media kit; refresh before public launch`
- `notes`: `Audience figure is from the supplied media kit and should be refreshed before publication. Do not present the media kit's 28-day channel analytics as typical per-video views.`

### 2. Punit Chawla

- `public_profile_status`: `pending_creator_permission`
- `public_name`: `Punit Chawla`
- `primary_niche`: `UX/UI design, web design and design tools`
- `one_line_description`: `Design-focused tutorials and content covering UX/UI, web design and practical tools for creators and designers.`
- `primary_platform`: `YouTube`
- `primary_platform_audience`: `179K+ subscribers`
- `combined_audience`: `Approximately 302K+ across YouTube, Instagram and LinkedIn, based on the supplied rate card; verify before publication`
- `image_asset`: `Not supplied — use only after an approved asset is obtained`
- `verified_social_profile_url`: `Not supplied — verify before use`
- `destination_page`: `/creators/punit-chawla`
- `stats_last_verified`: `Supplied rate card; date not specified`
- `notes`: `Do not imply verified audience demographics or average views; those were not supplied.`

### 3. TechVishal VSB

- `public_profile_status`: `pending_creator_permission`
- `public_name`: `TechVishal VSB`
- `primary_niche`: `Hindi technology, smartphone reviews and practical tech tips`
- `one_line_description`: `Hindi-language tech content covering smartphone reviews, phone features, apps and useful technology tips.`
- `primary_platform`: `YouTube`
- `primary_platform_audience`: `Approximately 192K subscribers`
- `combined_audience`: `Not provided`
- `image_asset`: `Not supplied — use only after an approved asset is obtained`
- `verified_social_profile_url`: `Not supplied — verify before use`
- `destination_page`: `/creators/techvishal-vsb`
- `stats_last_verified`: `Third-party snapshot circa July 2026; refresh before publication`
- `notes`: `Subscriber count requires fresh verification. No reliable average views, audience demographics, or sponsorship outcomes have been confirmed.`

### 4. AI Learners India

- `public_profile_status`: `approved`
- `public_name`: `AI Learners India`
- `primary_niche`: `AI agents, automation, no-code for freelancers & agency founders`
- `one_line_description`: `Hindi-language tutorials teaching AI agents and automation to Indian freelancers and agency founders who build for clients.`
- `primary_platform`: `YouTube`
- `primary_platform_audience`: `160,000+ subscribers`
- `combined_audience`: `Not provided`
- `image_asset`: `/creators/ai-learners-india-profile.jpg`
- `verified_social_profile_url`: `Not supplied — verify before use`
- `destination_page`: `/creators/ai-learners-india`
- `stats_last_verified`: `YouTube Studio, April 2026`
- `notes`: `Channel-reported figures. All growth is organic — no paid promotion.`

---

## Excluded creator

### Vaibhav Sisinty

- `status`: `excluded`
- `reason`: `His team explicitly stated that they do not work through intermediaries for brand partnerships. Do not display him in the Creator Roll or actively pitch him through Reachzy unless the team's position and a workable commercial arrangement are resolved, with permission for public profile use.`
- `destination_page`: `/creators/vaibhav-sisinty` (reserved path only; do not link publicly while excluded)

---

## Publication checklist

Before changing any creator's `public_profile_status` to `approved`, confirm:

- [ ] The creator or authorized team has approved public use of their profile on Reachzy.
- [ ] The public name, niche description and page URL are correct.
- [ ] The profile image/logo is authorized for use.
- [ ] The audience figure is current, source-backed and approved for public display.
- [ ] The dedicated creator page is ready and contains no unsupported claims or confidential information.
- [ ] Any rates or commercial terms shown on the dedicated page are explicitly approved for public display.

**Implementation rule:** `pending_creator_permission` and `excluded` entries must not render on the public website. This file is the definitive source of truth for Creator Roll order and card content.
