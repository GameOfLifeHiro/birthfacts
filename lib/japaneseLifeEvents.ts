export type EventType = "childhood" | "yakudoshi" | "gaju";
export type YakudoshiSubtype = "前厄" | "本厄" | "後厄";

export interface LifeEvent {
  age: number;
  kanji: string;
  name: string;
  type: EventType;
  subtype?: YakudoshiSubtype;
  isMajor?: boolean;
  description: string;
  activities?: string;
}

export interface ChildhoodEvent extends LifeEvent {
  type: "childhood";
  genderFilter?: "male" | "female";
  daysNote?: string;
}

// ─── Childhood milestones ─────────────────────────────────────────────────────

export const CHILDHOOD_EVENTS: ChildhoodEvent[] = [
  {
    age: 0,
    kanji: "お宮参り",
    name: "初宮参り（お宮参り）",
    type: "childhood",
    daysNote: "生後30〜100日頃",
    description: "赤ちゃんの誕生を神様に報告し、健やかな成長を祈る初めての神社参拝。",
    activities:
      "祝着（のしめ）を着せて地域の神社へ参拝。記念写真撮影、祝い膳（お食い初め準備）が一般的。",
  },
  {
    age: 3,
    kanji: "七五三",
    name: "七五三（3歳）",
    type: "childhood",
    description: "男女ともに祝う「髪置きの儀」に由来。幼児期を無事に過ごせた感謝と、これからの健やかな成長を祈る節目。",
    activities:
      "神社参拝、着物・羽織袴を着て記念撮影、千歳飴（長寿の縁起物）を受け取る。11月15日が伝統的な日程。",
  },
  {
    age: 5,
    kanji: "七五三",
    name: "七五三（5歳）",
    type: "childhood",
    genderFilter: "male",
    description: "男の子の「袴着の儀」に由来。初めて袴を着る節目で、男子として社会に認められることを意味する。",
    activities:
      "袴・羽織を着て神社参拝、千歳飴、記念写真撮影。スタジオでの前撮りも人気。",
  },
  {
    age: 7,
    kanji: "七五三",
    name: "七五三（7歳）",
    type: "childhood",
    genderFilter: "female",
    description: "女の子の「帯解きの儀」に由来。子ども用の付け紐を外し、初めて本帯を締める節目。",
    activities:
      "着物・帯姿で神社参拝、千歳飴、記念写真撮影。本格的な着物を初めて着る特別な一日。",
  },
  {
    age: 10,
    kanji: "ハーフ成人式",
    name: "ハーフ成人式（10歳）",
    type: "childhood",
    description: "成人式の半分、10歳の節目を祝う現代の学校文化行事。宗教的背景はなく、自己肯定感を高める教育的な意味合いが強い。",
    activities:
      "学校での式典・クラスでの発表、将来の自分への手紙作成、10年後に開けるタイムカプセル、家族との記念写真。",
  },
  {
    age: 13,
    kanji: "十三参り",
    name: "十三参り（13歳）",
    type: "childhood",
    description: "数え年13歳（旧暦3月13日ごろ）に虚空蔵菩薩へ参り、知恵と福徳を授かる行事。京都・法輪寺が発祥で全国に広まった。",
    activities:
      "虚空蔵菩薩を祀る寺社への参拝、着物・袴姿での正装、「帰り道に振り返ってはいけない」という言い伝えを守る。学業成就を祈る。",
  },
];

// ─── 賀寿（長寿のお祝い） ─────────────────────────────────────────────────────

