import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compatibilidad del Zodiaco — BirthFacts",
  description: "Descubre qué tan compatible es tu signo zodiacal con cualquier otro. Lectura gratuita de compatibilidad astrológica para las 144 combinaciones de signos.",
  keywords: ["compatibilidad zodiaco", "compatibilidad astrológica", "compatibilidad signos zodiacales", "compatibilidad horóscopo", "compatibilidad amor astrología"],
  openGraph: {
    title: "Compatibilidad del Zodiaco — BirthFacts",
    description: "Lectura gratuita de compatibilidad astrológica occidental para las 144 combinaciones de signos zodiacales.",
    url: "https://birthfacts.net/es/compatibilidad/",
  },
};

export default function CompatibilidadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
