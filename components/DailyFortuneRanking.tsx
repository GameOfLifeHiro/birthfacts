"use client";

import { useT } from "@/lib/i18n";
import {
  getDailyRanking,
  getDailyFortune,
  getLocalizedSignName,
} from "@/lib/dailyFortune";

const SIGN_SYMBOLS: Record<string, string> = {
  Aries: "♈", Taurus: "♉", Gemini: "♊", Cancer: "♋",
  Leo: "♌", Virgo: "♍", Libra: "♎", Scorpio: "♏",
  Sagittarius: "♐", Capricorn: "♑", Aquarius: "♒", Pisces: "♓",
};

const RANK_STYLES: Record<number, { badge: string; border: string; label?: string }> = {
  1:  { badge: "bg-yellow-400 text-yellow-900",  border: "border-yellow-400/40" },
  2:  { badge: "bg-gray-300 text-gray-800",       border: "border-gray-300/30" },
  3:  { badge: "bg-amber-600 text-amber-100",     border: "border-amber-600/30" },
};

export default function DailyFortuneRanking() {
  const t = useT();
  const ranking = getDailyRanking();

  const today = new Date().toLocaleDateString(
    t.locale === "ja" ? "ja-JP" : t.locale === "es" ? "es-ES" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-base text-[var(--muted)]">{today}</p>
        <p className="text-sm text-[var(--muted)] mt-1 flex items-center justify-center gap-1">
          <span>🔄</span>
          <span>{t.fortune.updatesNote}</span>
        </p>
      </div>

      {/* Ranked list */}
      <ol className="space-y-2">
        {ranking.map((sign, index) => {
          const rank = index + 1;
          const fortune = getDailyFortune(sign, t.locale);
          const localizedName = getLocalizedSignName(sign, t.locale);
          const symbol = SIGN_SYMBOLS[sign];
          const style = RANK_STYLES[rank];
          const isTop3 = rank <= 3;
          const isBottom3 = rank >= 10;

          const excerpt = fortune;

          return (
            <li
              key={sign}
              className={`flex items-start gap-3 p-3 rounded-xl border transition-colors ${
                isTop3
                  ? `bg-[var(--card)] ${style?.border ?? "border-[var(--card-border)]"}`
                  : "border-[var(--card-border)] bg-[var(--card)]"
              } ${isBottom3 ? "opacity-70" : ""}`}
            >
              {/* Rank badge */}
              <div
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  style
                    ? style.badge
                    : "bg-[var(--card-border)] text-[var(--muted)]"
                }`}
                aria-label={`Rank ${rank}`}
              >
                {rank}
              </div>

              {/* Sign + fortune */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-lg" aria-hidden="true">{symbol}</span>
                  <span className="font-semibold text-base text-[var(--foreground)]">
                    {localizedName}
                  </span>
                  {rank === 1 && (
                    <span className="text-sm px-1.5 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 font-medium">
                      {t.fortune.luckiestToday}
                    </span>
                  )}
                  {rank === 12 && (
                    <span className="text-sm px-1.5 py-0.5 rounded-full bg-[var(--card-border)] text-[var(--muted)]">
                      {t.fortune.toughDay}
                    </span>
                  )}
                </div>
                <p className="text-base text-[var(--muted)] mt-1 leading-relaxed">
                  {excerpt}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
