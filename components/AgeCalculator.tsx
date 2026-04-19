"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { calculateAge, type AgeResult } from "@/lib/ageCalc";
import ResultDisplay from "./ResultDisplay";
import BirthProfile from "./BirthProfile";
import HistoricalTimeline from "./HistoricalTimeline";
import LifeTimeline from "./LifeTimeline";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getDaysInMonth(month: number, year: number): number {
  // month is 1-based; new Date(year, month, 0) gives the last day of that month
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
  "flex-1 bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-3 py-3 text-[var(--text)] text-base focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none cursor-pointer";

export default function AgeCalculator() {
  const currentYear = new Date().getFullYear();

  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [copied, setCopied] = useState(false);

  const dob = useMemo(() => buildDobString(year, month, day), [year, month, day]);

  // Clamp day when month/year changes
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
    window.history.replaceState({}, "", `/?dob=${dob}`);
  }, [dob]);

  const handleShare = useCallback(async () => {
    const url = `${window.location.origin}/?dob=${dob}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link:", url);
    }
  }, [dob]);

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
        <h2 className="text-lg font-semibold mb-4 text-[var(--accent)]">Enter your date of birth</h2>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-2">
            {/* Month */}
            <div className="relative">
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className={SELECT_CLASS}
              >
                <option value="">Month</option>
                {MONTHS.map((m, i) => (
                  <option key={m} value={String(i + 1)}>{m}</option>
                ))}
              </select>
            </div>

            {/* Day */}
            <div className="relative">
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className={SELECT_CLASS}
              >
                <option value="">Day</option>
                {dayOptions.map((d) => (
                  <option key={d} value={String(d)}>{d}</option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div className="relative">
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className={SELECT_CLASS}
              >
                <option value="">Year</option>
                {yearOptions.map((y) => (
                  <option key={y} value={String(y)}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            disabled={!dob}
            className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Calculate
          </button>
        </div>
      </div>

      {/* Results */}
      {result && (
        <>
          <ResultDisplay result={result} dob={new Date(dob + "T00:00:00")} />
          <BirthProfile dob={new Date(dob + "T00:00:00")} />

          {/* Tier 3 — Historical & Life Timeline */}
          <div className="space-y-4 mt-2">
            <h2 className="text-center text-xl font-bold gradient-text pt-2">Your Life in History</h2>
            <HistoricalTimeline birthYear={new Date(dob + "T00:00:00").getFullYear()} />
            <LifeTimeline dob={new Date(dob + "T00:00:00")} currentAge={result.years + result.months / 12} />
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--card-border)] text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            >
              {copied ? "✓ Link copied!" : "🔗 Share this result"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
