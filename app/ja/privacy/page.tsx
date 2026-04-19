import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | BirthFacts",
  alternates: { canonical: "https://birthfacts.net/ja/privacy/" },
};

export default function JaPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">プライバシーポリシー</span>
        </h1>
      </div>

      <div className="space-y-6 text-[var(--muted)] text-base leading-relaxed">
        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">1. 収集する情報</h2>
          <p>BirthFacts（birthfacts.net）は、年齢・誕生日プロフィールを計算するために生年月日の入力をお願いしています。この情報はお使いのブラウザ内でのみ処理され、当サイトのサーバーに送信・保存されることはありません。</p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">2. データの使用方法</h2>
          <p>入力された生年月日はブラウザ上でリアルタイムに計算処理されます。個人情報として収集・保管・第三者へ提供することは一切ありません。</p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">3. アナリティクス</h2>
          <p>当サイトではトラフィックの集計分析のために Google Analytics 4（測定ID：<code className="text-[var(--accent)]">G-4ETJP01VCC</code>）を使用しています。個人を特定できる情報は収集されません。Googleのプライバシーポリシーはこちら：<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">policies.google.com/privacy</a></p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">4. 共有リンク</h2>
          <p>「結果をシェアする」機能を使うと、生年月日がURLパラメータとして含まれたリンクが生成されます。このリンクを他の人と共有する場合は、その点をご承知の上でご利用ください。</p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">5. Cookieについて</h2>
          <p>当サイト自体はCookieを設定しません。ただし、Google Analyticsがファーストパーティクッキーを使用する場合があります。</p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">6. お問い合わせ</h2>
          <p>プライバシーに関するご質問は <a href="/ja/contact/" className="text-[var(--accent)] hover:underline">お問い合わせページ</a> よりご連絡ください。</p>
        </div>
      </div>
    </div>
  );
}
