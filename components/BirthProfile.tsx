"use client";

import { useMemo } from "react";
import { getBirthProfile, type BirthProfile, type MoonPhase, type MayanProfile } from "@/lib/birthProfile";

interface Props {
  dob: Date;
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

export default function BirthProfile({ dob }: Props) {
  const profile: BirthProfile = useMemo(() => getBirthProfile(dob), [dob]);

  return (
    <div className="space-y-4 mt-4">
      <h2 className="text-center text-xl font-bold gradient-text pt-4">Your Birthday Profile</h2>

      {/* Zodiac row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Western Zodiac */}
        <Section title="Western Zodiac" icon="⭐">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{profile.westernZodiac.symbol}</span>
            <div>
              <div className="font-bold text-lg text-[var(--accent)]">{profile.westernZodiac.sign}</div>
              <div className="text-xs text-[var(--muted)]">{profile.westernZodiac.dates} · {profile.westernZodiac.element}</div>
            </div>
          </div>
          <p className="text-sm text-[var(--muted)]">{profile.westernZodiac.traits}</p>
        </Section>

        {/* Chinese Zodiac */}
        <Section title="Chinese Zodiac" icon="🐉">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🐾</span>
            <div>
              <div className="font-bold text-lg text-[var(--accent)]">
                {profile.chineseZodiac.animal}
              </div>
              <div className="text-xs text-[var(--muted)]">Lucky numbers: {profile.chineseZodiac.luckyNumbers}</div>
            </div>
          </div>
          <p className="text-sm text-[var(--muted)]">{profile.chineseZodiac.traits}</p>
        </Section>
      </div>

      {/* Life Path Number */}
      <Section title="Life Path Number" icon="🔢">
        <div className="flex items-start gap-4">
          <div className={`text-5xl font-bold flex-shrink-0 ${profile.lifePathNumber.isMaster ? "gradient-text" : "text-[var(--accent)]"}`}>
            {profile.lifePathNumber.number}
            {profile.lifePathNumber.isMaster && <span className="text-xs ml-1 text-[var(--accent2)]">Master</span>}
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--text)] mb-1">{profile.lifePathNumber.meaning}</p>
            <p className="text-xs text-[var(--muted)]">Strengths: {profile.lifePathNumber.strengths}</p>
          </div>
        </div>
      </Section>

      {/* Moon Phase */}
      <Section title="Moon Phase at Birth" icon="🌙">
        <div className="flex items-start gap-4">
          <span className="text-5xl flex-shrink-0">{profile.moonPhase.emoji}</span>
          <div>
            <div className="font-bold text-lg text-[var(--accent)] mb-1">
              {profile.moonPhase.phase}
              <span className="text-xs text-[var(--muted)] ml-2 font-normal">({profile.moonPhase.illumination} illuminated)</span>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">{profile.moonPhase.meaning}</p>
          </div>
        </div>
      </Section>

      {/* Mayan Dreamspell */}
      <Section title="Mayan Dreamspell Calendar" icon="🌀">
        <div className="flex items-start gap-4 mb-3">
          <div className="text-center flex-shrink-0 stat-card min-w-[64px]">
            <div className="text-3xl font-bold gradient-text">{profile.mayanProfile.kin}</div>
            <div className="text-xs text-[var(--muted)] mt-0.5">Kin</div>
          </div>
          <div>
            <div className="font-bold text-lg text-[var(--accent)] mb-1">{profile.mayanProfile.fullName}</div>
            <div className="text-sm text-[var(--muted)]">
              Tone {profile.mayanProfile.toneNumber} · {profile.mayanProfile.color} {profile.mayanProfile.daySign}
            </div>
            <div className="text-xs text-[var(--muted)] mt-1">
              Wavespell: <span className="text-[var(--accent2)]">{profile.mayanProfile.wavespell} Wavespell</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Born on a ... */}
      <Section title="Born on a..." icon="🪐">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{profile.weekdayMeaning.planet}</span>
          <div>
            <div className="font-semibold text-[var(--accent)] mb-1">{profile.weekdayMeaning.day} — {profile.weekdayMeaning.planet}</div>
            <p className="text-sm text-[var(--muted)] mb-2">{profile.weekdayMeaning.meaning}</p>
            <p className="text-xs text-[var(--muted)]">Traits: {profile.weekdayMeaning.traits}</p>
          </div>
        </div>
      </Section>

      {/* Birthstone & Birth Flower */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Section title="Birthstone" icon="💎">
          <div className="font-bold text-lg text-[var(--accent)] mb-1">{profile.birthstone.stone}</div>
          <p className="text-sm text-[var(--muted)]">{profile.birthstone.meaning}</p>
        </Section>
        <Section title="Birth Flower" icon="🌸">
          <div className="font-bold text-lg text-[var(--accent)] mb-1">{profile.birthFlower.flower}</div>
          <p className="text-sm text-[var(--muted)]">{profile.birthFlower.meaning}</p>
        </Section>
      </div>

      {/* Generational Identity */}
      <Section title="Your Generation" icon="🌍">
        <div className="space-y-4">
          {/* Mainstream */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[var(--accent)]">{profile.generation.name}</span>
              <span className="text-xs text-[var(--muted)] border border-[var(--card-border)] rounded-full px-2 py-0.5">{profile.generation.years}</span>
            </div>
            <p className="text-sm text-[var(--muted)]">{profile.generation.description}</p>
          </div>

          <div className="border-t border-[var(--card-border)] pt-4">
            {/* Spiritual */}
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[var(--accent2)]">
                ✨ {profile.spiritualGeneration.name}
                {profile.spiritualGeneration.isStarChild && (
                  <span className="text-xs text-[var(--muted)] ml-2 font-normal">(Star Child)</span>
                )}
              </span>
              <span className="text-xs text-[var(--muted)] border border-[var(--card-border)] rounded-full px-2 py-0.5">{profile.spiritualGeneration.years}</span>
            </div>
            <p className="text-sm text-[var(--muted)] mb-2">{profile.spiritualGeneration.description}</p>
            <div>
              {profile.spiritualGeneration.traits.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Famous Birthdays */}
      {profile.famousBirthdays.length > 0 && (
        <Section title="Famous People Born on Your Day" icon="🌟">
          <div className="space-y-2">
            {profile.famousBirthdays.map((person) => (
              <div key={person.name} className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-0.5">•</span>
                <div>
                  <span className="font-medium text-sm">{person.name}</span>
                  <span className="text-xs text-[var(--muted)] ml-2">{person.description}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
