import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GrowthMindset.ai",
};

export default function Privacy() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none text-text-muted leading-relaxed space-y-6">
          <p>
            Last updated: May 15, 2026
          </p>
          <p>
            GrowthMindset.ai (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website or use our
            services.
          </p>
          <h2 className="text-lg font-semibold text-white">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            fill out our demo request form (name, business name, business
            address, phone number) or subscribe to our email list.
          </p>
          <h2 className="text-lg font-semibold text-white">How We Use Your Information</h2>
          <p>
            We use the information we collect to provide and improve our
            services, contact you about your demo request, and send you
            marketing communications you&apos;ve opted into.
          </p>
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at matt@growthmindset.ai.
          </p>
        </div>
      </div>
    </div>
  );
}