export const GAJU_EVENTS: LifeEvent[] = [
  {
    age: 60,
    kanji: "還暦",
    name: "還暦",
    type: "gaju",
    description: "60年で十二支と十干が一巡し、生まれ年の干支に還る節目。生まれ直し・赤ちゃんに戻るという意味から赤が象徴色。",
    activities:
      "赤いちゃんちゃんこ・赤い座布団など赤いプレゼントを贈る。家族での食事会や旅行が定番。赤いバラの花束も人気。",
  },
  {
    age: 70,
    kanji: "古希",
    name: "古希",
    type: "gaju",
    description: "唐代の詩人・杜甫の詩「人生七十古来稀なり」に由来。象徴色は紫。",
    activities:
      "紫のちゃんちゃんこや紫の花束（ラベンダー・藤）を贈る。旅行・温泉・似顔絵など特別な体験のプレゼントも人気。",
  },
  {
    age: 77,
    kanji: "喜寿",
    name: "喜寿",
    type: "gaju",
    description: "「喜」の草書体が「七十七」と読めることから。象徴色は紫。",
    activities:
      "紫のプレゼント、喜寿祝い膳、感謝の手紙・アルバム作成。家族が集まる食事会が一般的。",
  },
  {
    age: 80,
    kanji: "傘寿",
    name: "傘寿",
    type: "gaju",
    description: "「傘」の略字が「八十」と読めることから。象徴色は金・黄色。",
    activities:
      "黄色・金色のプレゼント、家族での食事会、思い出の写真アルバム。",
  },
  {
    age: 88,
    kanji: "米寿",
    name: "米寿",
    type: "gaju",
    description: "「米」の字を分解すると「八十八」になることから。象徴色は金・黄色。農耕文化への敬意も込められている。",
    activities:
      "金色・黄色のプレゼント、高級なお米・日本酒などを贈る。家族全員での記念写真撮影が定番。",
  },
  {
    age: 90,
    kanji: "卒寿",
    name: "卒寿",
    type: "gaju",
    description: "「卒」の略字が「九十」と読めることから。象徴色は白または紫。",
    activities:
      "白または紫のプレゼント、手書きの感謝状・家族からのメッセージ集。",
  },
  {
    age: 99,
    kanji: "白寿",
    name: "白寿",
    type: "gaju",
    description: "「百」から「一」を引くと「白」になることから。99歳の大長寿。象徴色は白。",
    activities:
      "白いプレゼント（白いちゃんちゃんこ、白い花束）、家族・親族が集まる大型の祝い膳。",
  },
  {
    age: 100,
    kanji: "百寿",
    name: "百寿（紀寿）",
    type: "gaju",
    description: "100歳の大節目。紀寿（ひゃくじゅ）とも呼ばれる。地方自治体からの表彰や記念品が贈られることも。",
    activities:
      "地域・自治体からの表彰状・銀杯の贈呈。家族・親族・友人が一堂に集まる盛大な祝い。メディアに取り上げられることも。",
  },
];

// ─── 厄年（男性） ─────────────────────────────────────────────────────────────
// 数え年ベースの通説を満年齢（西暦年齢）に換算した一般的な目安

