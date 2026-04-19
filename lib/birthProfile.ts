// ─── Types ────────────────────────────────────────────────────────────────────

export interface BirthProfile {
  westernZodiac: WesternZodiac;
  chineseZodiac: ChineseZodiac;
  birthstone: { stone: string; meaning: string };
  birthFlower: { flower: string; flowerJa: string; meaning: string };
  lifePathNumber: LifePathNumber;
  weekdayMeaning: WeekdayMeaning;
  generation: Generation;
  spiritualGeneration: SpiritualGeneration;
  famousBirthdays: FamousPerson[];
  moonPhase: MoonPhase;
  mayanProfile: MayanProfile;
}

export interface WesternZodiac {
  sign: string;
  symbol: string;
  dates: string;
  element: string;
  traits: string;
}

export interface ChineseZodiac {
  animal: string;
  animalJa: string;
  kanji: string;
  traits: string;
  luckyNumbers: string;
}

export interface JapaneseEra {
  era: string;
  eraJa: string;
  year: number;
  display: string;
}

export interface LifePathNumber {
  number: number;
  isMaster: boolean;
  meaning: string;
  strengths: string;
}

export interface WeekdayMeaning {
  day: string;
  planet: string;
  meaning: string;
  traits: string;
}

export interface Generation {
  name: string;
  years: string;
  description: string;
}

export interface SpiritualGeneration {
  name: string;
  years: string;
  description: string;
  traits: string[];
  isStarChild: boolean;
}

export interface FamousPerson {
  name: string;
  description: string;
}

// ─── Western Zodiac ───────────────────────────────────────────────────────────

const WESTERN_ZODIAC: WesternZodiac[] = [
  { sign: "Capricorn", symbol: "♑", dates: "Dec 22 – Jan 19", element: "Earth", traits: "Disciplined, ambitious, practical, patient" },
  { sign: "Aquarius", symbol: "♒", dates: "Jan 20 – Feb 18", element: "Air", traits: "Independent, original, humanitarian, intellectual" },
  { sign: "Pisces", symbol: "♓", dates: "Feb 19 – Mar 20", element: "Water", traits: "Intuitive, compassionate, artistic, gentle" },
  { sign: "Aries", symbol: "♈", dates: "Mar 21 – Apr 19", element: "Fire", traits: "Courageous, energetic, enthusiastic, confident" },
  { sign: "Taurus", symbol: "♉", dates: "Apr 20 – May 20", element: "Earth", traits: "Reliable, patient, practical, devoted" },
  { sign: "Gemini", symbol: "♊", dates: "May 21 – Jun 20", element: "Air", traits: "Adaptable, curious, witty, communicative" },
  { sign: "Cancer", symbol: "♋", dates: "Jun 21 – Jul 22", element: "Water", traits: "Intuitive, emotional, nurturing, protective" },
  { sign: "Leo", symbol: "♌", dates: "Jul 23 – Aug 22", element: "Fire", traits: "Creative, generous, warm-hearted, cheerful" },
  { sign: "Virgo", symbol: "♍", dates: "Aug 23 – Sep 22", element: "Earth", traits: "Analytical, hardworking, practical, diligent" },
  { sign: "Libra", symbol: "♎", dates: "Sep 23 – Oct 22", element: "Air", traits: "Diplomatic, fair-minded, social, gracious" },
  { sign: "Scorpio", symbol: "♏", dates: "Oct 23 – Nov 21", element: "Water", traits: "Brave, passionate, resourceful, determined" },
  { sign: "Sagittarius", symbol: "♐", dates: "Nov 22 – Dec 21", element: "Fire", traits: "Generous, idealistic, adventurous, enthusiastic" },
];

export function getWesternZodiac(month: number, day: number): WesternZodiac {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return WESTERN_ZODIAC[0];
  if (month === 1 || (month === 2 && day <= 18)) return WESTERN_ZODIAC[1];
  if (month === 2 || (month === 3 && day <= 20)) return WESTERN_ZODIAC[2];
  if (month === 3 || (month === 4 && day <= 19)) return WESTERN_ZODIAC[3];
  if (month === 4 || (month === 5 && day <= 20)) return WESTERN_ZODIAC[4];
  if (month === 5 || (month === 6 && day <= 20)) return WESTERN_ZODIAC[5];
  if (month === 6 || (month === 7 && day <= 22)) return WESTERN_ZODIAC[6];
  if (month === 7 || (month === 8 && day <= 22)) return WESTERN_ZODIAC[7];
  if (month === 8 || (month === 9 && day <= 22)) return WESTERN_ZODIAC[8];
  if (month === 9 || (month === 10 && day <= 22)) return WESTERN_ZODIAC[9];
  if (month === 10 || (month === 11 && day <= 21)) return WESTERN_ZODIAC[10];
  return WESTERN_ZODIAC[11];
}

// ─── Chinese / Japanese Zodiac (eto 十二支) ───────────────────────────────────

const CHINESE_ZODIAC: ChineseZodiac[] = [
  { animal: "Rat", animalJa: "ネズミ", kanji: "子", traits: "Quick-witted, resourceful, adaptable", luckyNumbers: "2, 3" },
  { animal: "Ox", animalJa: "ウシ", kanji: "丑", traits: "Diligent, dependable, strong, determined", luckyNumbers: "1, 4" },
  { animal: "Tiger", animalJa: "トラ", kanji: "寅", traits: "Brave, confident, charismatic", luckyNumbers: "1, 3, 4" },
  { animal: "Rabbit", animalJa: "ウサギ", kanji: "卯", traits: "Gentle, quiet, elegant, kind", luckyNumbers: "3, 4, 6" },
  { animal: "Dragon", animalJa: "タツ", kanji: "辰", traits: "Confident, intelligent, enthusiastic", luckyNumbers: "1, 6, 7" },
  { animal: "Snake", animalJa: "ヘビ", kanji: "巳", traits: "Enigmatic, wise, intuitive", luckyNumbers: "2, 8, 9" },
  { animal: "Horse", animalJa: "ウマ", kanji: "午", traits: "Animated, energetic, warm-hearted", luckyNumbers: "2, 3, 7" },
  { animal: "Goat", animalJa: "ヒツジ", kanji: "未", traits: "Calm, gentle, creative", luckyNumbers: "2, 7" },
  { animal: "Monkey", animalJa: "サル", kanji: "申", traits: "Clever, mischievous, curious", luckyNumbers: "4, 9" },
  { animal: "Rooster", animalJa: "トリ", kanji: "酉", traits: "Observant, hardworking, courageous", luckyNumbers: "5, 7, 8" },
  { animal: "Dog", animalJa: "イヌ", kanji: "戌", traits: "Loyal, honest, kind", luckyNumbers: "3, 4, 9" },
  { animal: "Pig", animalJa: "イノシシ", kanji: "亥", traits: "Compassionate, generous, diligent", luckyNumbers: "2, 5, 8" },
];

export function getChineseZodiac(year: number): ChineseZodiac {
  // 2020 = Rat (index 0). Use +12 before mod to handle any negative remainder.
  const index = ((year - 2020) % 12 + 12) % 12;
  return CHINESE_ZODIAC[index] ?? CHINESE_ZODIAC[0];
}

// ─── Japanese Imperial Era (元号 / gengō) ─────────────────────────────────────

interface EraRange {
  era: string;
  eraJa: string;
  start: Date;
  end: Date | null;
  startYear: number;
}

