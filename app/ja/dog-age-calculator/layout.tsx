import type { Metadata } from "next";
import TranslationsProvider from "@/lib/i18n/TranslationsProvider";
import ja from "@/lib/i18n/ja";

export const metadata: Metadata = {
  title: "犬の年齢計算（人間換算） | BirthFacts",
  description: "愛犬の年齢を人間の年齢に換算します。小型犬・中型犬・大型犬のサイズ別計算対応。",
  alternates: { canonical: "https://birthfacts.net/ja/dog-age-calculator/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <TranslationsProvider translations={ja}>{children}</TranslationsProvider>;
}
