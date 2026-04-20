import type { Metadata } from "next";
import Script from "next/script";
import TranslationsProvider from "@/lib/i18n/TranslationsProvider";
import LanguageSelect from "@/components/LanguageSelect";
import en from "@/lib/i18n/en";
import "../globals.css";

const GA_MEASUREMENT_ID = "G-4ETJP01VCC";

export const metadata: Metadata = {
  title: "Free Birthday Reading — Age, Daily Horoscope, Zodiac, Moon Phase & Mayan Calendar | BirthFacts",
  description:
    "Free birthday reading: your exact age, today's zodiac fortune, moon phase at birth, Mayan Kin number, Life Path numerology, Chinese zodiac, birth flower, generational archetype, and 100 years of world history — all from your birth date.",
  keywords: [
    "free birthday reading",
    "free horoscope today",
    "daily horoscope",
    "birthday horoscope free",
    "zodiac reading",
    "numerology reading free",
    "age calculator",
    "birthday calculator",
    "how old am I",
    "moon phase birthday",
    "mayan birthday calculator",
    "kin number calculator",
    "life path number",
    "chinese zodiac calculator",
    "zodiac sign calculator",
    "birth flower",
    "birthstone by month",
    "dog age calculator",
    "cat age calculator",
    "indigo child",
    "crystal child",
    "spiritual generation",
    "days between dates",
    "birthday profile",
    "astrology birthday free",
    "horoscope by birthday",
  ],
  metadataBase: new URL("https://birthfacts.net"),
  alternates: {
    canonical: "https://birthfacts.net/",
    languages: {
      en: "https://birthfacts.net/",
      es: "https://birthfacts.net/es/",
      ja: "https://birthfacts.net/ja/",
    },
  },
  openGraph: {
    title: "BirthFacts – Free Birthday Reading & Daily Horoscope",
    description:
      "Free birthday reading: zodiac, daily horoscope, moon phase, Mayan Kin, Life Path Number, spiritual generation & 100 years of history — from your birth date.",
    url: "https://birthfacts.net",
    siteName: "BirthFacts",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://birthfacts.net/og-image.png",
        width: 1200,
        height: 630,
        alt: "BirthFacts – Your Complete Birthday Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BirthFacts – Free Birthday Reading & Daily Horoscope",
    description:
      "Free birthday reading: zodiac, daily horoscope, moon phase, Mayan Kin, Life Path Number, spiritual generation & 100 years of history — from your birth date.",
    images: ["https://birthfacts.net/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="en" href="https://birthfacts.net/" />
        <link rel="alternate" hrefLang="es" href="https://birthfacts.net/es/" />
        <link rel="alternate" hrefLang="ja" href="https://birthfacts.net/ja/" />
        <link rel="alternate" hrefLang="x-default" href="https://birthfacts.net/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "BirthFacts Age Calculator",
              url: "https://birthfacts.net",
              description:
                "Free birthday profile tool: exact age calculator plus zodiac, moon phase, Mayan Dreamspell Kin number, Life Path Number, Chinese zodiac, birth flower, spiritual generation, and historical facts.",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <TranslationsProvider translations={en}>
          <header className="border-b border-[var(--card-border)] px-6 py-4 flex items-center justify-between gap-4">
            <a href="/" className="font-bold text-xl gradient-text shrink-0">BirthFacts</a>
            <nav className="flex items-center gap-4 sm:gap-6 text-sm text-[var(--muted)] min-w-0">
              <div className="hidden sm:flex gap-6">
                <a href="/" className="hover:text-[var(--accent)] transition-colors">Calculator</a>
                <a href="/fortune-ranking/" className="hover:text-[var(--accent)] transition-colors">🏆 Ranking</a>
                <a href="/faq/" className="hover:text-[var(--accent)] transition-colors">FAQ</a>
                <a href="/about/" className="hover:text-[var(--accent)] transition-colors">About</a>
              </div>
              <LanguageSelect
                current={{ href: "/", label: "🌐 EN" }}
                others={[
                  { href: "/es/", label: "🌐 ES" },
                  { href: "/ja/", label: "🌐 日本語" },
                ]}
              />
            </nav>
          </header>
          <main>{children}</main>
          <footer className="border-t border-[var(--card-border)] px-6 py-8 mt-16 text-center text-sm text-[var(--muted)]">
            <p>© {new Date().getFullYear()} BirthFacts.net — Your complete birthday profile</p>
            <p className="mt-2">
              <a href="/about/" className="hover:text-[var(--accent)]">About</a>
              {" · "}
              <a href="/privacy/" className="hover:text-[var(--accent)]">Privacy Policy</a>
              {" · "}
              <a href="/contact/" className="hover:text-[var(--accent)]">Contact</a>
              {" · "}
              <a href="/fortune-ranking/" className="hover:text-[var(--accent)]">Fortune Ranking</a>
              {" · "}
              <a href="/faq/" className="hover:text-[var(--accent)]">FAQ</a>
              {" · "}
              <a href="/days-between/" className="hover:text-[var(--accent)]">Days Between Dates</a>
              {" · "}
              <a href="/dog-age-calculator/" className="hover:text-[var(--accent)]">Dog Age Calculator</a>
              {" · "}
              <a href="/cat-age-calculator/" className="hover:text-[var(--accent)]">Cat Age Calculator</a>
              {" · "}
              <a href="/es/" className="hover:text-[var(--accent)]">Español</a>
              {" · "}
              <a href="/ja/" className="hover:text-[var(--accent)]">日本語</a>
            </p>
          </footer>
        </TranslationsProvider>
      </body>
    </html>
  );
}
