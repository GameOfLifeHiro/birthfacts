import type { Metadata } from "next";
import Script from "next/script";
import TranslationsProvider from "@/lib/i18n/TranslationsProvider";
import LanguageSelect from "@/components/LanguageSelect";
import ja from "@/lib/i18n/ja";
import "../globals.css";

const GA_MEASUREMENT_ID = "G-4ETJP01VCC";

export const metadata: Metadata = {
  title: { default: "BirthFacts — 年齢計算・誕生日プロフィール", template: "%s | BirthFacts" },
  description:
    "生年月日から正確な年齢、干支、星座、月の満ち欠け、マヤ暦キン数、四柱推命、九星気学など誕生日にまつわるすべてを無料で計算します。",
  keywords: [
    "年齢計算",
    "誕生日計算",
    "何歳",
    "年齢計算機",
    "生年月日 年齢",
    "干支",
    "星座",
    "マヤ暦 キン数",
    "マヤ暦 誕生日",
    "四柱推命",
    "九星気学",
    "ライフパスナンバー",
    "数秘術",
    "誕生石",
    "誕生花",
    "月の満ち欠け 誕生日",
    "誕生日占い",
    "犬の年齢計算",
    "猫の年齢計算",
    "インディゴチルドレン",
    "スターチルドレン",
    "誕生日 有名人",
  ],
  metadataBase: new URL("https://birthfacts.net"),
  alternates: {
    canonical: "https://birthfacts.net/ja/",
    languages: {
      en: "https://birthfacts.net/",
      es: "https://birthfacts.net/es/",
      ja: "https://birthfacts.net/ja/",
    },
  },
  openGraph: {
    title: "BirthFacts — 年齢計算・誕生日プロフィール",
    description:
      "年齢・干支・マヤ暦・四柱推命・九星気学など、誕生日から読み解くすべてのプロフィールを無料で。",
    url: "https://birthfacts.net/ja/",
    siteName: "BirthFacts",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BirthFacts — 年齢計算・誕生日プロフィール",
    description:
      "年齢・干支・マヤ暦・四柱推命・九星気学など、誕生日から読み解くすべてのプロフィールを無料で。",
  },
  robots: { index: true, follow: true },
};

export default function JaRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
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
        <TranslationsProvider translations={ja}>
          <header className="px-6 py-4 flex items-center justify-between gap-4 border-b border-[var(--card-border)]">
            <a href="/ja/" className="text-xl font-bold gradient-text shrink-0">BirthFacts</a>
            <nav className="flex items-center gap-4 sm:gap-5 text-sm text-[var(--muted)] min-w-0">
              <div className="hidden sm:flex gap-5">
                <a href="/ja/" className="hover:text-[var(--accent)] transition-colors">計算ツール</a>
                <a href="/ja/faq/" className="hover:text-[var(--accent)] transition-colors">よくある質問</a>
                <a href="/ja/about/" className="hover:text-[var(--accent)] transition-colors">このサイトについて</a>
              </div>
              <LanguageSelect
                current={{ href: "/ja/", label: "🌐 日本語" }}
                others={[
                  { href: "/", label: "🌐 EN" },
                  { href: "/es/", label: "🌐 ES" },
                ]}
              />
            </nav>
          </header>

          <main className="px-4 py-8">{children}</main>

          <footer className="border-t border-[var(--card-border)] px-6 py-8 mt-16 text-center text-sm text-[var(--muted)]">
            <p>© {new Date().getFullYear()} BirthFacts.net — あなたの完全な誕生日プロフィール</p>
            <p className="mt-2">
              <a href="/ja/about/" className="hover:text-[var(--accent)]">このサイトについて</a>
              {" · "}
              <a href="/ja/privacy/" className="hover:text-[var(--accent)]">プライバシーポリシー</a>
              {" · "}
              <a href="/ja/contact/" className="hover:text-[var(--accent)]">お問い合わせ</a>
              {" · "}
              <a href="/ja/faq/" className="hover:text-[var(--accent)]">よくある質問</a>
              {" · "}
              <a href="/ja/days-between/" className="hover:text-[var(--accent)]">日数計算</a>
              {" · "}
              <a href="/ja/dog-age-calculator/" className="hover:text-[var(--accent)]">犬の年齢計算</a>
              {" · "}
              <a href="/ja/cat-age-calculator/" className="hover:text-[var(--accent)]">猫の年齢計算</a>
            </p>
          </footer>
        </TranslationsProvider>
      </body>
    </html>
  );
}