const JAPANESE_ERAS: EraRange[] = [
  { era: "Meiji", eraJa: "明治", startYear: 1868, start: new Date("1868-01-25"), end: new Date("1912-07-29") },
  { era: "Taishō", eraJa: "大正", startYear: 1912, start: new Date("1912-07-30"), end: new Date("1926-12-24") },
  { era: "Shōwa", eraJa: "昭和", startYear: 1926, start: new Date("1926-12-25"), end: new Date("1989-01-07") },
  { era: "Heisei", eraJa: "平成", startYear: 1989, start: new Date("1989-01-08"), end: new Date("2019-04-30") },
  { era: "Reiwa", eraJa: "令和", startYear: 2019, start: new Date("2019-05-01"), end: null },
];

export function getJapaneseEra(dob: Date): JapaneseEra {
  const era = JAPANESE_ERAS.find(
    (e) => dob >= e.start && (e.end === null || dob <= e.end)
  );
  if (!era) return { era: "Unknown", eraJa: "不明", year: 0, display: "" };
  const eraYear = dob.getFullYear() - era.startYear + 1;
  return {
    era: era.era,
    eraJa: era.eraJa,
    year: eraYear,
    display: `${era.eraJa}${eraYear}年 (${era.era} ${eraYear})`,
  };
}

// ─── Birthstone ───────────────────────────────────────────────────────────────

const BIRTHSTONES = [
  { stone: "Garnet", meaning: "Protection, strength, and safe travels" },
  { stone: "Amethyst", meaning: "Peace, courage, and inner strength" },
  { stone: "Aquamarine", meaning: "Calm, clarity, and harmony" },
  { stone: "Diamond", meaning: "Strength, eternal love, and clarity" },
  { stone: "Emerald", meaning: "Rebirth, love, and fertility" },
  { stone: "Pearl", meaning: "Purity, wisdom, and integrity" },
  { stone: "Ruby", meaning: "Passion, protection, and prosperity" },
  { stone: "Peridot", meaning: "Strength, positivity, and good fortune" },
  { stone: "Sapphire", meaning: "Loyalty, wisdom, and noble virtues" },
  { stone: "Opal", meaning: "Inspiration, creativity, and hope" },
  { stone: "Topaz", meaning: "Affection, strength, and intelligence" },
  { stone: "Turquoise", meaning: "Good fortune, success, and relaxation" },
];

export function getBirthstone(month: number) {
  return BIRTHSTONES[month - 1];
}

// ─── Birth Flower ─────────────────────────────────────────────────────────────

const BIRTH_FLOWERS = [
  { flower: "Carnation & Snowdrop", flowerJa: "カーネーション・スノードロップ", meaning: "Love, fascination, and hope" },
  { flower: "Violet & Primrose", flowerJa: "スミレ・サクラソウ", meaning: "Faithfulness, modesty, and young love" },
  { flower: "Daffodil", flowerJa: "水仙", meaning: "New beginnings, self-love, and creativity" },
  { flower: "Daisy & Sweet Pea", flowerJa: "デイジー・スイートピー", meaning: "Purity, innocence, and blissful pleasure" },
  { flower: "Lily of the Valley", flowerJa: "スズラン", meaning: "Happiness, luck, and a return to joy" },
  { flower: "Rose", flowerJa: "バラ", meaning: "Love, beauty, and passion" },
  { flower: "Larkspur & Water Lily", flowerJa: "ラークスパー・睡蓮", meaning: "Positivity, dignity, and enlightenment" },
  { flower: "Poppy & Gladiolus", flowerJa: "ポピー・グラジオラス", meaning: "Remembrance, strength, and integrity" },
  { flower: "Aster & Morning Glory", flowerJa: "アスター・朝顔", meaning: "Love, wisdom, and affection" },
  { flower: "Marigold & Cosmos", flowerJa: "マリーゴールド・コスモス", meaning: "Warmth, creativity, and order" },
  { flower: "Chrysanthemum", flowerJa: "菊", meaning: "Loyalty, honesty, and longevity" },
  { flower: "Narcissus & Holly", flowerJa: "水仙・ヒイラギ", meaning: "Hope, renewal, and domestic happiness" },
];

export function getBirthFlower(month: number) {
  return BIRTH_FLOWERS[month - 1];
}

// ─── Life Path Number ─────────────────────────────────────────────────────────

const LIFE_PATH_MEANINGS: Record<number, { meaning: string; strengths: string }> = {
  1: { meaning: "The Leader — independent, ambitious, a pioneer who carves their own path", strengths: "Leadership, originality, courage" },
  2: { meaning: "The Diplomat — cooperative, sensitive, a natural peacemaker and team player", strengths: "Intuition, empathy, patience" },
  3: { meaning: "The Creative — expressive, artistic, joyful communicator", strengths: "Creativity, optimism, communication" },
  4: { meaning: "The Builder — practical, hardworking, a foundation of stability", strengths: "Discipline, reliability, organization" },
  5: { meaning: "The Freedom Seeker — adventurous, adaptable, drawn to change", strengths: "Versatility, curiosity, charisma" },
  6: { meaning: "The Nurturer — loving, responsible, devoted to family and community", strengths: "Compassion, responsibility, healing" },
  7: { meaning: "The Seeker — introspective, spiritual, a deep thinker and truth-seeker", strengths: "Analysis, wisdom, intuition" },
  8: { meaning: "The Powerhouse — ambitious, authoritative, driven toward material and spiritual mastery", strengths: "Determination, vision, executive ability" },
  9: { meaning: "The Humanitarian — compassionate, selfless, here to serve the greater good", strengths: "Generosity, wisdom, idealism" },
  11: { meaning: "Master Number 11 — The Visionary — highly intuitive, inspirational, a spiritual messenger", strengths: "Inspiration, intuition, enlightenment" },
  22: { meaning: "Master Number 22 — The Master Builder — turns dreams into reality on a grand scale", strengths: "Vision, practicality, leadership" },
  33: { meaning: "Master Number 33 — The Master Teacher — embodies pure loving energy and selfless service", strengths: "Compassion, healing, wisdom" },
};

function sumDigits(n: number): number {
  return String(n).split("").reduce((acc, d) => acc + parseInt(d), 0);
}

export function getLifePathNumber(dob: Date): LifePathNumber {
  const d = dob.getDate();
  const m = dob.getMonth() + 1;
  const y = dob.getFullYear();

  let total = sumDigits(d) + sumDigits(m) + sumDigits(y);
  // Reduce but preserve master numbers
  while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
    total = sumDigits(total);
  }

  const info = LIFE_PATH_MEANINGS[total] ?? LIFE_PATH_MEANINGS[9];
  return { number: total, isMaster: [11, 22, 33].includes(total), ...info };
}

// ─── Weekday Meaning ──────────────────────────────────────────────────────────

