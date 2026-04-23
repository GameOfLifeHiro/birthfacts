"use client";

import { useT } from "@/lib/i18n";
import { getDailyFortune, getLocalizedSignName } from "@/lib/dailyFortune";

interface Props {
  sign: string; // English sign name, e.g. "Scorpio"
}

const RANKING_PATHS: Record<string, string> = {
  en: "/fortune-ranking/",
  ja: "/ja/uranai-ranking/",
  es: "/es/horoscopo-ranking/",
};

export default function DailyFortune({ sign }: Props) {
  const t = useT();
  const fortune = getDailyFortune(sign, t.locale);
  const localizedSign = getLocalizedSignName(sign, t.locale);

  // Format today's date in the current locale
  const today = new Date().toLocaleDateString(
    t.locale === "ja" ? "ja-JP" : t.locale === "es" ? "es-ES" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  // Build heading with localized sign name
  const heading =
    t.locale === "ja"
      ? `${t.fortune.title} — ${localizedSign}`
      : `${t.fortune.title}${t.fortune.for ? ` ${t.fortune.for}` : ""} ${localizedSign}`;

  const rankingPath = RANKING_PATHS[t.locale] ?? RANKING_PATHS.en;

  return (
    <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-5 space-y-3">
      {/* Header row */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-xl">✨</span>
          <h3 className="font-semibold text-base text-[var(--foreground)]">
            {heading}
          </h3>
        </div>
        <span className="text-sm text-[var(--muted)]">{today}</span>
      </div>

      {/* Fortune text */}
      <p className="text-base leading-relaxed text-[var(--foreground)]">
        {fortune}
      </p>

      {/* Refreshes note + link to all signs ranking */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <p className="text-sm text-[var(--muted)] flex items-center gap-1">
          <span>🔄</span>
          <span>{t.fortune.refreshes}</span>
        </p>
        <a
          href={rankingPath}
          className="text-sm text-[var(--accent)] hover:opacity-80 transition-opacity"
        >
          {t.fortune.allSignsLink}
        </a>
      </div>
    </div>
  );
}
