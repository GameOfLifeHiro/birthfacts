"use client";

import { useT } from "@/lib/i18n";
import { getDailyFortune } from "@/lib/dailyFortune";

interface Props {
  sign: string; // English sign name, e.g. "Scorpio"
}

export default function DailyFortune({ sign }: Props) {
  const t = useT();
  const fortune = getDailyFortune(sign, t.locale);

  // Format today's date in the current locale
  const today = new Date().toLocaleDateString(
    t.locale === "ja" ? "ja-JP" : t.locale === "es" ? "es-ES" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  // Build the heading: "Today's Fortune for Scorpio" / "今日の運勢 — 蠍座" / "Tu Horóscopo de Hoy para Escorpio"
  const heading =
    t.locale === "ja"
      ? `${t.fortune.title} — ${sign}`
      : `${t.fortune.title}${t.fortune.for ? ` ${t.fortune.for}` : ""} ${sign}`;

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
        <span className="text-xs text-[var(--muted)]">{today}</span>
      </div>

      {/* Fortune text */}
      <p className="text-base leading-relaxed text-[var(--foreground)]">
        {fortune}
      </p>

      {/* Refreshes note */}
      <p className="text-xs text-[var(--muted)] flex items-center gap-1">
        <span>🔄</span>
        <span>{t.fortune.refreshes}</span>
      </p>
    </div>
  );
}
