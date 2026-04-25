"use client";

import { useMemo } from "react";
import { getDailyRanking, getLocalizedSignName } from "@/lib/dailyFortune";

const SIGN_EMOJI: Record<string, string> = {
  Aries: "♈", Taurus: "♉", Gemini: "♊", Cancer: "♋",
  Leo: "♌", Virgo: "♍", Libra: "♎", Scorpio: "♏",
  Sagittarius: "♐", Capricorn: "♑", Aquarius: "♒", Pisces: "♓",
};

const LABELS: Record<string, { title: string; link: string }> = {
  en: { title: "Today's Fortune Ranking", link: "Find out more →" },
  ja: { title: "今日の占いランキング",      link: "もっと見る →" },
  es: { title: "Ranking del Horóscopo de Hoy", link: "Ver más →" },
};

interface Props {
  locale: "en" | "ja" | "es";
  rankingHref: string;
}

export default function FortuneRankingTeaser({ locale, rankingHref }: Props) {
  const top5 = useMemo(() => getDailyRanking().slice(0, 5), []);
  const { title, link } = LABELS[locale] ?? LABELS.en;

  return (
    <div className="mt-6 card px-5 py-4">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-lg font-semibold text-[var(--accent)]">
          🏆 {title}
        </span>
        <a
          href={rankingHref}
          className="text-xs text-[var(--accent)] hover:underline whitespace-nowrap shrink-0"
        >
          {link}
        </a>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
        {top5.map((sign, i) => {
          const rank = i + 1;
          const name = getLocalizedSignName(sign, locale);
          const emoji = SIGN_EMOJI[sign] ?? "✨";

          return (
            <span key={sign} className="flex items-center gap-1 text-sm">
              <span className="text-[var(--muted)] font-medium">({rank})</span>
              <span className="text-base leading-none">{emoji}</span>
              {rank === 1 ? (
                <span
                  className="font-semibold text-[var(--text)]"
                  style={{
                    filter: "blur(5px)",
                    opacity: 0.55,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                  aria-hidden="true"
                >
                  {name}
                </span>
              ) : (
                <span className="font-medium text-[var(--text)]">{name}</span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
