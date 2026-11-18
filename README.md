# Durora Music Festival 2027

Static landing site for **Durora Music Festival 2027** — Berlin, 14–16 August 2027.
3 days, 5 stages, 60+ artists, 20,000 guests. Featured artist: Sofia Lane.

## Stack

- Next.js 16.4.6 (App Router, `output: 'export'` static) + React 19.3.0
- Tailwind CSS 4.3.3 (via `@tailwindcss/postcss`)
- Motion 14.14.0 (formerly Framer Motion), GSAP 3.15.1 + `@gsap/react`, Lenis 1.3.27, lucide-react 1.74.0
- Node 24.22.1, TypeScript 5.9.3

## Run

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # static output in out/
npm run typecheck
```

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds on every push / PR to
`main` and deploys `out/` to Cloudflare Pages project `durora` on push to main.
Required repo secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.

## Notes

- Ticket checkout is a **demo** — no real payment, nothing is booked.
- Lineup artists other than Sofia Lane are fictional placeholders.
- Images in `public/images/` are AI-generated for this site; `public/og.jpg`
  (1200×630) was cropped from `venue.webp` with Python PIL.
