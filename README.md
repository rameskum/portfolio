# Ramesh Kumar — Portfolio

Personal portfolio site for Ramesh Kumar, senior backend & data engineer. Live at [rameskum.com](https://rameskum.com).

Editorial-style single-page site: statement hero, work case studies, projects, writing, contact — plus an in-app resume viewer.

## Tech Stack

- **Next.js 16** — App Router with TypeScript 7
- **React 19**
- **Tailwind CSS 3** — editorial color tokens
- **shadcn/ui-style components** — Button, Badge, Separator, Sheet
- **Zod 4** — build-time validation of all content modules
- **Markdown + JSON content** — profile copy lives in `content/profile.md`; lists in `content/*.json`

## Design

- Warm paper background (`#F5F4EC`), card surface (`#FFFCF7`), burnt-orange primary (`#E85A32`)
- Serif/coral italic accents (Newsreader), grotesque body (Manrope), mono labels (DM Mono)
- Hero: abstract arches artwork inside an arch-shaped (`rounded-t-full`) frame; image background is color-matched to the card surface so it blends seamlessly
- SVG motifs (PlatformGrid, PipelineFlow, RecoveryLoop, HomelabRack) illustrate the work/projects sections
- Brand favicon set (`public/favicon.ico`, `favicon-16x16/32x32.png`, `apple-touch-icon.png`) in burnt-orange with a cream arch mark

## Content

All content is data-driven — edit files, not React:

- `content/profile.md` — single source of truth for name, headline, summary, SEO descriptions (parsed at build time by `lib/profile.ts`)
- `content/site.json` — wordmark, location, statement, socials, resume path
- `content/case-studies.json` — TD (Endava) → Amdocs → Homelab
- `content/projects.json` — Homelab (highlighted) + ecommerce-admin + ecommerce-store + TallyNest; `hello-dog` disabled
- `content/metrics.json`, `content/stack.json`, `content/education.json`
- Components read content only via `lib/content.ts` helpers (`enabledSorted`, `featured`) — visibility/order is toggled in JSON

### Writing section

The Writing section pulls the **4 latest posts** from the blog feed (`https://blogs.rameskum.com/posts.json`) at build time via `lib/blog.ts` — Zod-validated, revalidated daily (ISR), and degrades to an empty list if the feed is down so builds never break. Cards deep-link to the original posts in new tabs. `/writing` and `/writing/*` redirect (301) to the blog — see `next.config.ts`.

## Routes

- `/` — home (hero, work, projects, writing, contact)
- `/resume` — in-app PDF viewer + download (place `resume.pdf` in `public/`)
- `/writing`, `/writing/*` — 301 redirect to `blogs.rameskum.com`

## Development

```bash
pnpm install
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm type-check   # tsc --noEmit
pnpm lint         # next lint
```

## Deployment

Netlify (`netlify.toml`): builds with `pnpm build`, publishes `.next`. `www.rameskum.com` 301-redirects to the apex domain.

## Locked content

- Headline: "Senior Backend & Data Engineer | Java, Data Platforms & Cloud Modernization"
- Case studies order: TD (Endava, Data Engineer) → Amdocs (Software Developer) → Homelab
- Location: "TORONTO · CA" only (never "Open to opportunities")
- Metrics: 20→2 min · weeks→days · −25% overhead
- Experience: 10+ years everywhere (never 7+)

## Version history

- **v3** — Editorial engineer (Next.js App Router full rewrite; was CRA + Sass)
- v2 — dark + teal (rejected)
- v1 — sky theme CRA
