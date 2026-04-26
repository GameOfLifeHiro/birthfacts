@AGENTS.md

# BirthFacts — Project Context

## What This Is
SEO-focused birthday profiling web app at **birthfacts.net**. Users enter a birth date and get exact age, daily horoscope, zodiac/numerology/moon phase profiles, and Japanese-specific tools (yakudoshi, gaju, blood type compatibility). Fully trilingual: EN at `/`, Spanish at `/es/`, Japanese at `/ja/`.

**Owner:** Ascent Leadership Institute Inc, Las Vegas, NV
**Repo:** github.com/GameOfLifeHiro/birthfacts

## Tech Stack
- **Framework:** Next.js 16.2.4 (App Router) — see AGENTS.md, APIs may differ from training data
- **Language:** TypeScript 5 (strict)
- **Styling:** Tailwind CSS v4 with CSS variables in `app/globals.css`
- **Output:** Static export (`next build` → `out/`) — no server runtime, no API routes
- **Hosting:** Render Static Site (CDN)
- **Analytics:** Google Analytics 4 (GA-4ETJP01VCC)

## Project Structure
```
app/
  (en)/          # English — routes at /
  (es)/es/       # Spanish — routes at /es/
  (ja)/ja/       # Japanese — routes at /ja/
  globals.css    # Theme variables, Tailwind directives
components/      # React components (mostly "use client")
lib/             # Business logic, data, i18n
  birthProfile.ts      # Zodiac, numerology, moon phase, Mayan (1238 lines)
  ageCalc.ts           # Core age calculation
  compatibility*.ts    # 12×12 zodiac matrices (EN/ES/JA)
  japaneseLifeEvents.ts
  dailyFortune.ts
  fortunes/            # Fortune text by locale
  i18n/                # Translation dictionaries (en/es/ja)
public/          # Static assets, sitemaps, robots.txt
docs/            # Build summaries, SEO audit
```

## Key Conventions
- **Static export only** — no `getServerSideProps`, no API routes, all logic is SSG or client-side
- **Route groups** `(en)`, `(es)`, `(ja)` each have their own root layout with locale metadata, GA4, hreflang, nav/footer
- **i18n** via `TranslationsProvider` context + `useT()` hook — dictionaries in `lib/i18n/`
- **Heavy components lazy-loaded** via `next/dynamic` (BirthProfile, HistoricalTimeline, etc.) — only load after user hits Calculate
- **Trailing slashes enabled** — all URLs end with `/`
- **System font stack** — no webfonts, for fast LCP
- **Dark theme** — accent colors purple (`#a78bfa`) and pink (`#f472b6`)
- **`trailingSlash: true`** and **`images: { unoptimized: true }`** in next.config.ts (static export requirements)

## SEO Setup
- Per-page `metadata` with canonical + hreflang in every layout/page file
- `BreadcrumbSchema` component on all subpages (BreadcrumbList JSON-LD)
- WebApplication schema on home, FAQPage on /faq/ and /compatibility/
- Sitemaps: `public/sitemap.xml`, `public/sitemap-index.xml`, `public/ja/sitemap.xml`, `public/es/sitemap.xml`
- See `docs/SEO_AUDIT.md` for full audit and pending improvements

## Ongoing / Recent Work
- Fortune Ranking teaser strip added to all 3 home pages
- Hreflang corrected per-page (no layout-level alternates)
- Locale sitemaps moved under /ja/ and /es/ for GSC URL-prefix properties
- **Pending SEO tasks** (from `docs/SEO_AUDIT.md`):
  - Organization schema on root layout
  - HowTo schema on /dog-age-calculator/, /cat-age-calculator/, /days-between/
  - FAQ schema on /fortune-ranking/
  - Page-specific OG metadata on subpages
  - ContactPoint schema on /contact/

## Dev Workflow
```bash
npm run dev      # starts at http://localhost:3000 (or 3001 if taken)
npm run build    # static export to out/
npm run lint     # ESLint
```
Changes go to GitHub (`origin` = github.com/GameOfLifeHiro/birthfacts.git) and deploy automatically via Render on push to `main`.
