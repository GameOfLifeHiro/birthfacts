import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Privacy Policy | BirthFacts",
  description: "BirthFacts privacy policy — how we handle your data and protect your privacy.",
  alternates: { canonical: "https://birthfacts.net/privacy/" },
};

const LAST_UPDATED = "April 18, 2025";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy/" }]} />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Privacy Policy</span>
        </h1>
        <p className="text-[var(--muted)] text-sm">Last updated: {LAST_UPDATED}</p>
      </div>

      <div className="space-y-5 text-sm text-[var(--muted)] leading-relaxed">
        <div className="card p-6">
          <h2 className="font-semibold text-[var(--accent)] text-base mb-2">1. Overview</h2>
          <p>
            BirthFacts.net (&quot;we&quot;, &quot;our&quot;, &quot;the site&quot;) is committed to protecting your privacy.
            This policy explains what information we collect, how we use it, and your rights
            regarding your data.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-[var(--accent)] text-base mb-2">2. Information We Do NOT Collect</h2>
          <p className="mb-3">
            Your date of birth and all calculations are processed entirely within your browser
            (client-side JavaScript). This data is <strong className="text-[var(--text)]">never transmitted to our servers</strong> and
            is never stored, logged, or shared with any third party.
          </p>
          <p>We do not require account registration, email addresses, or any personal identification.</p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-[var(--accent)] text-base mb-2">3. Analytics</h2>
          <p>
            We use <strong className="text-[var(--text)]">Google Analytics 4</strong> (measurement ID{" "}
            <code className="text-[var(--accent)]">G-4ETJP01VCC</code>) to understand aggregate traffic
            — for example, which pages are most visited, session duration, and general geographic
            regions. Google may set cookies and process data according to its{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              Privacy Policy
            </a>
            . You can opt out of Google Analytics using the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-[var(--accent)] text-base mb-2">4. Advertising</h2>
          <p>
            We may display advertisements provided by Google AdSense or similar networks.
            These services may use cookies and web beacons to serve ads based on your prior
            visits to this and other websites. Google&apos;s use of advertising cookies enables it
            and its partners to serve ads to our users based on their visit to our site and/or
            other sites on the Internet. You may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              Google Ads Settings
            </a>
            .
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-[var(--accent)] text-base mb-2">5. Cookies</h2>
          <p>
            Google Analytics may set first-party cookies (e.g. <code className="text-[var(--accent)]">_ga</code>) to
            distinguish visitors. Third-party advertising, if enabled in the future, may set
            additional cookies. You can control cookies through your browser settings.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-[var(--accent)] text-base mb-2">6. Children&apos;s Privacy</h2>
          <p>
            BirthFacts is not directed at children under 13 years of age. We do not knowingly
            collect personal information from children. If you believe a child has provided
            personal information, please contact us and we will promptly delete it.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-[var(--accent)] text-base mb-2">7. GDPR (European Users)</h2>
          <p>
            If you are located in the European Economic Area (EEA), you have the right to
            access, rectify, or erase any personal data we hold about you. Since we do not
            collect personal data through our core functionality, there is typically no data
            to access or delete. For advertising-related data, please refer to Google&apos;s
            GDPR compliance information.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-[var(--accent)] text-base mb-2">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be reflected
            by updating the &quot;Last updated&quot; date at the top of this page. Continued use of
            the site constitutes acceptance of any updated policy.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-[var(--accent)] text-base mb-2">9. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please use our{" "}
            <a href="/contact/" className="text-[var(--accent)] hover:underline">
              Contact page
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