const WEEKDAY_MEANINGS: WeekdayMeaning[] = [
  { day: "Sunday", planet: "☀️ Sun", meaning: "Born on the Sun's day — a natural leader with a radiant, creative spirit", traits: "Leadership, vitality, generosity" },
  { day: "Monday", planet: "🌙 Moon", meaning: "Born on the Moon's day — highly intuitive, emotionally rich, and deeply empathetic", traits: "Intuition, nurturing, sensitivity" },
  { day: "Tuesday", planet: "♂️ Mars", meaning: "Born on Mars' day — courageous, driven, and fiercely determined", traits: "Energy, ambition, courage" },
  { day: "Wednesday", planet: "☿ Mercury", meaning: "Born on Mercury's day — quick-minded, communicative, and intellectually gifted", traits: "Intelligence, adaptability, communication" },
  { day: "Thursday", planet: "♃ Jupiter", meaning: "Born on Jupiter's day — optimistic, generous, and destined for expansion", traits: "Wisdom, abundance, optimism" },
  { day: "Friday", planet: "♀️ Venus", meaning: "Born on Venus' day — magnetic, loving, and drawn to beauty and harmony", traits: "Love, beauty, creativity" },
  { day: "Saturday", planet: "♄ Saturn", meaning: "Born on Saturn's day — disciplined, patient, and built for long-term mastery", traits: "Discipline, persistence, wisdom" },
];

export function getWeekdayMeaning(dayIndex: number): WeekdayMeaning {
  return WEEKDAY_MEANINGS[dayIndex];
}

// ─── Mainstream Generation ────────────────────────────────────────────────────

const GENERATIONS: Generation[] = [
  { name: "The Silent Generation", years: "1928–1945", description: "Resilient and disciplined, shaped by the Great Depression and World War II. Known for hard work, loyalty, and conformity." },
  { name: "Baby Boomer", years: "1946–1964", description: "The post-war generation that redefined culture through the 60s and 70s. Idealistic, competitive, and work-oriented." },
  { name: "Generation X", years: "1965–1980", description: "Independent, resourceful, and skeptical — the latchkey generation that bridged the analog and digital worlds." },
  { name: "Millennial (Gen Y)", years: "1981–1996", description: "Digital pioneers who came of age with the internet. Collaborative, purpose-driven, and values-oriented." },
  { name: "Generation Z", years: "1997–2012", description: "True digital natives who grew up with smartphones. Pragmatic, inclusive, and entrepreneurially minded." },
  { name: "Generation Alpha", years: "2013–2025", description: "The most technologically immersed generation yet. Shaped by AI, social media from birth, and global interconnectedness." },
];

export function getGeneration(year: number): Generation {
  if (year <= 1927) return { name: "Greatest Generation", years: "before 1928", description: "Survivors of the Great Depression and veterans of World War I, defined by sacrifice and civic duty." };
  if (year <= 1945) return GENERATIONS[0];
  if (year <= 1964) return GENERATIONS[1];
  if (year <= 1980) return GENERATIONS[2];
  if (year <= 1996) return GENERATIONS[3];
  if (year <= 2012) return GENERATIONS[4];
  return GENERATIONS[5];
}

// ─── Spiritual Generation ─────────────────────────────────────────────────────

const SPIRITUAL_GENERATIONS: SpiritualGeneration[] = [
  {
    name: "Indigo Child",
    years: "~1970–1990",
    description: "Indigo Children are believed to be born with a special mission to challenge outdated systems and usher in a new paradigm. They possess strong intuition, a deep sense of purpose, and often feel like outsiders.",
    traits: ["Highly intuitive", "Strong-willed", "Empathic", "Questions authority", "Sense of a special mission"],
    isStarChild: true,
  },
  {
    name: "Crystal Child",
    years: "~1990–2010",
    description: "Crystal Children radiate love, peace, and harmony. Born as natural healers and empaths, they are gentle souls who bridge spiritual dimensions with everyday life.",
    traits: ["Deeply empathic", "Peaceful & loving", "Highly sensitive", "Natural healer", "Strong connection to nature"],
    isStarChild: true,
  },
  {
    name: "Rainbow Child",
    years: "~2000–present",
    description: "Rainbow Children are said to be born without karmic baggage, arriving in pure joy and divine love. They are natural givers and are here to build a new world of harmony.",
    traits: ["Pure joy & love", "No karmic debt", "Highly energetic", "Fearless", "Unconditionally loving"],
    isStarChild: true,
  },
];

export function getSpiritualGeneration(year: number): SpiritualGeneration {
  if (year >= 1970 && year <= 1994) return SPIRITUAL_GENERATIONS[0];
  if (year >= 1990 && year <= 2009) return SPIRITUAL_GENERATIONS[1];
  if (year >= 2000) return SPIRITUAL_GENERATIONS[2];
  return {
    name: "Star Child",
    years: "any",
    description: "Many spiritual traditions hold that all souls choosing to incarnate in the modern era carry a higher vibrational mission — whether or not they fall into a named category.",
    traits: ["Spiritually aware", "Soul mission", "Sensitive to energy"],
    isStarChild: false,
  };
}

// ─── Moon Phase ───────────────────────────────────────────────────────────────

export interface MoonPhase {
  phase: string;
  emoji: string;
  illumination: string;
  meaning: string;
}

const MOON_PHASES: MoonPhase[] = [
  { phase: "New Moon", emoji: "🌑", illumination: "0%", meaning: "New beginnings, intention-setting, and inner reflection. A powerful time for planting seeds of intention." },
  { phase: "Waxing Crescent", emoji: "🌒", illumination: "~25%", meaning: "Growth, hope, and gathering energy. You were born with an instinct to move forward and build." },
  { phase: "First Quarter", emoji: "🌓", illumination: "~50%", meaning: "Action, decisiveness, and overcoming challenges. A dynamic, determined energy at birth." },
  { phase: "Waxing Gibbous", emoji: "🌔", illumination: "~75%", meaning: "Refinement, perseverance, and focus. An analytical and detail-oriented spirit." },
  { phase: "Full Moon", emoji: "🌕", illumination: "100%", meaning: "Culmination, heightened emotions, and visibility. Full Moon births are said to be deeply expressive and emotionally intense." },
  { phase: "Waning Gibbous", emoji: "🌖", illumination: "~75%", meaning: "Gratitude, sharing, and communication. A natural teacher and giver of wisdom." },
  { phase: "Last Quarter", emoji: "🌗", illumination: "~50%", meaning: "Release, reflection, and transition. Born with the gift of letting go and seeing the bigger picture." },
  { phase: "Waning Crescent", emoji: "🌘", illumination: "~25%", meaning: "Rest, surrender, and deep intuition. A mystical, introspective energy with strong psychic sensitivity." },
];

export function getMoonPhase(dob: Date): MoonPhase {
  // Known new moon: January 6, 2000 18:14 UTC
  const KNOWN_NEW_MOON = new Date("2000-01-06T18:14:00Z");
  const SYNODIC = 29.53059;
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysSince = (dob.getTime() - KNOWN_NEW_MOON.getTime()) / msPerDay;
  const phase = ((daysSince % SYNODIC) + SYNODIC) % SYNODIC;
  const index = Math.floor((phase / SYNODIC) * 8) % 8;
  return MOON_PHASES[index];
}

// ─── Mayan Dreamspell Calendar ────────────────────────────────────────────────

export interface MayanProfile {
  kin: number;
  daySign: string;
  color: string;
  galacticTone: string;
  toneNumber: number;
  wavespell: string;
  wavespellTheme: string;
  fullName: string;
  daySignMeaning: string;
  toneMeaning: string;
}

const DAY_SIGNS = [
  "Dragon", "Wind", "Night", "Seed", "Serpent", "Worldbridger",
  "Hand", "Star", "Moon", "Dog", "Monkey", "Human",
  "Skywalker", "Wizard", "Eagle", "Warrior", "Earth", "Mirror", "Storm", "Sun",
];
const SEAL_COLORS = ["Red", "White", "Blue", "Yellow"];
const GALACTIC_TONES = [
  "", "Magnetic", "Lunar", "Electric", "Self-Existing", "Overtone",
  "Rhythmic", "Resonant", "Galactic", "Solar", "Planetary", "Spectral", "Crystal", "Cosmic",
];

