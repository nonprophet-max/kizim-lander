# Kizim AI — landing site

Marketing site for Kizim AI, an AI-powered VIP management platform for the
iGaming industry. React + Vite + TypeScript, styled with Tailwind/shadcn and
themed on the [Persistent Labs](https://claude.ai/artifact/5yD8nFJhH9f8XuerXPjuU1)
design system's shared foundations (graphite ground, warm gold accent, Red Hat
typeface family). Kizim is not a Persistent Labs product — this reuses the
parent design tokens only, with no "by Persistent Labs" endorsement.

## Deploy this repo

This is a static site — there is no live backend (the Express/Postgres
scaffold under `server/` and `shared/schema.ts` exists for future use but has
no implemented routes yet). Any static host works with zero extra config:

**Vercel or Netlify** — connect this repo, accept the defaults (both read
`vercel.json` / auto-detect the Vite build):
- Build command: `npm run build`
- Output directory: `dist/public`

**Any other static host** (S3+CloudFront, Cloudflare Pages, GitHub Pages,
a plain nginx box) — run `npm install && npm run build` and serve the
`dist/public` folder. Since routing is client-side (`wouter`), point the
host's 404/fallback at `/index.html` so deep links like `/team` resolve
correctly — `vercel.json` already does this for Vercel.

**GitHub Pages (current live host)** — `npm run deploy:pages` builds the
site and force-pushes `dist/public` to the `gh-pages` branch, which Pages
serves at the domain in `client/public/CNAME` (www.kizim.ai). The script
copies `index.html` to `404.html` so deep links resolve. Re-run it after
changes on `main`; the live site doesn't rebuild on its own.

To point a purchased domain at the deploy, add it in the host's dashboard
(e.g. Vercel → Project → Settings → Domains) and follow the DNS records it
gives you.

## Local development

```
npm install
npm run dev      # http://localhost:5000
```

## Structure

- `client/` — the React app (`src/pages` for routes, `src/components` for
  sections, `src/components/ui` is the shadcn/ui primitive library)
- `server/` — Express scaffold, currently unused in production (see above)
- `shared/schema.ts` — Drizzle schema, prepared but not wired to a database
- `attached_assets/` — image assets actually referenced by the app
