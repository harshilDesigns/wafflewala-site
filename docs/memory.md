# Memory — Wafflewala Build Log

## Status
- Current phase: All phases complete (v1 built)
- Last updated: July 21, 2026

## Completed
- Phase 1: Scaffolded Next.js 16 (App Router, TypeScript, Tailwind v4)
  - `data/menu.ts` and `data/business.ts` with placeholder content
  - Shared layout with Fraunces + DM Sans fonts via `next/font`
  - Nav with mobile hamburger toggle + active page indicator
  - Footer with address/hours/social
  - Tailwind v4 theme with all design tokens (cream, caramel, terracotta, choco, honey)
- Phase 2: Home page — hero section, menu highlights teaser, about teaser, visit CTA
- Phase 3: Menu page (full categorized list from data), About page (brand story), Gallery page (responsive grid)
- Phase 4: Location page — address/hours/contact, Google Maps embed, Get Directions / Call Now buttons
- Phase 5: Responsive layout (mobile-first), CSS transitions, sticky nav, backdrop blur

## Known placeholders still to replace
- Replace placeholder SVGs with real photos (hero.jpg, gallery/01–08.jpg)
- Phone number
- WhatsApp number
- Real address (confirm placeholder is accurate)
- Real menu/pricing (confirm placeholder is accurate)
- Instagram handle
- Google Maps embed uses free embed URL (no API key) — works for static display

## Notes / decisions made mid-build
- Used .svg placeholders instead of .jpg for dev preview — swap for real photos before launch
- Google Maps embed uses `maps.google.com/maps?q=...&output=embed` (no API key needed) instead of the embed/v1/place endpoint
- Tailwind v4 uses `@theme inline` in CSS instead of a separate `tailwind.config.ts`
