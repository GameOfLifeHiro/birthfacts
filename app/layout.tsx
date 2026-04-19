import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Age Calculator – Exact Age in Years, Months, Days & Seconds | BirthFacts",
  description:
    "Calculate your exact age in years, months, weeks, days, hours and minutes. Discover your zodiac sign, birth flower, Life Path Number, generational identity, and more. Free and instant.",
  keywords: [
    "age calculator",
    "exact age calculator",
    "age in months",
    "age in days",
    "age in weeks",
    "birthday calculator",
    "how old am I",
    "zodiac sign calculator",
    "life path number",
    "birth flower",
  ],
  metadataBase: new URL("https://birthfacts.net"),
  openGraph: {
    title: "BirthFacts – Your Complete Birthday Profile",
    description:
      "Discover your exact age, zodiac sign, generational identity, Life Path Number, and more — all from your birthday.",
    url: "https://birthfacts.net",
    siteName: "BirthFacts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BirthFacts – Your Complete Birthday Profile",
    description:
      "Discover your exact age, zodiac sign, generational identity, Life Path Number, and more — all from your birthday.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
                "Free age calculator with zodiac, generational identity, Life Path Number, and historical facts.",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        <header className="border-b border-[var(--card-border)] px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-bold text-xl gradient-text">
            BirthFacts
          </a>
          <nav className="flex gap-6 text-sm text-[var(--muted)]">
            <a href="/" className="hover:text-[var(--accent)] transition-colors">Calculator</a>
            <a href="/faq/" className="hover:text-[var(--accent)] transition-colors">FAQ</a>
            <a href="/about/" className="hover:text-[var(--accent)] transition-colors">About</a>
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
            <a href="/age-in-months/" className="hover:text-[var(--accent)]">Age in Months</a>
            {" · "}
            <a href="/days-between/" className="hover:text-[var(--accent)]">Days Between Dates</a>
            {" · "}
            <a href="/birthday-countdown/" className="hover:text-[var(--accent)]">Birthday Countdown</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
