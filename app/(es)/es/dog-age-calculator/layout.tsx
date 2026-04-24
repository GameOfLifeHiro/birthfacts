import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Edad de Perro — Años Caninos a Años Humanos | BirthFacts",
  description:
    "Convierte la edad de tu perro a años humanos al instante. Usa la fórmula moderna de la AVMA con ajuste por tamaño (pequeño, mediano, grande). Gratis y preciso.",
  alternates: {
    canonical: "https://birthfacts.net/es/dog-age-calculator/",
    languages: {
      en: "https://birthfacts.net/dog-age-calculator/",
      es: "https://birthfacts.net/es/dog-age-calculator/",
      ja: "https://birthfacts.net/ja/dog-age-calculator/",
      "x-default": "https://birthfacts.net/dog-age-calculator/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
