"use client";

import { useMemo, useState } from "react";
import { getJapaneseEra } from "@/lib/birthProfile";
import { getShichuProfile } from "@/lib/shichu";
import { getKyusei } from "@/lib/kyusei";
import { getBloodTypeProfile, type BloodType } from "@/lib/bloodType";
import { useT } from "@/lib/i18n";
import {
  CHILDHOOD_EVENTS,
  GAJU_EVENTS,
  YAKUDOSHI_MALE,
  YAKUDOSHI_FEMALE,
  getVisibleChildhoodEvents,
  getNextEvent,
  type LifeEvent,
  type ChildhoodEvent,
} from "@/lib/japaneseLifeEvents";

interface Props {
  dob: Date;
  currentAge?: number;
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="card p-5">
      <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-3 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      {children}
    </div>
  );
}

function GogyoBar({ label, count, total, color }: { label: string; count: number; total: number; color: string }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm w-6 text-center font-bold" style={{ color }}>{label}</span>
      <div className="flex-1 bg-[var(--card-border)] rounded-full h-2">
        <div className="h-2 rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <span className="text-xs text-[var(--muted)] w-6 text-right">{count}</span>
    </div>
  );
}

export default function JapaneseProfile({ dob, currentAge = 0 }: Props) {
  const t = useT();
  const jt = t.japan!;

  const era = useMemo(() => getJapaneseEra(dob), [dob]);
  const shichu = useMemo(() => getShichuProfile(dob), [dob]);
  const kyusei = useMemo(() => getKyusei(dob.getFullYear(), dob.getMonth() + 1, dob.getDate()), [dob]);

  const [bloodType, setBloodType] = useState<BloodType | "">("");
  const [gender, setGender] = useState<"male" | "female" | null>(null);

  const nextEvent = useMemo(
    () => getNextEvent(currentAge, gender, dob.getFullYear()),
    [currentAge, gender, dob]
  );

  const visibleChildhood = useMemo(
    () => getVisibleChildhoodEvents(gender),
    [gender]
  );

  const currentYear = new Date().getFullYear();
  const bloodProfile = bloodType ? getBloodTypeProfile(bloodType) : null;

  const totalPillars = 3;
  const gogyoColors: Record<string, string> = {
    Wood: "#22c55e",
    Fire: "#f97316",
    Earth: "#eab308",
    Metal: "#9ca3af",
    Water: "#60a5fa",
  };
  const gogyoLabels: Record<string, string> = {
    Wood: "木", Fire: "火", Earth: "土", Metal: "金", Water: "水",
  };

  return (
    <div className="space-y-4">
      <div className="text-center pt-2">
        <h2 className="text-xl font-bold gradient-text">日本の暦・占い</h2>
        <p className="text-sm text-[var(--muted)] mt-1">元号・干支・四柱推命・九星気学</p>
      </div>

      {/* ─── 次の節目 ─────────────────────────────────────────────── */}
      {nextEvent && (
        <div className="card p-5 border border-[var(--accent)]/30">
          <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-3 flex items-center gap-2">
            <span>🔔</span> 次の節目
          </h3>
          <div className="flex items-start gap-4">
            <div className="stat-card text-center min-w-[72px] flex-shrink-0">
              <div className="text-2xl font-bold gradient-text">{nextEvent.kanji}</div>
              <div className="text-sm font-semibold text-[var(--accent)] mt-0.5">{nextEvent.age}歳</div>
            </div>
            <div>
              <div className="font-bold text-base text-[var(--text)] mb-0.5">{nextEvent.name}</div>
              <div className="text-sm text-[var(--accent2)] mb-1">{nextEvent.year}年に迎えます</div>
              <p className="text-base text-[var(--muted)] leading-relaxed">{nextEvent.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* ─── 子どもの節目 (shown when age ≤ 18) ──────────────────── */}
      {currentAge <= 18 && (
        <Section title="子どもの節目" icon="🎏">
          <p className="text-sm text-[var(--muted)] mb-3">
            性別を選ぶと七五三（5歳・7歳）が表示されます。
          </p>
          <div className="grid grid-cols-2 gap-2 mb-4">
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
          <div className="space-y-3">
            {visibleChildhood.map((ev) => {
              const evYear = dob.getFullYear() + ev.age;
              const isPast = ev.age < currentAge || (ev.age === 0 && currentAge >= 1);
              const isCurrent = !isPast && evYear === currentYear;
              return (
                <div key={ev.name} className={`flex items-start gap-3 ${isPast ? "opacity-50" : ""}`}>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-base font-bold border-2 ${
                    isCurrent ? "border-[var(--accent2)] text-[var(--accent2)]" : isPast ? "border-[var(--accent)]/40 text-[var(--accent)]/60" : "border-[var(--card-border)] text-[var(--muted)]"
                  }`}>
                    {isPast ? "✓" : ev.age === 0 ? "0" : ev.age}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`font-semibold text-base ${isCurrent ? "text-[var(--accent2)]" : isPast ? "text-[var(--muted)]" : "text-[var(--text)]"}`}>
                        {ev.name}
                      </span>
                      {isCurrent && <span className="text-xs px-1.5 py-0.5 rounded-full bg-[var(--accent2)]/20 text-[var(--accent2)]">今年！</span>}
                      <span className="text-xs text-[var(--muted)] border border-[var(--card-border)] rounded-full px-2 py-0.5">
                        {ev.daysNote ?? `${evYear}年`}
                      </span>
                    </div>
                    <p className="text-base text-[var(--muted)] mt-0.5 leading-relaxed">{ev.description}</p>
                    {ev.activities && !isPast && (
                      <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">🎌 {ev.activities}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {/* ─── 賀寿（長寿のお祝い） ─────────────────────────────────── */}
      <Section title="賀寿（長寿のお祝い）" icon="🎊">
        <p className="text-sm text-[var(--muted)] mb-4">
          還暦・古希・喜寿など、日本の伝統的な長寿のお祝い節目。
          <a href="/ja/gaju/" className="text-[var(--accent)] hover:underline ml-1">一覧を見る →</a>
        </p>
        <div className="space-y-3">
          {GAJU_EVENTS.map((ev) => {
            const evYear = dob.getFullYear() + ev.age;
            const isPast = ev.age < currentAge;
            const isCurrent = !isPast && evYear === currentYear;
            return (
              <div key={ev.kanji} className={`flex items-start gap-3 ${isPast ? "opacity-50" : ""}`}>
                <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                  isCurrent ? "border-[var(--accent2)] text-[var(--accent2)]" : isPast ? "border-[var(--accent)]/40 text-[var(--accent)]/60" : "border-[var(--card-border)] text-[var(--muted)]"
                }`}>
                  {isPast ? "✓" : ev.age}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`font-bold text-base ${isCurrent ? "gradient-text" : isPast ? "text-[var(--muted)]" : "text-[var(--text)]"}`}>
                      {ev.kanji}
                    </span>
                    {isCurrent && <span className="text-xs px-1.5 py-0.5 rounded-full bg-[var(--accent2)]/20 text-[var(--accent2)] font-medium">今年！</span>}
                    <span className="text-xs text-[var(--muted)] border border-[var(--card-border)] rounded-full px-2 py-0.5">{evYear}年</span>
                  </div>
                  <p className="text-base text-[var(--muted)] mt-0.5 leading-relaxed">{ev.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ─── 厄年 ─────────────────────────────────────────────────── */}
      <Section title="厄年" icon="⚠️">
        <p className="text-sm text-[var(--muted)] mb-3">
          厄年は心身の変化が起きやすい年とされ、神社でお祓いを受ける慣わしがあります。
          <a href="/ja/yakudoshi/" className="text-[var(--accent)] hover:underline ml-1">早見表を見る →</a>
        </p>
        <div className="grid grid-cols-2 gap-2 mb-4">
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
        {!gender && (
          <p className="text-sm text-[var(--muted)]">性別を選ぶと、あなたの厄年を表示します。</p>
        )}
        {gender && (
          <div className="space-y-3">
            {(gender === "male" ? YAKUDOSHI_MALE : YAKUDOSHI_FEMALE).map((ev) => {
              const evYear = dob.getFullYear() + ev.age;
              const isPast = ev.age < currentAge;
              const isCurrent = !isPast && evYear === currentYear;
              return (
                <div key={ev.name} className={`flex items-start gap-3 p-3 rounded-xl border ${
                  ev.isMajor ? "border-[var(--accent)]/50 bg-[var(--accent)]/5" : "border-[var(--card-border)]"
                } ${isPast ? "opacity-50" : ""}`}>
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                    isCurrent ? "border-[var(--accent2)] text-[var(--accent2)]" : isPast ? "border-[var(--accent)]/40 text-[var(--accent)]/60" : ev.isMajor ? "border-[var(--accent)] text-[var(--accent)]" : "border-[var(--card-border)] text-[var(--muted)]"
                  }`}>
                    {isPast ? "✓" : ev.age}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`font-semibold text-base ${isCurrent ? "text-[var(--accent2)]" : ev.isMajor && !isPast ? "text-[var(--accent)]" : "text-[var(--text)]"}`}>
                        {ev.subtype}
                        {ev.isMajor && <span className="ml-1 text-xs text-[var(--accent)]">（大厄）</span>}
                      </span>
                      {isCurrent && <span className="text-xs px-1.5 py-0.5 rounded-full bg-[var(--accent2)]/20 text-[var(--accent2)]">今年！</span>}
                      <span className="text-xs text-[var(--muted)] border border-[var(--card-border)] rounded-full px-2 py-0.5">{evYear}年</span>
                    </div>
                    <p className="text-base text-[var(--muted)] mt-0.5 leading-relaxed">{ev.description}</p>
                    {!isPast && ev.activities && (
                      <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">🏯 {ev.activities}</p>
                    )}
                  </div>
                </div>
              );
            })}
            <p className="text-xs text-[var(--muted)] pt-2">※ 数え年の換算による一般的な目安です。地域・宗派により異なる場合があります。</p>
          </div>
        )}
      </Section>

      {/* 元号 Gengō */}
      <Section title={jt.gengoSectionTitle} icon="🏯">
        <div className="flex items-center gap-4">
          <div className="stat-card text-center min-w-[80px]">
            <div className="text-2xl font-bold gradient-text">{era.eraJa}</div>
            <div className="text-lg font-semibold text-[var(--accent)]">{era.year}年</div>
          </div>
          <div>
            <p className="text-base text-[var(--text)] font-medium">{era.display}</p>
            <p className="text-sm text-[var(--muted)] mt-1">
              {era.era} era — 西暦{dob.getFullYear()}年は{era.eraJa}{era.year}年にあたります
            </p>
          </div>
        </div>
      </Section>

      {/* 九星気学 */}
      <Section title={jt.kyuseiSectionTitle} icon="⭐">
        <div className="flex items-start gap-4 mb-3">
          <div className="stat-card text-center min-w-[72px] flex-shrink-0">
            <div className="text-2xl font-bold" style={{ color: kyusei.color }}>{kyusei.star}</div>
            <div className="text-xs text-[var(--muted)] mt-0.5">本命星</div>
          </div>
          <div>
            <div className="font-bold text-lg text-[var(--accent)] mb-1">{kyusei.name}</div>
            <div className="text-sm text-[var(--muted)]">
              五行：{kyusei.elementJa}（{kyusei.element}）　方位：{kyusei.directionJa}
            </div>
          </div>
        </div>
        <p className="text-base text-[var(--muted)] leading-relaxed">{kyusei.description}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {kyusei.traits.map((tr) => (
            <span key={tr} className="inline-block px-2 py-0.5 rounded-full text-xs border border-[var(--accent)] text-[var(--accent)]">{tr}</span>
          ))}
        </div>
      </Section>

      {/* 四柱推命 */}
      <Section title={jt.shichuSectionTitle} icon="🔮">
        <p className="text-sm text-[var(--muted)] mb-4">{jt.shichuSubtitle}</p>

        {/* Three Pillars */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: jt.yearPillar, pillar: shichu.yearPillar },
            { label: jt.monthPillar, pillar: shichu.monthPillar },
            { label: jt.dayPillar, pillar: shichu.dayPillar },
          ].map(({ label, pillar }) => (
            <div key={label} className="stat-card text-center">
              <div className="text-xs text-[var(--muted)] mb-1">{label}</div>
              <div className="text-2xl font-bold gradient-text">{pillar.display}</div>
              <div className="text-xs text-[var(--muted)] mt-1">{pillar.stemName}</div>
              <div className="text-xs text-[var(--muted)]">{pillar.branchName}</div>
              <div className="text-xs mt-1" style={{ color: gogyoColors[pillar.element] }}>{pillar.polarity}{gogyoLabels[pillar.element]}</div>
            </div>
          ))}
        </div>

        {/* Day Master */}
        <div className="border-t border-[var(--card-border)] pt-4 mb-4">
          <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-2">{jt.dayMaster}</div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl font-bold gradient-text">{shichu.dayMaster}</span>
            <div>
              <span className="text-sm font-medium text-[var(--accent)]">
                {shichu.dayMasterPolarity}{gogyoLabels[shichu.dayMasterElement]}（{shichu.dayMasterElement}）
              </span>
            </div>
          </div>
          <p className="text-base text-[var(--muted)] leading-relaxed">{shichu.dayMasterDescription}</p>
        </div>

        {/* Five Elements balance */}
        <div className="border-t border-[var(--card-border)] pt-4">
          <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-3">{jt.fiveElements}</div>
          <div className="space-y-2">
            {(["Wood", "Fire", "Earth", "Metal", "Water"] as const).map((el) => {
              const key = el.toLowerCase() as keyof typeof shichu.gogyo;
              return (
                <GogyoBar
                  key={el}
                  label={gogyoLabels[el]}
                  count={shichu.gogyo[key]}
                  total={totalPillars}
                  color={gogyoColors[el]}
                />
              );
            })}
          </div>
          <p className="text-xs text-[var(--muted)] mt-3">※ 年柱・月柱・日柱の天干3本から算出（時柱なし）</p>
        </div>
      </Section>

      {/* 血液型 Blood Type */}
      <Section title={jt.bloodTypeSectionTitle} icon="🩸">
        <div className="mb-4">
          <label className="block text-sm text-[var(--muted)] mb-2">{jt.bloodTypeInputLabel}</label>
          <div className="grid grid-cols-4 gap-2">
            {(["A", "B", "O", "AB"] as BloodType[]).map((bt) => (
              <button
                key={bt}
                onClick={() => setBloodType(bt === bloodType ? "" : bt)}
                className={`py-2 rounded-xl border text-sm font-bold transition-colors ${
                  bloodType === bt
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                    : "border-[var(--card-border)] text-[var(--muted)] hover:border-[var(--accent)]"
                }`}
              >
                {bt}型
              </button>
            ))}
          </div>
        </div>

        {bloodProfile && (
          <div className="space-y-3">
            <div>
              <div className="font-bold text-lg text-[var(--accent)] mb-2">{bloodProfile.label}の性格</div>
              <p className="text-base text-[var(--muted)] leading-relaxed">{bloodProfile.description}</p>
            </div>
            <div>
              <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-2">強み・特徴</div>
              <div className="flex flex-wrap gap-1">
                {bloodProfile.positiveTraits.map((tr) => (
                  <span key={tr} className="inline-block px-2 py-0.5 rounded-full text-xs border border-[var(--accent)] text-[var(--accent)]">{tr}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-2">課題・注意点</div>
              <ul className="space-y-1">
                {bloodProfile.challenges.map((ch) => (
                  <li key={ch} className="text-sm text-[var(--muted)] flex items-start gap-2">
                    <span className="text-[var(--accent2)] mt-0.5 flex-shrink-0">•</span>{ch}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-[var(--muted)] border-t border-[var(--card-border)] pt-3">
              ※ 血液型性格診断は日本の文化的なエンターテインメントであり、科学的根拠はありません。
            </p>
          </div>
        )}

        {!bloodProfile && (
          <p className="text-sm text-[var(--muted)]">上のボタンから血液型を選んでください。</p>
        )}
      </Section>
    </div>
  );
}
