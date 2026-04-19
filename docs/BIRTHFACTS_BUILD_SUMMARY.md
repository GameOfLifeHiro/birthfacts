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
| Analytics | Google Analytics 4 (`G-4ETJP01VCC`) via `next/script` in each locale root layout |

**`next.config.ts` notes:** `trailingSlash: true`, `images: { unoptimized: true }` (required for static export).

---

## Project structure

```
birthfacts/
├── app/
│   ├── globals.css                  # Theme variables, utility classes
│   ├── (en)/                        # Route group — English root layout (lang="en")
│   │   ├── layout.tsx               # ROOT layout: html/body, GA4, fonts, hreflang, nav, footer
│   │   ├── page.tsx                 # / — Main age calculator
│   │   ├── about/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── days-between/
│   │   │   ├── layout.tsx           # Metadata (needed because page.tsx is a client component)
│   │   │   └── page.tsx
│   │   ├── dog-age-calculator/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── cat-age-calculator/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── (es)/                        # Route group — Spanish root layout (lang="es")
│   │   ├── layout.tsx               # ROOT layout: html/body, GA4, fonts, hreflang, nav, footer (Spanish)
│   │   └── es/                      # URL prefix /es/
│   │       ├── page.tsx             # /es/ — Spanish calculator
│   │       ├── about/page.tsx
│   │       ├── privacy/page.tsx
│   │       ├── contact/page.tsx
│   │       ├── faq/page.tsx
│   │       ├── days-between/page.tsx
│   │       ├── dog-age-calculator/page.tsx
│   │       └── cat-age-calculator/page.tsx
│   └── (ja)/                        # Route group — Japanese root layout (lang="ja")
│       ├── layout.tsx               # ROOT layout: html/body, GA4, fonts, hreflang, nav, footer (Japanese)
│       └── ja/                      # URL prefix /ja/
│           ├── page.tsx             # /ja/ — Japanese calculator
│           ├── about/page.tsx
│           ├── privacy/page.tsx
│           ├── contact/page.tsx
│           ├── faq/page.tsx
│           ├── days-between/
│           │   ├── layout.tsx
│           │   └── page.tsx
│           ├── dog-age-calculator/
│           │   ├── layout.tsx
│           │   └── page.tsx
│           └── cat-age-calculator/
│               ├── layout.tsx
│               └── page.tsx
├── components/
│   ├── AgeCalculator.tsx            # Locale-aware: Month/Day/Year selects, calculate, share, composes sections
│   ├── ResultDisplay.tsx            # Locale-aware: hero age sentence, stat grid, countdown
│   ├── BirthdayCountdown.tsx
│   ├── BirthProfile.tsx             # Passes t.locale to getBirthProfile(); profile cards
│   ├── HistoricalTimeline.tsx       # Tabbed year facts
│   └── LifeTimeline.tsx             # Milestones + world events
├── lib/
│   ├── ageCalc.ts                   # Age math, day-of-week, next birthday, share URL helper
│   ├── birthProfile.ts              # Locale-aware: zodiac, moon, Mayan, birthstone/flower,
│   │                                # Life Path, generations, famous birthdays (en/ja/es)
│   ├── historicalData.ts            # Per-year facts 1924–2024
│   └── i18n/
│       ├── index.ts                 # TranslationsContext + useT() hook
│       ├── TranslationsProvider.tsx # Wraps any subtree with locale translations
│       ├── en.ts                    # English UI strings (Translations interface)
│       ├── ja.ts                    # Japanese UI strings
│       └── es.ts                    # Spanish UI strings
├── docs/
│   └── BIRTHFACTS_BUILD_SUMMARY.md
└── public/
    ├── sitemap.xml                  # All routes for all 3 locales, with xhtml:link hreflang
    └── robots.txt
```

**Note:** `sitemap.xml` and `robots.txt` live under `public/` because Next.js static export does not support dynamic `app/sitemap.ts` / `app/robots.ts` route handlers.