export const YAKUDOSHI_MALE: LifeEvent[] = [
  {
    age: 24, kanji: "前厄", name: "前厄（25歳・数え年）", type: "yakudoshi", subtype: "前厄",
    description: "本厄の前年。心身の変化が始まりやすい時期。準備と心がけが大切。",
    activities: "神社での厄除けのお祓い、お守り・厄除け祈願。大きな決断（転職・引越しなど）は慎重に。",
  },
  {
    age: 25, kanji: "本厄", name: "本厄（26歳・数え年）", type: "yakudoshi", subtype: "本厄", isMajor: false,
    description: "男性の最初の本厄。心身ともに変化が大きく、注意が必要とされる年。",
    activities: "元旦・節分に神社で厄払いのお祓いを受ける。赤い下着を身につける風習も。大きな決断は避け、健康管理を徹底。",
  },
  {
    age: 26, kanji: "後厄", name: "後厄（27歳・数え年）", type: "yakudoshi", subtype: "後厄",
    description: "本厄明けの年。「後厄の方が危ない」とも言われる。引き続き注意が必要。",
    activities: "神社での厄除けのお祓い、健康診断を受ける、無理をしない生活習慣を継続。",
  },
  {
    age: 41, kanji: "前厄", name: "前厄（42歳・数え年）", type: "yakudoshi", subtype: "前厄",
    description: "男性最大の厄年（大厄）の前年。意識的に備える時期。",
    activities: "神社での厄除けのお祓い、健康診断・人間ドックの受診を検討。",
  },
  {
    age: 42, kanji: "本厄", name: "本厄・大厄（43歳・数え年）", type: "yakudoshi", subtype: "本厄", isMajor: true,
    description: "男性最大の厄年「大厄」。「死に」に通じると昔から最も忌まれた年。特に慎重に過ごす年とされる。",
    activities: "元旦・節分の厄払いのお祓い（大きな神社を選ぶ人も多い）、赤い腹巻きや下着、お守り。引越し・結婚・手術などの大きな行動は吉日を選ぶ。",
  },
  {
    age: 43, kanji: "後厄", name: "後厄（44歳・数え年）", type: "yakudoshi", subtype: "後厄",
    description: "大厄明けの後厄。気が緩みやすいが引き続き注意が必要。",
    activities: "神社での厄除けのお祓い、健康診断の継続。生活習慣の見直しと節制。",
  },
  {
    age: 60, kanji: "前厄", name: "前厄（61歳・数え年）", type: "yakudoshi", subtype: "前厄",
    description: "還暦前後の厄年。人生の大きな転換期と重なる。",
    activities: "神社での厄除けのお祓い、定期的な健康診断。還暦祝いと合わせて計画する方も多い。",
  },
  {
    age: 61, kanji: "本厄", name: "本厄（62歳・数え年）", type: "yakudoshi", subtype: "本厄",
    description: "還暦と重なる厄年。退職・生活変化と重なりやすいため、心身のバランスに注意。",
    activities: "神社での厄払い、健康診断、退職後の生活設計を丁寧に。",
  },
  {
    age: 62, kanji: "後厄", name: "後厄（63歳・数え年）", type: "yakudoshi", subtype: "後厄",
    description: "厄年の周期が明ける年。新しい生活への移行期。",
    activities: "神社での厄払い、趣味・地域活動など新しい生きがい作りに取り組む機会に。",
  },
];

// ─── 厄年（女性） ─────────────────────────────────────────────────────────────

