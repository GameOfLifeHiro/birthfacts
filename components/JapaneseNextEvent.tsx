"use client";

import { useMemo, useState } from "react";
import {
  getNextGeneralEvent,
  getNextYakudoshiEvent,
  type LifeEvent,
} from "@/lib/japaneseLifeEvents";

interface Props {
  dob: Date;
  currentAge?: number;
}

function NextEventCard({
  event,
  label,
  isMajor,
  suffix,
}: {
  event: LifeEvent & { year: number };
  label: string;
  isMajor?: boolean;
  suffix?: string;
}) {
  return (
    <div className={`flex items-start gap-4 p-3 rounded-xl border ${isMajor ? "border-[var(--accent)]/40 bg-[var(--accent)]/5" : "border-[var(--card-border)]"}`}>
      <div className="stat-card text-center min-w-[64px] flex-shrink-0 py-2">
        <div className="text-2xl font-bold gradient-text">{event.kanji}</div>
        <div className="text-sm font-semibold text-[var(--accent)] mt-0.5">{event.age}歳</div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
          <span className="text-base">{label}</span>
          <span className="font-bold text-base text-[var(--text)]">{event.name}</span>
          {suffix && <span className="text-xs px-1.5 py-0.5 rounded-full bg-[var(--accent)]/20 text-[var(--accent)]">{suffix}</span>}
        </div>
        <div className="text-sm text-[var(--accent2)] mb-1">{event.year}年</div>
        <p className="text-base text-[var(--muted)] leading-relaxed">{event.description}</p>
      </div>
    </div>
  );
}

export default function JapaneseNextEvent({ dob, currentAge = 0 }: Props) {
  const [gender, setGender] = useState<"male" | "female" | null>(null);

  const dobYear = dob.getFullYear();

  const nextGeneralEvent = useMemo(
    () => getNextGeneralEvent(currentAge, gender, dobYear),
    [currentAge, gender, dobYear]
  );

  const nextYakudoshi = useMemo(
    () => getNextYakudoshiEvent(currentAge, gender, dobYear),
    [currentAge, gender, dobYear]
  );

  return (
    <div className="card p-5 border border-[var(--accent)]/30 space-y-4">
      <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider flex items-center gap-2">
        <span>🔔</span> 次の節目
      </h3>

      {/* Gender toggle */}
      <div>
        <p className="text-xs text-[var(--muted)] mb-2">性別を選ぶと厄年も表示されます</p>
        <div className="grid grid-cols-2 gap-2">
          {(["male", "female"] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGender(g === gender ? null : g)}
              className={`py-2 rounded-xl border text-sm font-bold transition-colors ${
                gender === g
                  ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                  : "border-[var(--card-border)] text-[var(--muted)] hover:border-[var(--accent)]"
              }`}
            >
              {g === "male" ? "男性" : "女性"}
            </button>
          ))}
        </div>
      </div>

      {/* Next general event (childhood / gaju) */}
      {nextGeneralEvent && (
        <NextEventCard
          event={nextGeneralEvent}
          label={nextGeneralEvent.type === "childhood" ? "🎏" : "🎊"}
        />
      )}

      {/* Next yakudoshi (when gender selected) */}
      {nextYakudoshi && (
        <NextEventCard
          event={nextYakudoshi}
          label="⚠️"
          isMajor={nextYakudoshi.isMajor}
          suffix={nextYakudoshi.isMajor ? "大厄" : undefined}
        />
      )}

      {!nextGeneralEvent && !nextYakudoshi && (
        <p className="text-sm text-[var(--muted)]">
          {currentAge < 55 && currentAge > 18 && !gender
            ? "性別を選ぶと厄年を表示します。"
            : "すべての節目を過ぎました。長寿をお祝い申し上げます！"}
        </p>
      )}

      {/* Links to standalone pages */}
      <div className="flex flex-wrap gap-3 pt-1 border-t border-[var(--card-border)] text-xs text-[var(--accent)]">
        <a href="/ja/yakudoshi/" className="hover:underline">厄年 早見表 →</a>
        <a href="/ja/gaju/" className="hover:underline">賀寿 早見表 →</a>
      </div>
    </div>
  );
}
