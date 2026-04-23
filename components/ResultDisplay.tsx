"use client";

import { useEffect, useState } from "react";
import { type AgeResult, formatNumber } from "@/lib/ageCalc";
import { useT } from "@/lib/i18n";
import BirthdayCountdown from "./BirthdayCountdown";
import DailyFortune from "./DailyFortune";

interface Props {
  result: AgeResult;
  dob: Date;
  sign?: string;
  japanSlot?: React.ReactNode;
  compatSlot?: React.ReactNode;
}

export default function ResultDisplay({ result, dob, sign, japanSlot, compatSlot }: Props) {
  const t = useT();
  const [mounted, setMounted] = useState(false);
  const [showStats, setShowStats] = useState(false);
  useEffect(() => setMounted(true), []);

  const stats = [
    { label: t.result.months, value: formatNumber(result.totalMonths) },
    { label: t.result.weeks, value: formatNumber(result.totalWeeks) },
    { label: t.result.days, value: formatNumber(result.totalDays) },
    { label: t.result.hours, value: formatNumber(result.totalHours) },
    { label: t.result.minutes, value: formatNumber(result.totalMinutes) },
  ];

  // Localised day-of-week
  const dayOfWeek = t.locale === "ja"
    ? ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"][dob.getDay()]
    : t.locale === "es"
    ? ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][dob.getDay()]
    : result.dayOfWeek;

  return (
    <div className="space-y-4">
      {/* Hero sentence */}
      <div className="card p-6 text-center">
        <p className="text-[var(--muted)] text-sm mb-2">{t.result.exactAge}</p>
        {t.locale === "ja" ? (
          <p className="text-2xl sm:text-3xl font-bold leading-tight">
            {t.result.youAre}{" "}
            <span className="gradient-text">
              {result.years}歳 {result.months}ヶ月 {result.days}日
            </span>
            {" "}{t.result.yearsOld}
          </p>
        ) : t.locale === "es" ? (
          <p className="text-2xl sm:text-3xl font-bold leading-tight">
            {t.result.youAre}{" "}
            <span className="gradient-text">
              {result.years} años, {result.months} meses, {result.days} días
            </span>
          </p>
        ) : (
          <p className="text-2xl sm:text-3xl font-bold leading-tight">
            {t.result.youAre}{" "}
            <span className="gradient-text">
              {result.years} years, {result.months} months, {result.days} days
            </span>{" "}
            {t.result.yearsOld}
          </p>
        )}
        <p className="text-[var(--muted)] text-sm mt-3">
          {t.result.bornOn} <span className="text-[var(--accent)] font-medium">{dayOfWeek}</span>
        </p>
      </div>

      {/* Daily fortune — prime position */}
      {sign && <DailyFortune sign={sign} />}

      {/* Compatibility teaser */}
      {compatSlot}

      {/* Japan-exclusive sections (次の節目, 元号, 九星気学…) */}
      {japanSlot}

      {/* More stats toggle */}
      <button
        onClick={() => setShowStats((v) => !v)}
        className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        aria-expanded={showStats}
      >
        <span className="text-xs">{showStats ? "▼" : "▶"}</span>
        {showStats ? t.fortune.hideStats : t.fortune.moreStats}
      </button>

      {showStats && mounted && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="text-2xl font-bold text-[var(--accent)]">{s.value}</div>
                <div className="text-xs text-[var(--muted)] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <BirthdayCountdown nextBirthday={result.nextBirthday} />
        </>
      )}
    </div>
  );
}
