import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | BirthFacts",
  alternates: { canonical: "https://birthfacts.net/ja/contact/" },
};

export default function JaContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">お問い合わせ</span>
        </h1>
        <p className="text-[var(--muted)] text-lg">ご質問・ご意見・不具合のご報告はこちらから。</p>
      </div>

      <div className="card p-8 text-center">
        <p className="text-[var(--muted)] text-base mb-4">
          メールでお気軽にご連絡ください：
        </p>
        <a
          href="mailto:hello@birthfacts.net"
          className="text-xl font-semibold text-[var(--accent)] hover:underline"
        >
          hello@birthfacts.net
        </a>
        <p className="text-[var(--muted)] text-sm mt-4">
          運営：Ascent Leadership Institute Inc（米国ネバダ州ラスベガス）
        </p>
      </div>

      <div className="mt-10 text-center">
        <a href="/ja/" className="btn-primary inline-block">計算ツールに戻る</a>
      </div>
    </div>
  );
}
