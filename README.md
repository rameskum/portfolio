# Ramesh Kumar Portfolio v2

Portfolio website for Ramesh Kumar - Senior Backend & Data Engineer.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Fonts**: Geist Sans & Geist Mono

## Features

- 🌑 Dark theme with teal accent
- 📱 Mobile-first responsive design
- ♿ Accessible (WCAG 2.1 AA)
- ⚡ Server Components by default
- 📝 Blog with placeholder content
- 📄 Resume viewer page
- 🎨 Component-based architecture

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Type check:

```bash
pnpm typecheck
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── writing/           # Blog pages
│   ├── resume/            # Resume viewer
│   └── ...
├── components/
│   ├── home/              # Home page sections
│   ├── layout/            # Header, Footer
│   └── ui/                # shadcn/ui components
├── content/               # Static content modules
└── lib/                   # Utilities
```

## Design Decisions

- Employment case studies placed above personal projects
- Teal accent used sparingly for CTAs, metrics, and focus states
- Dark background with high contrast for readability
- Server Components by default; client components only where needed
- No auth, no database - static content modules

## License

© 2026 Ramesh Kumar
