"use client";

import { useMemo, useState } from "react";
import { getJapaneseEra } from "@/lib/birthProfile";
import { getShichuProfile } from "@/lib/shichu";
import { getKyusei } from "@/lib/kyusei";
import { getBloodTypeProfile, type BloodType } from "@/lib/bloodType";
import { useT } from "@/lib/i18n";
import {
  YAKUDOSHI_MALE,
  YAKUDOSHI_FEMALE,
  getNextGeneralEvent,
  getNextYakudoshiEvent,
  type LifeEvent,
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

export default function JapaneseProfile({ dob, currentAge = 0 }: Props) {
  const t = useT();
  const jt = t.japan!;

  const era = useMemo(() => getJapaneseEra(dob), [dob]);
  const shichu = useMemo(() => getShichuProfile(dob), [dob]);
  const kyusei = useMemo(() => getKyusei(dob.getFullYear(), dob.getMonth() + 1, dob.getDate()), [dob]);

  const [bloodType, setBloodType] = useState<BloodType | "">("");
  const [gender, setGender] = useState<"male" | "female" | null>(null);

  const dobYear = dob.getFullYear();
  const currentYear = new Date().getFullYear();

  const nextGeneralEvent = useMemo(
    () => getNextGeneralEvent(currentAge, gender, dobYear),
    [currentAge, gender, dobYear]
  );

  const nextYakudoshi = useMemo(
    () => getNextYakudoshiEvent(currentAge, gender, dobYear),
    [currentAge, gender, dobYear]
  );

  // Do they land on the same age? If so show both in the 次の節目 area.
  const yakudoshiCoincides = nextYakudoshi !== null && nextGeneralEvent !== null && nextYakudoshi.age === nextGeneralEvent.age;
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

      {/* ─── 次の節目 + gender toggle ─────────────────────────────── */}
      <div className="card p-5 border border-[var(--accent)]/30 space-y-4">
        <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider flex items-center gap-2">
          <span>🔔</span> 次の節目
        </h3>

        {/* Gender toggle — drives childhood gender filter AND yakudoshi */}
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

        {/* General next event (childhood / gaju) */}
        {nextGeneralEvent && (
          <NextEventCard event={nextGeneralEvent} label={nextGeneralEvent.type === "childhood" ? "🎏" : "🎊"} />
        )}

        {/* Yakudoshi — show when gender selected */}
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
