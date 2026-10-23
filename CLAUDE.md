# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio for Ramesh Kumar (rameskum.com): Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 3, deployed on Netlify.

## Commands

Package manager is pnpm (pinned `9.11.0`); Node 20 (`.nvmrc`, `engines` is `>=20 <21`).

```bash
pnpm install
pnpm dev          # dev server
pnpm build        # production build - this is the only CI check (.github/workflows/build.yml)
pnpm type-check   # tsc --noEmit
pnpm test         # vitest run
pnpm start        # serve the production build
```

- `pnpm test` runs vitest over `lib/**/*.test.ts` and `components/**/*.test.tsx`. There is no ESLint config. `pnpm lint` runs `next lint`, which Next 16 removed (it fails with "Invalid project directory ... /lint"); rely on `pnpm type-check`, `pnpm test` and `pnpm build`.
- `pnpm build` is the real validation: content is Zod-validated at module load, so a malformed JSON/profile file fails the build.
- The build fetches `https://blogs.rameskum.com/posts.json`; offline builds degrade to an empty Writing section rather than failing.

## Architecture

Single-page editorial site. `app/page.tsx` composes server components (`Header`, `Hero`, `Work`, `Projects`, `Writing`, `Contact`) and is `force-static`. The only other route is `app/resume` (in-app PDF viewer for `public/resume.pdf`). The homepage is intentionally zero-JS and fully static, so keep new sections as server components and avoid adding client-side hooks or `'use client'` unless unavoidable.

### Content is data, not JSX

All copy lives in `content/` and is validated by Zod schemas in `lib/schemas.ts`:

- `lib/content.ts` imports each `content/*.json`, parses it at module load, and exports typed, ready-to-render collections (`site`, `socials`, `metrics`, `stack`, `caseStudies`, `selectedBuilds`, `alsoShipsUi`, `education`). Components read content only through these exports. The parsing lives in an exported `buildContent(raw)` so tests can feed it fixtures.
- Every list item carries `id`, `enabled`, `order` (projects may also set `highlight`). `enabled` is the only visibility switch; every export is already enabled-and-sorted. Projects must set `section` (`selected-builds` or `also-ships-ui`), and a typo fails the build.
- `lib/profile.ts` parses `content/profile.md` (flat `key: value` frontmatter plus a bio body) with a hand-rolled parser and `fs`. It is the single source of truth for name, headline, summary, and SEO descriptions. It is server-only (uses `fs`), so never import it from a client component.
- Case studies and projects share `ProofPointsSchema` (`ownershipLine`, `beforeAfter`, `talkingPoint`, `bullets`) and render it through `components/proof-points.tsx`, which shows whichever fields exist.
- Adding a new field means updating the Zod schema in `lib/schemas.ts` and the JSON together.

### String keys that resolve to components

Some JSON fields are string keys that resolve to drawings, and they are validated against a fixed key list so a typo fails the build:

- `motif` (in `case-studies.json` and `projects.json`) and `visuals` (in `case-studies.json`) must be keys from `lib/illustrations.ts` (`MOTIF_KEYS`, `CASE_VISUAL_KEYS`).
- `components/illustrations.tsx` owns the registries keyed by those types (an exhaustive `Record`, so a missing drawing is a type error), plus per-visual sizing, grid span, and the dark card. The drawings themselves live in `components/svg-motifs.tsx` (motifs, decorative) and `components/case-visuals.tsx` (case visuals, informative).
- A visible project needs an `image` or a `motif`.

### Writing section and blog feed

`lib/blog.ts` fetches the blog's `posts.json` at build time (`force-cache`), validates it with Zod, decodes HTML entities, and returns `[]` on any failure. The Writing cards deep-link to the blog. Because the page is static, new posts only appear on the next deploy (a daily Netlify build hook is the intended refresh mechanism). `/writing` and `/writing/*` are 301-redirected to the blog in `next.config.ts`.

### SEO

Next.js merges `openGraph`/`twitter` metadata shallowly, so every page must declare complete blocks. Use the shared pieces in `lib/seo.ts` (`OG_BASE`, `ogImages`, `TWITTER_CARD`) rather than relying on the root layout's values. `app/sitemap.ts` lists only `/` and `/resume`.

### Deployment

Netlify (`netlify.toml`, `@netlify/plugin-nextjs`): `www` to apex 301 redirect and explicit cache headers for static assets. Fingerprinted `/_next/static/*` is immutable; `public/` images, icons, and `resume.pdf` are revalidated. Dependabot opens weekly npm update PRs.

## Locked content rules (from README)

Do not change these without being asked:

- Headline: "Senior Backend & Data Engineer | Java, Data Platforms & Cloud Modernization"
- Case study order: TD (Endava, Data Engineer), then Amdocs (Software Developer), then Homelab
- Location is "TORONTO · CA" only (never "Open to opportunities")
- Metrics: 20→2 min, weeks→days, −25% overhead
- Experience is "10+ years" everywhere (never "7+")

## Conventions

- Import alias `@/*` maps to the repo root (e.g. `@/lib/content`, `@/components/ui/button`).
- `components/ui/` holds small shadcn-style primitives (Button, Badge, Separator); styling uses `clsx` + `tailwind-merge` via `lib/utils.ts`.
- Design tokens (paper background, card surface, burnt-orange primary) and the three fonts (Manrope body, Newsreader italic accents, DM Mono labels) are defined in `tailwind.config.ts`, `app/globals.css`, and `app/layout.tsx`.

## Agent skills

### Issue tracker

Issues live in GitHub Issues for `rameskum/portfolio` (via the `gh` CLI). See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root, created lazily. See `docs/agents/domain.md`.
