import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "星座・血液型 相性占い 無料 — BirthFacts",
  description: "星座・血液型の相性を無料で占います。12星座×12星座の144通りの組み合わせと、血液型A・B・O・AB型の16通りの相性を詳しく解説。",
  keywords: ["星座 相性", "血液型 相性", "相性占い 無料", "星座 相性占い", "血液型 相性診断", "12星座 相性", "てんびん座 相性", "さそり座 相性", "おひつじ座 相性"],
  alternates: {
    canonical: "https://birthfacts.net/ja/aisho/",
    languages: {
      en: "https://birthfacts.net/compatibility/",
      es: "https://birthfacts.net/es/compatibilidad/",
      ja: "https://birthfacts.net/ja/aisho/",
      "x-default": "https://birthfacts.net/compatibility/",
    },
  },
  openGraph: {
    title: "星座・血液型 相性占い 無料 — BirthFacts",
    description: "12星座の相性と血液型の相性を無料で鑑定。144通りの星座ペアと16通りの血液型ペアを詳しく解説します。",
    url: "https://birthfacts.net/ja/aisho/",
  },
};

export default function AishoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
