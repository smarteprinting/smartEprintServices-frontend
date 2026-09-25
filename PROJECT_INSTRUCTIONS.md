# SmartEprint Services Project Instructions

## Objective
Build a modern, responsive landing page for SmartEprint Services inspired by the reference site but rewritten for the new brand and business focus.

## Stack
- Next.js
- React
- JavaScript and JSX
- CSS for responsive styling

## Requirements covered
- Fully responsive layout for mobile, tablet, and desktop
- SEO-friendly metadata, robots, and sitemap
- Clean landing page structure with hero, services, process, CTA, and footer
- Ready for deployment on Cloudflare Workers with OpenNext

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```

## Deploy to Cloudflare Workers
1. Configure `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_TURNSTILE_SITE_KEY` in the deployment environment.
2. Build with `npm run build:cf`.
3. Deploy with Wrangler after authenticating to the intended Cloudflare account.

Cloudflare Turnstile protects public form submissions. Configure WAF managed rules, bot protection, DDoS protection, SSL mode `Full (strict)`, and orange-cloud proxying in the Cloudflare dashboard.