const DAY_SIGN_MEANINGS: Record<string, string> = {
  Dragon: "Primordial life force, birth, and nurturing. You carry the energy of creation itself — deeply connected to origins, beginnings, and the sustaining power of existence.",
  Wind: "Spirit, breath, and communication. You are a channel for divine inspiration, gifted at transmitting ideas, truth, and higher wisdom into the world.",
  Night: "The dreamtime, abundance, and the intuitive interior. You are deeply attuned to the unseen realms, with a rich inner life and natural gifts for dreaming and visioning.",
  Seed: "Flowering, awareness, and targeting. You hold the potential of pure possibility. Your life is about planting intentions and watching them blossom through focused awareness.",
  Serpent: "Life force, instinct, and kundalini. You carry powerful physical and psychic energy, with an innate connection to the body's wisdom and the rising fire of transformation.",
  Worldbridger: "Death, opportunity, and equalizing. You are a bridge between worlds — the one who completes cycles, surrenders the old, and opens the gateway to transformation.",
  Hand: "Knowledge, healing, and accomplishment. You are a natural healer and doer, with hands-on wisdom and the drive to bring knowledge into practical, healing action.",
  Star: "Art, elegance, and beauty. You carry the vibration of the artist and the star — here to express beauty, harmony, and the creative pulse of the universe.",
  Moon: "Purification, flow, and universal water. You are deeply feeling and emotionally attuned, a vessel for the sacred flow of life and the purification of old emotional patterns.",
  Dog: "Love, loyalty, and heart. You carry the energy of unconditional love and devoted companionship — a heart-centered soul with deep bonds and unwavering loyalty.",
  Monkey: "Play, magic, and illusion. You are the sacred trickster and cosmic artist, here to weave magic through creativity, humor, and the transformative power of play.",
  Human: "Free will, wisdom, and harvest. You are the free-willed seeker, gathering wisdom through experience and using your harvest of knowledge to guide yourself and others.",
  Skywalker: "Space, prophecy, and wakefulness. You are the explorer of inner and outer space — a wakeful traveler who bridges heaven and earth through expanded awareness.",
  Wizard: "Timelessness, enchantment, and receptivity. You are the shaman and enchanter, receptive to the eternal now and gifted at aligning with the deeper magic of existence.",
  Eagle: "Vision, mind, and creativity. You carry the eagle's gift of far-seeing — the ability to rise above the ordinary and perceive the larger patterns of life with clarity.",
  Warrior: "Intelligence, fearlessness, and integrity. You are the spiritual warrior, questioning, testing, and walking the path with integrity, courage, and cosmic intelligence.",
  Earth: "Navigation, synchronicity, and evolution. You are attuned to the Earth's heartbeat and the web of synchronicity — a natural navigator of life's sacred patterns.",
  Mirror: "Reflection, order, and endlessness. You hold up the mirror to truth — a seeker of clarity and order who reflects reality back with precision and timeless awareness.",
  Storm: "Self-generation, energy, and catalysis. You carry the catalytic force of transformation — a self-generating dynamo who brings change, renewal, and electric awakening.",
  Sun: "Universal fire, life, and enlightenment. You carry the solar flame of consciousness — here to illuminate, uplift, and embody the enlightened awareness of pure life force.",
};

const TONE_MEANINGS: Record<number, string> = {
  1: "Magnetic (Tone 1) — Attraction and unification. You have a magnetic quality that draws people and experiences into your life. Your power lies in setting a clear purpose that unifies all around it.",
  2: "Lunar (Tone 2) — Challenge and polarity. You thrive through navigating opposites and finding balance within duality. Your greatest growth comes through meeting challenges with grace.",
  3: "Electric (Tone 3) — Service and activation. You carry an activating, electric energy that bonds and serves. You are here to bond with others and activate collective potential.",
  4: "Self-Existing (Tone 4) — Form and definition. You bring things into form through precise definition and measurement. Your gift is creating clear structures that make ideas real.",
  5: "Overtone (Tone 5) — Radiance and empowerment. You radiate a commanding presence that empowers everyone around you. You are a natural center of radiant power and creative command.",
  6: "Rhythmic (Tone 6) — Balance and organization. You have an innate sense of rhythm and organization, bringing dynamic equality and balance to all areas of life.",
  7: "Resonant (Tone 7) — Attunement and inspiration. You are a highly sensitive channel for divine inspiration, resonating with the mystic center of the Tzolk'in. Your gift is deep attunement.",
  8: "Galactic (Tone 8) — Integrity and harmonizing. You harmonize your actions with your highest principles, modeling integrity in everything you do. Living your truth is your superpower.",
  9: "Solar (Tone 9) — Intention and pulsing. You pulse with solar intention, realizing your visions through clear, purposeful action. Your realizations inspire those around you.",
  10: "Planetary (Tone 10) — Manifestation and perfection. You carry the gift of manifestation — the ability to produce, perfect, and bring intentions fully into the material world.",
  11: "Spectral (Tone 11) — Liberation and release. You carry the power of dissolution — freeing what is no longer needed so that pure energy can be liberated and transformed.",
  12: "Crystal (Tone 12) — Dedication and cooperation. You are the universal co-creator, bringing people into dedicated cooperation. Your power flourishes in community and shared vision.",
  13: "Cosmic (Tone 13) — Transcendence and presence. You carry the highest vibrational tone — the energy of endurance, transcendence, and the eternal present that goes beyond time.",
};

const WAVESPELL_THEMES: Record<string, string> = {
  Dragon: "birth, nurturing, and new beginnings",
  Wind: "communication, breath, and divine transmission",
  Night: "dreaming, abundance, and interior wisdom",
  Seed: "flowering, awareness, and targeting your goals",
  Serpent: "life force, instinct, and physical vitality",
  Worldbridger: "release, surrender, and transformation",
  Hand: "healing, knowledge, and accomplishment",
  Star: "beauty, art, and elegant creativity",
  Moon: "emotional flow, purification, and feeling",
  Dog: "love, loyalty, and heart-centered connection",
  Monkey: "play, magic, and creative illusion",
  Human: "free will, harvest, and accumulated wisdom",
  Skywalker: "exploration, prophecy, and expanded awareness",
  Wizard: "timelessness, enchantment, and receptivity",
  Eagle: "vision, creativity, and seeing the big picture",
  Warrior: "integrity, fearlessness, and questioning",
  Earth: "synchronicity, navigation, and evolution",
  Mirror: "reflection, truth, and infinite order",
  Storm: "transformation, self-generation, and catalysis",
  Sun: "enlightenment, life force, and solar fire",
};

function isLeapYear(y: number) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

function mayanDaysBetween(a: Date, b: Date): number {
  const msPerDay = 86400000;
  const calDays = Math.round((b.getTime() - a.getTime()) / msPerDay);
  const lo = calDays >= 0 ? a : b;
  const hi = calDays >= 0 ? b : a;
  let leaps = 0;
  for (let y = lo.getFullYear(); y <= hi.getFullYear(); y++) {
    if (isLeapYear(y)) {
      const feb29 = new Date(y, 1, 29);
      if (feb29 > lo && feb29 <= hi) leaps++;
    }
  }
  return calDays >= 0 ? calDays - leaps : calDays + leaps;
}

