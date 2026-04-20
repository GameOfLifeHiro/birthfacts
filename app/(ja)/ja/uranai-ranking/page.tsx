import type { Metadata } from "next";
import DailyFortuneRanking from "@/components/DailyFortuneRanking";

export const metadata: Metadata = {
  title: "今日の運勢 ランキング｜12星座占い 無料｜BirthFacts",
  description:
    "おひつじ座・おうし座・ふたご座・かに座・しし座・おとめ座・てんびん座・さそり座・いて座・やぎ座・みずがめ座・うお座の今日の運勢をランキング形式で無料公開。毎日0時に更新。",
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
      ja: "https://birthfacts.net/ja/uranai-ranking/",
      es: "https://birthfacts.net/es/horoscopo-ranking/",
    },
  },
};

export default function UranaiRankingPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          <span className="gradient-text">今日の運勢 ランキング</span>
        </h1>
        <p className="text-[var(--muted)] text-base max-w-lg mx-auto">
          12星座の今日の運勢をランキング形式で無料公開。あなたの星座は何位？
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
    </div>
  );
}
