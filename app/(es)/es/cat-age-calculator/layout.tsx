import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Edad de Gato — Años Felinos a Años Humanos | BirthFacts",
  description:
    "Convierte la edad de tu gato a años humanos al instante. Basado en las directrices de International Cat Care. Gratis y preciso.",
  alternates: {
    canonical: "https://birthfacts.net/es/cat-age-calculator/",
    languages: {
      en: "https://birthfacts.net/cat-age-calculator/",
      es: "https://birthfacts.net/es/cat-age-calculator/",
      ja: "https://birthfacts.net/ja/cat-age-calculator/",
      "x-default": "https://birthfacts.net/cat-age-calculator/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
