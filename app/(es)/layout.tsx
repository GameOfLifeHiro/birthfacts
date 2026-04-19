import type { Metadata } from "next";
import Script from "next/script";
import TranslationsProvider from "@/lib/i18n/TranslationsProvider";
import es from "@/lib/i18n/es";
import "../globals.css";

const GA_MEASUREMENT_ID = "G-4ETJP01VCC";

export const metadata: Metadata = {
  title: { default: "BirthFacts — Calculadora de Edad y Perfil de Cumpleaños", template: "%s | BirthFacts" },
  description:
    "Calcula tu edad exacta y descubre tu perfil completo de cumpleaños: signo zodiacal, fase lunar, número Kin maya, número de camino de vida, zodiaco chino, flor de nacimiento e identidad generacional. Gratis e instantáneo.",
  keywords: [
    "calculadora de edad",
    "calculadora de cumpleaños",
    "cuántos años tengo",
    "calculadora de años",
    "edad exacta",
    "signo zodiacal",
    "zodiaco chino",
    "fase lunar cumpleaños",
    "número kin maya",
    "calendario maya calculadora",
    "número de camino de vida",
    "numerología cumpleaños",
    "flor de nacimiento",
    "piedra natal",
    "generación millennial",
    "niños índigo",
    "niños cristal",
    "calculadora edad perro",
    "calculadora edad gato",
    "perfil de cumpleaños",
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
    title: "BirthFacts — Calculadora de Edad y Perfil de Cumpleaños",
    description:
      "Edad, zodiaco, fase lunar, número Kin maya, generación espiritual y hechos históricos — todo a partir de tu fecha de nacimiento. Gratis.",
    url: "https://birthfacts.net/es/",
    siteName: "BirthFacts",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BirthFacts — Calculadora de Edad y Perfil de Cumpleaños",
    description:
      "Edad, zodiaco, fase lunar, número Kin maya, generación espiritual y hechos históricos — todo a partir de tu fecha de nacimiento.",
  },
  robots: { index: true, follow: true },
};

export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="alternate" hrefLang="en" href="https://birthfacts.net/" />
        <link rel="alternate" hrefLang="es" href="https://birthfacts.net/es/" />
        <link rel="alternate" hrefLang="ja" href="https://birthfacts.net/ja/" />
        <link rel="alternate" hrefLang="x-default" href="https://birthfacts.net/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
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
        <TranslationsProvider translations={es}>
          <header className="px-6 py-4 flex items-center justify-between border-b border-[var(--card-border)]">
            <a href="/es/" className="text-xl font-bold gradient-text">BirthFacts</a>
            <nav className="flex gap-5 text-sm text-[var(--muted)]">
              <a href="/es/" className="hover:text-[var(--accent)] transition-colors">Calculadora</a>
              <a href="/es/faq/" className="hover:text-[var(--accent)] transition-colors">Preguntas</a>
              <a href="/es/about/" className="hover:text-[var(--accent)] transition-colors">Acerca de</a>
              <a href="/" className="hover:text-[var(--accent)] transition-colors text-xs opacity-60">🌐 EN</a>
              <a href="/ja/" className="hover:text-[var(--accent)] transition-colors text-xs opacity-60">🌐 日本語</a>
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
