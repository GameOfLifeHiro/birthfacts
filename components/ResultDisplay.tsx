"use client";

import { useEffect, useState } from "react";
import { type AgeResult, formatNumber } from "@/lib/ageCalc";
import BirthdayCountdown from "./BirthdayCountdown";

interface Props {
  result: AgeResult;
  dob: Date;
}

export default function ResultDisplay({ result, dob }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const stats = [
    { label: "Months", value: formatNumber(result.totalMonths) },
    { label: "Weeks", value: formatNumber(result.totalWeeks) },
    { label: "Days", value: formatNumber(result.totalDays) },
    { label: "Hours", value: formatNumber(result.totalHours) },
    { label: "Minutes", value: formatNumber(result.totalMinutes) },
  ];

  return (
    <div className="space-y-4">
      {/* Hero sentence */}
      <div className="card p-6 text-center">
        <p className="text-[var(--muted)] text-sm mb-2">Your exact age</p>
        <p className="text-2xl sm:text-3xl font-bold leading-tight">
          You are{" "}
          <span className="gradient-text">
            {result.years} years, {result.months} months, {result.days} days
          </span>{" "}
          old
        </p>
        <p className="text-[var(--muted)] text-sm mt-3">
          Born on a <span className="text-[var(--accent)] font-medium">{result.dayOfWeek}</span>
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {mounted && stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="text-2xl font-bold text-[var(--accent)]">{s.value}</div>
            <div className="text-xs text-[var(--muted)] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Birthday countdown */}
      <BirthdayCountdown nextBirthday={result.nextBirthday} />
    </div>
  );
}
