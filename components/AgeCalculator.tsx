"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { calculateAge, type AgeResult } from "@/lib/ageCalc";
import { useT } from "@/lib/i18n";
import ResultDisplay from "./ResultDisplay";

// Lazy-load heavy post-calculation components so they don't block initial page render.
// BirthProfile imports all locale data maps; HistoricalTimeline imports 100 years of facts.
// Neither is visible until after the user clicks Calculate.
const BirthProfile = dynamic(() => import("./BirthProfile"));
const HistoricalTimeline = dynamic(() => import("./HistoricalTimeline"));
const LifeTimeline = dynamic(() => import("./LifeTimeline"));

// Locale-specific month names
const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTHS_JA = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const MONTHS_ES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}

function buildDobString(year: string, month: string, day: string): string {
  if (!year || !month || !day) return "";
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function parseDobString(dob: string): { year: string; month: string; day: string } {
  if (!dob) return { year: "", month: "", day: "" };
  const [y, m, d] = dob.split("-");
  return {
    year: y ?? "",
    month: String(parseInt(m ?? "0", 10)),
    day: String(parseInt(d ?? "0", 10)),
  };
}

function getDobFromUrl(): string {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get("dob") || "";
}

const SELECT_CLASS =
  "w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-3 py-3 text-[var(--text)] text-base focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none cursor-pointer";

interface Props {
  /** Base path for share URL, e.g. "/" or "/ja/". Defaults to "/". */
  basePath?: string;
  /** Show Japan-exclusive profile sections */
  showJapanFeatures?: boolean;
}

export default function AgeCalculator({ basePath = "/", showJapanFeatures = false }: Props) {
  const t = useT();
  const currentYear = new Date().getFullYear();
  const MONTHS = t.locale === "ja" ? MONTHS_JA : t.locale === "es" ? MONTHS_ES : MONTHS_EN;

  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [copied, setCopied] = useState(false);

  const dob = useMemo(() => buildDobString(year, month, day), [year, month, day]);

  const maxDay = month && year ? getDaysInMonth(parseInt(month), parseInt(year)) : 31;
  useEffect(() => {
    if (day && parseInt(day) > maxDay) setDay(String(maxDay));
  }, [maxDay, day]);

  useEffect(() => {
    const urlDob = getDobFromUrl();
    if (urlDob) {
      const { year: y, month: m, day: d } = parseDobString(urlDob);
      setYear(y); setMonth(m); setDay(d);
      const date = new Date(urlDob + "T00:00:00");
      if (!isNaN(date.getTime())) setResult(calculateAge(date));
    }
  }, []);

  const handleCalculate = useCallback(() => {
    if (!dob) return;
    const date = new Date(dob + "T00:00:00");
    if (isNaN(date.getTime())) return;
    setResult(calculateAge(date));
    window.history.replaceState({}, "", `${basePath}?dob=${dob}`);
  }, [dob, basePath]);

  const handleShare = useCallback(async () => {
    const url = `${window.location.origin}${basePath}?dob=${dob}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link:", url);
    }
  }, [dob, basePath]);

  const yearOptions = useMemo(() => {
    const opts = [];
    for (let y = currentYear; y >= 1900; y--) opts.push(y);
    return opts;
  }, [currentYear]);

  const dayOptions = useMemo(() => {
    const count = month && year ? getDaysInMonth(parseInt(month), parseInt(year)) : 31;
    return Array.from({ length: count }, (_, i) => i + 1);
  }, [month, year]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Input card */}
      <div className="card p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-[var(--accent)]">{t.input.sectionTitle}</h2>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              aria-label={t.input.monthPlaceholder}
              className={`${SELECT_CLASS} basis-5/12`}
            >
              <option value="">{t.input.monthPlaceholder}</option>
              {MONTHS.map((m, i) => (
                <option key={m} value={String(i + 1)}>{m}</option>
              ))}
            </select>

            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              aria-label={t.input.dayPlaceholder}
              className={`${SELECT_CLASS} basis-3/12`}
            >
              <option value="">{t.input.dayPlaceholder}</option>
              {dayOptions.map((d) => (
                <option key={d} value={String(d)}>{d}</option>
              ))}
            </select>

            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              aria-label={t.input.yearPlaceholder}
              className={`${SELECT_CLASS} basis-4/12`}
            >
              <option value="">{t.input.yearPlaceholder}</option>
              {yearOptions.map((y) => (
                <option key={y} value={String(y)}>{y}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleCalculate}
            disabled={!dob}
            className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {t.input.calculateButton}
          </button>
        </div>
      </div>

      {/* Results */}
      {result && (
        <>
          <ResultDisplay result={result} dob={new Date(dob + "T00:00:00")} />
          <BirthProfile dob={new Date(dob + "T00:00:00")} showJapanFeatures={showJapanFeatures} />

          <div className="space-y-4 mt-2">
            <h2 className="text-center text-xl font-bold gradient-text pt-2">
              {t.history.heading} {new Date(dob + "T00:00:00").getFullYear()}
            </h2>
            <HistoricalTimeline birthYear={new Date(dob + "T00:00:00").getFullYear()} />
            <LifeTimeline dob={new Date(dob + "T00:00:00")} currentAge={result.years + result.months / 12} />
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--card-border)] text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            >
              {copied ? "✓" : "🔗"}{" "}
              {copied
                ? (t.locale === "ja" ? "リンクをコピーしました！" : t.locale === "es" ? "¡Enlace copiado!" : "Link copied!")
                : (t.locale === "ja" ? "結果をシェアする" : t.locale === "es" ? "Compartir resultado" : "Share this result")}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
