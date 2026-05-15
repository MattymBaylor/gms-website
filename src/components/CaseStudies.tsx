"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface CaseStudy {
  id: string;
  title: string;
  teaser: string;
  metric: string;
  featured?: boolean;
  challenge: string;
  solution: string;
  results: string;
  ctaLink?: string;
  ctaLabel?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "seinfeld",
    title: "Seinfeld HQ: Multi-Agent Architecture",
    teaser:
      "A pixel-art command center demonstrating how 8 AI agents collaborate in real-time.",
    metric: "8 Agents, 1 System",
    featured: true,
    challenge:
      "Demonstrating the power and coordination of multi-agent AI architecture in an engaging, accessible way that showcases Growth Mindset AI's technical capabilities.",
    solution:
      "Built an interactive pixel-art command center featuring 8 Seinfeld-themed AI agents. Each character represents a different agent role — from customer intake to review generation — all working in concert.",
    results:
      "The Seinfeld HQ experience has become our flagship case study, demonstrating the full lifecycle of our multi-agent system in a way that's both technically impressive and genuinely fun to explore.",
    ctaLink: "/seinfeld-hq",
    ctaLabel: "Explore the Interactive HQ",
  },
  {
    id: "hvac-company",
    title: "Regional HVAC: 340% More Calls Answered",
    teaser:
      "A 12-truck operation went from missing 40% of calls to capturing every single one.",
    metric: "+340% Answer Rate",
    challenge:
      "A growing HVAC company with 12 trucks was missing nearly 40% of inbound calls during peak season. Their single receptionist couldn't handle the volume, especially after hours and on weekends.",
    solution:
      "Deployed a custom voice agent that answers every call instantly, qualifies emergency vs. routine work, books the appropriate technician, and texts dispatch details to the crew.",
    results:
      "Call answer rate went from 60% to 100%. After-hours bookings increased 4x. The owner estimated an additional $180K in captured revenue in the first quarter alone.",
  },
  {
    id: "plumbing-franchise",
    title: "Plumbing Franchise: After-Hours Revenue Unlocked",
    teaser:
      "Capturing emergency calls that used to go to voicemail — now worth $47K/month.",
    metric: "$47K/mo Recovered",
    challenge:
      "A multi-location plumbing franchise was losing emergency calls between 6 PM and 8 AM. Their answering service was slow, scripts were outdated, and callbacks came hours later.",
    solution:
      "Replaced the answering service with an AI voice agent that handles 20 simultaneous calls, triages by urgency, dispatches on-call plumbers, and sends confirmation texts.",
    results:
      "Recovered an average of $47,000/month in previously lost after-hours revenue. Emergency response time dropped from 2+ hours to under 15 minutes.",
  },
  {
    id: "roofing-storm",
    title: "Roofing Co: Storm Season Surge",
    teaser:
      "Handled 200+ calls/day during a hailstorm — zero missed, zero wait times.",
    metric: "200+ Calls/Day",
    challenge:
      "A regional roofing company faced call volumes 10x normal during storm season. They were losing leads to competitors who answered first.",
    solution:
      "Deployed a surge-ready voice agent that handled up to 20 simultaneous calls, collected damage details, scheduled estimates by zone, and prioritized by severity.",
    results:
      "Processed over 200 calls per day during the worst storm week with zero missed calls. Booked 3x more estimates than the previous year's storm season.",
  },
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-sm uppercase tracking-widest text-cyan mb-3">
            Real Results
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold">
            See the Results
          </p>
        </motion.div>

        {/* Horizontal scroll carousel */}
        <div className="relative">
          <div className="snap-carousel flex gap-6 overflow-x-auto pb-6 -mx-6 px-6">
            {caseStudies.map((study, i) => (
              <motion.button
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setSelectedStudy(study)}
                className={`card flex-shrink-0 w-80 p-6 text-left cursor-pointer relative overflow-hidden ${
                  study.featured ? "ring-1 ring-cyan/30" : ""
                }`}
              >
                {study.featured && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider text-cyan bg-cyan-dim px-2 py-0.5 rounded-full font-medium">
                    Featured
                  </span>
                )}

                {/* Placeholder visual */}
                <div className="h-36 rounded-lg bg-surface-light border border-border mb-4 flex items-center justify-center">
                  {study.featured ? (
                    <div className="text-center">
                      <span className="text-2xl">🏢</span>
                      <p className="text-xs text-cyan mt-1">
                        Interactive Experience
                      </p>
                    </div>
                  ) : (
                    <span className="text-3xl opacity-30">📊</span>
                  )}
                </div>

                <p className="text-lg font-semibold mb-2 leading-snug">
                  {study.title}
                </p>
                <p className="text-sm text-text-muted mb-4 leading-relaxed">
                  {study.teaser}
                </p>
                <p className="text-sm font-semibold text-cyan">
                  {study.metric}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-surface border border-border rounded-2xl p-8 max-w-2xl w-full relative my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <p className="text-sm text-cyan font-medium mb-2">
                {selectedStudy.metric}
              </p>
              <h3 className="text-2xl font-semibold mb-6">
                {selectedStudy.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-text-muted mb-2">
                    The Challenge
                  </h4>
                  <p className="text-text leading-relaxed">
                    {selectedStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-text-muted mb-2">
                    The Solution
                  </h4>
                  <p className="text-text leading-relaxed">
                    {selectedStudy.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-text-muted mb-2">
                    The Results
                  </h4>
                  <p className="text-text leading-relaxed">
                    {selectedStudy.results}
                  </p>
                </div>
              </div>

              {selectedStudy.ctaLink && (
                <a
                  href={selectedStudy.ctaLink}
                  className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-orange text-white font-medium rounded-lg hover:bg-orange/90 transition-colors"
                >
                  {selectedStudy.ctaLabel}
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