---

## Pages (routes) — all locales

All routes use trailing slashes in production (e.g. `/faq/`).

### English (`/`)

| Path | Purpose |
|------|---------|
| `/` | Primary age calculator + full profile + timelines |
| `/days-between/` | Days between two dates |
| `/dog-age-calculator/` | Dog age in human years (size selector) |
| `/cat-age-calculator/` | Cat age in human years |
| `/faq/` | FAQ content + structured data for rich results |
| `/about/` | Trust / E-E-A-T; Ascent Leadership Institute Inc, Las Vegas, NV |
| `/privacy/` | Privacy policy; documents GA4 |
| `/contact/` | Contact / inquiries |

### Japanese (`/ja/`)

| Path | Purpose |
|------|---------|
| `/ja/` | 年齢計算 + 誕生日プロフィール (full feature parity) |
| `/ja/days-between/` | 日数計算 |
| `/ja/dog-age-calculator/` | 犬の年齢計算 |
| `/ja/cat-age-calculator/` | 猫の年齢計算 |
| `/ja/faq/` | よくある質問 |
| `/ja/about/` | このサイトについて |
| `/ja/privacy/` | プライバシーポリシー |
| `/ja/contact/` | お問い合わせ |

### Spanish (`/es/`)

| Path | Purpose |
|------|---------|
| `/es/` | Calculadora de edad + perfil de cumpleaños (full feature parity) |
| `/es/days-between/` | Días entre fechas |
| `/es/dog-age-calculator/` | Calculadora de edad del perro |
| `/es/cat-age-calculator/` | Calculadora de edad del gato |
| `/es/faq/` | Preguntas frecuentes |
| `/es/about/` | Acerca de |
| `/es/privacy/` | Privacidad |
| `/es/contact/` | Contacto |

---

## Internationalization (i18n) architecture

### Strategy: folder-based routing + React Context

No middleware or server-side language detection is needed. Each locale is a self-contained route group:

- **English:** `app/(en)/` → URLs at `/`
- **Spanish:** `app/(es)/es/` → URLs at `/es/`
- **Japanese:** `app/(ja)/ja/` → URLs at `/ja/`

There is **no shared `app/layout.tsx`**. Each route group's `layout.tsx` is a full **root layout** — it owns `<html>`, `<body>`, GA scripts, fonts, hreflang links, navigation, and footer. This is the Next.js-recommended pattern for multiple root layouts (documented under "Route Groups").

### TranslationsProvider + useT()

`lib/i18n/index.ts` defines a `Translations` TypeScript interface and a `useT()` hook that reads from `TranslationsContext`. Each locale root layout wraps its subtree with `<TranslationsProvider translations={en|ja|es}>`. Any component that needs locale-aware strings calls `useT()` rather than hardcoding text.

```
lib/i18n/
├── index.ts           → TranslationsContext, useT()
├── TranslationsProvider.tsx
├── en.ts              → Translations object for English
├── ja.ts              → Translations object for Japanese
└── es.ts              → Translations object for Spanish
```

### Locale-aware birthProfile

`lib/birthProfile.ts` accepts an optional `locale?: string` parameter in both `getBirthProfile(dob, locale)` and `getFamousBirthdays(month, day, locale)`. It contains full data maps for all three locales:

- `WESTERN_ZODIAC_TRAITS_JA/ES`, `CHINESE_ZODIAC_TRAITS_JA/ES`
- `LIFE_PATH_MEANINGS_JA/ES`, `WEEKDAY_MEANINGS_JA/ES`
- `BIRTHSTONE_MEANINGS_JA/ES`, `BIRTH_FLOWER_MEANINGS_JA/ES`
- `GENERATION_DESC_JA/ES`, `SPIRITUAL_GENERATION_DESC_JA/ES`
- `MOON_PHASE_MEANINGS_JA/ES`
- `DAY_SIGN_MEANINGS_JA/ES`, `TONE_MEANINGS_JA/ES`, `WAVESPELL_THEMES_JA/ES`
- `FAMOUS_PERSON_DESCRIPTIONS_JA/ES`

