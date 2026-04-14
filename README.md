# niklas.tech

Personal website for Niklas Haiden — a glassmorphism one-pager built with Next.js, Tailwind CSS, and the View Transitions API.

## Overview

A single-screen personal card floating over a full-bleed wallpaper. The main page shows an intro, about text, skill icons, and links. **My journey** and **Projects** live on their own routes, with the glass card morphing between pages using native View Transitions.

### Stack

- **Next.js 16** (App Router, static export)
- **React 19**
- **Tailwind CSS 3** + custom glassmorphism utilities
- **View Transitions API** for page-to-page animations
- **Framer Motion** (available, used for animated dialog)
- **Radix UI** primitives
- **devicons-react** for skill icons

### Routes

| Route | Description |
|------------|--------------------------------------|
| `/` | Main overview card |
| `/journey` | Professional timeline |
| `/projects`| Project showcase |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Export

```bash
pnpm build
```

Generates a static export in `out/` ready for deployment on any static host.

## License

All rights reserved © Niklas Haiden
