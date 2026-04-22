import type { Metadata } from "next";
import { YAKUDOSHI_MALE, YAKUDOSHI_FEMALE } from "@/lib/japaneseLifeEvents";

const CURRENT_YEAR = new Date().getFullYear();

export const metadata: Metadata = {
  title: `厄年 早見表 ${CURRENT_YEAR} | 男性・女性の年齢一覧 | BirthFacts`,
  description: `${CURRENT_YEAR}年版・厄年早見表。男性（25歳・42歳・61歳）女性（19歳・33歳・37歳・61歳）の本厄・前厄・後厄を一覧で確認。お祓いのタイミングや風習も解説。`,
  keywords: [
    "厄年", "厄年 早見表", `厄年 ${CURRENT_YEAR}`,
    `厄年 ${CURRENT_YEAR} 男`, `厄年 ${CURRENT_YEAR} 女`,
    "前厄 本厄 後厄", "厄年 男性 年齢", "厄年 女性 年齢",
    "大厄", "厄年 お祓い", "厄年 いつ", "厄払い",
  ],
  alternates: { canonical: "https://birthfacts.net/ja/yakudoshi/" },
};

const SUBTYPE_COLOR: Record<string, string> = {
  前厄: "text-[var(--muted)]",
  本厄: "text-[var(--accent)]",
  後厄: "text-[var(--muted)]",
};

