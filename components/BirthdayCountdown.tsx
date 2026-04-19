"use client";

import { useEffect, useState } from "react";
import type { NextBirthday } from "@/lib/ageCalc";
import { useT } from "@/lib/i18n";

interface Props {
  nextBirthday: NextBirthday;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeUntil(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function BirthdayCountdown({ nextBirthday }: Props) {
  const t = useT();
  const [timeLeft, setTimeLeft] = useState(() => getTimeUntil(nextBirthday.date));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntil(nextBirthday.date));
    }, 1000);
    return () => clearInterval(interval);
  }, [nextBirthday.date]);

  if (nextBirthday.isToday) {
    return (
      <div className="card p-6 text-center border-[var(--accent2)] border-2">
        <div className="text-4xl mb-2">🎂</div>
        <p className="text-2xl font-bold gradient-text">{t.countdown.happyBirthday}</p>
        <p className="text-[var(--muted)] text-sm mt-1">{t.countdown.todayIsYourDay}</p>
      </div>
    );
  }

  return (
    <div className="card p-5">
      <p className="text-center text-sm text-[var(--muted)] mb-3">
        {t.countdown.nextBirthdayIn}{" "}
        <span className="text-[var(--accent)] font-semibold">{nextBirthday.daysUntil} {t.countdown.countdownDays}</span>
      </p>
      <div className="grid grid-cols-4 gap-2 text-center">
        {[
          { label: t.countdown.days, value: timeLeft.days },
          { label: t.countdown.hours, value: timeLeft.hours },
          { label: t.countdown.minutes, value: timeLeft.minutes },
          { label: t.countdown.seconds, value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div key={label} className="stat-card">
            <div className="text-2xl font-bold font-mono text-[var(--accent2)]">
              {pad(value)}
            </div>
            <div className="text-xs text-[var(--muted)] mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
