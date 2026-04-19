import type { Metadata } from "next";
import Script from "next/script";
import TranslationsProvider from "@/lib/i18n/TranslationsProvider";
import en from "@/lib/i18n/en";
import { inter } from "@/lib/fonts";
import "../globals.css";

const GA_MEASUREMENT_ID = "G-4ETJP01VCC";

export const metadata: Metadata = {
  title: "Age Calculator – Birthday Profile with Zodiac, Moon Phase & Mayan Calendar | BirthFacts",
  description:
    "Calculate your exact age and discover your complete birthday profile: zodiac sign, moon phase, Mayan Kin number, Life Path Number, Chinese zodiac, birth flower, generational identity, and historical facts. Free and instant.",
  keywords: [
    "age calculator",
    "exact age calculator",
    "birthday calculator",
    "how old am I",
    "birthday facts",
    "moon phase birthday",
    "mayan birthday calculator",
    "kin number calculator",
    "mayan calendar calculator",
    "life path number",
    "numerology birthday",
    "chinese zodiac calculator",
    "zodiac sign calculator",
    "birth flower",
    "birthstone by month",
    "dog age calculator",
    "cat age calculator",
    "indigo child birth year",
    "crystal child",
    "spiritual generation",
    "days between dates",
    "birthday profile",
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
    title: "BirthFacts – Your Complete Birthday Profile",
    description:
      "Age calculator + zodiac, moon phase, Mayan Kin number, Life Path Number, spiritual generation, and historical facts — all from your birthday.",
    url: "https://birthfacts.net",
    siteName: "BirthFacts",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BirthFacts – Your Complete Birthday Profile",
    description:
      "Age calculator + zodiac, moon phase, Mayan Kin number, Life Path Number, spiritual generation, and historical facts — all from your birthday.",
  },
  robots: { index: true, follow: true },
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
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
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <TranslationsProvider translations={en}>
          <header className="border-b border-[var(--card-border)] px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-bold text-xl gradient-text">BirthFacts</a>
            <nav className="flex gap-6 text-sm text-[var(--muted)]">
              <a href="/" className="hover:text-[var(--accent)] transition-colors">Calculator</a>
              <a href="/faq/" className="hover:text-[var(--accent)] transition-colors">FAQ</a>
              <a href="/about/" className="hover:text-[var(--accent)] transition-colors">About</a>
              <a href="/es/" className="hover:text-[var(--accent)] transition-colors text-xs text-[var(--muted)]">🌐 ES</a>
              <a href="/ja/" className="hover:text-[var(--accent)] transition-colors text-xs text-[var(--muted)]">🌐 日本語</a>
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
