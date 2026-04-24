import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Días Entre Fechas | BirthFacts",
  description:
    "Calcula el número exacto de días entre dos fechas. También muestra diferencia en semanas, meses y años. Gratis e instantáneo.",
  alternates: {
    canonical: "https://birthfacts.net/es/days-between/",
    languages: {
      en: "https://birthfacts.net/days-between/",
      es: "https://birthfacts.net/es/days-between/",
      ja: "https://birthfacts.net/ja/days-between/",
      "x-default": "https://birthfacts.net/days-between/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
