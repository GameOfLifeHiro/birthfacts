// ─── 四柱推命 (Shichu Suimei — Four Pillars of Destiny) ──────────────────────
//
// Calculates the Year Pillar, Month Pillar, and Day Pillar using the
// 10 Heavenly Stems (十干 jikkan) and 12 Earthly Branches (十二支 jūnishi).
// Also derives the Five Elements balance (五行 gogyō) and Day Master (日主).
//
// NOTE: This is the foundational calculation. Professional readings include
// hour pillar, luck cycles (大運), and inter-pillar interactions — far beyond
// this introductory display.

export interface Pillar {
  stem: string;      // Heavenly Stem (e.g. 甲)
  branch: string;    // Earthly Branch (e.g. 子)
  stemName: string;  // Stem name (e.g. 甲 - きのえ)
  branchName: string;// Branch name (e.g. 子 - ね)
  element: string;   // Stem element (五行)
  polarity: string;  // 陽 (yang) or 陰 (yin)
  display: string;   // Combined display "甲子"
}

export interface GogyoBalance {
  wood: number;   // 木
  fire: number;   // 火
  earth: number;  // 土
  metal: number;  // 金
  water: number;  // 水
}

export interface ShichuProfile {
  yearPillar: Pillar;
  monthPillar: Pillar;
  dayPillar: Pillar;
  dayMaster: string;         // The Day Pillar stem — core of personality
  dayMasterElement: string;  // Element of Day Master
  dayMasterPolarity: string;
  gogyo: GogyoBalance;
  dayMasterDescription: string;
}

// ─── Data tables ──────────────────────────────────────────────────────────────

const STEMS = [
  { kanji: "甲", reading: "きのえ", element: "Wood",  elementJa: "木", polarity: "陽" },
  { kanji: "乙", reading: "きのと", element: "Wood",  elementJa: "木", polarity: "陰" },
  { kanji: "丙", reading: "ひのえ", element: "Fire",  elementJa: "火", polarity: "陽" },
  { kanji: "丁", reading: "ひのと", element: "Fire",  elementJa: "火", polarity: "陰" },
  { kanji: "戊", reading: "つちのえ", element: "Earth", elementJa: "土", polarity: "陽" },
  { kanji: "己", reading: "つちのと", element: "Earth", elementJa: "土", polarity: "陰" },
  { kanji: "庚", reading: "かのえ", element: "Metal", elementJa: "金", polarity: "陽" },
  { kanji: "辛", reading: "かのと", element: "Metal", elementJa: "金", polarity: "陰" },
  { kanji: "壬", reading: "みずのえ", element: "Water", elementJa: "水", polarity: "陽" },
  { kanji: "癸", reading: "みずのと", element: "Water", elementJa: "水", polarity: "陰" },
];

const BRANCHES = [
  { kanji: "子", reading: "ね",     animal: "鼠", element: "Water" },
  { kanji: "丑", reading: "うし",   animal: "牛", element: "Earth" },
  { kanji: "寅", reading: "とら",   animal: "虎", element: "Wood"  },
  { kanji: "卯", reading: "う",     animal: "兎", element: "Wood"  },
  { kanji: "辰", reading: "たつ",   animal: "龍", element: "Earth" },
  { kanji: "巳", reading: "み",     animal: "蛇", element: "Fire"  },
  { kanji: "午", reading: "うま",   animal: "馬", element: "Fire"  },
  { kanji: "未", reading: "ひつじ", animal: "羊", element: "Earth" },
  { kanji: "申", reading: "さる",   animal: "猿", element: "Metal" },
  { kanji: "酉", reading: "とり",   animal: "鶏", element: "Metal" },
  { kanji: "戌", reading: "いぬ",   animal: "犬", element: "Earth" },
  { kanji: "亥", reading: "い",     animal: "猪", element: "Water" },
];