The function applies the appropriate locale's strings before returning the profile, so components receive translated data without branching logic in the UI.

### Locale-aware components

| Component | Locale-aware change |
|-----------|---------------------|
| `AgeCalculator.tsx` | Month names use `MONTHS_ES` or Japanese strings per `t.locale`; share button text localized |
| `ResultDisplay.tsx` | Age hero sentence formatted per locale ("X años, Y meses, Z días" in ES; "X歳Y ヶ月Z日" in JA) |
| `BirthProfile.tsx` | Passes `t.locale` to `getBirthProfile()` so all profile descriptions arrive pre-translated |

---

## Tier 1 — Core calculator

Implemented in `lib/ageCalc.ts` and `components/ResultDisplay.tsx` / `BirthdayCountdown.tsx`:

- **Date of birth:** three HTML `<select>` controls — **Month**, **Day**, **Year** — instead of `<input type="date">`, so mobile (especially iOS) avoids the two-step native picker (month/year wheel vs day grid). Layout: flex row with proportional widths (`basis-5/12` / `3/12` / `4/12`) so fields sit together cleanly. Month names are locale-specific.
- Age in years, months, days (calendar-based)
- Total months, weeks, days, hours, minutes
- Day of week at birth (locale-specific label)
- Next birthday countdown (live) or "Happy Birthday"
- Shareable URL: `/?dob=YYYY-MM-DD` (history replaced on calculate); locale equivalents at `/es/?dob=…` and `/ja/?dob=…`

---

## Tier 2 — Birthday profile

Implemented in `lib/birthProfile.ts` and `components/BirthProfile.tsx`. All features are present in all three locales:

- **Western zodiac:** sign, symbol, date range, element, traits
- **Chinese zodiac** (twelve-year animal cycle; labeled "Chinese Zodiac" on English/Spanish; Japanese locale may display Eto-specific copy)
- **Moon phase at birth:** eight-phase model + locale-specific meaning copy
- **Mayan Dreamspell-style profile:** Kin (1–260), Day Sign (solar seal), Galactic Tone (1–13), Wavespell name; leap-day handling aligned with Dreamspell day-count rules; **original prose** in all three languages (see **Copyright & IP** below)
- **Birthstone** and **birth flower** (locale-specific descriptions)
- **Life Path Number:** digit reduction with master numbers 11, 22, 33; locale-specific meaning
- **Weekday meaning:** planet glyph + locale-specific spiritual/cultural copy
- **Mainstream generation:** Silent through Gen Alpha; locale-specific descriptions
- **Spiritual generation:** Indigo / Crystal / Rainbow / Star Child; locale-specific descriptions
- **Famous birthdays:** curated map keyed by `MM-DD`; descriptions translated to JA and ES

**Not on the English site:** Japanese imperial era (gengō) and Japanese flower/zodiac kanji labels — by product decision (global audience). These are supported in the `/ja/` locale where relevant.

**Invalid `Date` guard:** `getBirthProfile` falls back to `new Date()` if `dob` is invalid.

**Chinese zodiac index:** `((year - 2020) % 12 + 12) % 12` (2020 = Rat); avoids negative modulo bugs in JavaScript.

---

## Tier 3 — History and life timeline

### Historical year facts (`lib/historicalData.ts`)

- `HISTORICAL_DATA` keyed by year **1924–2024**
- Each year: `worldEvents`, `tech`, `popCulture`, `music`, `movies` (string arrays)
- `getYearFacts(year)` returns `YearFacts | null`
- Historical events are **English-only** (intentional — translation risk and volume; future work if needed)

### UI

