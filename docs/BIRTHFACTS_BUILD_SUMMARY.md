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
| Analytics | Google Analytics 4 (`G-4ETJP01VCC`) via `next/script` in `app/layout.tsx` |

**`next.config.ts` notes:** `trailingSlash: true`, `images: { unoptimized: true }` (required for static export).

---

## Project structure

```
birthfacts/
├── app/
│   ├── layout.tsx              # Site chrome, nav, footer, GA4, global metadata, WebApplication JSON-LD
│   ├── globals.css             # Theme variables, utility classes
│   ├── page.tsx                # Home — main calculator
│   ├── about/page.tsx          # Trust; Ascent Leadership Institute Inc, Las Vegas, NV
│   ├── privacy/page.tsx        # Privacy + GA4 disclosure
│   ├── contact/page.tsx
│   ├── faq/page.tsx            # FAQ + FAQPage JSON-LD
│   ├── days-between/
│   │   ├── layout.tsx          # Metadata (client page cannot export metadata)
│   │   └── page.tsx            # Client: two-date day counter
│   ├── dog-age-calculator/
│   │   ├── layout.tsx
│   │   └── page.tsx            # Size-adjusted dog years → human years + nav to home/cat
│   └── cat-age-calculator/
│       ├── layout.tsx
│       └── page.tsx            # Cat years → human years + nav to home/dog
├── components/
│   ├── AgeCalculator.tsx       # Month/Day/Year selects, calculate, share link, composes sections
│   ├── ResultDisplay.tsx       # Hero age sentence, stat grid, countdown wrapper
│   ├── BirthdayCountdown.tsx
│   ├── BirthProfile.tsx        # Profile cards (larger body text for readability)
│   ├── HistoricalTimeline.tsx  # Tabbed year facts (larger list text)
│   └── LifeTimeline.tsx        # Milestones + world events (larger text)
├── lib/
│   ├── ageCalc.ts              # Age math, day-of-week (English only), next birthday, share URL helper
│   ├── birthProfile.ts         # Zodiac, moon phase, Mayan Dreamspell, birthstone/flower, Life Path,
│   │                           # generations, famous birthdays (no Japanese imperial era on main site)
│   └── historicalData.ts       # Per-year facts 1924–2024 (world, tech, pop culture, music, movies)
├── docs/
│   └── BIRTHFACTS_BUILD_SUMMARY.md
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
| `/days-between/` | Days between two dates |
| `/dog-age-calculator/` | Dog age in human years (size selector) + links to home & cat calculator |
| `/cat-age-calculator/` | Cat age in human years + links to home & dog calculator |
| `/faq/` | FAQ content + structured data for rich results |
| `/about/` | Trust / E-E-A-T; “About the team” at bottom (after privacy copy) |
| `/privacy/` | Privacy policy; documents GA4 |
| `/contact/` | Contact / inquiries |

**Removed from early builds:** `/age-in-months/` and `/birthday-countdown/` (redundant with home); replaced in sitemap and nav by dog/cat calculators.

---

## Tier 1 — Core calculator

Implemented in `lib/ageCalc.ts` and `components/ResultDisplay.tsx` / `BirthdayCountdown.tsx`:

- **Date of birth:** three HTML `<select>` controls — **Month**, **Day**, **Year** — instead of `<input type="date">`, so mobile (especially iOS) avoids the two-step native picker (month/year wheel vs day grid). Layout: flex row with proportional widths (`basis-5/12` / `3/12` / `4/12`) so fields sit together cleanly.
- Age in years, months, days (calendar-based)
- Total months, weeks, days, hours, minutes
- Day of week at birth (**English only**; Japanese weekday labels removed from the product)
- Next birthday countdown (live) or “Happy Birthday” when applicable
- Shareable URL: `/?dob=YYYY-MM-DD` (history replaced on calculate)

---

## Tier 2 — Birthday profile

Implemented in `lib/birthProfile.ts` and `components/BirthProfile.tsx`:

- **Western zodiac:** sign, symbol, date range, element, traits
- **Chinese zodiac** (twelve-year animal cycle; labeled “Chinese Zodiac” on the English site — no kanji; Japanese-specific “Eto” reserved for a possible future JP locale/site)
- **Moon phase at birth:** eight-phase model from a synodic-period calculation + short meaning copy
- **Mayan Dreamspell-style profile:** Kin (1–260), Day Sign (solar seal), Galactic Tone (1–13), Wavespell name; leap-day handling aligned with Dreamspell day-count rules; **original prose** for Day Sign, Tone, and Wavespell themes (see **Copyright & IP** below)
- **Birthstone** and **birth flower** (English)
- **Life Path Number:** digit reduction with master numbers 11, 22, 33
- **Weekday meaning:** planet glyph + short spiritual/cultural copy
- **Mainstream generation:** Silent through Gen Alpha (with pre-1928 bucket)
- **Spiritual generation:** Indigo / Crystal / Rainbow / generic Star Child with trait tags
- **Famous birthdays:** curated map keyed by `MM-DD` (expandable over time)

**Not on the global English site:** Japanese imperial era (gengō), Japanese flower names, or other Japanese script — by product decision (global audience + separate future Japanese offering).

**Invalid `Date` guard:** `getBirthProfile` falls back to `new Date()` if `dob` is invalid (defensive).

**Chinese zodiac index:** `((year - 2020) % 12 + 12) % 12` (2020 = Rat); avoids negative modulo bugs in JavaScript.

---

## Tier 3 — History and life timeline

### Historical year facts (`lib/historicalData.ts`)

- `HISTORICAL_DATA` keyed by year **1924–2024**
- Each year: `worldEvents`, `tech`, `popCulture`, `music`, `movies` (string arrays)
- `getYearFacts(year)` returns `YearFacts | null`

### UI

- **`HistoricalTimeline.tsx`:** Tabbed categories for the user’s **birth year**; subtitle and list items use **`text-base`** for readability
- **`LifeTimeline.tsx`:** Vertical milestones (birth, 5, 10, teen, 18, 21, 30, …) with world-event annotations; labels and event lines use larger type than the original build

### Typography (readability)

Across **BirthProfile**, **HistoricalTimeline**, and **LifeTimeline**, descriptive and list copy was bumped from `text-sm` / `text-xs` to **`text-base`** / **`text-sm`** where appropriate so mobile readers don’t strain on long paragraphs.

---

## Copyright & IP — Mayan / Dreamspell-related content

The site exposes **Kin**, **Day Sign names**, **Galactic Tone names/numbers**, and **Wavespell** labels — these are **system identifiers** widely documented in reference materials. **All narrative descriptions** (Day Sign paragraphs, Tone paragraphs, Wavespell theme phrases) on BirthFacts are **original English prose** written for this product.

**We intentionally do not:**

- Copy **José Argüelles’** exact written descriptions from his books or materials
- Reproduce text from *The Mayan Factor*, *Dreamspell*, *Telektonon*, or similar copyrighted works **verbatim**
- Use his distinctive phrasing **word-for-word**
- Sell or redistribute his original written material
- Copy **Dreamspell or related graphics** that are copyrighted artwork

**Practical posture:** facts about the calendar structure and labels can be described in general terms; **expressive text must be ours**. If legal review is ever required (e.g. before major commercial licensing), counsel should confirm; this section documents **intent and practice**, not legal advice.

---

## SEO and metadata

- **Global metadata** in `app/layout.tsx`: title, description, keywords (including moon phase, Mayan Kin, dog/cat age, etc.), `metadataBase: https://birthfacts.net`, Open Graph, Twitter card, `robots: { index: true, follow: true }`
- **Per-page** `metadata` / `alternates.canonical` on server pages; `days-between` uses `layout.tsx` for metadata because the page is a client component
- **JSON-LD:** `WebApplication` in root layout; `FAQPage` on `/faq/`
- **Static files:** `public/sitemap.xml`, `public/robots.txt` (sitemap URL in robots); includes `/dog-age-calculator/` and `/cat-age-calculator/`

---

## Legal / trust

- **Privacy** documents **Google Analytics 4** and measurement ID `G-4ETJP01VCC`
- **About** names **Ascent Leadership Institute Inc**, **Las Vegas, NV, USA**; “About the team” appears **after** the “Is my data private?” section
- **Contact** may still use a placeholder — replace with a working mailbox on the domain before strict third-party review (e.g. ads)

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
- Run Lighthouse on production URL; keep third-party scripts deferred (`afterInteractive` for GA)
- Optional: dedicated Japanese locale or site (Eto, gengō, etc.) without mixing into the global English UX

---

*Last updated to reflect static export build, GA4, dog/cat tools, Mayan + moon features, mobile date UX, typography passes, About ordering, and documented copyright posture for Dreamspell-adjacent copy.*
