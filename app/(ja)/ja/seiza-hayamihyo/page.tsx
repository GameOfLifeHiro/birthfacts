import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JaToolsSection from "@/components/JaToolsSection";

export const metadata: Metadata = {
  title: "星座 早見表 | 12星座の誕生日・特徴・性格 | BirthFacts",
  description:
    "12星座の誕生日（いつからいつまで）・象徴・四元素・ルーラー・基本的な性格と特徴を一覧で確認。おひつじ座からうお座まで、星座早見表。",
  keywords: [
    "星座 早見表", "星座 誕生日 一覧", "星座 いつから いつまで",
    "12星座 一覧", "星座 特徴", "星座 性格", "星座 誕生日",
    "おひつじ座 いつ", "しし座 いつ", "さそり座 いつ",
    "星座占い 誕生日", "西洋占星術 星座",
  ],
  alternates: { canonical: "https://birthfacts.net/ja/seiza-hayamihyo/" },
};

interface Sign {
  name: string;
  symbol: string;
  en: string;
  period: string;
  startMD: string; // "M/D" for sorting
  element: string;
  elementJa: string;
  quality: string;
  qualityJa: string;
  ruler: string;
  traits: string[];
  description: string;
}

const SIGNS: Sign[] = [
  {
    name: "おひつじ座",
    symbol: "♈",
    en: "Aries",
    period: "3月21日〜4月19日",
    startMD: "3/21",
    element: "Fire",
    elementJa: "火",
    quality: "Cardinal",
    qualityJa: "活動",
    ruler: "火星（Mars）",
    traits: ["情熱的", "行動力", "リーダーシップ", "率直", "独立心"],
    description: "12星座の先頭に立つ開拓者。行動力と情熱が武器で、新しいことへの挑戦を恐れない。やや短気な面もあるが、そのエネルギーで周囲を牽引する。",
  },
  {
    name: "おうし座",
    symbol: "♉",
    en: "Taurus",
    period: "4月20日〜5月20日",
    startMD: "4/20",
    element: "Earth",
    elementJa: "地",
    quality: "Fixed",
    qualityJa: "不動",
    ruler: "金星（Venus）",
    traits: ["忍耐強い", "安定", "感覚的", "誠実", "頑固"],
    description: "安定と美を愛する実直な星座。美食・音楽・自然など五感の喜びを大切にする。一度決めたことへの粘り強さと、保守的な側面を持つ。",
  },
  {
    name: "ふたご座",
    symbol: "♊",
    en: "Gemini",
    period: "5月21日〜6月21日",
    startMD: "5/21",
    element: "Air",
    elementJa: "風",
    quality: "Mutable",
    qualityJa: "柔軟",
    ruler: "水星（Mercury）",
    traits: ["知的好奇心", "コミュニケーション", "機知", "適応力", "二面性"],
    description: "知識と情報を愛する天性のコミュニケーター。好奇心旺盛で多才だが、移り気な面も。幅広い人脈と雑談力で場を盛り上げる。",
  },
  {
    name: "かに座",
    symbol: "♋",
    en: "Cancer",
    period: "6月22日〜7月22日",
    startMD: "6/22",
    element: "Water",
    elementJa: "水",
    quality: "Cardinal",
    qualityJa: "活動",
    ruler: "月（Moon）",
    traits: ["感受性", "母性", "共感力", "家族愛", "内向的"],
    description: "感情と直感に敏感な星座。家族・故郷・思い出を大切にし、強い守護本能を持つ。傷つきやすい面があるが、周囲への深い愛情で信頼を得る。",
  },
  {
    name: "しし座",
    symbol: "♌",
    en: "Leo",
    period: "7月23日〜8月22日",
    startMD: "7/23",
    element: "Fire",
    elementJa: "火",
    quality: "Fixed",
    qualityJa: "不動",
    ruler: "太陽（Sun）",
    traits: ["カリスマ性", "表現力", "寛大", "プライドが高い", "自己表現"],
    description: "太陽のように輝く存在感を持つ。自然なカリスマ性でリードし、創造性と表現力に長ける。承認欲求が強い面もあるが、その寛大さで人を引きつける。",
  },
  {
    name: "おとめ座",
    symbol: "♍",
    en: "Virgo",
    period: "8月23日〜9月22日",
    startMD: "8/23",
    element: "Earth",
    elementJa: "地",
    quality: "Mutable",
    qualityJa: "柔軟",
    ruler: "水星（Mercury）",
    traits: ["几帳面", "分析力", "完璧主義", "奉仕精神", "謙虚"],
    description: "細部へのこだわりと分析力が際立つ。奉仕の精神で人を支え、実用的な解決策を見出す。完璧主義ゆえに自己批判が強くなることも。",
  },
  {
    name: "てんびん座",
    symbol: "♎",
    en: "Libra",
    period: "9月23日〜10月23日",
    startMD: "9/23",
    element: "Air",
    elementJa: "風",
    quality: "Cardinal",
    qualityJa: "活動",
    ruler: "金星（Venus）",
    traits: ["調和", "公平", "社交的", "優柔不断", "審美眼"],
    description: "美と調和を求める社交家。バランス感覚と公平さで人間関係を円滑にする。決断を先延ばしにしがちだが、その慎重さが相手への配慮でもある。",
  },
  {
    name: "さそり座",
    symbol: "♏",
    en: "Scorpio",
    period: "10月24日〜11月22日",
    startMD: "10/24",
    element: "Water",
    elementJa: "水",
    quality: "Fixed",
    qualityJa: "不動",
    ruler: "冥王星（Pluto）",
    traits: ["洞察力", "情熱", "意志力", "秘密主義", "変容"],
    description: "深さと強さを持つ神秘的な星座。物事の本質を見抜く洞察力と、一度決めたら曲げない意志力が特徴。感情は深いが、なかなか本心を見せない。",
  },
  {
    name: "いて座",
    symbol: "♐",
    en: "Sagittarius",
    period: "11月23日〜12月21日",
    startMD: "11/23",
    element: "Fire",
    elementJa: "火",
    quality: "Mutable",
    qualityJa: "柔軟",
    ruler: "木星（Jupiter）",
    traits: ["楽観的", "冒険心", "哲学的", "自由", "率直"],
    description: "冒険と自由を愛する楽観主義者。哲学・旅・高次の真理を求め、広い視野で世界を見る。率直すぎて相手を傷つけることもあるが、その明るさで場を照らす。",
  },
  {
    name: "やぎ座",
    symbol: "♑",
    en: "Capricorn",
    period: "12月22日〜1月19日",
    startMD: "12/22",
    element: "Earth",
    elementJa: "地",
    quality: "Cardinal",
    qualityJa: "活動",
    ruler: "土星（Saturn）",
    traits: ["野心", "規律", "責任感", "忍耐", "現実主義"],
    description: "目標に向かってコツコツ積み上げる努力家。責任感が強く、社会的な成功を重視する。内面は温かいが、外見は堅実で落ち着いた印象を与える。",
  },
  {
    name: "みずがめ座",
    symbol: "♒",
    en: "Aquarius",
    period: "1月20日〜2月18日",
    startMD: "1/20",
    element: "Air",
    elementJa: "風",
    quality: "Fixed",
    qualityJa: "不動",
    ruler: "天王星（Uranus）",
    traits: ["独創性", "人道主義", "革新", "独立", "理想主義"],
    description: "時代の先を行く革新者。人類や社会への貢献を願い、独自の価値観で生きる。個性的すぎて周囲に理解されにくいこともあるが、その先見性はやがて評価される。",
  },
  {
    name: "うお座",
    symbol: "♓",
    en: "Pisces",
    period: "2月19日〜3月20日",
    startMD: "2/19",
    element: "Water",
    elementJa: "水",
    quality: "Mutable",
    qualityJa: "柔軟",
    ruler: "海王星（Neptune）",
    traits: ["共感力", "直感", "芸術性", "夢想家", "自己犠牲"],
    description: "12星座最後の星座で、すべての経験を内包する。豊かな感受性と芸術的才能を持ち、他者の痛みに寄り添う共感力が高い。現実逃避の傾向もあるが、その想像力は創造の源。",
  },
];

