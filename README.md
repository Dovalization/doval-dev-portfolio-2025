# Doval Dev Portfolio 2025

My personal portfolio showcasing my work as a Full-Stack Engineer focused on Frontend development,

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs) ![React](https://img.shields.io/badge/React-19-087ea4?logo=react&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38b2ac?logo=tailwindcss&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)

## Features

- App Router setup with typed metadata and layout
- Tailwind CSS v4 design system (dark theme by default)
- Accessible, responsive sections and elements
- Iconography with lucide-react, utility helpers (clsx, tailwind-merge)
- Structured pages: `/about`, `/work`, `/blog`, `/contact`

## Getting Started

Prerequisites

- Node.js 18.18+ or 20+
- pnpm (recommended) or npm/yarn

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. Edit `src/app/page.tsx` to tweak the homepage; hot reload is enabled.

### Useful scripts

- Dev: `pnpm dev` (Next.js with Turbopack)
- Build: `pnpm build`
- Start (prod): `pnpm start`
- Lint: `pnpm lint`

## Project Structure

```
src/
	app/
		layout.tsx        # Root layout + metadata
		page.tsx          # Home
		about/page.tsx
		work/page.tsx
		blog/page.tsx
		contact/page.tsx
	components/
		header.tsx        # Site header/nav
		meta-section.tsx  # Reusable meta/section block
	lib/
		utils.ts          # UI helpers (cn, etc.)
public/
	images/about.png
```

## Customize

- Branding & copy: edit `src/app/page.tsx` and the route pages under `src/app/*/page.tsx`
- Global theme: adjust tokens/utilities in `src/app/globals.css`
- Metadata (title/description): update `metadata` in `src/app/layout.tsx`
- Header/navigation: edit `src/components/header.tsx`

## Deployment

This app is ready for Vercel:

1. Push to GitHub
2. Import the repo in Vercel
3. Use framework “Next.js” and default build settings

See Next.js deployment docs: https://nextjs.org/docs/app/building-your-application/deploying

---

If you spot something to improve, feel free to open a PR or file an issue.
