// ─── 九星気学 (Kyūsei Kigaku — Nine Star Ki) ─────────────────────────────────
//
// The honmeisei (本命星) is calculated from the birth year.
// The nine stars cycle in reverse order (9→1 repeating) and reset roughly
// at setsubun (around Feb 4). For simplicity we use the Western calendar year
// boundary — a common approximation used in many online calculators.
// (For strict accuracy, births before ~Feb 4 use the previous year's star.)

export interface KyuseiProfile {
  star: number;           // 1–9
  name: string;          // e.g. "一白水星"
  element: string;       // 五行 element
  elementJa: string;
  direction: string;     // Associated compass direction
  directionJa: string;
  description: string;
  traits: string[];
  color: string;         // CSS color for badge
}

const NINE_STARS: KyuseiProfile[] = [
  {
    star: 1,
    name: "一白水星",
    element: "Water",
    elementJa: "水",
    direction: "North",
    directionJa: "北",
    description: "一白水星の方は、柔軟性と適応力に優れ、深い知恵と洞察力を持ちます。水のように流れに乗り、あらゆる状況に順応できる才能があります。内省的で知的な探求を愛し、人生の深みを探ります。",
    traits: ["柔軟性が高い", "洞察力がある", "知的好奇心旺盛", "適応力抜群", "内省的"],
    color: "#60a5fa",
  },
  {
    star: 2,
    name: "二黒土星",
    element: "Earth",
    elementJa: "土",
    direction: "Southwest",
    directionJa: "南西",
    description: "二黒土星の方は、大地のような安定感と母性的な包容力を持ちます。勤勉で忍耐強く、コツコツと積み上げることが得意です。人の世話をすることに喜びを感じ、縁の下の力持ちとして輝きます。",
    traits: ["勤勉・忍耐強い", "包容力がある", "縁の下の力持ち", "誠実", "奉仕精神旺盛"],
    color: "#92400e",
  },
  {
    star: 3,
    name: "三碧木星",
    element: "Wood",
    elementJa: "木",
    direction: "East",
    directionJa: "東",
    description: "三碧木星の方は、春の若木のように生命力にあふれ、行動力と決断力が際立ちます。新しいことへの挑戦を恐れず、周囲を活気づけるエネルギーを持っています。直感力が高く、リーダーシップを発揮します。",
    traits: ["行動力がある", "直感的", "リーダーシップ", "情熱的", "革新的"],
    color: "#22c55e",
  },
  {
    star: 4,
    name: "四緑木星",
    element: "Wood",
    elementJa: "木",
    direction: "Southeast",
    directionJa: "南東",
    description: "四緑木星の方は、風のように広く旅し、多くの人との縁を結ぶ社交的な才能を持ちます。調和を大切にし、コミュニケーション能力が高く、ビジネスや外交の場で力を発揮します。",
    traits: ["社交的", "調和を重視", "コミュニケーション力高い", "旅好き", "柔軟な思考"],
    color: "#4ade80",
  },
  {
    star: 5,
    name: "五黄土星",
    element: "Earth",
    elementJa: "土",
    direction: "Center",
    directionJa: "中央",
    description: "五黄土星は九星の中心に位置し、強大なエネルギーと帝王的な力を持ちます。生まれながらのリーダーで、大きな影響力を周囲に与えます。破壊と再生の力を内包し、困難をも乗り越える不屈の精神があります。",
    traits: ["強大なエネルギー", "帝王的リーダーシップ", "不屈の精神", "影響力大", "創造と破壊"],
    color: "#eab308",
  },
  {
    star: 6,
    name: "六白金星",
    element: "Metal",
    elementJa: "金",
    direction: "Northwest",
    directionJa: "北西",
    description: "六白金星の方は、天のように高貴で気高い精神を持ちます。正義感が強く、完璧主義的な側面もありますが、その高い理想が大きな成果をもたらします。権威と品格を備え、人々から尊敬を集めます。",
    traits: ["高い理想を持つ", "正義感が強い", "品格がある", "完璧主義", "権威的"],
    color: "#d1d5db",
  },
  {
    star: 7,
    name: "七赤金星",
    element: "Metal",
    elementJa: "金",
    direction: "West",
    directionJa: "西",
    description: "七赤金星の方は、喜びと豊かさのエネルギーをまとい、社交的で話術に長けた才能を持ちます。人を喜ばせることが上手で、楽しいムードメーカーとして愛されます。財運や恋愛運にも恵まれやすい傾向があります。",
    traits: ["社交的・話術が巧み", "ムードメーカー", "財運がある", "恋愛上手", "楽しむことが得意"],
    color: "#f87171",
  },
  {
    star: 8,
    name: "八白土星",
    element: "Earth",
    elementJa: "土",
    direction: "Northeast",
    directionJa: "北東",
    description: "八白土星の方は、山のように動じない安定感と変革のエネルギーを併せ持ちます。着実に目標へ向かい、努力の末に大きな成功を手にするタイプです。変化の時代に強く、逆境をバネに成長します。",
    traits: ["安定感がある", "着実な努力家", "変革を好む", "逆境に強い", "粘り強い"],
    color: "#fbbf24",
  },
  {
    star: 9,
    name: "九紫火星",
    element: "Fire",
    elementJa: "火",
    direction: "South",
    directionJa: "南",
    description: "九紫火星の方は、太陽のように輝き、周囲を明るく照らす存在です。美意識が高く、芸術的センスに優れ、華やかな才能を持ちます。情熱的で直感力が鋭く、世の中に光をもたらすことが使命です。",
    traits: ["輝くカリスマ", "芸術的センス", "高い美意識", "情熱的", "直感が鋭い"],
    color: "#f97316",
  },
];

/**
 * Returns the Kyusei Kigaku honmeisei for a given birth year.
 * The anchor: 1906 → Star 5 (repeats every 9 years, counting DOWN).
 * Pattern: 5,4,3,2,1,9,8,7,6,5,4,3... going forward from 1906.
 */
export function getKyusei(birthYear: number, birthMonth: number, birthDay: number): KyuseiProfile {
  // Adjust year for setsubun (Feb 4): births before Feb 4 use previous year
  const adjustedYear = (birthMonth === 1 || (birthMonth === 2 && birthDay <= 3))
    ? birthYear - 1
    : birthYear;

  // Anchor: 1906 → star 5. Stars count DOWN each year (5→4→3→2→1→9→8→7→6→5…)
  const diff = adjustedYear - 1906;
  // Modulo 9, then map: diff=0→star5, diff=1→star4, ...
  const offset = ((diff % 9) + 9) % 9;
  // starIndex 0-based (0=star5, 1=star4, ..., 4=star1, 5=star9, 6=star8, 7=star7, 8=star6)
  const starNumbers = [5, 4, 3, 2, 1, 9, 8, 7, 6];
  const starNumber = starNumbers[offset];
  return NINE_STARS.find((s) => s.star === starNumber) ?? NINE_STARS[0];
}
