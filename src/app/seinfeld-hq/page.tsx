import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seinfeld HQ — Interactive AI Command Center | GrowthMindset.ai",
  description:
    "Explore our multi-agent AI architecture through an interactive pixel-art command center featuring 8 Seinfeld-themed AI agents.",
};

export default function SeinfeldHQ() {
  return (
    <div className="w-full h-screen -mt-16">
      <iframe
        src="/seinfeld-hq/index.html"
        className="w-full h-full border-0"
        title="Seinfeld HQ — Interactive AI Command Center"
      />
    </div>
  );
}
