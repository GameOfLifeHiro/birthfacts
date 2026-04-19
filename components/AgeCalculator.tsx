"use client";

import { useState, useEffect, useCallback } from "react";
import { calculateAge, type AgeResult } from "@/lib/ageCalc";
import ResultDisplay from "./ResultDisplay";
import BirthProfile from "./BirthProfile";
import HistoricalTimeline from "./HistoricalTimeline";
import LifeTimeline from "./LifeTimeline";

function getTodayString() {
  return new Date().toISOString().split("T")[0];
}

function getDobFromUrl(): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  return params.get("dob") || "";
}

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const urlDob = getDobFromUrl();
    if (urlDob) {
      setDob(urlDob);
      const date = new Date(urlDob + "T00:00:00");
      if (!isNaN(date.getTime())) {
        setResult(calculateAge(date));
      }
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

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Input card */}
      <div className="card p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-[var(--accent)]">Enter your date of birth</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="date"
            value={dob}
            max={getTodayString()}
            min="1900-01-01"
            onChange={(e) => setDob(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
            className="flex-1 bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text)] text-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
          <button onClick={handleCalculate} className="btn-primary whitespace-nowrap">
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