export default function YakudoshiPage() {
  const maleThisYear = YAKUDOSHI_MALE.filter((e) => {
    const birthYear = CURRENT_YEAR - e.age;
    return birthYear > 1900;
  });
  const femaleThisYear = YAKUDOSHI_FEMALE.filter((e) => {
    const birthYear = CURRENT_YEAR - e.age;
    return birthYear > 1900;
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          <span className="gradient-text">厄年 早見表 {CURRENT_YEAR}</span>
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mx-auto">
          男性・女性の前厄・本厄・後厄の年齢を一覧でチェック。
          今年が厄年かどうか、すぐに確認できます。
        </p>
      </div>

      {/* Quick note */}
      <div className="card p-4 mb-8 text-sm text-[var(--muted)] border-l-4 border-[var(--accent)]">
        ※ 厄年は伝統的に<strong className="text-[var(--text)]">数え年</strong>で数えます。
        下の表は数え年を満年齢（西暦年齢）に換算した<strong className="text-[var(--text)]">一般的な目安</strong>です。
        地域・神社によって異なる場合があります。
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Male table */}
        <div className="card p-5">
          <h2 className="text-lg font-bold text-[var(--accent)] mb-4">👨 男性の厄年</h2>
          <table className="w-full text-base">
            <thead>
              <tr className="border-b border-[var(--card-border)] text-[var(--muted)] text-sm">
                <th className="text-left pb-2">区分</th>
                <th className="text-center pb-2">満年齢</th>
                <th className="text-center pb-2">生まれ年</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--card-border)]">
              {YAKUDOSHI_MALE.map((ev) => (
                <tr key={ev.name} className="py-2">
                  <td className={`py-2 font-semibold ${ev.isMajor ? "text-[var(--accent)]" : SUBTYPE_COLOR[ev.subtype!]}`}>
                    {ev.subtype}{ev.isMajor && <span className="text-xs ml-1 text-[var(--accent)]">大厄</span>}
                  </td>
                  <td className="text-center py-2 font-bold text-[var(--text)]">{ev.age}歳</td>
                  <td className="text-center py-2 text-[var(--muted)]">{CURRENT_YEAR - ev.age}年生</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Female table */}
        <div className="card p-5">
          <h2 className="text-lg font-bold text-[var(--accent)] mb-4">👩 女性の厄年</h2>
          <table className="w-full text-base">
            <thead>
              <tr className="border-b border-[var(--card-border)] text-[var(--muted)] text-sm">
                <th className="text-left pb-2">区分</th>
                <th className="text-center pb-2">満年齢</th>
                <th className="text-center pb-2">生まれ年</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--card-border)]">
              {YAKUDOSHI_FEMALE.map((ev) => (
                <tr key={ev.name} className="py-2">
                  <td className={`py-2 font-semibold ${ev.isMajor ? "text-[var(--accent)]" : SUBTYPE_COLOR[ev.subtype!]}`}>
                    {ev.subtype}{ev.isMajor && <span className="text-xs ml-1 text-[var(--accent)]">大厄</span>}
                  </td>
                  <td className="text-center py-2 font-bold text-[var(--text)]">{ev.age}歳</td>
                  <td className="text-center py-2 text-[var(--muted)]">{CURRENT_YEAR - ev.age}年生</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Explanation sections */}
      <div className="space-y-6 mb-10">
        <div className="card p-6">
          <h2 className="text-xl font-bold text-[var(--accent)] mb-3">厄年とは？</h2>
          <p className="text-base text-[var(--muted)] leading-relaxed mb-3">
            厄年（やくどし）は、日本の伝統的な風習で、心身に変化が起きやすく注意が必要とされる年齢のこと。
            平安時代頃から続く慣わしで、現代でも多くの人が神社・お寺でお祓い（厄払い）を受けます。
          </p>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            男性は<strong className="text-[var(--text)]">25歳・42歳・61歳</strong>（数え年）が本厄で、
            42歳は「死に」に通じるとして特に「大厄」と呼ばれます。
            女性は<strong className="text-[var(--text)]">19歳・33歳・37歳・61歳</strong>（数え年）が本厄で、
            33歳が「散々」に通じる大厄です。
          </p>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-[var(--accent)] mb-3">前厄・本厄・後厄の違い</h2>
          <div className="space-y-3">
            {[
              { name: "前厄", desc: "本厄の前年。変化の兆しが現れやすい時期。心構えと準備が大切。" },
              { name: "本厄", desc: "最も注意が必要とされる年。大きな決断（転職・引越し・手術など）は吉日を選んで。" },
              { name: "後厄", desc: "本厄明けの年。「後厄の方が危ない」とも言われる。気を緩めず過ごすことが大切。" },
            ].map(({ name, desc }) => (
              <div key={name} className="flex items-start gap-3">
                <span className="font-bold text-base text-[var(--accent)] shrink-0 w-12">{name}</span>
                <p className="text-base text-[var(--muted)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-[var(--accent)] mb-3">厄年のお祓い・風習</h2>
          <ul className="space-y-2">
            {[
              "元旦・節分（2月3日頃）に神社・お寺で厄除けのお祓いを受けるのが一般的",
              "赤い下着（腹巻き・肌着）を身につける風習がある（厄を払い、生命力を高める色）",
              "大きな決断（転職・引越し・結婚・手術）は吉日を選ぶか、厄年を避ける方も",
              "厄除けのお守りを財布や鞄に入れて持ち歩く",
              "厄払いとして他人に品物を配る（厄を分ける）という風習も地域によってある",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-base text-[var(--muted)]">
                <span className="text-[var(--accent)] mt-1 shrink-0">🏯</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related 早見表 */}
      <div className="card p-5 mb-8">
        <h2 className="text-lg font-bold text-[var(--accent)] mb-3">関連する早見表</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: "/ja/gaju/", emoji: "🎊", title: "賀寿 早見表", desc: "還暦・古希・喜寿・米寿の年齢" },
            { href: "/ja/nenrei-hayamihyo/", emoji: "📅", title: "年齢 早見表", desc: "生まれ年から満年齢・数え年・和暦" },
            { href: "/ja/seiza-hayamihyo/", emoji: "♈", title: "星座 早見表", desc: "12星座の誕生日と特徴" },
          ].map(({ href, emoji, title, desc }) => (
            <a key={href} href={href} className="flex items-center gap-3 p-3 rounded-xl border border-[var(--card-border)] hover:border-[var(--accent)] transition-colors">
              <span className="text-2xl">{emoji}</span>
              <div>
                <div className="font-medium text-sm text-[var(--text)]">{title}</div>
                <div className="text-xs text-[var(--muted)]">{desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center card p-8">
        <p className="text-[var(--muted)] text-base mb-4">
          生年月日を入力すると、あなたの厄年・次の節目・賀寿・星座占いをすべて確認できます。
        </p>
        <a href="/ja/" className="btn-primary inline-block">
          誕生日占い 無料
        </a>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "厄年とは何ですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "厄年は日本の伝統的な風習で、心身に変化が起きやすく注意が必要とされる年齢です。男性は25歳・42歳・61歳（数え年）、女性は19歳・33歳・37歳・61歳（数え年）が本厄です。",
                },
              },
              {
                "@type": "Question",
                name: `${CURRENT_YEAR}年の厄年は何歳ですか？`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${CURRENT_YEAR}年の厄年（満年齢の目安）は、男性が前厄${YAKUDOSHI_MALE.filter(e=>e.subtype==="前厄").map(e=>e.age+"歳").join("・")}、本厄${YAKUDOSHI_MALE.filter(e=>e.subtype==="本厄").map(e=>e.age+"歳").join("・")}、後厄${YAKUDOSHI_MALE.filter(e=>e.subtype==="後厄").map(e=>e.age+"歳").join("・")}。女性が前厄${YAKUDOSHI_FEMALE.filter(e=>e.subtype==="前厄").map(e=>e.age+"歳").join("・")}、本厄${YAKUDOSHI_FEMALE.filter(e=>e.subtype==="本厄").map(e=>e.age+"歳").join("・")}、後厄${YAKUDOSHI_FEMALE.filter(e=>e.subtype==="後厄").map(e=>e.age+"歳").join("・")}です。`,
                },
              },
              {
                "@type": "Question",
                name: "前厄・本厄・後厄の違いは何ですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "前厄は本厄の前年で変化の兆しが現れやすい時期、本厄は最も注意が必要とされる年、後厄は本厄明けの年で「後厄の方が危ない」とも言われます。三年間を通じて注意が必要です。",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
