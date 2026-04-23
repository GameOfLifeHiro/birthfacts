"use client";

import { useState } from "react";
import { useT } from "@/lib/i18n";
import { ALL_SIGNS, SIGN_NAMES_JA, SIGN_NAMES_ES } from "@/lib/dailyFortune";
import { getCompatibility } from "@/lib/compatibility";

const COMPAT_PATHS: Record<string, string> = {
  en: "/compatibility/",
  ja: "/ja/aisho/",
  es: "/es/compatibilidad/",
};

interface Props {
  userSign: string; // English sign name, e.g. "Scorpio"
}

function getSignDisplay(sign: string, locale: string): string {
  if (locale === "ja") return SIGN_NAMES_JA[sign] ?? sign;
  if (locale === "es") return SIGN_NAMES_ES[sign] ?? sign;
  return sign;
}

function ScoreBar({ score }: { score: number }) {
  const pct = (score / 10) * 100;
  const color =
    score >= 8 ? "var(--accent)" : score >= 6 ? "#f59e0b" : "#ef4444";
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 rounded-full bg-[var(--card-border)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-sm font-bold tabular-nums" style={{ color }}>
        {score}/10
      </span>
    </div>
  );
}

export default function CompatibilityTeaser({ userSign }: Props) {
  const t = useT();
  const [partnerSign, setPartnerSign] = useState("");
  const c = t.compatibility;
  if (!c) return null;

  const pair = partnerSign ? getCompatibility(userSign, partnerSign) : null;
  const fullPath = COMPAT_PATHS[t.locale] ?? COMPAT_PATHS.en;
  const fullReadingHref = partnerSign
    ? `${fullPath}?a=${encodeURIComponent(userSign)}&b=${encodeURIComponent(partnerSign)}`
    : fullPath;

  const signOptions = ALL_SIGNS.filter((s) => s !== userSign);

  return (
    <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-5 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xl">💞</span>
        <h3 className="font-semibold text-base">{c.teaserTitle}</h3>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {/* User's sign badge */}
        <span className="px-3 py-1.5 rounded-lg bg-[var(--accent)] text-white text-sm font-medium shrink-0">
          {getSignDisplay(userSign, t.locale)}
        </span>
        <span className="text-[var(--muted)]">×</span>
        {/* Partner sign select */}
        <select
          value={partnerSign}
          onChange={(e) => setPartnerSign(e.target.value)}
          className="flex-1 min-w-[140px] bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-3 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors cursor-pointer appearance-none"
          aria-label={c.partnerSign}
        >
          <option value="">{c.teaserPlaceholder}</option>
          {signOptions.map((s) => (
            <option key={s} value={s}>
              {getSignDisplay(s, t.locale)}
            </option>
          ))}
        </select>
      </div>

      {pair && (
        <div className="space-y-2 pt-1">
          <ScoreBar score={pair.score} />
          <p className="text-sm font-medium text-[var(--accent)]">{pair.summary}</p>
          <p className="text-sm text-[var(--muted)] line-clamp-2">{pair.description}</p>
        </div>
      )}

      <a
        href={fullReadingHref}
        className="inline-flex items-center gap-1 text-sm text-[var(--accent)] hover:underline font-medium"
      >
        {c.fullReadingLink}
      </a>
    </div>
  );
}
