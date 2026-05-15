"use client";

import { motion } from "framer-motion";
import BlueprintAnimation from "./BlueprintAnimation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,212,255,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(0,212,255,0.03)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              Every Missed Call Is a Job You&apos;ll Never Know You{" "}
              <span className="text-cyan">Lost</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed max-w-xl"
            >
              AI that answers your phone, qualifies the lead, and books the job — before they hang up.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-sm text-text-muted/60"
            >
              Trusted by 50+ home service businesses
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a href="#cta" className="inline-flex items-center justify-center px-8 py-3.5 bg-orange text-white font-medium rounded-lg hover:bg-orange/90 transition-colors text-base">Get Your Free Demo</a>
              <a href="#video" className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-text-muted rounded-lg hover:border-border-light hover:text-white transition-colors text-base">See It In Action</a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <BlueprintAnimation />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center text-sm text-text-muted/50 tracking-wide"
        >
          20 simultaneous calls &middot; 24/7/365 &middot; Zero missed opportunities
        </motion.div>
      </div>
    </section>
  );
}
