"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // TODO: Connect to Mailchimp/ConvertKit/N8N webhook
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="card p-10 sm:p-12 text-center"
        >
          {!submitted ? (
            <>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Free Guide: The True Cost of Missed Calls
              </h2>
              <p className="text-text-muted mb-8">
                Get the data. See what you&apos;re leaving on the table.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 px-4 py-3 bg-surface-light border border-border rounded-lg text-sm text-white placeholder:text-text-muted/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-orange text-white font-medium text-sm rounded-lg hover:bg-orange/90 transition-colors whitespace-nowrap"
                >
                  Send Me the Guide
                </button>
              </form>
              {error && (
                <p className="text-sm text-red-400 mt-3">{error}</p>
              )}
            </>
          ) : (
            <div className="py-4">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green/10 border border-green/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="text-xl font-semibold mb-2">Check your inbox!</p>
              <p className="text-text-muted text-sm">
                The guide is on its way.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