export const YAKUDOSHI_FEMALE: LifeEvent[] = [
  {
    age: 18, kanji: "前厄", name: "前厄（19歳・数え年）", type: "yakudoshi", subtype: "前厄",
    description: "女性最初の本厄の前年。進学・就職など人生の転機と重なりやすい。",
    activities: "神社での厄除けのお祓い、お守り。大きな決断は慎重に。",
  },
  {
    age: 19, kanji: "本厄", name: "本厄（20歳・数え年）", type: "yakudoshi", subtype: "本厄",
    description: "女性最初の本厄。成人と重なる節目の年。",
    activities: "神社での厄払い、成人式に合わせて厄除け祈願をする方も。お守りを持ち歩く。",
  },
  {
    age: 20, kanji: "後厄", name: "後厄（21歳・数え年）", type: "yakudoshi", subtype: "後厄",
    description: "最初の厄年が明ける年。引き続き健康管理に注意。",
    activities: "神社での厄払い、生活習慣の見直し。",
  },
  {
    age: 32, kanji: "前厄", name: "前厄（33歳・数え年）", type: "yakudoshi", subtype: "前厄",
    description: "女性最大の厄年（大厄）の前年。仕事・結婚・育児など人生の変化期と重なりやすい。",
    activities: "神社での厄除けのお祓い、健康診断。大きな決断は慎重に。",
  },
  {
    age: 33, kanji: "本厄", name: "本厄・大厄（33歳・数え年）", type: "yakudoshi", subtype: "本厄", isMajor: true,
    description: "女性最大の厄年「大厄」。「散々」に通じると古来最も忌まれた年。",
    activities: "元旦・節分の厄払いのお祓い（大きな神社を選ぶ方も多い）、赤いプレゼント・お守り。結婚・出産・手術などの大きな行動は吉日を選んで。",
  },
  {
    age: 34, kanji: "後厄", name: "後厄（35歳・数え年）", type: "yakudoshi", subtype: "後厄",
    description: "大厄明けの年。気が緩みやすいが引き続き注意。",
    activities: "神社での厄除けのお祓い、健康診断の継続。",
  },
  {
    age: 36, kanji: "前厄", name: "前厄（37歳・数え年）", type: "yakudoshi", subtype: "前厄",
    description: "女性の3回目の厄年の前年。",
    activities: "神社での厄除けのお祓い、健康診断。",
  },
  {
    age: 37, kanji: "本厄", name: "本厄（38歳・数え年）", type: "yakudoshi", subtype: "本厄",
    description: "女性の3回目の本厄。",
    activities: "神社での厄払い、健康管理の徹底。",
  },
  {
    age: 38, kanji: "後厄", name: "後厄（39歳・数え年）", type: "yakudoshi", subtype: "後厄",
    description: "厄年が明ける年。新たな気持ちで次のステージへ。",
    activities: "神社での厄払い、40代に向けた健康習慣づくり。",
  },
  {
    age: 60, kanji: "前厄", name: "前厄（61歳・数え年）", type: "yakudoshi", subtype: "前厄",
    description: "還暦前後の厄年。人生の大きな転換期。",
    activities: "神社での厄払い、健康診断。還暦祝いと合わせて計画する方も。",
  },
  {
    age: 61, kanji: "本厄", name: "本厄（62歳・数え年）", type: "yakudoshi", subtype: "本厄",
    description: "還暦と重なる厄年。心身のバランスに注意。",
    activities: "神社での厄払い、健康診断、生活設計の見直し。",
  },
  {
    age: 62, kanji: "後厄", name: "後厄（63歳・数え年）", type: "yakudoshi", subtype: "後厄",
    description: "厄年の周期が明ける年。新生活へのスタート。",
    activities: "神社での厄払い、新しい趣味や活動に挑戦する機会に。",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getVisibleChildhoodEvents(gender: "male" | "female" | null): ChildhoodEvent[] {
  return CHILDHOOD_EVENTS.filter(
    (e) => e.genderFilter === undefined || e.genderFilter === gender
  );
}

/** Next childhood (age ≤ 18) or gaju (age ≥ 55) event — excludes yakudoshi */
export function getNextGeneralEvent(
  currentAge: number,
  gender: "male" | "female" | null,
  dobYear: number
): (LifeEvent & { year: number }) | null {
  const pool: LifeEvent[] = [
    ...(currentAge <= 18 ? getVisibleChildhoodEvents(gender) : []),
    ...(currentAge >= 55 ? GAJU_EVENTS : []),
  ];
  const next = pool.filter((e) => e.age > currentAge).sort((a, b) => a.age - b.age)[0];
  if (!next) return null;
  return { ...next, year: dobYear + next.age };
}

/** Next yakudoshi event for the given gender */
export function getNextYakudoshiEvent(
  currentAge: number,
  gender: "male" | "female" | null,
  dobYear: number
): (LifeEvent & { year: number }) | null {
  if (!gender) return null;
  const pool = gender === "male" ? YAKUDOSHI_MALE : YAKUDOSHI_FEMALE;
  const next = pool.filter((e) => e.age > currentAge).sort((a, b) => a.age - b.age)[0];
  if (!next) return null;
  return { ...next, year: dobYear + next.age };
}

/** Legacy: next event from all pools combined */
export function getNextEvent(
  currentAge: number,
  gender: "male" | "female" | null,
  dobYear: number
): (LifeEvent & { year: number }) | null {
  const pool: LifeEvent[] = [
    ...getVisibleChildhoodEvents(gender),
    ...GAJU_EVENTS,
    ...(gender === "male" ? YAKUDOSHI_MALE : gender === "female" ? YAKUDOSHI_FEMALE : []),
  ];
  const next = pool
    .filter((e) => e.age > currentAge)
    .sort((a, b) => a.age - b.age)[0];
  if (!next) return null;
  return { ...next, year: dobYear + next.age };
}
