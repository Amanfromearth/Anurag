# Anurag's Portfolio

A personal portfolio built with **Astro 6**, **React islands**, **TypeScript** (strict), **Tailwind CSS 4**, and **Bun**.

## Tech stack

- **[Astro 6](https://astro.build)** — static site generation with the islands architecture
- **[React](https://react.dev)** islands via `@astrojs/react` — only the genuinely interactive bits ship JS
- **TypeScript** — strict mode (`astro/tsconfigs/strict`)
- **[Tailwind CSS 4](https://tailwindcss.com)** via `@tailwindcss/vite`
- **[Bun](https://bun.sh)** — package manager & runtime
- Content collections for the project write-ups (typed frontmatter)
- `@astrojs/sitemap` for `sitemap-index.xml`, `@astrojs/partytown` to run Google Analytics off the main thread

## Getting started

```bash
bun install
bun dev          # start the dev server at http://localhost:4321
```

## Scripts

| Command          | Action                                          |
| ---------------- | ----------------------------------------------- |
| `bun dev`        | Start the local dev server                      |
| `bun run build`  | Type-check + build the production site to `dist/` |
| `bun run preview`| Preview the production build locally            |
| `bun run check`  | Run `astro check` (TypeScript diagnostics)      |

## Project structure

```
src/
├─ components/          # static .astro components
│  ├─ react/            # client-hydrated React islands (Drawer, CTA, Gallery)
│  └─ ui/               # shared UI primitives (Button, Drawer)
├─ content/projects/    # markdown write-ups (content collection)
├─ layouts/             # Layout.astro — shared shell + SEO <head>
├─ lib/                 # utils, sound, contact-event bridge, site config
├─ pages/               # routes (index, about, projects/[slug])
├─ styles/              # globals.css, blog.css
└─ content.config.ts    # content collection schema
```

### Interactivity

Following an islands-first approach, most of the UI is static HTML/CSS. Only a
few components hydrate on the client:

- `ContactDrawer` (vaul) — the contact/resume drawer (`client:idle`)
- `GlowingStarsCta` (framer-motion) — the animated CTA (`client:visible`)
- `ShaderBackdrop` — WebGL wallpaper, desktop only (`client:media`)
- `ImageGallery` — the load-more photo gallery

Vanilla pieces (nav/footer click sounds, scroll-driven fade-ins, the skills orbit,
meteor effects) use small inline scripts or pure CSS. The drawer is decoupled from
its openers via a `contact:open` `CustomEvent` instead of a shared store.

## Deploy

Outputs a fully static site to `dist/`, deployable to Vercel, Netlify, Cloudflare
Pages, or any static host.
