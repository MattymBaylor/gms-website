import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | GrowthMindset.ai",
  description: "The story behind GrowthMindset.ai — AI voice agents built for home service contractors by people who understand the trades.",
};

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold mb-4">About GrowthMindset.ai</h1>
        <p className="text-text-muted text-lg mb-8 leading-relaxed">
          We build AI voice agents that help home service contractors capture every call,
          qualify every lead, and book every job — 24/7, without hiring more staff.
        </p>

        <div className="space-y-8 text-text leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-3">The Problem We Saw</h2>
            <p className="text-text-muted">
              Home service businesses lose thousands of dollars every month to
              missed calls. The data is clear: 85% of callers who can&apos;t reach you
              never call back. 78% of buyers choose the first business to respond.
              And most contractors are too busy on the job to answer the phone.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Our Approach</h2>
            <p className="text-text-muted">
              We don&apos;t just build answering machines. We build AI agents that
              understand your business — your services, your service area, your
              scheduling, your reputation. The AI researches your company before
              it ever takes a call, so it can speak intelligently about what you
              do and book real jobs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Meet the Founder</h2>
            <p className="text-text-muted">
              Matt Martelli founded GrowthMindset.ai with a simple belief: the
              best technology should be accessible to every business, not just
              enterprise corporations. With a background in AI architecture and
              automation, Matt leads the vision for building AI agents that feel
              human, work 24/7, and pay for themselves in the first week.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
