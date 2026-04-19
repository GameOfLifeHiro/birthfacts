"use client";

import { useMemo } from "react";
import { getBirthProfile, type BirthProfile, getJapaneseEra } from "@/lib/birthProfile";
import { useT } from "@/lib/i18n";
import JapaneseProfile from "./JapaneseProfile";

interface Props {
  dob: Date;
  showJapanFeatures?: boolean;
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

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded-full text-xs border border-[var(--accent)] text-[var(--accent)] mr-1 mb-1">
      {label}
    </span>
  );
}

export default function BirthProfile({ dob, showJapanFeatures = false }: Props) {
  const t = useT();
  const isJa = t.locale === "ja";
  const profile: BirthProfile = useMemo(() => getBirthProfile(dob, t.locale), [dob, t.locale]);

  // Localised zodiac names for Japanese
  const JA_ZODIAC_NAMES: Record<string, string> = {
    Capricorn: "山羊座", Aquarius: "水瓶座", Pisces: "魚座", Aries: "牡羊座",
    Taurus: "牡牛座", Gemini: "双子座", Cancer: "蟹座", Leo: "獅子座",
    Virgo: "乙女座", Libra: "天秤座", Scorpio: "蠍座", Sagittarius: "射手座",
  };
  const JA_ELEMENTS: Record<string, string> = {
    Earth: "地", Air: "風", Water: "水", Fire: "火",
  };
  const JA_MOON_PHASES: Record<string, { phase: string; illumination: string }> = {
    "New Moon": { phase: "新月", illumination: "0%" },
    "Waxing Crescent": { phase: "三日月（上弦前）", illumination: "約25%" },
    "First Quarter": { phase: "上弦の月", illumination: "約50%" },
    "Waxing Gibbous": { phase: "十三夜（上弦後）", illumination: "約75%" },
    "Full Moon": { phase: "満月", illumination: "100%" },
    "Waning Gibbous": { phase: "十六夜（下弦前）", illumination: "約75%" },
    "Last Quarter": { phase: "下弦の月", illumination: "約50%" },
    "Waning Crescent": { phase: "有明月（下弦後）", illumination: "約25%" },
  };
  const JA_WEEKDAYS: Record<string, string> = {
    Sunday: "日曜日", Monday: "月曜日", Tuesday: "火曜日",
    Wednesday: "水曜日", Thursday: "木曜日", Friday: "金曜日", Saturday: "土曜日",
  };

  // Mayan sign/tone display name (Japanese: katakana + kanji in parentheses)
  const JA_DAY_SIGNS: Record<string, string> = {
    Dragon: "ドラゴン（龍）", Wind: "ウィンド（風）", Night: "ナイト（夜）",
    Seed: "シード（種）", Serpent: "サーペント（蛇）", Worldbridger: "ワールドブリッジャー（橋渡し）",
    Hand: "ハンド（手）", Star: "スター（星）", Moon: "ムーン（月）",
    Dog: "ドッグ（犬）", Monkey: "モンキー（猿）", Human: "ヒューマン（人）",
    Skywalker: "スカイウォーカー（天空の歩者）", Wizard: "ウィザード（魔法使い）",
    Eagle: "イーグル（鷲）", Warrior: "ウォリアー（戦士）", Earth: "アース（大地）",
    Mirror: "ミラー（鏡）", Storm: "ストーム（嵐）", Sun: "サン（太陽）",
  };
  const JA_GALACTIC_TONES: Record<string, string> = {
    Magnetic: "磁気（マグネティック）", Lunar: "月（ルーナー）", Electric: "電気（エレクトリック）",
    "Self-Existing": "自己存在（セルフイグジスティング）", Overtone: "倍音（オーバートーン）",
    Rhythmic: "韻律（リズミック）", Resonant: "共鳴（レゾナント）", Galactic: "銀河（ギャラクティック）",
    Solar: "太陽（ソーラー）", Planetary: "惑星（プラネタリー）", Spectral: "分光（スペクトラル）",
    Crystal: "水晶（クリスタル）", Cosmic: "宇宙（コスミック）",
  };

  const zodiacSignDisplay = isJa
    ? `${JA_ZODIAC_NAMES[profile.westernZodiac.sign] ?? profile.westernZodiac.sign}（${profile.westernZodiac.sign}）`
    : profile.westernZodiac.sign;
  const elementDisplay = isJa
    ? `${JA_ELEMENTS[profile.westernZodiac.element] ?? profile.westernZodiac.element}（${profile.westernZodiac.element}）`
    : profile.westernZodiac.element;
  const moonPhaseDisplay = isJa
    ? JA_MOON_PHASES[profile.moonPhase.phase]?.phase ?? profile.moonPhase.phase
    : profile.moonPhase.phase;
  const moonIllumDisplay = isJa
    ? JA_MOON_PHASES[profile.moonPhase.phase]?.illumination ?? profile.moonPhase.illumination
    : profile.moonPhase.illumination;
  const weekdayDisplay = isJa
    ? JA_WEEKDAYS[profile.weekdayMeaning.day] ?? profile.weekdayMeaning.day
    : profile.weekdayMeaning.day;
  const daySignDisplay = isJa
    ? JA_DAY_SIGNS[profile.mayanProfile.daySign] ?? profile.mayanProfile.daySign
    : profile.mayanProfile.daySign;
  const toneDisplay = isJa
    ? JA_GALACTIC_TONES[profile.mayanProfile.galacticTone] ?? profile.mayanProfile.galacticTone
    : profile.mayanProfile.galacticTone;
  const wavespellDisplay = isJa
    ? JA_DAY_SIGNS[profile.mayanProfile.wavespell] ?? profile.mayanProfile.wavespell
    : profile.mayanProfile.wavespell;

  // Japanese zodiac (eto) display for the /ja/ page
  const etoDisplay = isJa
    ? `${profile.chineseZodiac.kanji} ${profile.chineseZodiac.animalJa}（${profile.chineseZodiac.animal}）`
    : profile.chineseZodiac.animal;
  const zodiacSectionTitle = isJa ? t.profile.chineseZodiac : "Chinese Zodiac";
  const zodiacIcon = isJa ? profile.chineseZodiac.kanji : "🐾";

  // Birth flower: show Japanese name on /ja/
  const flowerDisplay = isJa
    ? `${profile.birthFlower.flowerJa}（${profile.birthFlower.flower}）`
    : profile.birthFlower.flower;

  return (
    <div className="space-y-4 mt-4">
      <h2 className="text-center text-xl font-bold gradient-text pt-4">{t.profile.heading}</h2>

      {/* Zodiac row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Western Zodiac */}
        <Section title={t.profile.westernZodiac} icon="⭐">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{profile.westernZodiac.symbol}</span>
            <div>
              <div className="font-bold text-lg text-[var(--accent)]">{zodiacSignDisplay}</div>
              <div className="text-xs text-[var(--muted)]">{profile.westernZodiac.dates} · {elementDisplay}</div>
            </div>
          </div>
          <p className="text-base text-[var(--muted)]">{profile.westernZodiac.traits}</p>
        </Section>

        {/* Chinese / Japanese Zodiac */}
        <Section title={zodiacSectionTitle} icon="🐉">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{zodiacIcon}</span>
            <div>
              <div className="font-bold text-lg text-[var(--accent)]">{etoDisplay}</div>
              <div className="text-xs text-[var(--muted)]">{t.profile.luckyNumbers}: {profile.chineseZodiac.luckyNumbers}</div>
            </div>
          </div>
          <p className="text-base text-[var(--muted)]">{profile.chineseZodiac.traits}</p>
        </Section>
      </div>

      {/* Life Path Number */}
      <Section title={t.profile.lifePathNumber} icon="🔢">
        <div className="flex items-start gap-4">
          <div className={`text-5xl font-bold flex-shrink-0 ${profile.lifePathNumber.isMaster ? "gradient-text" : "text-[var(--accent)]"}`}>
            {profile.lifePathNumber.number}
            {profile.lifePathNumber.isMaster && <span className="text-xs ml-1 text-[var(--accent2)]">{t.profile.masterNumber}</span>}
          </div>
          <div>
            <p className="text-base font-medium text-[var(--text)] mb-1">{profile.lifePathNumber.meaning}</p>
            <p className="text-xs text-[var(--muted)]">{t.profile.strengths}: {profile.lifePathNumber.strengths}</p>
          </div>
        </div>
      </Section>

      {/* Moon Phase */}
      <Section title={t.profile.moonPhase} icon="🌙">
        <div className="flex items-start gap-4">
          <span className="text-5xl flex-shrink-0">{profile.moonPhase.emoji}</span>
          <div>
            <div className="font-bold text-lg text-[var(--accent)] mb-1">
              {moonPhaseDisplay}
              <span className="text-xs text-[var(--muted)] ml-2 font-normal">({moonIllumDisplay} {t.profile.illuminated})</span>
            </div>
            <p className="text-base text-[var(--muted)] leading-relaxed">{profile.moonPhase.meaning}</p>
          </div>
        </div>
      </Section>

      {/* Mayan Dreamspell */}
      <Section title={t.profile.mayanCalendar} icon="🌀">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-center flex-shrink-0 stat-card min-w-[72px]">
            <div className="text-3xl font-bold gradient-text">{profile.mayanProfile.kin}</div>
            <div className="text-xs text-[var(--muted)] mt-0.5">{t.profile.kin}</div>
          </div>
          <div>
            <div className="font-bold text-lg text-[var(--accent)] mb-1">
              {isJa
                ? `音${profile.mayanProfile.toneNumber}・${profile.mayanProfile.color} ${daySignDisplay}`
                : profile.mayanProfile.fullName}
            </div>
            <div className="text-sm text-[var(--muted)]">
              {t.profile.galacticTone} {profile.mayanProfile.toneNumber} — {toneDisplay}
            </div>
            <div className="text-xs text-[var(--muted)] mt-1">
              {t.profile.wavespell}: <span className="text-[var(--accent2)]">{wavespellDisplay} {t.profile.wavespell}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--card-border)] pt-4 space-y-3">
          <div>
            <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">{t.profile.daySign}</div>
            <p className="text-sm text-[var(--text)] font-medium">{profile.mayanProfile.color} {daySignDisplay}</p>
            <p className="text-base text-[var(--muted)] mt-1 leading-relaxed">{profile.mayanProfile.daySignMeaning}</p>
          </div>
          <div>
            <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">{t.profile.galacticTone}</div>
            <p className="text-base text-[var(--text)] font-medium">{isJa ? "音" : "Tone"} {profile.mayanProfile.toneNumber} — {toneDisplay}</p>
            <p className="text-base text-[var(--muted)] mt-1 leading-relaxed">{profile.mayanProfile.toneMeaning}</p>
          </div>
          <div>
            <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">{t.profile.wavespell}</div>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              {t.profile.wavespellIntro}{" "}
              <span className="text-[var(--accent2)] font-medium">{wavespellDisplay} {t.profile.wavespell}</span>
              {" "}— {isJa ? "13日間の旅で、テーマは" : t.profile.wavespellTheme + " " + profile.mayanProfile.wavespell + " energy, supporting themes of"}{" "}
              {profile.mayanProfile.wavespellTheme}.
            </p>
          </div>
        </div>
      </Section>

      {/* Born on a ... */}
      <Section title={t.profile.bornOnA} icon="🪐">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{profile.weekdayMeaning.planet}</span>
          <div>
            <div className="font-semibold text-[var(--accent)] mb-1">{weekdayDisplay} — {profile.weekdayMeaning.planet}</div>
            <p className="text-base text-[var(--muted)] mb-2">{profile.weekdayMeaning.meaning}</p>
            <p className="text-xs text-[var(--muted)]">{t.profile.traits}: {profile.weekdayMeaning.traits}</p>
          </div>
        </div>
      </Section>

      {/* Birthstone & Birth Flower */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Section title={t.profile.birthstone} icon="💎">
          <div className="font-bold text-lg text-[var(--accent)] mb-1">{profile.birthstone.stone}</div>
          <p className="text-base text-[var(--muted)]">{profile.birthstone.meaning}</p>
        </Section>
        <Section title={t.profile.birthFlower} icon="🌸">
          <div className="font-bold text-lg text-[var(--accent)] mb-1">{flowerDisplay}</div>
          <p className="text-base text-[var(--muted)]">{profile.birthFlower.meaning}</p>
        </Section>
      </div>

      {/* Generational Identity */}
      <Section title={t.profile.generation} icon="🌍">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[var(--accent)]">{profile.generation.name}</span>
              <span className="text-xs text-[var(--muted)] border border-[var(--card-border)] rounded-full px-2 py-0.5">{profile.generation.years}</span>
            </div>
            <p className="text-base text-[var(--muted)]">{profile.generation.description}</p>
          </div>

          <div className="border-t border-[var(--card-border)] pt-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[var(--accent2)]">
                ✨ {profile.spiritualGeneration.name}
                {profile.spiritualGeneration.isStarChild && (
                  <span className="text-xs text-[var(--muted)] ml-2 font-normal">({t.profile.starChild})</span>
                )}
              </span>
              <span className="text-xs text-[var(--muted)] border border-[var(--card-border)] rounded-full px-2 py-0.5">{profile.spiritualGeneration.years}</span>
            </div>
            <p className="text-base text-[var(--muted)] mb-2">{profile.spiritualGeneration.description}</p>
            <div>
              {profile.spiritualGeneration.traits.map((trait) => (
                <Tag key={trait} label={trait} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Famous Birthdays */}
      {profile.famousBirthdays.length > 0 && (
        <Section title={t.profile.famousBirthdays} icon="🌟">
          <div className="space-y-2">
            {profile.famousBirthdays.map((person) => (
              <div key={person.name} className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-0.5">•</span>
                <div>
                  <span className="font-medium text-base">{person.name}</span>
                  <span className="text-sm text-[var(--muted)] ml-2">{person.description}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Japan-exclusive features */}
      {showJapanFeatures && <JapaneseProfile dob={dob} />}
    </div>
  );
}