// Anchor: March 30, 1968 = Kin 1 (verified against known dates)
const MAYAN_ANCHOR = new Date(1968, 2, 30);

export function getMayanProfile(dob: Date): MayanProfile {
  const diff = mayanDaysBetween(MAYAN_ANCHOR, dob);
  const kin = ((diff % 260) + 260) % 260 + 1;
  const seal = (kin - 1) % 20;
  const toneNumber = (kin - 1) % 13 + 1;
  const color = SEAL_COLORS[seal % 4];
  const wsIndex = Math.floor((kin - 1) / 13);
  const wsSeal = (wsIndex * 13) % 20;
  const daySign = DAY_SIGNS[seal];
  const galacticTone = GALACTIC_TONES[toneNumber];
  const wavespell = DAY_SIGNS[wsSeal];
  return {
    kin,
    daySign,
    color,
    galacticTone,
    toneNumber,
    wavespell,
    wavespellTheme: WAVESPELL_THEMES[wavespell] ?? "transformation and renewal",
    fullName: `${galacticTone} ${color} ${daySign}`,
    daySignMeaning: DAY_SIGN_MEANINGS[daySign] ?? "",
    toneMeaning: TONE_MEANINGS[toneNumber] ?? "",
  };
}

// ─── Famous Birthdays ─────────────────────────────────────────────────────────

const FAMOUS_BIRTHDAYS: Record<string, FamousPerson[]> = {
  "01-01": [{ name: "J.D. Salinger", description: "Author of The Catcher in the Rye" }, { name: "Verne Troyer", description: "Actor known as Mini-Me" }],
  "01-06": [{ name: "Joan of Arc", description: "French military leader and saint" }],
  "01-08": [{ name: "David Bowie", description: "Legendary rock musician and icon" }, { name: "Elvis Presley", description: "The King of Rock and Roll" }],
  "01-14": [{ name: "LL Cool J", description: "Rapper and actor" }],
  "01-17": [{ name: "Muhammad Ali", description: "Greatest heavyweight boxer of all time" }, { name: "Michelle Obama", description: "Former First Lady of the United States" }],
  "01-19": [{ name: "Edgar Allan Poe", description: "Author of gothic tales and poetry" }],
  "01-25": [{ name: "Alicia Keys", description: "Grammy-winning singer-songwriter" }],
  "01-27": [{ name: "Wolfgang Amadeus Mozart", description: "Classical music composer" }],
  "02-02": [{ name: "Shakira", description: "Colombian pop and Latin music star" }],
  "02-06": [{ name: "Bob Marley", description: "Reggae legend and cultural icon" }],
  "02-08": [{ name: "James Dean", description: "Iconic actor of Rebel Without a Cause" }],
  "02-11": [{ name: "Thomas Edison", description: "Inventor of the lightbulb and phonograph" }],
  "02-12": [{ name: "Abraham Lincoln", description: "16th President of the United States" }, { name: "Charles Darwin", description: "Father of evolutionary theory" }],
  "02-14": [{ name: "Frederick Douglass", description: "Abolitionist and statesman" }],
  "02-15": [{ name: "Galileo Galilei", description: "Astronomer and father of modern science" }],
  "02-19": [{ name: "Nicolaus Copernicus", description: "Astronomer who proposed heliocentrism" }],
  "02-23": [{ name: "W.E.B. Du Bois", description: "Civil rights leader and sociologist" }],
  "03-03": [{ name: "Alexander Graham Bell", description: "Inventor of the telephone" }],
  "03-14": [{ name: "Albert Einstein", description: "Theoretical physicist, E=mc²" }, { name: "Stephen Hawking", description: "Theoretical physicist and cosmologist" }],
  "03-16": [{ name: "Jerry Lewis", description: "Comedian and filmmaker" }],
  "03-21": [{ name: "Johann Sebastian Bach", description: "Baroque composer and musician" }],
  "03-25": [{ name: "Elton John", description: "Legendary British singer-songwriter" }],
  "04-01": [{ name: "Asa Butterfield", description: "Actor known for Hugo and Ender's Game" }],
  "04-02": [{ name: "Hans Christian Andersen", description: "Author of fairy tales" }],
  "04-13": [{ name: "Thomas Jefferson", description: "3rd President of the United States" }],
  "04-15": [{ name: "Leonardo da Vinci", description: "Renaissance artist and inventor" }],
  "04-22": [{ name: "Immanuel Kant", description: "Philosopher of the Enlightenment" }, { name: "Jack Nicholson", description: "Oscar-winning actor" }],
  "04-23": [{ name: "William Shakespeare", description: "The greatest playwright in the English language" }],
  "05-01": [{ name: "Wes Anderson", description: "Acclaimed film director" }],
  "05-06": [{ name: "Sigmund Freud", description: "Founder of psychoanalysis" }],
  "05-12": [{ name: "Florence Nightingale", description: "Founder of modern nursing" }],
  "05-14": [{ name: "Mark Zuckerberg", description: "Co-founder of Facebook/Meta" }],
  "05-19": [{ name: "Malcolm X", description: "Civil rights activist and leader" }],
  "05-25": [{ name: "Ralph Waldo Emerson", description: "Philosopher and poet" }],
  "05-29": [{ name: "John F. Kennedy", description: "35th President of the United States" }],
  "06-02": [{ name: "Marquis de Sade", description: "French nobleman and writer" }],
  "06-07": [{ name: "Prince", description: "Musical genius and rock icon" }],
  "06-09": [{ name: "Johnny Depp", description: "Actor known for Pirates of the Caribbean" }],
  "06-12": [{ name: "Anne Frank", description: "Diarist and Holocaust victim" }],
  "06-18": [{ name: "Paul McCartney", description: "Beatle and legendary musician" }],
  "06-25": [{ name: "George Orwell", description: "Author of 1984 and Animal Farm" }, { name: "Michael Jackson", description: "King of Pop" }],
  "07-04": [{ name: "Nathaniel Hawthorne", description: "American novelist" }, { name: "Calvin Coolidge", description: "30th US President" }],
  "07-06": [{ name: "Frida Kahlo", description: "Iconic Mexican painter" }, { name: "Dalai Lama", description: "Tibetan Buddhist spiritual leader" }],
  "07-21": [{ name: "Ernest Hemingway", description: "Nobel Prize-winning author" }],
  "07-25": [{ name: "Rosalind Franklin", description: "Pioneering X-ray crystallographer" }],
  "08-04": [{ name: "Barack Obama", description: "44th President of the United States" }],
  "08-05": [{ name: "Neil Armstrong", description: "First human to walk on the Moon" }],
  "08-06": [{ name: "Andy Warhol", description: "Pop art pioneer" }],
  "08-09": [{ name: "Whitney Houston", description: "Legendary R&B vocalist" }],
  "08-12": [{ name: "Erwin Schrödinger", description: "Quantum physics pioneer" }],
  "08-26": [{ name: "Mother Teresa", description: "Humanitarian and Nobel Peace Prize laureate" }],
  "09-05": [{ name: "Freddie Mercury", description: "Lead vocalist of Queen" }],
  "09-15": [{ name: "Agatha Christie", description: "Best-selling mystery novelist" }],
  "09-17": [{ name: "Hank Williams", description: "Country music pioneer" }],
  "09-26": [{ name: "T.S. Eliot", description: "Modernist poet and Nobel laureate" }],
  "09-28": [{ name: "Confucius", description: "Chinese philosopher and teacher" }],
  "10-02": [{ name: "Mahatma Gandhi", description: "Leader of Indian independence, father of non-violence" }],
  "10-09": [{ name: "John Lennon", description: "Beatle, peace activist, and solo artist" }],
  "10-14": [{ name: "Dwight D. Eisenhower", description: "34th US President and WWII general" }],
  "10-16": [{ name: "Oscar Wilde", description: "Irish poet and playwright" }],
  "10-22": [{ name: "Franz Liszt", description: "Virtuoso pianist and composer" }],
  "10-28": [{ name: "Bill Gates", description: "Co-founder of Microsoft" }, { name: "Joaquin Phoenix", description: "Oscar-winning actor" }],
  "10-31": [{ name: "John Keats", description: "Romantic poet" }],
  "11-08": [{ name: "Bram Stoker", description: "Author of Dracula" }],
  "11-10": [{ name: "Martin Luther", description: "Father of the Protestant Reformation" }],
  "11-19": [{ name: "Indira Gandhi", description: "First female Prime Minister of India" }],
  "11-29": [{ name: "C.S. Lewis", description: "Author of The Chronicles of Narnia" }],
  "12-05": [{ name: "Walt Disney", description: "Creator of Mickey Mouse and Disney empire" }],
  "12-10": [{ name: "Emily Dickinson", description: "Beloved American poet" }],
  "12-16": [{ name: "Ludwig van Beethoven", description: "Classical composer who composed while deaf" }],
  "12-17": [{ name: "Beethoven", description: "Baptism day of the classical music giant" }],
  "12-25": [{ name: "Isaac Newton", description: "Mathematician and physicist who discovered gravity" }, { name: "Humphrey Bogart", description: "Hollywood golden age actor" }],
  "12-28": [{ name: "Stan Lee", description: "Creator of Marvel Comics superheroes" }],
};

