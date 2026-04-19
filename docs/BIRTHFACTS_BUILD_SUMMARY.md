# BirthFacts — Build Summary

This document describes what was built for **BirthFacts** ([birthfacts.net](https://birthfacts.net)), a standalone SEO-focused age calculator and birthday profile site. The project lives outside the Phoenix Blessing / Sanctuary app repository.

**Repository:** [github.com/GameOfLifeHiro/birthfacts](https://github.com/GameOfLifeHiro/birthfacts)  
**Local path:** `/Users/hiro/Documents/birthfacts/`  
**Deployment:** [Render.com](https://render.com) — Static Site (`npm run build`, publish directory `out`)

---

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"` in `app/globals.css`) |
| Output | Static export (`output: "export"` in `next.config.ts`) |
| Hosting | Render Static Site (CDN, no Node cold starts) |

**`next.config.ts` notes:** `trailingSlash: true`, `images: { unoptimized: true }` (required for static export).

---

## Project structure

```
birthfacts/
├── app/
│   ├── layout.tsx          # Site chrome, nav, footer, global metadata, WebApplication JSON-LD
│   ├── globals.css         # Theme variables, utility classes
│   ├── page.tsx            # Home — main calculator
│   ├── about/page.tsx
│   ├── privacy/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx        # FAQ + FAQPage JSON-LD
│   ├── age-in-months/page.tsx
│   ├── days-between/
│   │   ├── layout.tsx      # Metadata (client page cannot export metadata)
│   │   └── page.tsx      # Client: two-date day counter
│   └── birthday-countdown/page.tsx
├── components/
│   ├── AgeCalculator.tsx   # DOB input, calculate, share link, composes child sections
│   ├── ResultDisplay.tsx   # Hero age sentence, stat grid, countdown wrapper
│   ├── BirthdayCountdown.tsx
│   ├── BirthProfile.tsx    # Tier 2 profile cards
│   ├── HistoricalTimeline.tsx
│   └── LifeTimeline.tsx
├── lib/
│   ├── ageCalc.ts          # Age math, day-of-week, next birthday, share URL helper
│   ├── birthProfile.ts     # Zodiac, gengō, birthstone/flower, Life Path, generations, famous birthdays
│   └── historicalData.ts   # Per-year facts 1924–2024 (world, tech, pop culture, music, movies)
└── public/
    ├── sitemap.xml
    └── robots.txt
```

**Note:** `sitemap.xml` and `robots.txt` live under `public/` because Next.js static export does not support dynamic `app/sitemap.ts` / `app/robots.ts` route handlers.

---

## Pages (routes)

All routes use trailing slashes in production (e.g. `/faq/`).

| Path | Purpose |
|------|---------|
| `/` | Primary age calculator + full profile + timelines |
| `/age-in-months/` | Long-tail SEO; reuses `AgeCalculator` |
| `/days-between/` | Days between two dates |
| `/birthday-countdown/` | Long-tail SEO; reuses `AgeCalculator` |
| `/faq/` | FAQ content + structured data for rich results |
| `/about/` | Trust / E-E-A-T; explains product |
| `/privacy/` | Privacy policy (AdSense, GDPR-oriented) |
| `/contact/` | Contact / inquiries |

---

## Tier 1 — Core calculator

Implemented in `lib/ageCalc.ts` and `components/ResultDisplay.tsx` / `BirthdayCountdown.tsx`:

- Date of birth input (HTML `type="date"`)
- Age in years, months, days (calendar-based, not just total days)
- Total months, weeks, days, hours, minutes
- Day of week at birth (English + Japanese)
- Next birthday countdown (live seconds) or “Happy Birthday” when applicable
- Shareable URL: `/?dob=YYYY-MM-DD` (history replaced on calculate)

---

## Tier 2 — Birthday profile

Implemented in `lib/birthProfile.ts` and `components/BirthProfile.tsx`:

- **Western zodiac:** sign, symbol, date range, element, traits
- **Chinese / Japanese zodiac (十二支):** animal EN/JA, kanji, traits, lucky numbers  
  - Zodiac index uses `((year - 2020) % 12 + 12) % 12` (2020 = Rat); fallback if array access ever fails
- **Japanese imperial era (元号):** Meiji through Reiwa ranges in code; displays e.g. 令和6年
- **Birthstone** and **birth flower** (English + Japanese flower name where applicable)
- **Life Path Number:** digit reduction with master numbers 11, 22, 33
- **Weekday meaning:** planet glyph + short spiritual/cultural copy
- **Mainstream generation:** Silent through Gen Alpha (with pre-1928 bucket)
- **Spiritual generation:** Indigo / Crystal / Rainbow / generic Star Child with trait tags
- **Famous birthdays:** curated map keyed by `MM-DD` (expandable over time)

**Invalid `Date` guard:** `getBirthProfile` falls back to `new Date()` if `dob` is invalid (defensive).

---

## Tier 3 — History and life timeline

### Historical year facts (`lib/historicalData.ts`)

- `HISTORICAL_DATA` keyed by year **1924–2024**
- Each year: `worldEvents`, `tech`, `popCulture`, `music`, `movies` (string arrays)
- `getYearFacts(year)` returns `YearFacts | null`

### UI

- **`HistoricalTimeline.tsx`:** Tabbed categories for the user’s **birth year** only
- **`LifeTimeline.tsx`:** Vertical milestones (birth, 5, 10, teen, 18, 21, 30, … up to current age) with a short world-event annotation per milestone year where data exists

---

## SEO and metadata

- **Global metadata** in `app/layout.tsx`: title, description, keywords, `metadataBase: https://birthfacts.net`, Open Graph, Twitter card, `robots: { index: true, follow: true }`
- **Per-page** `metadata` / `alternates.canonical` on server pages; `days-between` uses `layout.tsx` for metadata because the page is a client component
- **JSON-LD:** `WebApplication` in root layout; `FAQPage` on `/faq/`
- **Static files:** `public/sitemap.xml`, `public/robots.txt` (sitemap URL in robots)

---

## Legal / monetization readiness

- **Privacy** mentions optional future analytics (e.g. Google Analytics) and ads (e.g. AdSense); adjust when those are actually enabled
- **Contact** uses placeholder `hello@birthfacts.net` — replace with a working mailbox on the domain before AdSense review

---

## Sanctuary / Phoenix Blessing app

**No code in `/Users/hiro/Documents/phoenixblessing-repo/` was modified** for BirthFacts. The two codebases are independent.

---

## Deployment checklist (Render)

1. **Static Site** service (not Web Service)
2. **Build command:** `npm run build`
3. **Publish directory:** `out`
4. **Custom domain:** `birthfacts.net` (+ optional `www`) via DNS CNAME as Render instructs
5. **Google Search Console:** add property, verify, submit `https://birthfacts.net/sitemap.xml`

---

## Suggested next steps

- Wire real email for contact/privacy
- Expand `FAMOUS_BIRTHDAYS` and historical data for 2025+
- Add dog-age or other long-tail tool pages + sitemap entries
- Run Lighthouse on production URL; defer third-party scripts when adding ads
- Optional: i18n (JA/EN) for Japan-focused queries

---

*Document generated to capture the scope of the initial BirthFacts build. Update this file as the product evolves.*
