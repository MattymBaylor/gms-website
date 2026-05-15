"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Does it really sound human?",
    a: "Yes — powered by ElevenLabs, our voice AI is indistinguishable from a real receptionist. Callers consistently report thinking they spoke with a live person.",
  },
  {
    q: "I already have a receptionist. Do I still need this?",
    a: "Your receptionist handles 1 call at a time during business hours. This handles 20 simultaneously, 24/7. Think of it as a tireless backup that never takes a sick day.",
  },
  {
    q: "How fast is setup?",
    a: "24-hour turnaround. We research your business and have your custom voice agent live the next day.",
  },
  {
    q: "What if a caller wants to speak to a real person?",
    a: "The AI can transfer to you or your team anytime. It’s a filter, not a wall. You stay in control.",
  },
  {
    q: "Can it handle multiple calls at once?",
    a: "Yes — up to 20 simultaneous calls. No busy signals, no hold music, no \"please hold.\"",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Month-to-month. Cancel anytime. We earn your business every month.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-sm uppercase tracking-widest text-cyan mb-3">
            Questions?
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold">
            Frequently Asked Questions
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-light/50 transition-colors"
              >
                <span className="text-base font-medium pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-text-muted leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