// Day Master (日主) descriptions by element + polarity
const DAY_MASTER_DESCRIPTIONS: Record<string, string> = {
  "甲": "甲木（陽木）の日主を持つあなたは、まっすぐに天へ伸びる大樹のような存在です。強い意志と向上心を持ち、困難にも折れない芯の強さが特徴です。リーダーシップを発揮し、周囲を引っ張る力があります。",
  "乙": "乙木（陰木）の日主を持つあなたは、柔軟に風に揺れる草花のような存在です。環境への適応力が高く、協調性と感受性に富んでいます。人間関係を大切にし、穏やかに周囲を癒す力があります。",
  "丙": "丙火（陽火）の日主を持つあなたは、太陽のように輝き、周囲を明るく照らす存在です。情熱的で行動力があり、人々にエネルギーと希望を与えます。大きな志を持ち、社会に光をもたらすことが使命です。",
  "丁": "丁火（陰火）の日主を持つあなたは、ろうそくの炎のように、温かく安定した光で周囲を照らします。繊細な感受性と芸術的センスを持ち、深い洞察力で人の心を照らします。",
  "戊": "戊土（陽土）の日主を持つあなたは、大山のように動じない安定感と包容力を持ちます。信頼性が高く、どっしりとした存在感で周囲を支えます。長期的な視点で物事を進める才能があります。",
  "己": "己土（陰土）の日主を持つあなたは、豊かな大地のように、万物を育てる滋養の力を持ちます。細やかな気遣いと実務能力が高く、コツコツと積み上げる堅実さが強みです。",
  "庚": "庚金（陽金）の日主を持つあなたは、鋭い刀のような決断力と正義感を持ちます。義理を重んじ、不正を許さない強い精神の持ち主です。困難を切り拓くパイオニア精神があります。",
  "辛": "辛金（陰金）の日主を持つあなたは、磨かれた宝石のように、洗練された美意識と品格を持ちます。完璧主義的な面がありますが、その高い審美眼が素晴らしい成果をもたらします。",
  "壬": "壬水（陽水）の日主を持つあなたは、広大な海のように、スケールの大きな思考と包容力を持ちます。知的好奇心が旺盛で、自由を愛し、大海を航行するような冒険心があります。",
  "癸": "癸水（陰水）の日主を持つあなたは、澄んだ泉のように、清らかな感受性と深い知恵を持ちます。直感力が鋭く、見えないものを感じ取る霊的な感覚に優れています。",
};

// ─── Year Pillar ──────────────────────────────────────────────────────────────
// Anchor: 1984 = 甲子 (stem index 0, branch index 0)

function getYearPillar(year: number): Pillar {
  const diff = year - 1984;
  const stemIdx = ((diff % 10) + 10) % 10;
  const branchIdx = ((diff % 12) + 12) % 12;
  const stem = STEMS[stemIdx];
  const branch = BRANCHES[branchIdx];
  return {
    stem: stem.kanji,
    branch: branch.kanji,
    stemName: `${stem.kanji}（${stem.reading}）`,
    branchName: `${branch.kanji}（${branch.reading}）`,
    element: stem.element,
    polarity: stem.polarity,
    display: `${stem.kanji}${branch.kanji}`,
  };
}

// ─── Month Pillar ─────────────────────────────────────────────────────────────
// The month branch is fixed by month number (寅 = month 1 in old calendar ≈ Feb).
// We use the simplified Western-month mapping (commonly used in introductory tools):
// Jan=丑(1), Feb=寅(2), Mar=卯(3), ..., Dec=子(12) → index offsets from branch array.
// Month stem depends on year stem using the "五虎遁年" table.

const MONTH_BRANCH_OFFSETS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0];
// Jan→丑(idx1), Feb→寅(idx2), ..., Dec→子(idx0)

// Five-Tiger Year Rule: the starting month stem for each year stem group
const MONTH_STEM_STARTS: Record<number, number> = {
  0: 2,  // 甲年 / 己年 → Jan stem = 丙(idx2)
  5: 2,
  1: 4,  // 乙年 / 庚年 → Jan stem = 戊(idx4)
  6: 4,
  2: 6,  // 丙年 / 辛年 → Jan stem = 庚(idx6)
  7: 6,
  3: 8,  // 丁年 / 壬年 → Jan stem = 壬(idx8)
  8: 8,
  4: 0,  // 戊年 / 癸年 → Jan stem = 甲(idx0)
  9: 0,
};

