import type { Metadata } from "next";
import TranslationsProvider from "@/lib/i18n/TranslationsProvider";
import ja from "@/lib/i18n/ja";

export const metadata: Metadata = {
  title: "猫の年齢計算（人間換算） | BirthFacts",
  description: "愛猫の年齢を人間の年齢に換算します。国際猫ケア機構のガイドラインに基づく計算。",
  alternates: {
    canonical: "https://birthfacts.net/ja/cat-age-calculator/",
    languages: {
      en: "https://birthfacts.net/cat-age-calculator/",
      es: "https://birthfacts.net/es/cat-age-calculator/",
      ja: "https://birthfacts.net/ja/cat-age-calculator/",
      "x-default": "https://birthfacts.net/cat-age-calculator/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <TranslationsProvider translations={ja}>{children}</TranslationsProvider>;
}
