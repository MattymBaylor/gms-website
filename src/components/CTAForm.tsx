"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const WEBHOOK_URL =
  "https://n8n.growthmindsetai.tech/webhook/44956247-3835-4500-87b4-dafc40c6b0a9";

export default function CTAForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    business_name: "",
    business_address: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (
      !formData.first_name ||
      !formData.business_name ||
      !formData.business_address ||
      !formData.phone
    ) {
      setError("All fields are required.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Please try again or call us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="cta" ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="card p-10 sm:p-12"
        >
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                  Get Your Free AI Demo
                </h2>
                <p className="text-text-muted">
                  14-day free trial &rarr; $397/mo after. No contracts.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-sm text-text-muted mb-1.5"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-light border border-border rounded-lg text-sm text-white placeholder:text-text-muted/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="business_name"
                      className="block text-sm text-text-muted mb-1.5"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business_name"
                      name="business_name"
                      value={formData.business_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-light border border-border rounded-lg text-sm text-white placeholder:text-text-muted/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all"
                      placeholder="Acme HVAC"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="business_address"
                    className="block text-sm text-text-muted mb-1.5"
                  >
                    Business Address
                  </label>
                  <input
                    type="text"
                    id="business_address"
                    name="business_address"
                    value={formData.business_address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface-light border border-border rounded-lg text-sm text-white placeholder:text-text-muted/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all"
                    placeholder="123 Main St, Austin, TX 78701"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-text-muted mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface-light border border-border rounded-lg text-sm text-white placeholder:text-text-muted/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all"
                    placeholder="(512) 555-0123"
                  />
                  <p className="text-xs text-text-muted/60 mt-1.5">
                    Mobile preferred — our AI will call you within 15 minutes to
                    show you the full demo, including follow-up texts and other
                    features.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-orange text-white font-medium rounded-lg hover:bg-orange/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base mt-2"
                >
                  {submitting ? "Submitting..." : "Start My Demo"}
                </button>

                {error && (
                  <p className="text-sm text-red-400 text-center">{error}</p>
                )}
              </form>

              <p className="text-center text-sm text-text-muted/50 mt-6">
                Prefer to talk to a human?{" "}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline"
                >
                  Schedule a call with Matt &rarr;
                </a>
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="w-16 h-16 mx-auto mb-5 rounded-full bg-green/10 border border-green/20 flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-semibold mb-2">You&apos;re in!</h3>
              <p className="text-text-muted">
                Expect a call within 15 minutes.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
