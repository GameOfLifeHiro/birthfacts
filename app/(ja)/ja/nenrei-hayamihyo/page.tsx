import type { Metadata } from "next";

const CURRENT_YEAR = new Date().getFullYear();

export const metadata: Metadata = {
  title: `年齢 早見表 ${CURRENT_YEAR} | 生まれ年から満年齢・数え年・和暦を確認 | BirthFacts`,
  description: `${CURRENT_YEAR}年版・年齢早見表。生まれ年（西暦・和暦）から満年齢・数え年をすぐに確認できます。満年齢と数え年の違いも解説。`,
  keywords: [
    "年齢 早見表", `年齢 早見表 ${CURRENT_YEAR}`,
    "生まれ年 年齢", "満年齢 早見表", "数え年 早見表",
    "満年齢 数え年 違い", "数え年 計算", "和暦 西暦 年齢",
    "生まれ年 令和 平成 昭和", "年齢確認", "何歳",
  ],
  alternates: { canonical: "https://birthfacts.net/ja/nenrei-hayamihyo/" },
};

function getWareki(year: number): string {
  if (year >= 2019) {
    const n = year - 2018;
    return `令和${n === 1 ? "元" : n}年`;
  }
  if (year >= 1989) {
    const n = year - 1988;
    return `平成${n === 1 ? "元" : n}年`;
  }
  if (year >= 1927) {
    const n = year - 1925;
    return `昭和${n === 1 ? "元" : n}年`;
  }
  if (year >= 1912) {
    const n = year - 1911;
    return `大正${n === 1 ? "元" : n}年`;
  }
  return `明治${year - 1867}年`;
}

// Rows from current year back to 1924 (100 years)
const ROWS = Array.from({ length: CURRENT_YEAR - 1924 }, (_, i) => {
  const birthYear = CURRENT_YEAR - i;
  const manNenrei = i; // born this year → 0; exact depends on birthday, shown as approximate
  const kazoedoshi = i + 1;
  return { birthYear, wareki: getWareki(birthYear), manNenrei, kazoedoshi };
});

export default function NenreiHayamihyoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          <span className="gradient-text">年齢 早見表 {CURRENT_YEAR}</span>
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mx-auto">
          生まれ年（西暦・和暦）から{CURRENT_YEAR}年時点の満年齢・数え年をすぐに確認。
        </p>
      </div>

      {/* 満年齢 vs 数え年 explanation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="card p-5">
          <h2 className="text-lg font-bold text-[var(--accent)] mb-2">満年齢とは？</h2>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            誕生日を迎えるごとに1歳加算される、現在日本の法律で使われる年齢の数え方。
            誕生日前は「今年の西暦 − 生まれ年 − 1歳」、誕生日以降は「今年の西暦 − 生まれ年」となります。
          </p>
          <div className="mt-3 text-sm text-[var(--muted)] bg-[var(--card-border)]/20 rounded-lg p-3">
            例：1980年生まれで、まだ誕生日を迎えていない場合 →<br />
            <span className="font-semibold text-[var(--text)]">{CURRENT_YEAR} − 1980 − 1 = {CURRENT_YEAR - 1980 - 1}歳</span>
          </div>
        </div>
        <div className="card p-5">
          <h2 className="text-lg font-bold text-[var(--accent)] mb-2">数え年とは？</h2>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            生まれた時点で1歳、元旦（1月1日）を迎えるごとに1歳加算される伝統的な数え方。
            厄年・賀寿の計算は数え年が基準となることが多い。
          </p>
          <div className="mt-3 text-sm text-[var(--muted)] bg-[var(--card-border)]/20 rounded-lg p-3">
            例：1980年生まれの場合 →<br />
            <span className="font-semibold text-[var(--text)]">{CURRENT_YEAR} − 1980 + 1 = {CURRENT_YEAR - 1980 + 1}歳</span>（数え年）
          </div>
        </div>
      </div>

      {/* Note on approximation */}
      <div className="card p-4 mb-6 text-sm text-[var(--muted)] border-l-4 border-[var(--accent)]">
        ※ 満年齢は誕生日を迎えているかどうかで±1歳変わります。
        下の表の満年齢は「{CURRENT_YEAR}年中に迎える満年齢」です。
        正確な年齢は<a href="/ja/" className="text-[var(--accent)] hover:underline">誕生日占い</a>から生年月日を入力して確認できます。
      </div>

      {/* Table */}
      <div className="card overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-base">
            <thead className="bg-[var(--card-border)]/30 sticky top-0">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[var(--text)]">生まれ年（西暦）</th>
                <th className="text-left px-4 py-3 font-semibold text-[var(--text)]">和暦</th>
                <th className="text-center px-4 py-3 font-semibold text-[var(--accent)]">満年齢</th>
                <th className="text-center px-4 py-3 font-semibold text-[var(--accent2)]">数え年</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--card-border)]">
              {ROWS.map(({ birthYear, wareki, manNenrei, kazoedoshi }) => {
                const isCurrentYear = birthYear === CURRENT_YEAR;
                return (
                  <tr
                    key={birthYear}
                    className={`transition-colors hover:bg-[var(--card-border)]/10 ${isCurrentYear ? "bg-[var(--accent)]/5" : ""}`}
                  >
                    <td className="px-4 py-2.5 font-semibold text-[var(--text)]">{birthYear}年</td>
                    <td className="px-4 py-2.5 text-[var(--muted)]">{wareki}</td>
                    <td className="px-4 py-2.5 text-center font-bold text-[var(--accent)]">
                      {isCurrentYear ? "0〜1" : manNenrei}歳
                    </td>
                    <td className="px-4 py-2.5 text-center font-bold text-[var(--accent2)]">
                      {kazoedoshi}歳
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Related 早見表 */}
      <div className="card p-5 mb-8">
        <h2 className="text-lg font-bold text-[var(--accent)] mb-3">関連する早見表</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: "/ja/yakudoshi/", emoji: "⚠️", title: "厄年 早見表", desc: "前厄・本厄・後厄の年齢一覧" },
            { href: "/ja/gaju/", emoji: "🎊", title: "賀寿 早見表", desc: "還暦・古希・喜寿・米寿の年齢" },
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
          生年月日を入力すると、今日の運勢・星座占い・次の節目（厄年・賀寿）も確認できます。
        </p>
        <a href="/ja/" className="btn-primary inline-block">誕生日占い 無料</a>
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
                name: "満年齢と数え年の違いは何ですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "満年齢は誕生日を迎えるごとに1歳加算される現代の数え方で、日本の法律に基づきます。数え年は生まれた時点で1歳とし、元旦に1歳加算される伝統的な数え方です。厄年・賀寿の計算には数え年が使われることが多いです。",
                },
              },
              {
                "@type": "Question",
                name: `${CURRENT_YEAR}年生まれは何歳ですか？`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${CURRENT_YEAR}年生まれの方は、${CURRENT_YEAR}年中に満0〜1歳、数え年では1歳です。`,
                },
              },
              {
                "@type": "Question",
                name: "和暦（令和・平成・昭和）と西暦の換算方法は？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "令和○年は西暦(2018+○)年、平成○年は西暦(1988+○)年、昭和○年は西暦(1925+○)年に対応します。例えば昭和63年は1988年、平成元年は1989年、令和元年は2019年です。",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
