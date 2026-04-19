import type { Metadata } from "next";
import TranslationsProvider from "@/lib/i18n/TranslationsProvider";
import ja from "@/lib/i18n/ja";

export const metadata: Metadata = {
  title: "日数計算 — 2つの日付の間の日数 | BirthFacts",
  description: "2つの日付の間の日数・週数・月数・年数を正確に計算します。",
  alternates: { canonical: "https://birthfacts.net/ja/days-between/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <TranslationsProvider translations={ja}>{children}</TranslationsProvider>;
}