function getMonthPillar(year: number, month: number): Pillar {
  const yearStemIdx = ((year - 1984) % 10 + 10) % 10;
  const startStemIdx = MONTH_STEM_STARTS[yearStemIdx] ?? 0;
  const monthOffset = month - 1; // 0-based
  const stemIdx = (startStemIdx + monthOffset) % 10;
  const branchIdx = MONTH_BRANCH_OFFSETS[monthOffset];
  const stem = STEMS[stemIdx];
  const branch = BRANCHES[branchIdx];
  return {
    stem: stem.kanji,
    branch: branch.kanji,
    stemName: `${stem.kanji}（${stem.reading}）`,
    branchName: `${branch.kanji}（${branch.reading}）`,
    element: stem.element,
    polarity: stem.polarity,
    display: `${stem.kanji}${branch.kanji}`,
  };
}

// ─── Day Pillar ───────────────────────────────────────────────────────────────
// Anchor: Jan 1, 2000 = 甲戌 (stem 0, branch 10)
// Each day advances by 1 stem and 1 branch.

function getJulianDay(y: number, m: number, d: number): number {
  // Simple Julian Day Number calculation
  const a = Math.floor((14 - m) / 12);
  const yr = y + 4800 - a;
  const mo = m + 12 * a - 3;
  return d + Math.floor((153 * mo + 2) / 5) + 365 * yr + Math.floor(yr / 4) - Math.floor(yr / 100) + Math.floor(yr / 400) - 32045;
}

const ANCHOR_JD = getJulianDay(2000, 1, 1); // Jan 1, 2000 = 甲戌
const ANCHOR_STEM = 0;   // 甲
const ANCHOR_BRANCH = 10; // 戌

function getDayPillar(year: number, month: number, day: number): Pillar {
  const jd = getJulianDay(year, month, day);
  const diff = jd - ANCHOR_JD;
  const stemIdx = ((ANCHOR_STEM + diff) % 10 + 10) % 10;
  const branchIdx = ((ANCHOR_BRANCH + diff) % 12 + 12) % 12;
  const stem = STEMS[stemIdx];
  const branch = BRANCHES[branchIdx];
  return {
    stem: stem.kanji,
    branch: branch.kanji,
    stemName: `${stem.kanji}（${stem.reading}）`,
    branchName: `${branch.kanji}（${branch.reading}）`,
    element: stem.element,
    polarity: stem.polarity,
    display: `${stem.kanji}${branch.kanji}`,
  };
}

// ─── Five Elements balance ────────────────────────────────────────────────────

function countElement(pillars: Pillar[]): GogyoBalance {
  const counts: GogyoBalance = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
  for (const p of pillars) {
    const el = p.element.toLowerCase() as keyof GogyoBalance;
    if (el in counts) counts[el]++;
  }
  return counts;
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function getShichuProfile(dob: Date): ShichuProfile {
  const y = dob.getFullYear();
  const m = dob.getMonth() + 1;
  const d = dob.getDate();

  const yearPillar = getYearPillar(y);
  const monthPillar = getMonthPillar(y, m);
  const dayPillar = getDayPillar(y, m, d);

  const gogyo = countElement([yearPillar, monthPillar, dayPillar]);
  const dayMasterStem = STEMS.find((s) => s.kanji === dayPillar.stem)!;

  return {
    yearPillar,
    monthPillar,
    dayPillar,
    dayMaster: dayPillar.stem,
    dayMasterElement: dayMasterStem.element,
    dayMasterPolarity: dayMasterStem.polarity,
    gogyo,
    dayMasterDescription: DAY_MASTER_DESCRIPTIONS[dayPillar.stem] ?? "",
  };
}