- **`HistoricalTimeline.tsx`:** Tabbed categories for the user's birth year; `text-base` for readability
- **`LifeTimeline.tsx`:** Vertical milestones (birth, 5, 10, teen, 18, 21, 30, …) with world-event annotations; labels use larger type than the original build

---

## SEO implementation

### Per-locale root layouts and metadata

Each locale's root layout (`app/(en)/layout.tsx`, `app/(es)/layout.tsx`, `app/(ja)/layout.tsx`) exports full `Metadata`:

| Field | English | Spanish | Japanese |
|-------|---------|---------|----------|
| `html lang` | `en` | `es` | `ja` |
| `title` | English title | Spanish title | Japanese title |
| `description` | English | Spanish | Japanese |
| `keywords` | 22 English keywords | 20 Spanish keywords | 22 Japanese keywords |
| `openGraph.locale` | `en_US` | `es_ES` | `ja_JP` |

**All keywords are in the local language.** Nobody in Japan searches in English; nobody in Mexico does either.

### Keywords by locale

**English (22 keywords):** age calculator, exact age calculator, birthday calculator, how old am I, birthday facts, moon phase birthday, mayan birthday calculator, kin number calculator, mayan calendar calculator, life path number, numerology birthday, chinese zodiac calculator, zodiac sign calculator, birth flower, birthstone by month, dog age calculator, cat age calculator, indigo child birth year, crystal child, spiritual generation, days between dates, birthday profile

**Spanish (20 keywords):** calculadora de edad, calculadora de cumpleaños, cuántos años tengo, calculadora de años, edad exacta, signo zodiacal, zodiaco chino, fase lunar cumpleaños, número kin maya, calendario maya calculadora, número de camino de vida, numerología cumpleaños, flor de nacimiento, piedra natal, generación millennial, niños índigo, niños cristal, calculadora edad perro, calculadora edad gato, perfil de cumpleaños

**Japanese (22 keywords):** 年齢計算, 誕生日計算, 何歳, 年齢計算機, 生年月日 年齢, 干支, 星座, マヤ暦 キン数, マヤ暦 誕生日, 四柱推命, 九星気学, ライフパスナンバー, 数秘術, 誕生石, 誕生花, 月の満ち欠け 誕生日, 誕生日占い, 犬の年齢計算, 猫の年齢計算, インディゴチルドレン, スターチルドレン, 誕生日 有名人

### hreflang

Every root layout includes full `<link rel="alternate" hreflang="…">` tags in `<head>` covering `en`, `es`, `ja`, and `x-default` (pointing to English). The `alternates.languages` metadata object in each layout also advertises all three locales. The `public/sitemap.xml` includes `xhtml:link` hreflang entries for every URL across all three locales.

### JSON-LD

- `WebApplication` schema in the English root layout
- `FAQPage` schema on `/faq/`

### Static files

`public/sitemap.xml` — 27 URLs total (9 routes × 3 locales), each with hreflang cross-links  
`public/robots.txt` — points to sitemap

---

## Multiple root layout architecture (key technical decision)

**Problem:** Next.js serves a single `app/layout.tsx` as the root HTML shell. With a shared root, `<html lang="en">` applied to every page — including `/es/` and `/ja/` — telling Google all pages are English.

**Solution:** Use Next.js route groups to create **three independent root layouts**. Per Next.js documentation: *"To create multiple root layouts, remove the top-level layout.js file, and add a layout.js file inside each route group."*

```
Before (wrong):
app/layout.tsx → <html lang="en">  ← applied to ALL pages including /es/ and /ja/
app/es/layout.tsx → nested, cannot override <html lang>
app/ja/layout.tsx → nested, cannot override <html lang>

After (correct):
app/(en)/layout.tsx → <html lang="en">  ← only English routes
app/(es)/layout.tsx → <html lang="es">  ← only Spanish routes
app/(ja)/layout.tsx → <html lang="ja">  ← only Japanese routes
```

