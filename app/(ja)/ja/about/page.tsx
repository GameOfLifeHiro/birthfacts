import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BirthFactsについて",
  description: "BirthFacts.netは、誕生日から正確な年齢・干支・マヤ暦・四柱推命・九星気学などを無料で計算できるツールです。",
  alternates: { canonical: "https://birthfacts.net/ja/about/" },
};

export default function JaAboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">BirthFactsについて</span>
        </h1>
        <p className="text-[var(--muted)] text-lg">単なる年齢計算を超えた、誕生日プロフィールツールです。</p>
      </div>

      <div className="space-y-6">
        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">BirthFactsとは？</h2>
          <p className="text-[var(--muted)] text-base leading-relaxed">
            BirthFactsは、生年月日から豊富な情報を瞬時に表示する無料の誕生日プロフィールツールです。
            正確な年齢（年・月・週・日・時間・分）はもちろん、日本専用の元号・干支・四柱推命・九星気学から、
            マヤ暦・月相・西洋占星術・数秘術まで、多彩な視点からあなたの誕生日を読み解きます。
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">BirthFactsでわかること</h2>
          <ul className="space-y-2 text-base text-[var(--muted)]">
            {[
              "正確な年齢（分単位まで）と次の誕生日までのカウントダウン",
              "西洋占星術のサイン・エレメント・特性",
              "干支（十二支）と動物の特徴・ラッキーナンバー",
              "元号（昭和・平成・令和など）での生まれ年",
              "誕生日の月相（新月・満月など）とスピリチュアルな意味",
              "マヤ暦ドリームスペル：キン数・太陽の紋章・銀河の音・ウェイブスペル",
              "四柱推命：年柱・月柱・日柱・五行バランス・日主",
              "九星気学：本命星と基本的な性格・方位",
              "血液型性格診断（A・B・O・AB型）",
              "ライフパスナンバー（数秘術）",
              "誕生石・誕生花",
              "世代（ミレニアル・Z世代など）とスピリチュアル世代（インディゴチルドレンなど）",
              "あなたと同じ誕生日の有名人",
              "生まれた年の世界の出来事・テクノロジー・音楽・映画",
              "人生のタイムラインと世界史の重ね合わせ",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">無料で使えますか？</h2>
          <p className="text-[var(--muted)] text-base leading-relaxed">
            はい、完全無料です。アカウント登録・メールアドレスも不要です。
            生年月日を入力するだけで、すべての情報を即座に表示します。
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">計算の精度について</h2>
          <p className="text-[var(--muted)] text-base leading-relaxed">
            年齢計算はローカル日付を使用した日単位の正確な計算です。
            マヤ暦はホゼ・アルグェレスのドリームスペル相関（検証済みキン日付使用）を採用しています。
            四柱推命・九星気学は伝統的な計算法に基づく入門的な表示であり、プロの鑑定師による詳細な解読とは異なります。
            血液型性格診断は科学的根拠のない文化的エンターテインメントです。
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">個人情報の取り扱いについて</h2>
          <p className="text-[var(--muted)] text-base leading-relaxed">
            入力した生年月日はすべてブラウザ内で処理されます。
            サーバーへの送信・保存は一切行いません。
            詳細は
            <a href="/ja/privacy/" className="text-[var(--accent)] hover:underline">プライバシーポリシー</a>
            をご覧ください。
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">運営者について</h2>
          <p className="text-[var(--muted)] text-base leading-relaxed">
            BirthFactsは{" "}
            <strong className="text-[var(--text)]">Ascent Leadership Institute Inc</strong>
            （米国ネバダ州ラスベガス）が運営しています。
            自己発見をすべての人に、無料で、意味深く提供することが私たちのミッションです。
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a href="/ja/" className="btn-primary inline-block">誕生日占い 無料</a>
      </div>
    </div>
  );
}