const ELEMENT_COLOR: Record<string, string> = {
  Fire: "text-orange-400",
  Earth: "text-green-400",
  Air:   "text-sky-400",
  Water: "text-blue-400",
};

export default function SeizaHayamihyoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbSchema items={[{ name: "ホーム", href: "/ja/" }, { name: "星座 早見表", href: "/ja/seiza-hayamihyo/" }]} />
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          <span className="gradient-text">星座 早見表</span>
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mx-auto">
          12星座の誕生日（いつからいつまで）・四元素・性格・特徴を一覧で確認できます。
        </p>
      </div>

      {/* Quick reference table */}
      <div className="card overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-base">
            <thead className="bg-[var(--card-border)]/30">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[var(--text)]">星座</th>
                <th className="text-left px-4 py-3 font-semibold text-[var(--text)]">期間</th>
                <th className="text-center px-4 py-3 font-semibold text-[var(--text)]">元素</th>
                <th className="text-left px-4 py-3 font-semibold text-[var(--text)] hidden sm:table-cell">主な特徴</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--card-border)]">
              {SIGNS.map((s) => (
                <tr key={s.en} className="hover:bg-[var(--card-border)]/10 transition-colors">
                  <td className="px-4 py-2.5">
                    <span className="text-xl mr-2">{s.symbol}</span>
                    <span className="font-semibold text-[var(--text)]">{s.name}</span>
                  </td>
                  <td className="px-4 py-2.5 text-[var(--muted)] whitespace-nowrap">{s.period}</td>
                  <td className={`px-4 py-2.5 text-center font-bold ${ELEMENT_COLOR[s.element]}`}>
                    {s.elementJa}
                  </td>
                  <td className="px-4 py-2.5 text-[var(--muted)] hidden sm:table-cell">
                    {s.traits.slice(0, 3).join("・")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed cards */}
      <div className="space-y-4 mb-10">
        {SIGNS.map((s) => (
          <div key={s.en} className="card p-5">
            <div className="flex items-start gap-4 mb-3">
              <div className="text-4xl shrink-0">{s.symbol}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h2 className="text-xl font-bold text-[var(--text)]">{s.name}</h2>
                  <span className="text-sm text-[var(--muted)]">（{s.en}）</span>
                </div>
                <div className="text-sm text-[var(--muted)]">{s.period}</div>
                <div className="flex flex-wrap gap-2 mt-1 text-xs">
                  <span className={`font-semibold ${ELEMENT_COLOR[s.element]}`}>
                    {s.elementJa}のサイン
                  </span>
                  <span className="text-[var(--muted)]">· {s.qualityJa}宮</span>
                  <span className="text-[var(--muted)]">· 支配星: {s.ruler}</span>
                </div>
              </div>
            </div>
            <p className="text-base text-[var(--muted)] leading-relaxed mb-3">{s.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {s.traits.map((tr) => (
                <span
                  key={tr}
                  className="inline-block px-2 py-0.5 rounded-full text-xs border border-[var(--accent)] text-[var(--accent)]"
                >
                  {tr}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Four elements explanation */}
      <div className="card p-6 mb-8">
        <h2 className="text-xl font-bold text-[var(--accent)] mb-4">四元素（エレメント）とは？</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { el: "火", color: "text-orange-400", signs: "おひつじ・しし・いて", desc: "情熱・行動・直感" },
            { el: "地", color: "text-green-400",  signs: "おうし・おとめ・やぎ", desc: "安定・実用・忍耐" },
            { el: "風", color: "text-sky-400",    signs: "ふたご・てんびん・みずがめ", desc: "知性・コミュニケーション" },
            { el: "水", color: "text-blue-400",   signs: "かに・さそり・うお", desc: "感情・共感・直感" },
          ].map(({ el, color, signs, desc }) => (
            <div key={el} className="text-center p-3 rounded-xl border border-[var(--card-border)]">
              <div className={`text-2xl font-bold mb-1 ${color}`}>{el}</div>
              <div className="text-xs text-[var(--muted)] mb-1">{signs}</div>
              <div className="text-xs text-[var(--muted)]">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <JaToolsSection />

      {/* CTA */}
      <div className="text-center card p-8">
        <p className="text-[var(--muted)] text-base mb-4">
          生年月日を入力すると、あなたの星座占い・今日の運勢・次の節目を無料で確認できます。
        </p>
        <a href="/ja/" className="btn-primary inline-block">誕生日占い 無料</a>
      </div>

      {/* Schema — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              // Per-sign date range Q&As (high search volume)
              ...SIGNS.map((s) => ({
                "@type": "Question",
                name: `${s.name}はいつからいつまでですか？`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${s.name}（${s.en}）の期間は${s.period}です。エレメントは${s.elementJa}、支配星は${s.ruler}。主な特徴：${s.traits.join("、")}。`,
                },
              })),
              {
                "@type": "Question",
                name: "12星座の誕生日（期間）を一覧で教えてください。",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: SIGNS.map((s) => `${s.name}：${s.period}`).join("、"),
                },
              },
              {
                "@type": "Question",
                name: "星座の四元素（エレメント）とは何ですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "西洋占星術では12星座を火・地・風・水の4つの元素に分類します。火（おひつじ・しし・いて）は情熱と行動力、地（おうし・おとめ・やぎ）は安定と実用性、風（ふたご・てんびん・みずがめ）は知性とコミュニケーション、水（かに・さそり・うお）は感情と共感力を象徴します。",
                },
              },
              {
                "@type": "Question",
                name: "星座の境界日（カスプ）はどうなりますか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "星座の切り替わり日（カスプ）は年によって1〜2日前後することがあります。境界日生まれの方は、生まれた年の正確な太陽の位置で判断する必要があります。BirthFactsでは生年月日を入力すると正確な星座を表示します。",
                },
              },
            ],
          }),
        }}
      />
      {/* Schema — ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "12星座 一覧",
            description: "12星座の誕生日・エレメント・特徴の早見表",
            numberOfItems: SIGNS.length,
            itemListElement: SIGNS.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${s.symbol} ${s.name}（${s.en}）`,
              description: `${s.period}。エレメント：${s.elementJa}。${s.description}`,
            })),
          }),
        }}
      />
    </div>
  );
}
