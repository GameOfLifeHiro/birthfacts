import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "よくある質問 | BirthFacts",
  description: "BirthFactsの年齢計算・干支・マヤ暦・四柱推命・九星気学などの計算方法に関するよくある質問。",
  alternates: { canonical: "https://birthfacts.net/ja/faq/" },
};

const FAQS = [
  {
    q: "年齢はどのように計算されますか？",
    a: "生年月日から本日の日付までを、カレンダーに基づいて年・月・日で正確に計算します。誕生日がまだ来ていない月・日は考慮されます。",
  },
  {
    q: "元号（gengō）とは何ですか？",
    a: "元号（元号）とは日本の天皇の治世に基づく年号制度です。明治・大正・昭和・平成・令和など、各時代に固有の名前が付けられています。例えば昭和42年は西暦1967年にあたります。",
  },
  {
    q: "干支（eto）とは何ですか？",
    a: "干支（十二支）は、ネズミ・牛・寅・卯・辰・巳・午・未・申・酉・戌・亥の12の動物が12年周期で繰り返すサイクルです。中国に起源を持ち、日本では「干支（えと）」と呼ばれ、性格や運勢を表すと言われています。",
  },
  {
    q: "マヤ暦のキン数とは何ですか？",
    a: "マヤ暦（ドリームスペル）のキン数は、260日周期の神聖暦「ツォルキン」における生年月日の位置を1〜260の番号で表したものです。太陽の紋章（デイサイン）・銀河の音（ガラクティックトーン）・ウェイブスペルで構成されます。",
  },
  {
    q: "四柱推命とは何ですか？",
    a: "四柱推命は中国発祥の命理学で、生年・月・日（・時）から「四柱」を算出し、十干・十二支・五行のバランスで運命や性格を読み解く占術です。BirthFactsでは年柱・月柱・日柱の基礎情報と五行バランスを表示します。",
  },
  {
    q: "九星気学とは何ですか？",
    a: "九星気学は日本発祥の占術で、生まれ年から「本命星」（一白水星〜九紫火星の9種）を算出します。本命星により基本的な性格・相性・方位が分かるとされています。節分（2月4日頃）前後で年の切り替わりがあります。",
  },
  {
    q: "血液型性格診断は科学的ですか？",
    a: "血液型性格診断は日本独自の文化的エンターテインメントで、科学的根拠はありません。日本社会では広く親しまれている話題として楽しむためのものです。",
  },
  {
    q: "ライフパスナンバーとは何ですか？",
    a: "数秘術（ニューメロロジー）のライフパスナンバーは、生年月日の各桁を足し合わせて1桁（または11・22・33のマスターナンバー）になるまで繰り返し計算した数字です。人生の目的や生まれ持った才能を示すとされています。",
  },
  {
    q: "個人情報はどのように扱われますか？",
    a: "入力した生年月日はすべてブラウザ内で処理され、サーバーへ送信・保存されることは一切ありません。詳細はプライバシーポリシーをご覧ください。",
  },
  {
    q: "犬・猫の年齢換算はどのように計算されますか？",
    a: "最新の獣医学モデルに基づき、1年目は約15人間年、2年目は約9年追加（合計24年）、3年目以降は毎年約4年として計算します。犬はサイズによって老化速度が異なるため、大きさ補正も適用しています。",
  },
];

export default function JaFaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">よくある質問</span>
        </h1>
        <p className="text-[var(--muted)] text-lg">計算方法・機能についての疑問にお答えします。</p>
      </div>

      <div className="space-y-4">
        {FAQS.map(({ q, a }) => (
          <div key={q} className="card p-6">
            <h2 className="font-semibold text-base text-[var(--accent)] mb-2">Q. {q}</h2>
            <p className="text-base text-[var(--muted)] leading-relaxed">A. {a}</p>
          </div>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />

      <div className="mt-10 text-center">
        <a href="/ja/" className="btn-primary inline-block">計算ツールを使う</a>
      </div>
    </div>
  );
}