Verified in built `out/` HTML:
- `out/index.html` → `lang="en"` ✓
- `out/es/index.html` → `lang="es"` ✓
- `out/ja/index.html` → `lang="ja"` ✓

Each root layout is self-contained: it imports `globals.css`, sets up GA4 scripts, font links, hreflang tags, TranslationsProvider, header navigation, and footer — no shared parent needed.

---

## Japanese locale specifics (`/ja/`)

The Japanese site has full feature parity with English plus Japanese-specific touches:

- All UI strings in Japanese (via `lib/i18n/ja.ts`)
- Japanese navigation: 計算ツール / よくある質問 / このサイトについて
- Age displayed as `X歳 Yヶ月 Z日`
- Weekday meanings end with `〜の日に生まれました。` (polite form)
- Zodiac, moon phase, Mayan, birthstone, birth flower — all described in Japanese prose
- Famous person descriptions translated to Japanese
- Historical events and life timeline remain English (translation risk; volume too large)
- Japanese keywords: 年齢計算, 誕生日占い, 干支, 四柱推命, マヤ暦 キン数, etc.

---

## Spanish locale specifics (`/es/`)

The Spanish site has full feature parity with English:

- All UI strings in Spanish (via `lib/i18n/es.ts`)
- Spanish navigation: Calculadora / Preguntas / Acerca de
- Age displayed as `X años, Y meses, Z días`
- Month names localized in the date picker
- Zodiac, moon phase, Mayan, birthstone, birth flower — all described in Spanish prose
- Famous person descriptions translated to Spanish
- Historical events and life timeline remain English
- Spanish keywords: calculadora de edad, cuántos años tengo, niños índigo, calendario maya, etc.

---

## Copyright & IP — Mayan / Dreamspell-related content

The site exposes **Kin**, **Day Sign names**, **Galactic Tone names/numbers**, and **Wavespell** labels — these are **system identifiers** widely documented in reference materials. **All narrative descriptions** (Day Sign paragraphs, Tone paragraphs, Wavespell theme phrases) on BirthFacts are **original prose** written for this product in English, Japanese, and Spanish.

**We intentionally do not:**

- Copy **José Argüelles'** exact written descriptions from his books or materials
- Reproduce text from *The Mayan Factor*, *Dreamspell*, *Telektonon*, or similar copyrighted works **verbatim**
- Use his distinctive phrasing **word-for-word**
- Sell or redistribute his original written material
- Copy **Dreamspell or related graphics** that are copyrighted artwork

**Practical posture:** facts about the calendar structure and labels can be described in general terms; **expressive text must be ours**. This applies equally to English, Japanese, and Spanish descriptions. If legal review is ever required (e.g. before major commercial licensing), counsel should confirm; this section documents **intent and practice**, not legal advice.

---

## Legal / trust

- **Privacy** documents **Google Analytics 4** and measurement ID `G-4ETJP01VCC`
- **About** names **Ascent Leadership Institute Inc**, **Las Vegas, NV, USA**
- Contact uses `hello@birthfacts.net`; configure receiving this on a business Gmail alias or preferred mail host

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

- Wire real email for `hello@birthfacts.net` (Gmail business alias or Cloudflare Email Routing)
- Expand `FAMOUS_BIRTHDAYS` and historical data for 2025+
- Run Lighthouse on production URL; keep third-party scripts deferred (`afterInteractive` for GA)
- Translate historical events and life timeline sections into Japanese and/or Spanish (optional, large effort)
- Apply for Google AdSense once traffic reaches ~100 daily visits
- Add more languages (French, Portuguese, Korean) — architecture is already set up for it via the route group pattern

---

*Last updated: April 2026 — reflects full i18n architecture (EN/JA/ES), multiple root layout restructure for correct `html lang` per locale, expanded per-locale SEO keywords, locale-aware components and birthProfile data, mobile date picker, typography improvements, Mayan copyright posture, About ordering, and GA4/Render deployment.*
