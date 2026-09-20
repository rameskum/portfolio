# Ramesh Kumar - Portfolio v3 Editorial Engineer

**Full rewrite** of rameskum.com as a Next.js App Router + Tailwind + shadcn/ui application implementing the Editorial engineer v3 design direction.

## About This Rewrite

This is a **greenfield Next.js App Router application** implementing Editorial engineer v3, not an incremental restyle of the old CRA + Sass site. Reviewers should baseline against:

- Design spec: `/workspace/design-specs/rameskum-portfolio-v3-editorial.md`
- Muse 01 Editorial engineer frames
- Content JSON structure and hierarchy

**Do not** compare to the old rameskum.com CRA site - this is a complete architectural rewrite.

## Design Direction

Editorial engineer v3 features:
- **Warm paper cream** (`#F5F4EC`) background with ink stage frame
- **Statement hero** with serif/coral italic accents
- **NO portrait** - SVG illustration motifs instead
- **JSON-driven content** - all lists configurable via `content/*.json`
- Magazine-style layout with editorial whitespace

## Tech Stack

- **Next.js 15** - App Router with TypeScript
- **Tailwind CSS** - Editorial color tokens
- **shadcn/ui-style components** - Button, Badge, Separator
- **JSON content modules** - Zod-validated, enabled/featured/order flags
- **SVG motifs** - PlatformGrid, PipelineFlow, RecoveryLoop, HomelabRack, MarkRK

## Content Structure

All content is data-driven via JSON modules under `content/`:

- `site.json` - name, wordmark, location, statement, socials
- `metrics.json` - outcome metrics (20→2 min, weeks→days, −25%)
- `stack.json` - tech stack ribbon
- `case-studies.json` - TD Securities → Amdocs → Homelab
- `projects.json` - Homelab (highlight) + ecommerce-admin + ecommerce-store + TallyNest
- `writing.json` - rameskum-blogs articles
- `education.json` - NIT Rourkela

Components read JSON only via `lib/content.ts` helpers (`enabledSorted`, `featured`). Ramesh toggles visibility/order by editing JSON, not React.

## Routes

- `/` - Editorial home (hero, work, projects, writing, contact)
- `/writing` - Blog index
- `/writing/[slug]` - Article page (placeholder content)
- `/resume` - In-app PDF viewer + download

## Development

```bash
pnpm install
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm type-check   # TypeScript validation
```

## Locked Content

Per spec:
- Headline: "Senior Backend & Data Engineer | Java, Data Platforms & Cloud Modernization"
- Case studies order: TD → Amdocs → Homelab
- Location: "TORONTO · CA" only (never "Open to opportunities")
- Metrics: 20→2 min · weeks→days · −25% overhead
- Projects: Homelab highlighted, Hello Dog `enabled: false`

## What's Different

This rewrite:
- ✅ Next.js App Router (was: CRA)
- ✅ Tailwind CSS (was: Sass modules)
- ✅ JSON-driven content (was: hardcoded JSX)
- ✅ Editorial tokens (was: sky/teal)
- ✅ SVG motifs (was: portrait photo)
- ✅ Magazine layout (was: sidebar)

## Resume

Place `resume.pdf` in `/public` for the resume viewer.

## Version

**v3.0.0** - Editorial engineer (full rewrite)

Previous versions:
- v1 - Sky theme CRA
- v2 - Dark+teal (rejected, PR #202 closed)
