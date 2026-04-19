// ─── 血液型性格診断 (Blood Type Personality) ─────────────────────────────────
// A popular Japanese pop-psychology system associating ABO blood types
// with personality traits. This is cultural/entertainment content —
// not based on scientific evidence.

export type BloodType = "A" | "B" | "O" | "AB";

export interface BloodTypeProfile {
  type: BloodType;
  label: string;
  positiveTraits: string[];
  challenges: string[];
  description: string;
  compatibleTypes: BloodType[];
  famousExamples: string;
}

const BLOOD_TYPE_DATA: Record<BloodType, BloodTypeProfile> = {
  A: {
    type: "A",
    label: "A型",
    positiveTraits: ["几帳面", "責任感が強い", "誠実", "計画的", "気配り上手", "努力家"],
    challenges: ["完璧主義になりすぎる", "他人の目を気にしやすい", "ストレスを溜め込みやすい"],
    description: "A型の方は、几帳面で責任感が強く、物事を丁寧にこなす職人気質の持ち主です。計画を立ててコツコツと努力することが得意で、集団の中では調和を大切にします。繊細な感受性を持ち、他者への気配りを欠かしません。その誠実さと真面目さで周囲から信頼を集めますが、完璧を求めすぎてストレスを溜めやすい一面もあります。",
    compatibleTypes: ["A", "AB"],
    famousExamples: "石原裕次郎、松田聖子（A型として知られる有名人の例）",
  },
  B: {
    type: "B",
    label: "B型",
    positiveTraits: ["自由奔放", "個性的", "行動力がある", "好奇心旺盛", "ポジティブ", "直感的"],
    challenges: ["マイペースすぎる", "飽きっぽい面がある", "協調性が低く見られることも"],
    description: "B型の方は、自分のペースを大切にする自由人です。好奇心が旺盛で多様な趣味・関心を持ち、型にはまらない発想で独自の世界を切り開きます。行動力があり、思ったことをすぐ実行に移せるポジティブなエネルギーがあります。人の目を気にせず自分らしく生きられる強さが最大の武器です。",
    compatibleTypes: ["B", "AB"],
    famousExamples: "坂本龍一、あいみょん（B型として知られる有名人の例）",
  },
  O: {
    type: "O",
    label: "O型",
    positiveTraits: ["リーダーシップ", "大らか", "社交的", "度量が大きい", "情熱的", "行動力"],
    challenges: ["大雑把な面がある", "頑固になることも", "プライドが高い"],
    description: "O型の方は、生まれながらのリーダーです。大らかで包容力があり、周囲を引っ張る強いエネルギーを持っています。社交的で誰とでも打ち解けやすく、情熱的に目標へ向かう姿が人々を鼓舞します。細かいことにこだわらない大きな器が魅力で、困難な状況でも動じない精神的な強さを持ちます。",
    compatibleTypes: ["O", "AB"],
    famousExamples: "松本潤、浜崎あゆみ（O型として知られる有名人の例）",
  },
  AB: {
    type: "AB",
    label: "AB型",
    positiveTraits: ["合理的", "独創的", "多才", "冷静", "神秘的な魅力", "理知的"],
    challenges: ["二面性がある", "気分にムラがある", "一匹狼的になりやすい"],
    description: "AB型の方は、AとBの特性を併せ持つ稀有な存在です。合理的かつ独創的な思考で、他の人が思いつかないような解決策を生み出します。冷静沈着でありながら、内側には豊かな感情を持つ複雑な二面性が魅力です。少数派ゆえに誤解されることもありますが、その神秘的な個性が唯一無二の存在感を放ちます。",
    compatibleTypes: ["A", "B", "O", "AB"],
    famousExamples: "明石家さんま、宮﨑駿（AB型として知られる有名人の例）",
  },
};

export function getBloodTypeProfile(type: BloodType): BloodTypeProfile {
  return BLOOD_TYPE_DATA[type];
}
