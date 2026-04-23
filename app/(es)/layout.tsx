import type { Metadata } from "next";
import Script from "next/script";
import TranslationsProvider from "@/lib/i18n/TranslationsProvider";
import LanguageSelect from "@/components/LanguageSelect";
import es from "@/lib/i18n/es";
import "../globals.css";

const GA_MEASUREMENT_ID = "G-4ETJP01VCC";

export const metadata: Metadata = {
  title: { default: "BirthFacts — Lectura de Cumpleaños Gratis | Horóscopo, Zodiaco, Luna y Maya", template: "%s | BirthFacts" },
  description:
    "Lectura de cumpleaños gratis: horóscopo de hoy, signo zodiacal, fase lunar, número Kin maya, numerología, zodiaco chino, flor de nacimiento e identidad generacional. Todo desde tu fecha de nacimiento, gratis e instantáneo.",
  keywords: [
    "lectura de cumpleaños gratis",
    "horóscopo gratis",
    "horóscopo de hoy gratis",
    "horóscopo natal gratis",
    "lectura zodiacal gratis",
    "numerología gratis",
    "calculadora de edad",
    "calculadora de cumpleaños",
    "cuántos años tengo",
    "signo zodiacal",
    "zodiaco chino",
    "fase lunar cumpleaños",
    "número kin maya",
    "calendario maya calculadora",
    "número de camino de vida",
    "flor de nacimiento",
    "piedra natal",
    "niños índigo",
    "niños cristal",
    "calculadora edad perro",
    "calculadora edad gato",
    "perfil de cumpleaños gratis",
    "compatibilidad zodiaco",
    "compatibilidad astrológica",
    "compatibilidad signos zodiacales",
  ],
  metadataBase: new URL("https://birthfacts.net"),
  alternates: {
    canonical: "https://birthfacts.net/es/",
    languages: {
      en: "https://birthfacts.net/",
      es: "https://birthfacts.net/es/",
      ja: "https://birthfacts.net/ja/",
    },
  },
  openGraph: {
    title: "BirthFacts — Lectura de Cumpleaños Gratis & Horóscopo de Hoy",
    description:
      "Horóscopo gratis, zodiaco, fase lunar, número Kin maya, numerología y generación espiritual — todo desde tu fecha de nacimiento. Gratis.",
    url: "https://birthfacts.net/es/",
    siteName: "BirthFacts",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://birthfacts.net/og-image.png",
        width: 1200,
        height: 630,
        alt: "BirthFacts — Calculadora de Edad y Perfil de Cumpleaños",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BirthFacts — Lectura de Cumpleaños Gratis & Horóscopo de Hoy",
    description:
      "Horóscopo gratis, zodiaco, fase lunar, número Kin maya, numerología y generación espiritual — todo desde tu fecha de nacimiento. Gratis.",
    images: ["https://birthfacts.net/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="alternate" hrefLang="en" href="https://birthfacts.net/" />
        <link rel="alternate" hrefLang="es" href="https://birthfacts.net/es/" />
        <link rel="alternate" hrefLang="ja" href="https://birthfacts.net/ja/" />
        <link rel="alternate" hrefLang="x-default" href="https://birthfacts.net/" />
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
        <TranslationsProvider translations={es}>
          <header className="px-6 py-4 flex items-center justify-between gap-4 border-b border-[var(--card-border)]">
            <a href="/es/" className="text-xl font-bold gradient-text shrink-0">BirthFacts</a>
            <nav className="flex items-center gap-4 sm:gap-5 text-sm text-[var(--muted)] min-w-0">
              <div className="hidden sm:flex gap-5">
                <a href="/es/" className="hover:text-[var(--accent)] transition-colors">Calculadora</a>
                <a href="/es/horoscopo-ranking/" className="hover:text-[var(--accent)] transition-colors">🏆 Ranking</a>
                <a href="/es/compatibilidad/" className="hover:text-[var(--accent)] transition-colors">💞 Compatibilidad</a>
                <a href="/es/faq/" className="hover:text-[var(--accent)] transition-colors">Preguntas</a>
                <a href="/es/about/" className="hover:text-[var(--accent)] transition-colors">Acerca de</a>
              </div>
              <LanguageSelect
                current={{ href: "/es/", label: "🌐 ES" }}
                others={[
                  { href: "/", label: "🌐 EN" },
                  { href: "/ja/", label: "🌐 日本語" },
                ]}
              />
            </nav>
          </header>

          <main className="px-4 py-8">{children}</main>

          <footer className="border-t border-[var(--card-border)] px-6 py-8 mt-16 text-center text-sm text-[var(--muted)]">
            <p>© {new Date().getFullYear()} BirthFacts.net — Tu perfil de cumpleaños completo</p>
            <p className="mt-2">
              <a href="/es/about/" className="hover:text-[var(--accent)]">Acerca de</a>
              {" · "}
              <a href="/es/privacy/" className="hover:text-[var(--accent)]">Privacidad</a>
              {" · "}
              <a href="/es/contact/" className="hover:text-[var(--accent)]">Contacto</a>
              {" · "}
              <a href="/es/horoscopo-ranking/" className="hover:text-[var(--accent)]">Ranking Horóscopo</a>
              {" · "}
              <a href="/es/compatibilidad/" className="hover:text-[var(--accent)]">Compatibilidad</a>
              {" · "}
              <a href="/es/faq/" className="hover:text-[var(--accent)]">Preguntas</a>
              {" · "}
              <a href="/es/days-between/" className="hover:text-[var(--accent)]">Días Entre Fechas</a>
              {" · "}
              <a href="/es/dog-age-calculator/" className="hover:text-[var(--accent)]">Edad del Perro</a>
              {" · "}
              <a href="/es/cat-age-calculator/" className="hover:text-[var(--accent)]">Edad del Gato</a>
            </p>
          </footer>
        </TranslationsProvider>
      </body>
    </html>
  );
}
