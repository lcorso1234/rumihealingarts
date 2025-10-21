# Next.js + Tailwind CSS Starter

This repository now ships with a clean Next.js 15 App Router setup that has Tailwind CSS preconfigured.

## Available commands

```bash
npm install   # install dependencies
npm run dev   # start the local dev server
npm run build # create a production build
npm start     # run the production server
npm run lint  # run Next.js linting
```

## File overview

- `app/` – App Router with `layout.tsx`, `page.tsx`, and global styles.
- `app/globals.css` – Tailwind directives (`@tailwind base;`, etc.).
- `tailwind.config.ts` – Tailwind scan paths (`app/**/*.{ts,tsx}`, `components/**/*.{ts,tsx}`).
- `postcss.config.mjs` – PostCSS plugins for Tailwind and Autoprefixer.
- `tsconfig.json` – TypeScript configuration compatible with Next.js 15.
- `next.config.ts` – Basic Next.js config (strict mode, typed routes).

Happy building!
