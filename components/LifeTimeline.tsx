"use client";

import { useMemo } from "react";
import { getYearFacts } from "@/lib/historicalData";

interface Props {
  dob: Date;
  currentAge: number;
}

const MILESTONES = [
  { age: 0, label: "Born", icon: "🐣" },
  { age: 5, label: "Age 5", icon: "🎒" },
  { age: 10, label: "Age 10", icon: "📚" },
  { age: 13, label: "Teen", icon: "🎮" },
  { age: 18, label: "Adult", icon: "🎓" },
  { age: 21, label: "Age 21", icon: "🥂" },
  { age: 30, label: "Age 30", icon: "✨" },
  { age: 40, label: "Age 40", icon: "💼" },
  { age: 50, label: "Age 50", icon: "🌟" },
  { age: 60, label: "Age 60", icon: "🌿" },
  { age: 70, label: "Age 70", icon: "🏡" },
];

// One highlighted world event per milestone year (for annotation)
const MILESTONE_WORLD_EVENTS: Record<number, string> = {
  1924: "Lenin dies", 1929: "Wall Street Crash", 1933: "Hitler becomes Chancellor",
  1939: "WWII begins", 1945: "WWII ends — Atomic bomb", 1950: "Korean War",
  1953: "DNA discovered", 1955: "Rosa Parks refuses", 1957: "Sputnik launched",
  1961: "Berlin Wall built", 1963: "JFK assassinated", 1966: "Cultural Revolution",
  1969: "Moon landing", 1972: "Watergate", 1973: "Oil crisis",
  1975: "Microsoft founded", 1977: "Star Wars released", 1979: "Iran Revolution",
  1981: "AIDS epidemic", 1984: "Apple Mac launched", 1985: "Live Aid",
  1986: "Chernobyl", 1989: "Berlin Wall falls", 1991: "Soviet Union collapses",
  1994: "Mandela elected", 1995: "Windows 95 launched", 1997: "Diana dies",
  1998: "Google founded", 1999: "Columbine", 2001: "9/11 attacks",
  2003: "Iraq War", 2004: "Facebook founded", 2007: "iPhone launched",
  2008: "Global financial crisis", 2009: "Obama inaugurated", 2010: "Arab Spring",
  2011: "Bin Laden killed", 2012: "Sandy Hook", 2015: "Paris attacks",
  2016: "Brexit & Trump elected", 2017: "Me Too movement", 2019: "COVID detected",
  2020: "COVID pandemic", 2021: "Capitol riot", 2022: "Ukraine War",
  2023: "AI revolution (ChatGPT)", 2024: "AI transforms everything",
};

export default function LifeTimeline({ dob, currentAge }: Props) {
  const birthYear = dob.getFullYear();

  const visibleMilestones = useMemo(() => {
    return MILESTONES.filter((m) => m.age <= currentAge + 1);
  }, [currentAge]);

  return (
    <div className="card p-5">
      <h3 className="font-bold text-lg mb-1">
        <span className="gradient-text">Your Life Timeline</span>
      </h3>
      <p className="text-base text-[var(--muted)] mb-6">
        Key moments in your life, and what was happening in the world at each milestone.
      </p>

      {/* Vertical timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--card-border)]" />

        <div className="space-y-6">
          {visibleMilestones.map((milestone, idx) => {
            const milestoneYear = birthYear + milestone.age;
            const isPast = milestone.age < currentAge;
            const isCurrent = milestone.age === Math.floor(currentAge);
            const worldEvent = MILESTONE_WORLD_EVENTS[milestoneYear];
            const yearFacts = getYearFacts(milestoneYear);
            const topEvent = yearFacts?.worldEvents[0];

            return (
              <div key={milestone.age} className="flex items-start gap-4">
                {/* Icon / dot */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0 border-2 ${
                    isCurrent
                      ? "border-[var(--accent2)] bg-[var(--bg)] shadow-lg shadow-[var(--accent2)]/20"
                      : isPast
                      ? "border-[var(--accent)] bg-[var(--bg)]"
                      : "border-[var(--card-border)] bg-[var(--bg)] opacity-40"
                  }`}
                >
                  {milestone.icon}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`font-semibold text-base ${
                        isCurrent ? "text-[var(--accent2)]" : isPast ? "text-[var(--accent)]" : "text-[var(--muted)]"
                      }`}
                    >
                      {milestone.label}
                      {isCurrent && <span className="ml-1 text-sm text-[var(--accent2)]">← You are here</span>}
                    </span>
                    <span className="text-xs text-[var(--muted)] border border-[var(--card-border)] rounded-full px-2 py-0.5">
                      {milestoneYear}
                    </span>
                  </div>

                  {/* World event for this milestone year */}
                  {(worldEvent || topEvent) && milestone.age <= currentAge && (
                    <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">
                      🌍 {worldEvent ?? topEvent}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          {/* Current age dot if not on a milestone */}
          {!visibleMilestones.find((m) => m.age === Math.floor(currentAge)) && (
            <div className="flex items-start gap-4">
              <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0 border-2 border-[var(--accent2)] bg-[var(--bg)] shadow-lg shadow-[var(--accent2)]/20">
                📍
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-base text-[var(--accent2)]">
                    Age {Math.floor(currentAge)} — Today
                  </span>
                  <span className="text-xs text-[var(--muted)] border border-[var(--card-border)] rounded-full px-2 py-0.5">
                    {new Date().getFullYear()}
                  </span>
                </div>
                <p className="text-sm text-[var(--muted)] mt-1">You are here</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