export function getFamousBirthdays(month: number, day: number): FamousPerson[] {
  const key = `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  return FAMOUS_BIRTHDAYS[key] ?? [];
}

// ─── Japanese Locale Overrides ────────────────────────────────────────────────

const WESTERN_ZODIAC_TRAITS_JA: Record<string, string> = {
  Capricorn: "野心家で現実的、忍耐強く自制心が高い",
  Aquarius: "独立心が強く、独創的で人道主義的な思想家",
  Pisces: "直感が鋭く、思いやりがあり、芸術的で優しい",
  Aries: "勇気があり、活発で情熱的な先駆者",
  Taurus: "信頼性が高く、忍耐強く、誠実で安定感がある",
  Gemini: "適応力があり、好奇心旺盛でコミュニケーション上手",
  Cancer: "直感が鋭く、感情豊かで、愛情深く守護的",
  Leo: "創造的で寛大、温かく陽気なリーダー",
  Virgo: "分析力に優れ、勤勉で実用的かつ誠実",
  Libra: "外交的で公平、社交的で優雅",
  Scorpio: "勇気があり、情熱的で機知に富み、意志が強い",
  Sagittarius: "寛大で理想主義的、冒険心あふれる楽観主義者",
};

const CHINESE_ZODIAC_TRAITS_JA: Record<string, string> = {
  Rat: "機転が利き、臨機応変で適応力が高い",
  Ox: "勤勉で信頼できる、芯が強く意志堅固",
  Tiger: "勇敢で自信に満ち、魅力的なカリスマ",
  Rabbit: "優しく穏やか、品があり思いやりがある",
  Dragon: "自信家で知的、情熱にあふれた存在",
  Snake: "謎めいて賢く、鋭い直感を持つ",
  Horse: "活発でエネルギッシュ、心が温かい",
  Goat: "穏やかで優しく、創造性豊か",
  Monkey: "機知に富み、いたずら好きで好奇心旺盛",
  Rooster: "観察眼があり、勤勉で勇気がある",
  Dog: "誠実で正直、思いやりがある",
  Pig: "思いやりがあり、寛大で勤勉",
};

const LIFE_PATH_MEANINGS_JA: Record<number, { meaning: string; strengths: string }> = {
  1: { meaning: "リーダー — 独立心旺盛で野心的、自分だけの道を切り開くパイオニア", strengths: "リーダーシップ、独創性、勇気" },
  2: { meaning: "外交官 — 協調性が高く感受性豊かな、天性の平和主義者", strengths: "直感、共感力、忍耐" },
  3: { meaning: "クリエイター — 表現力豊かで芸術的な、喜びのコミュニケーター", strengths: "創造性、楽観主義、コミュニケーション力" },
  4: { meaning: "ビルダー — 実践的で勤勉、安定の礎となる存在", strengths: "規律、信頼性、組織力" },
  5: { meaning: "自由探求者 — 冒険的で適応力があり、変化を求める", strengths: "柔軟性、好奇心、カリスマ性" },
  6: { meaning: "養育者 — 愛情深く責任感が強く、家族と社会に献身的", strengths: "思いやり、責任感、癒しの力" },
  7: { meaning: "探求者 — 内省的でスピリチュアル、深い思想家と真理の探求者", strengths: "分析力、知恵、直感" },
  8: { meaning: "パワーハウス — 野心的で権威があり、物質的・精神的な習熟を目指す", strengths: "決断力、ビジョン、実行力" },
  9: { meaning: "人道主義者 — 思いやりがあり無私で、より大きな善のために奉仕する", strengths: "寛大さ、知恵、理想主義" },
  11: { meaning: "マスターナンバー11 — ビジョナリー — 高い直感力と霊感を持つ精神的メッセンジャー", strengths: "インスピレーション、直感、悟り" },
  22: { meaning: "マスターナンバー22 — マスタービルダー — 夢を大規模に現実へと変える存在", strengths: "ビジョン、実用性、リーダーシップ" },
  33: { meaning: "マスターナンバー33 — マスターティーチャー — 純粋な愛のエネルギーと無私の奉仕を体現", strengths: "思いやり、癒し、知恵" },
};

const WEEKDAY_MEANINGS_JA: WeekdayMeaning[] = [
  { day: "日曜日", planet: "☀️ 太陽", meaning: "太陽の日に生まれた — 輝かしく創造的な精神を持つ、天性のリーダー", traits: "リーダーシップ、生命力、寛大さ" },
  { day: "月曜日", planet: "🌙 月", meaning: "月の日に生まれた — 高い直感力と豊かな感情、深い共感力を持つ", traits: "直感力、養育力、感受性" },
  { day: "火曜日", planet: "♂️ 火星", meaning: "火星の日に生まれた — 勇敢で行動力があり、不屈の意志を持つ", traits: "エネルギー、野心、勇気" },
  { day: "水曜日", planet: "☿ 水星", meaning: "水星の日に生まれた — 聡明で表現力豊か、知的な才能に恵まれる", traits: "知性、適応力、コミュニケーション力" },
  { day: "木曜日", planet: "♃ 木星", meaning: "木星の日に生まれた — 楽観的で寛大、拡大と繁栄へと導かれる", traits: "知恵、豊かさ、楽観主義" },
  { day: "金曜日", planet: "♀️ 金星", meaning: "金星の日に生まれた — 魅力的で愛情深く、美と調和を引き寄せる", traits: "愛、美、創造性" },
  { day: "土曜日", planet: "♄ 土星", meaning: "土星の日に生まれた — 規律があり忍耐強く、長期的な習熟のために生まれた", traits: "規律、粘り強さ、知恵" },
];

const BIRTHSTONE_MEANINGS_JA = [
  "守護、強さ、旅の安全",
  "平和、勇気、内なる強さ",
  "落ち着き、明晰さ、調和",
  "強さ、永遠の愛、明晰さ",
  "再生、愛、豊かさ",
  "純粋さ、知恵、誠実さ",
  "情熱、守護、繁栄",
  "強さ、前向きさ、幸運",
  "誠実さ、知恵、高貴な美徳",
  "インスピレーション、創造性、希望",
  "愛情、強さ、知性",
  "幸運、成功、安らぎ",
];

const BIRTH_FLOWER_MEANINGS_JA = [
  "愛、魅力、そして希望",
  "誠実さ、謙虚さ、若い愛",
  "新しい始まり、自己愛、創造性",
  "純粋さ、無垢、至福の喜び",
  "幸福、幸運、喜びの回帰",
  "愛、美しさ、情熱",
  "前向きさ、威厳、悟り",
  "追憶、強さ、誠実さ",
  "愛、知恵、深い情愛",
  "温かさ、創造性、秩序",
  "忠誠心、誠実さ、長寿",
  "希望、再生、家庭の幸福",
];

const GENERATION_DESC_JA: Record<string, string> = {
  "Greatest Generation": "大恐慌と第一次・第二次世界大戦を生き抜いた世代。犠牲と市民としての義務を美徳とし、強靭な精神を持つ。",
  "The Silent Generation": "大恐慌と第二次世界大戦によって形成された世代。勤勉、忠誠心、協調性を重んじる。",
  "Baby Boomer": "戦後世代。60〜70年代の文化革命を担い、理想主義と競争心を持ち、仕事を重視する。",
  "Generation X": "独立心旺盛で現実的、懐疑的なアナログとデジタルの架け橋世代。",
  "Millennial (Gen Y)": "インターネットと共に成長したデジタルパイオニア。協調性があり、目的意識と価値観を大切にする。",
  "Generation Z": "スマートフォン時代に育った真のデジタルネイティブ。現実的で包括的、起業家精神旺盛。",
  "Generation Alpha": "AI・SNS・グローバルな繋がりの中で育つ、最もテクノロジーに浸った世代。",
};

const SPIRITUAL_GENERATION_DESC_JA: Record<string, { description: string; traits: string[] }> = {
  "Indigo Child": {
    description: "インディゴチルドレンは古い制度に挑戦し、新しいパラダイムをもたらす使命を持って生まれると言われています。強い直感、深い使命感を持ち、しばしば周囲に馴染めないと感じることがあります。",
    traits: ["高い直感力", "意志が強い", "共感力が高い", "権威に疑問を持つ", "特別な使命感"],
  },
  "Crystal Child": {
    description: "クリスタルチルドレンは愛、平和、調和を放射します。生まれながらのヒーラーや共感者として、日常生活にスピリチュアルな次元を橋渡しする穏やかな魂です。",
    traits: ["深い共感力", "穏やかで愛情深い", "高い感受性", "天然のヒーラー", "自然との強い繋がり"],
  },
  "Rainbow Child": {
    description: "レインボーチルドレンはカルマの重荷なく、純粋な喜びと神聖な愛で生まれてくると言われています。与えることが自然で、新しい調和の世界を創ることが使命です。",
    traits: ["純粋な喜びと愛", "カルマの束縛なし", "高いエネルギー", "恐れを知らない", "無条件の愛"],
  },
  "Star Child": {
    description: "多くの霊的伝統では、現代に生まれることを選んだすべての魂は、名称に関わらず高い振動数の使命を帯びていると考えます。",
    traits: ["スピリチュアルな目覚め", "魂の使命", "エネルギーへの感受性"],
  },
};

const MOON_PHASE_MEANINGS_JA: Record<string, string> = {
  "New Moon": "新たな始まり、意図の設定、内省の時。意図の種を蒔く力強い時期に生まれました。",
  "Waxing Crescent": "成長、希望、エネルギーの集積。前へ進み、積み上げていく本能を持って生まれました。",
  "First Quarter": "行動力、決断力、困難の克服。生まれながらのダイナミックで確固たるエネルギーを持ちます。",
  "Waxing Gibbous": "洗練、忍耐、集中力。分析的で細部にこだわる精神の持ち主。",
  "Full Moon": "絶頂、高ぶった感情、存在感の発揮。満月生まれは深い表現力と強烈な感受性を持つと言われます。",
  "Waning Gibbous": "感謝、分かち合い、コミュニケーション。天然の教師であり、知恵を伝える人。",
  "Last Quarter": "手放し、内省、移行期。手放す才能と大きな視野で物事を見る力を持って生まれました。",
  "Waning Crescent": "休息、委ねること、深い直感。神秘的で内省的なエネルギーと強い霊的感受性を持ちます。",
};

const DAY_SIGN_MEANINGS_JA: Record<string, string> = {
  Dragon: "根源的な生命力、誕生、養育。あなたは創造そのもののエネルギーを宿し、起源・始まり・存在を支える力と深く繋がっています。",
  Wind: "霊、息吹、コミュニケーション。あなたは神聖なインスピレーションの通り道であり、理念・真実・高次の知恵を世界へ伝える才能を持っています。",
  Night: "夢の世界、豊かさ、直感的な内面。あなたは目に見えない領域と深く共鳴し、豊かな内面世界と夢見るビジョンの力を持っています。",
  Seed: "開花、気づき、的を絞ること。あなたは純粋な可能性の塊。意図を蒔き、集中した気づきによってそれを花開かせることが人生のテーマです。",
  Serpent: "生命力、本能、クンダリーニ。あなたは強力な身体的・サイキック的エネルギーを宿し、身体の知恵と変容の炎の上昇と深く繋がっています。",
  Worldbridger: "死、機会、均衡化。あなたは世界と世界の橋渡し役。サイクルを完了させ、古きを手放し、変容への扉を開く存在です。",
  Hand: "知識、癒し、達成。あなたは天然のヒーラーであり行動者。知識を実践的で癒しの行動として結実させる力があります。",
  Star: "芸術、優雅さ、美。あなたはアーティストとスターの振動を持ち、美・調和・宇宙の創造的鼓動を表現するためにここにいます。",
  Moon: "浄化、流れ、宇宙の水。あなたは深い感受性と感情的な共鳴を持ち、聖なる生命の流れと古い感情パターンの浄化の器です。",
  Dog: "愛、忠誠、心。あなたは無条件の愛と献身的な絆のエネルギーを宿す、心中心の魂です。",
  Monkey: "遊び、魔法、幻想。あなたは神聖なトリックスターと宇宙的なアーティスト。創造性・ユーモア・遊びの変容的な力で魔法を紡ぎます。",
  Human: "自由意志、知恵、収穫。あなたは自由意志の探求者であり、経験を通じて知恵を集め、その収穫で自分と他者を導きます。",
  Skywalker: "宇宙、予言、目覚め。あなたは内外の宇宙の探検家。拡大された意識で天と地を繋ぐ、目覚めた旅人です。",
  Wizard: "時を超えた存在、魔法、受容性。あなたはシャーマンと魔法使い。永遠の今に受容的で、存在の深い魔法に整合する才能を持ちます。",
  Eagle: "ビジョン、心、創造性。あなたは遠くを見通す鷲の才能を持ち、日常を超えて人生の大きなパターンを明晰に見抜く力があります。",
  Warrior: "知性、恐れを知らない勇気、誠実さ。あなたは精神的な戦士。誠実さ・勇気・宇宙的な知性で問い、試し、道を歩みます。",
  Earth: "ナビゲーション、シンクロニシティ、進化。あなたは地球の鼓動と同期のウェブに調和し、人生の神聖なパターンを自然にナビゲートします。",
  Mirror: "反映、秩序、無限性。あなたは真実の鏡を持ち、明晰さと秩序を求め、永遠の意識で現実を精度高く映し返します。",
  Storm: "自己生成、エネルギー、触媒。あなたは変容の触媒的な力を宿す自己発電ダイナモ。変化・再生・電気的な目覚めをもたらします。",
  Sun: "普遍の火、生命、悟り。あなたは意識の太陽の炎を宿し、純粋な生命力の悟った意識を照らし、高め、体現するためにここにいます。",
};

const TONE_MEANINGS_JA: Record<number, string> = {
  1: "磁力（音1）— 引き付けと統一。人や体験を引き寄せる磁力的な質を持ちます。明確な目的を定めることがあなたの力の源です。",
  2: "月光（音2）— 挑戦と二極性。反対を渡り歩き、二元性の中でバランスを見つけることで成長します。",
  3: "電気（音3）— 奉仕と活性化。人と人を繋ぎ、集合的な可能性を活性化する電気的なエネルギーを持ちます。",
  4: "自己存在（音4）— 形と定義。精密な定義と測定で物事を形にする力があります。明確な構造を作ることがあなたの才能です。",
  5: "倍音（音5）— 輝きと力付け。周囲の皆を力付ける輝かしい存在感を放ちます。あなたは放射的な力と創造的な支配の自然な中心です。",
  6: "リズミック（音6）— バランスと組織化。生まれながらのリズム感と組織力で、生活のあらゆる分野にバランスをもたらします。",
  7: "共鳴（音7）— 同調とインスピレーション。神聖なインスピレーションへの高感度チャンネル。ツォルキンの神秘的な中心に共鳴します。深い同調があなたの才能です。",
  8: "銀河（音8）— 誠実さと調和。最高の原則に従って行動を調和させ、あらゆる行動に誠実さを体現します。真実を生きることがあなたの超能力です。",
  9: "太陽（音9）— 意図とパルシング。明確で意図的な行動で、ビジョンを現実に実現させます。あなたの実現は周囲を鼓舞します。",
  10: "惑星（音10）— 顕現と完成。意図を物質世界に完全に実現させる顕現の才能を持ちます。",
  11: "スペクトル（音11）— 解放と手放し。不要なものを溶解させ、純粋なエネルギーを解放・変容させる力を持ちます。",
  12: "クリスタル（音12）— 献身と協力。人々を献身的な協力へと導く普遍の共同創造者。コミュニティと共有のビジョンで力を発揮します。",
  13: "コスミック（音13）— 超越と現在。最高振動の音。忍耐・超越・時間を超えた永遠の現在のエネルギーを持ちます。",
};

const WAVESPELL_THEMES_JA: Record<string, string> = {
  Dragon: "誕生・養育・新たな始まり",
  Wind: "コミュニケーション・息吹・神聖な伝達",
  Night: "夢・豊かさ・内面の知恵",
  Seed: "開花・気づき・目標を絞る",
  Serpent: "生命力・本能・身体的活力",
  Worldbridger: "手放し・委ねること・変容",
  Hand: "癒し・知識・達成",
  Star: "美・芸術・優雅な創造性",
  Moon: "感情の流れ・浄化・感受性",
  Dog: "愛・忠誠・心中心のつながり",
  Monkey: "遊び・魔法・創造的な幻想",
  Human: "自由意志・収穫・積み重ねた知恵",
  Skywalker: "探求・予言・拡大した意識",
  Wizard: "時間を超えた存在・魔法・受容性",
  Eagle: "ビジョン・創造性・大局を見る力",
  Warrior: "誠実さ・恐れなき勇気・問う力",
  Earth: "シンクロニシティ・ナビゲーション・進化",
  Mirror: "反映・真実・無限の秩序",
  Storm: "変容・自己生成・触媒",
  Sun: "悟り・生命力・太陽の火",
};

// ─── Main Profile Builder ─────────────────────────────────────────────────────

export function getBirthProfile(dob: Date, locale?: string): BirthProfile {
  // Guard against invalid Date objects
  if (isNaN(dob.getTime())) dob = new Date();
  const month = dob.getMonth() + 1;
  const day = dob.getDate();
  const year = dob.getFullYear();
  const dayOfWeek = dob.getDay();
  const isJa = locale === "ja";

  const westernZodiac = getWesternZodiac(month, day);
  const chineseZodiac = getChineseZodiac(year);
  const birthstone = getBirthstone(month);
  const birthFlower = getBirthFlower(month);
  const lifePathNumber = getLifePathNumber(dob);
  const weekdayMeaning = getWeekdayMeaning(dayOfWeek);
  const generation = getGeneration(year);
  const spiritualGeneration = getSpiritualGeneration(year);
  const moonPhase = getMoonPhase(dob);
  const mayanProfile = getMayanProfile(dob);

  if (isJa) {
    // Overwrite English strings with Japanese equivalents
    westernZodiac.traits = WESTERN_ZODIAC_TRAITS_JA[westernZodiac.sign] ?? westernZodiac.traits;
    chineseZodiac.traits = CHINESE_ZODIAC_TRAITS_JA[chineseZodiac.animal] ?? chineseZodiac.traits;

    const lpJa = LIFE_PATH_MEANINGS_JA[lifePathNumber.number];
    if (lpJa) { lifePathNumber.meaning = lpJa.meaning; lifePathNumber.strengths = lpJa.strengths; }

    const wdJa = WEEKDAY_MEANINGS_JA[dayOfWeek];
    if (wdJa) { weekdayMeaning.day = wdJa.day; weekdayMeaning.planet = wdJa.planet; weekdayMeaning.meaning = wdJa.meaning; weekdayMeaning.traits = wdJa.traits; }

    birthstone.meaning = BIRTHSTONE_MEANINGS_JA[month - 1] ?? birthstone.meaning;
    birthFlower.meaning = BIRTH_FLOWER_MEANINGS_JA[month - 1] ?? birthFlower.meaning;

    generation.description = GENERATION_DESC_JA[generation.name] ?? generation.description;

    const spJa = SPIRITUAL_GENERATION_DESC_JA[spiritualGeneration.name];
    if (spJa) { spiritualGeneration.description = spJa.description; spiritualGeneration.traits = spJa.traits; }

    moonPhase.meaning = MOON_PHASE_MEANINGS_JA[moonPhase.phase] ?? moonPhase.meaning;

    mayanProfile.daySignMeaning = DAY_SIGN_MEANINGS_JA[mayanProfile.daySign] ?? mayanProfile.daySignMeaning;
    mayanProfile.toneMeaning = TONE_MEANINGS_JA[mayanProfile.toneNumber] ?? mayanProfile.toneMeaning;
    mayanProfile.wavespellTheme = WAVESPELL_THEMES_JA[mayanProfile.wavespell] ?? mayanProfile.wavespellTheme;
  }

  return {
    westernZodiac,
    chineseZodiac,
    birthstone,
    birthFlower,
    lifePathNumber,
    weekdayMeaning,
    generation,
    spiritualGeneration,
    famousBirthdays: getFamousBirthdays(month, day),
    moonPhase,
    mayanProfile,
  };
}
