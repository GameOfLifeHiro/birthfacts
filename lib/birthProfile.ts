// ─── Types ────────────────────────────────────────────────────────────────────

export interface BirthProfile {
  westernZodiac: WesternZodiac;
  chineseZodiac: ChineseZodiac;
  japaneseEra: JapaneseEra;
  birthstone: { stone: string; meaning: string };
  birthFlower: { flower: string; flowerJa: string; meaning: string };
  lifePathNumber: LifePathNumber;
  weekdayMeaning: WeekdayMeaning;
  generation: Generation;
  spiritualGeneration: SpiritualGeneration;
  famousBirthdays: FamousPerson[];
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

// ─── Main Profile Builder ─────────────────────────────────────────────────────

export function getBirthProfile(dob: Date): BirthProfile {
  // Guard against invalid Date objects
  if (isNaN(dob.getTime())) dob = new Date();
  const month = dob.getMonth() + 1;
  const day = dob.getDate();
  const year = dob.getFullYear();
  const dayOfWeek = dob.getDay();

  return {
    westernZodiac: getWesternZodiac(month, day),
    chineseZodiac: getChineseZodiac(year),
    japaneseEra: getJapaneseEra(dob),
    birthstone: getBirthstone(month),
    birthFlower: getBirthFlower(month),
    lifePathNumber: getLifePathNumber(dob),
    weekdayMeaning: getWeekdayMeaning(dayOfWeek),
    generation: getGeneration(year),
    spiritualGeneration: getSpiritualGeneration(year),
    famousBirthdays: getFamousBirthdays(month, day),
  };
}
