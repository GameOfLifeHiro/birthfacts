export interface BloodTypePair {
  score: number; // 1–10
  summary: string;
  description: string;
}

export const BLOOD_TYPES = ["A", "B", "O", "AB"] as const;
export type BloodType = typeof BLOOD_TYPES[number];

/** Canonical key: alphabetically ordered pair, e.g. "A-B" not "B-A" */
const BT_PAIRS: Record<string, BloodTypePair> = {
  "A-A": {
    score: 7,
    summary: "几帳面な安心感",
    description: "A型同士は几帳面さと協調性の高さが一致し、自然と居心地の良い環境を作り上げます。ルールやマナーを大切にする姿勢が互いに安心感をもたらします。ただし、ネガティブな感情を溜め込みやすいため、素直に話し合う時間を意識的に設けることが大切です。",
  },
  "A-B": {
    score: 5,
    summary: "価値観の違いが刺激に",
    description: "慎重で協調性を重んじるA型と、自由奔放で個性的なB型は、価値観の違いが大きく、摩擦が生じやすい組み合わせです。A型はB型の気まぐれに振り回されると感じ、B型はA型のルールを窮屈に思うことも。互いの個性を尊重できれば、新鮮な刺激をもたらし合える関係です。",
  },
  "A-O": {
    score: 7,
    summary: "頼り合える信頼関係",
    description: "A型の繊細さとO型の大らかさが互いを補い合い、安定した信頼関係を築きやすい相性です。O型の包容力がA型の緊張をほぐし、A型の丁寧さがO型を支えます。リーダーシップをO型が担い、サポートをA型が担う自然な役割分担が生まれやすいです。",
  },
  "A-AB": {
    score: 6,
    summary: "知性と感性の交差",
    description: "A型の誠実さとAB型の知性・感受性が組み合わさると、知的で穏やかな関係が生まれます。AB型のつかみどころのなさがA型を不安にさせることもありますが、AB型の深い思慮深さはA型に安心感を与えます。お互いの内面を大切にすることが長続きの鍵です。",
  },
  "B-B": {
    score: 6,
    summary: "自由と個性の共鳴",
    description: "B型同士は自由を尊重し、個性的な生き方を互いに認め合える関係です。束縛しない自由な雰囲気が心地よい反面、お互いに気まぐれなため、計画や約束がうまく機能しないこともあります。楽しい時間を共有しながらも、節目に向き合う誠実さが大切です。",
  },
  "B-O": {
    score: 7,
    summary: "活発でのびのびした関係",
    description: "B型の自由奔放さとO型の行動力・包容力が生み出す、明るくエネルギッシュな組み合わせ。O型がB型をうまく受け止め、B型はO型の元気をさらに引き出します。どちらも活動的で社交的なため、一緒にいると自然と場が盛り上がります。",
  },
  "B-AB": {
    score: 7,
    summary: "知的な自由の共有",
    description: "B型の個性とAB型の多面的な知性が共鳴する、刺激的な組み合わせです。AB型はB型の個性的な発想に面白みを感じ、B型はAB型の深い洞察力に惹かれます。互いに相手の自由を尊重する姿勢が、伸びやかな関係を生み出します。",
  },
  "O-O": {
    score: 8,
    summary: "頼もしい最強タッグ",
    description: "O型同士は行動力・意志の強さ・情の深さが共鳴する、頼もしい組み合わせです。お互いをしっかりと認め合い、困難なときにも前向きに乗り越えていく力があります。競争心が強くなりすぎたときは素直に気持ちを伝え合い、力を合わせることが大切です。",
  },
  "O-AB": {
    score: 6,
    summary: "現実と理想のバランス",
    description: "行動派で情の深いO型と、理性と感性を合わせ持つAB型は、現実と理想を補い合う関係です。O型はAB型の複雑さを理解するのに時間がかかることがありますが、AB型の深みに惹かれ続けます。AB型はO型のまっすぐさに安心感を覚えます。",
  },
  "AB-AB": {
    score: 5,
    summary: "深すぎる哲学の交錯",
    description: "AB型同士は高い知性と独自の世界観を持つ者同士の、稀有な組み合わせです。互いの深みと複雑さを理解し合える一方で、両者ともに感情を抑えがちなため、心の距離が縮まりにくいことも。感情を積極的に表現し合うことが、関係をより豊かにします。",
  },
};

const BT_ORDER: BloodType[] = ["A", "B", "O", "AB"];

export function btPairKey(a: BloodType, b: BloodType): string {
  const ia = BT_ORDER.indexOf(a);
  const ib = BT_ORDER.indexOf(b);
  return ia <= ib ? `${a}-${b}` : `${b}-${a}`;
}

export function getBloodTypeCompat(a: BloodType, b: BloodType): BloodTypePair | null {
  const key = btPairKey(a, b);
  return BT_PAIRS[key] ?? null;
}
