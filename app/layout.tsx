import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
    "moon phase birthday",
    "mayan birthday calculator",
    "kin number calculator",
    "life path number",
    "chinese zodiac calculator",
    "zodiac sign calculator",
    "birth flower",
    "dog age calculator",
    "cat age calculator",
    "indigo child birth year",
    "crystal child",
  ],
  metadataBase: new URL("https://birthfacts.net"),
  openGraph: {
    title: "BirthFacts – Your Complete Birthday Profile",
    description:
      "Age calculator + zodiac, moon phase, Mayan Kin number, Life Path Number, spiritual generation, and historical facts — all from your birthday.",
    url: "https://birthfacts.net",
    siteName: "BirthFacts",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="en" href="https://birthfacts.net/" />
        <link rel="alternate" hrefLang="ja" href="https://birthfacts.net/ja/" />
        <link rel="alternate" hrefLang="x-default" href="https://birthfacts.net/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
        {children}
      </body>
    </html>
  );
}
