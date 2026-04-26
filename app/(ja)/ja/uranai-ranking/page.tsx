import type { Metadata } from "next";
import DailyFortuneRanking from "@/components/DailyFortuneRanking";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JaToolsSection from "@/components/JaToolsSection";

export const metadata: Metadata = {
  title: "今日の占い ランキング｜12星座 無料｜BirthFacts",
  description:
    "おひつじ座・おうし座・ふたご座・かに座・しし座・おとめ座・てんびん座・さそり座・いて座・やぎ座・みずがめ座・うお座の今日の占いをランキング形式で無料公開。毎日0時に更新。",
  keywords: [
    "今日の運勢 ランキング",
    "12星座 今日の運勢",
    "星座占い 今日 ランキング",
    "星座ランキング 今日",
    "今日の運勢 無料",
    "12星座占い 無料",
    "めざまし 占い",
  ],
  alternates: {
    canonical: "https://birthfacts.net/ja/uranai-ranking/",
    languages: {
      en: "https://birthfacts.net/fortune-ranking/",
      es: "https://birthfacts.net/es/horoscopo-ranking/",
      ja: "https://birthfacts.net/ja/uranai-ranking/",
      "x-default": "https://birthfacts.net/fortune-ranking/",
    },
  },
  openGraph: {
    title: "今日の占い ランキング｜12星座 無料｜BirthFacts",
    description: "今日いちばん運勢がいい星座は？12星座の今日の占いをランキング形式で無料公開。毎日0時に更新。",
    url: "https://birthfacts.net/ja/uranai-ranking/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "今日の占いランキング – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "今日の占い ランキング｜12星座 無料｜BirthFacts",
    description: "12星座の今日の運勢をランキング形式で無料公開。毎日0時に更新。",
    images: ["https://birthfacts.net/og-image.png"],
  },
};

export default function UranaiRankingPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <BreadcrumbSchema items={[{ name: "ホーム", href: "/ja/" }, { name: "今日の占い ランキング", href: "/ja/uranai-ranking/" }]} />
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          <span className="gradient-text">今日の占い ランキング</span>
        </h1>
        <p className="text-[var(--muted)] text-base max-w-lg mx-auto">
          12星座の今日の占いをランキング形式で無料公開。<br />あなたの星座は何位？
        </p>
      </div>

      <DailyFortuneRanking />

      <div className="mt-10 text-center">
        <a
          href="/ja/"
          className="text-sm text-[var(--accent)] hover:opacity-80 transition-opacity"
        >
          ← 生年月日を入力して、あなただけの誕生日占いを見る
        </a>
      </div>

      {/* FAQ */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-bold gradient-text">よくある質問</h2>
        {[
          { q: "毎日の占いランキングはどうやって決まるの？", a: "各星座の運勢は、日付をもとにした決定論的な日替わりローテーションで生成されます。12星座が順番に1位になるように設計されており、毎日の楽しみや自己観察のためのコンテンツです。予言や予測を目的としたものではありません。" },
          { q: "ランキングは毎日変わりますか？", a: "はい。占いランキングは毎日0時に自動更新され、同じ日にアクセスする全員に同じ結果が表示されます。新しい日のランキングを見るには、0時以降にページを更新してください。" },
          { q: "運勢の順位はどういう意味ですか？", a: "各星座はラッキーナンバー、ラッキーカラー、今日の運勢メッセージを受け取ります。1位〜12位のランクは、その日のその星座のエネルギーの強さを表しています。" },
          { q: "自分の星座の運勢だけ見られますか？", a: "はい。トップページで生年月日を入力すると、あなたの星座の運勢カードが個人の誕生日プロフィールの中に表示され、12星座中の順位も確認できます。" },
        ].map(({ q, a }) => (
          <details key={q} className="card p-4 group">
            <summary className="font-semibold cursor-pointer text-base list-none flex justify-between items-center">
              {q}
              <span className="text-[var(--muted)] group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">{a}</p>
          </details>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "毎日の占いランキングはどうやって決まるの？", acceptedAnswer: { "@type": "Answer", text: "各星座の運勢は、日付をもとにした決定論的な日替わりローテーションで生成されます。12星座が順番に1位になるように設計されており、毎日の楽しみや自己観察のためのコンテンツです。" } },
              { "@type": "Question", name: "ランキングは毎日変わりますか？", acceptedAnswer: { "@type": "Answer", text: "はい。占いランキングは毎日0時に自動更新され、同じ日にアクセスする全員に同じ結果が表示されます。" } },
              { "@type": "Question", name: "運勢の順位はどういう意味ですか？", acceptedAnswer: { "@type": "Answer", text: "各星座はラッキーナンバー、ラッキーカラー、今日の運勢メッセージを受け取ります。1位〜12位のランクは、その日のその星座のエネルギーの強さを表しています。" } },
              { "@type": "Question", name: "自分の星座の運勢だけ見られますか？", acceptedAnswer: { "@type": "Answer", text: "はい。トップページで生年月日を入力すると、あなたの星座の運勢カードが個人の誕生日プロフィールの中に表示され、12星座中の順位も確認できます。" } },
            ],
          }),
        }}
      />

      <JaToolsSection />
    </div>
  );
}
