# BirthFacts SEO Audit Report

**Date:** 2026-04-25

---

## Summary

The SEO foundation is very solid — metadata, sitemaps, hreflang, canonicals, and internal linking are all well-executed. The primary gaps are in richer schema markup (HowTo, Organization) and page-level social metadata.

| Category | Status | Score | Notes |
|----------|--------|-------|-------|
| Metadata | Strong | 9/10 | Unique, keyword-rich; all pages covered |
| Schema Markup | Good | 7/10 | WebApplication, FAQPage, BreadcrumbList solid. Missing HowTo, Organization, ContactPoint |
| Internal Linking | Excellent | 9/10 | Rich footer links, navigation, cross-tool CTAs |
| Sitemap | Excellent | 10/10 | Complete coverage, hreflang embedded, proper priorities/changefreq, 3 locales + index |
| Hreflang | Excellent | 10/10 | Both sitemap + page-level metadata, all locales, x-default defined |
| Canonicals | Excellent | 10/10 | Every page has unique canonical pointing to itself |
| OG/Twitter | Good | 6/10 | Root layouts full; only 6/49 pages have OG tags. Single shared og-image.png |
| Robots.txt | Good | 9/10 | Clean, allows all, references all sitemaps |

---

## Actionable Priorities (By ROI)

### High Impact

1. **Organization schema** (~20 min)
   - Add to root layout
   - Company: Ascent Leadership Institute Inc, Las Vegas, NV
   - Enables knowledge panel eligibility, builds entity trust across all pages

2. **HowTo schema on calculator pages** (~30 min)
   - Target: `/dog-age-calculator/`, `/cat-age-calculator/`, `/days-between/`
   - Pages already explain the formula in plain text — wrap in HowTo markup
   - Can earn rich results for "how to calculate dog age" type queries

3. **FAQ schema on `/fortune-ranking/`** (~15 min)
   - Natural Q&A content exists: "how is the ranking calculated?", "does it change daily?"
   - Quick win for SERP visibility

### Medium Impact

4. **Page-specific OG metadata on subpages** (~45 min)
   - Only root layouts have `openGraph` tags; subpages fall back to single `og-image.png`
   - Add unique titles/descriptions per page to improve social sharing CTR

5. **ContactPoint schema on `/contact/`** (~10 min)
   - Minor structural completeness
   - Signals to Google that a real contact channel exists

---

## Detailed Findings

### 1. Metadata

All primary pages have titles and descriptions. Titles are unique and keyword-optimized (e.g., "Age Calculator – Exact Age in Years, Months, Days & Seconds | BirthFacts"). Descriptions are compelling and feature-focused. All include relevant LSI keywords (zodiac, horoscope, numerology, moon phase, etc.).

Root layouts use a title template: `{ default: "BirthFacts — ...", template: "%s | BirthFacts" }` across all three locales.

### 2. Structured Data / JSON-LD

**Currently implemented:**
- `WebApplication` schema on home page with `operatingSystem`, `applicationCategory`, `featureList`, and pricing
- `FAQPage` schema on `/faq/` and `/compatibility/`
- `BreadcrumbList` schema via reusable `BreadcrumbSchema` component on all subpages

**Missing:**

| Page | Missing Schema |
|------|---------------|
| `/fortune-ranking/` | FAQPage |
| `/dog-age-calculator/` | HowTo |
| `/cat-age-calculator/` | HowTo |
| `/days-between/` | HowTo |
| `/about/` | Organization |
| `/contact/` | ContactPoint |

### 3. Internal Linking

Strong. Layout footers (all three locales) include comprehensive link networks. Home page has a "More tools" section with links to related calculators. Dog age calculator links to cat calculator; fortune ranking links back to home.

**Potential enhancement:** Add contextual "related tools" sections on non-home pages.

### 4. Sitemap

Complete. All pages covered across EN/ES/JA with proper `lastmod`, `changefreq`, and `priority` values. Hreflang annotations embedded directly in sitemap entries.

**Minor note:** Privacy/Contact pages have `lastmod="2025-12-01"` — update if those pages were edited recently.

### 5. Hreflang

Implemented via two channels:
1. Sitemap `<xhtml:link rel="alternate">` entries
2. Page metadata `alternates.languages` object

Both channels verified on all major pages.

### 6. Canonical URLs

Every layout.tsx and page.tsx with metadata defines a `canonical` via `alternates.canonical`. No chained or self-conflicting canonicals detected. `metadataBase` set to `https://birthfacts.net` in all root layouts.

### 7. OG / Twitter Cards

Root layouts (EN/ES/JA) have full OpenGraph + Twitter card markup including `twitter.card = "summary_large_image"` and a single OG image (`og-image.png`, 1200×630).

Subpages with distinct metadata (FAQ, about, contact, calculators) have no page-specific `openGraph` object — they inherit the root layout's single image and site-level title.

### 8. Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://birthfacts.net/sitemap-index.xml
Sitemap: https://birthfacts.net/sitemap.xml
Sitemap: https://birthfacts.net/ja/sitemap.xml
Sitemap: https://birthfacts.net/es/sitemap.xml
```

Clean. No disallows. References all four sitemaps (the index + three locale-specific ones).
