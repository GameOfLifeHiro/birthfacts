import type { Metadata } from "next";
import Script from "next/script";
import TranslationsProvider from "@/lib/i18n/TranslationsProvider";
import LanguageSelect from "@/components/LanguageSelect";
import MobileMenu from "@/components/MobileMenu";
import ja from "@/lib/i18n/ja";
import "../globals.css";

const GA_MEASUREMENT_ID = "G-4ETJP01VCC";

export const metadata: Metadata = {
  title: { default: "BirthFacts — 誕生日占い・今日の運勢 無料 | 星座・マヤ暦・数秘術", template: "%s | BirthFacts" },
  description:
    "誕生日占い無料。生年月日から今日の運勢・星座占い・マヤ暦キン数・数秘術・月の満ち欠けをすぐに鑑定。インディゴチルドレン診断や誕生石・誕生花も。",
  keywords: [
    "占い 今日",
    "今日の運勢",
    "無料占い",
    "誕生日占い 無料",
    "今日の運勢 無料",
    "星座占い",
    "星座占い 無料",
    "マヤ暦占い",
    "マヤ暦 キン数",
    "数秘術 無料",
    "ライフパスナンバー",
    "月の満ち欠け 誕生日",
    "誕生日占い",
    "干支",
    "星座",
    "誕生石",
    "誕生花",
    "インディゴチルドレン",
    "スターチルドレン",
    "誕生日 有名人",
    "犬の年齢計算",
    "猫の年齢計算",
    "厄年",
    "厄年 早見表",
    "前厄 本厄 後厄",
    "大厄",
    "厄年 お祓い",
    "賀寿",
    "還暦 何歳",
    "古希 喜寿 米寿",
    "七五三 いつ",
    "お宮参り",
    "十三参り",
    "ハーフ成人式",
    "星座 相性",
    "血液型 相性",
    "相性占い 無料",
    "星座 相性占い",
    "血液型 相性診断",
  ],
  metadataBase: new URL("https://birthfacts.net"),
  openGraph: {
    title: "BirthFacts — 誕生日占い・今日の運勢 無料",
    description:
      "誕生日占い無料。今日の運勢・星座占い・マヤ暦キン数・数秘術・月の満ち欠けを生年月日から即鑑定。",
    url: "https://birthfacts.net/ja/",
    siteName: "BirthFacts",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://birthfacts.net/og-image.png",
        width: 1200,
        height: 630,
        alt: "BirthFacts — 年齢計算・誕生日プロフィール",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BirthFacts — 誕生日占い・今日の運勢 無料",
    description:
      "誕生日占い無料。今日の運勢・星座占い・マヤ暦キン数・数秘術・月の満ち欠けを生年月日から即鑑定。",
    images: ["https://birthfacts.net/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function JaRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head />
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
            <nav className="flex items-center gap-3 sm:gap-5 text-sm text-[var(--muted)] min-w-0">
              <div className="hidden sm:flex gap-5">
                <a href="/ja/" className="hover:text-[var(--accent)] transition-colors">誕生日占い</a>
                <a href="/ja/uranai-ranking/" className="hover:text-[var(--accent)] transition-colors">🏆 今日の占い</a>
                <a href="/ja/aisho/" className="hover:text-[var(--accent)] transition-colors">💞 相性占い</a>
                <a href="/ja/nenrei-hayamihyo/" className="hover:text-[var(--accent)] transition-colors">年齢早見表</a>
                <a href="/ja/faq/" className="hover:text-[var(--accent)] transition-colors">よくある質問</a>
                <a href="/ja/about/" className="hover:text-[var(--accent)] transition-colors">このサイトについて</a>
              </div>
              <MobileMenu links={[
                { href: "/ja/", label: "誕生日占い" },
                { href: "/ja/uranai-ranking/", label: "🏆 今日の占いランキング" },
                { href: "/ja/aisho/", label: "💞 相性占い" },
                { href: "/ja/nenrei-hayamihyo/", label: "📅 年齢 早見表" },
                { href: "/ja/seiza-hayamihyo/", label: "♈ 星座 早見表" },
                { href: "/ja/gaju/", label: "🎊 賀寿 早見表" },
                { href: "/ja/yakudoshi/", label: "⚠️ 厄年 早見表" },
                { href: "/ja/dog-age-calculator/", label: "🐶 犬の年齢計算" },
                { href: "/ja/cat-age-calculator/", label: "🐱 猫の年齢計算" },
                { href: "/ja/days-between/", label: "📅 日数計算" },
                { href: "/ja/faq/", label: "❓ よくある質問" },
              ]} />
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
              <a href="/ja/uranai-ranking/" className="hover:text-[var(--accent)]">運勢ランキング</a>
              {" · "}
              <a href="/ja/aisho/" className="hover:text-[var(--accent)]">相性占い</a>
              {" · "}
              <a href="/ja/yakudoshi/" className="hover:text-[var(--accent)]">厄年 早見表</a>
              {" · "}
              <a href="/ja/gaju/" className="hover:text-[var(--accent)]">賀寿 早見表</a>
              {" · "}
              <a href="/ja/seiza-hayamihyo/" className="hover:text-[var(--accent)]">星座 早見表</a>
              {" · "}
              <a href="/ja/nenrei-hayamihyo/" className="hover:text-[var(--accent)]">年齢 早見表</a>
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
