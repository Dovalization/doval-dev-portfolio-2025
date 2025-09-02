# Doval Dev Portfolio 2025

Guilherme Doval's personal portfolio website showcasing work as a Full-Stack Engineer focused on Frontend development. Built as a modern single-page application with internationalization support.

![Next.js](https://img.shields.io/badge/Next.js-15.4-black?logo=nextdotjs) ![React](https://img.shields.io/badge/React-19.1-087ea4?logo=react&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38b2ac?logo=tailwindcss&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white) ![Three.js](https://img.shields.io/badge/Three.js-0.179-000000?logo=threedotjs&logoColor=white) ![Vitest](https://img.shields.io/badge/Vitest-3.2-6E9F18?logo=vitest&logoColor=white)

## Features

- **Single-Page Application**: All content consolidated into component-based sections
- **Internationalization**: Multi-language support (English/Portuguese) with dynamic routing
- **3D Galaxy Background**: Three.js particle system with 5000+ procedurally generated stars
- **Modern Stack**: Next.js 15 with App Router, React 19, TypeScript 5
- **Tailwind CSS v4**: Latest syntax with comprehensive design system and dark theme
- **Component Architecture**: Modular, reusable sections (Hero, About, Work, Skills, Contact)
- **Testing**: Unit tests with Vitest and React Testing Library
- **Responsive Design**: Accessible, mobile-first approach.

## Getting Started

Prerequisites

- Node.js 18.18+ or 20+
- pnpm (recommended) or npm/yarn

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. The app will redirect to `/en` (English) by default. Hot reload is enabled.

### Useful scripts

- Dev: `pnpm dev` (Next.js with Turbopack)
- Build: `pnpm build`
- Start (prod): `pnpm start`
- Lint: `pnpm lint`
- Test: `pnpm test` (Vitest)
- Test (watch): `pnpm test:watch`
- Test (coverage): `pnpm test:coverage`

## Architecture

### Internationalization

- Multi-language routing with `/[lang]` dynamic segments
- Supports English (`/en`) and Portuguese (`/pt`)
- Centralized dictionaries with type-safe translations
- Static generation for both language variants

### Component Architecture

- **Modular sections**: Each page section is a self-contained component
- **Type-safe props**: All components use TypeScript interfaces
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## Deployment

This app is ready for Vercel:

1. Push to GitHub
2. Import the repo in Vercel
3. Use framework “Next.js” and default build settings

See Next.js deployment docs: https://nextjs.org/docs/app/building-your-application/deploying
