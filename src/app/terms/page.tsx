import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | GrowthMindset.ai",
};

export default function Terms() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-sm max-w-none text-text-muted leading-relaxed space-y-6">
          <p>Last updated: May 15, 2026</p>
          <p>
            These Terms of Service govern your use of GrowthMindset.ai&apos;s
            website and AI voice agent services. By accessing or using our
            services, you agree to be bound by these terms.
          </p>
          <h2 className="text-lg font-semibold text-white">Service Description</h2>
          <p>
            GrowthMindset.ai provides AI-powered voice agents for business phone
            answering, lead qualification, and appointment booking. Our service
            is provided on a month-to-month subscription basis.
          </p>
          <h2 className="text-lg font-semibold text-white">Pricing &amp; Billing</h2>
          <p>
            After a 14-day free trial, the service is billed at $397/month. There
            are no long-term contracts. You may cancel at any time.
          </p>
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p>
            For questions about these terms, contact us at
            matt@growthmindset.ai.
          </p>
        </div>
      </div>
    </div>
  );
}
