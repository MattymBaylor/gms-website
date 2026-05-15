import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | GrowthMindset.ai",
  description: "Insights on AI voice agents, home service marketing, and growing your business with automation.",
};

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-text-muted text-lg mb-12">
          Insights on AI voice agents, home service marketing, and growing your
          business with automation.
        </p>

        {/* Placeholder — will be replaced with CMS integration */}
        <div className="card p-12 text-center">
          <p className="text-text-muted">
            Blog posts coming soon. Content will be migrated from Blogger and new posts added via headless CMS.
          </p>
        </div>
      </div>
    </div>
  );
}
