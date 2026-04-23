# BirthFacts

Static site for **[birthfacts.net](https://birthfacts.net)** — age calculator, daily horoscope fortune, zodiac compatibility (EN/ES; JA adds blood-type compatibility), Mayan / numerology / moon profile, fortune ranking, Japanese life-event tools (厄年, 賀寿, 早見表), and more. Built with **Next.js** (App Router) and **static export** for hosting on Render.

- **Full build summary** (routes, i18n, SEO, structured data, performance, deploy): [`docs/BIRTHFACTS_BUILD_SUMMARY.md`](./docs/BIRTHFACTS_BUILD_SUMMARY.md)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app uses a **system font stack** (no `next/font` webfonts) for LCP; see the build summary for Lighthouse notes.

```bash
npm run build   # outputs to `out/` (static export)
```

## Locales

| URL prefix | Language |
|------------|----------|
| `/` | English |
| `/es/` | Spanish |
| `/ja/` | Japanese |

**Compatibility** (zodiac; JA adds blood-type tab): `/compatibility/`, `/es/compatibilidad/`, `/ja/aisho/` (星座・血液型 相性占い).

**Mobile header:** a ☰ **MobileMenu** (dropdown) appears below the `sm` breakpoint next to the language selector so users can open ranking, compatibility, and other tools on phones.

See **`docs/BIRTHFACTS_BUILD_SUMMARY.md`** for homepage “More tools” ordering, i18n, SEO, and performance notes.
