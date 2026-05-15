"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const industries = [
  { name: "HVAC", slug: "hvac", icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z", description: "Keep every emergency call answered, day or night. Our AI qualifies urgency, books the right technician, and follows up automatically." },
  { name: "Roofing", slug: "roofing", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25", description: "Storm season means hundreds of calls. Capture every lead, prioritize by damage severity, and book estimates automatically." },
  { name: "Plumbing", slug: "plumbing", icon: "M11.42 15.17l-5.1-5.1m0 0L3 12.75m3.32-2.68L9 12.75m2.42 2.42l5.1 5.1m0 0L19.84 17.6m-2.32 2.67L15 17.6", description: "Emergency plumbing calls can't wait. Our AI triages calls, books the nearest available plumber, and handles overflow." },
  { name: "Electrical", slug: "electrical", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", description: "Capture service calls 24/7, qualify electrical emergencies vs. routine work, and dispatch the right crew." },
  { name: "Insurance", slug: "insurance", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", description: "Handle claims intake, policy inquiries, and quote requests around the clock without adding staff." },
  { name: "Real Estate", slug: "real-estate", icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819", description: "Never miss a showing request or buyer inquiry. Qualify leads by budget and timeline, schedule viewings automatically." },
  { name: "Legal", slug: "legal", icon: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z", description: "Screen intake calls, gather case details, and schedule consultations — even after hours." },
  { name: "Medical/Dental", slug: "medical", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z", description: "Handle appointment scheduling, prescription refill requests, and patient inquiries 24/7 with HIPAA-aware protocols." },
  { name: "Locksmith", slug: "locksmith", icon: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z", description: "Emergency lockout calls need instant response. Our AI answers immediately, dispatches the closest tech, and handles overflow." },
  { name: "Property Management", slug: "property-management", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21", description: "Handle tenant calls, maintenance requests, and emergency reports at any hour without burning out your team." },
  { name: "Home Services", slug: "home-services", icon: "M11.42 15.17l-5.1-5.1a3 3 0 010-4.24l.71-.71a3 3 0 014.24 0l.17.17.17-.17a3 3 0 014.24 0l.71.71a3 3 0 010 4.24l-5.1 5.1a.75.75 0 01-1.06 0z", description: "General home services — cleaning, landscaping, handyman work. Capture every call, qualify the job, and book it." },
  { name: "Custom", slug: "custom", icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z", description: "Don't see your industry? We build custom voice agents tailored to your specific business workflow." },
];

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industries[0] | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-sm uppercase tracking-widest text-cyan mb-3">
            Built for Your Industry
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold">
            Industries We Serve
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.button
              key={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelectedIndustry(industry)}
              className="card p-6 text-center cursor-pointer group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-surface-light border border-border flex items-center justify-center group-hover:border-cyan/30 group-hover:bg-cyan-dim transition-all">
                <svg
                  className="w-6 h-6 text-text-muted group-hover:text-cyan transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={industry.icon} />
                </svg>
              </div>
              <p className="text-sm font-medium text-text-muted group-hover:text-white transition-colors">
                {industry.name}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedIndustry(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-surface border border-border rounded-2xl p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="w-14 h-14 rounded-full bg-cyan-dim border border-cyan/20 flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-cyan"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={selectedIndustry.icon} />
                </svg>
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {selectedIndustry.name}
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                {selectedIndustry.description}
              </p>

              {/* Placeholder video area */}
              <div className="aspect-video rounded-lg bg-surface-light border border-border flex items-center justify-center mb-6">
                <p className="text-sm text-text-muted">
                  Industry video coming soon
                </p>
              </div>

              <a
                href={`/${selectedIndustry.slug}`}
                className="inline-flex items-center text-cyan text-sm font-medium hover:underline"
              >
                See full details
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
