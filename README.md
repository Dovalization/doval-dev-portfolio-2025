# doval.dev

Guilherme Doval's personal portfolio and blog. Built with Next.js App Router, fully bilingual (English/Portuguese), with a file-based blog backed by Keystatic for local content editing.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs) ![React](https://img.shields.io/badge/React-19.1-087ea4?logo=react&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38b2ac?logo=tailwindcss&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white) ![Vitest](https://img.shields.io/badge/Vitest-3.2-6E9F18?logo=vitest&logoColor=white)

## Features

- **Portfolio**: Work showcase with project case studies and skills sections
- **Blog**: File-based markdown blog with syntax highlighting, image lightbox, and reading time
- **Bilingual**: Full EN/PT support via `/[lang]` routing; shared slugs across languages
- **Keystatic**: Visual admin UI at `/keystatic` for editing content locally — no database, no cloud sync
- **No runtime fetching**: Posts are `.md` files committed alongside code; publishing is a frontmatter flag
- **3D background**: Three.js particle system on the homepage hero
- **Testing**: Vitest + React Testing Library

## Getting Started

Prerequisites: Node.js 20+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 — redirects to `/en` by default. The Keystatic admin UI is at http://localhost:3000/keystatic.

### Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | ESLint |
| `pnpm test` | Vitest (single run) |
| `pnpm test:watch` | Vitest in watch mode |
| `pnpm test:coverage` | Coverage report |

## Architecture

### Content layer

Site content (hero copy, projects, skills, contact) lives in `content/[lang]/content.yaml`, validated by Zod at read time. Blog posts are `.md` files in `content/[lang]/posts/` with YAML frontmatter. Both are read at build time — no API calls, no database.

The Keystatic schema in `keystatic.config.ts` mirrors the Zod validation, so structure is enforced at both the editing and read layers.

### Blog

Posts share slugs across languages — the slug is derived from the filename, and `lang` frontmatter distinguishes EN from PT. `gray-matter` parses frontmatter, `next-mdx-remote/rsc` compiles markdown to React server components, and a rehype pipeline handles syntax highlighting, heading anchors, and image unwrapping.

Every markdown element maps to an explicit React component for full styling control. The only client component in the blog is `BlogImageComponent`, which uses `useState` for the image lightbox.

### Internationalization

- `/[lang]` dynamic segments with `generateStaticParams` for EN and PT
- Content dictionaries loaded from `content/[lang]/content.yaml`
- `hreflang` alternates on all blog post pages
- Language switcher in the header

### Project structure

```
src/
├── app/
│   ├── [lang]/          # Localized routes (homepage + blog)
│   ├── api/             # Dictionary and Keystatic API routes
│   └── keystatic/       # Keystatic admin UI
├── components/
│   ├── blog/            # Blog-specific components
│   └── ui/              # Shared primitives (shadcn/ui)
└── lib/                 # Content loading, post utils, hooks
content/
├── en/                  # English content (YAML + posts)
└── pt/                  # Portuguese content (YAML + posts)
```

## Publishing a post

1. Write the post and edit via Keystatic at `/keystatic`, or drop a `.md` file directly into `content/[lang]/posts/`
2. Copy to `content/en/posts/` and set `status: published`
3. Translate to PT-BR and save to `content/pt/posts/` with the same filename
4. Commit and push — Vercel rebuilds and both language versions go live

## Deployment

Deployed on Vercel. Push to `main` triggers a rebuild.

1. Import the repo in Vercel
2. Framework: Next.js, default build settings
3. No environment variables required for the base site
