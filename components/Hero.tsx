"use client";

import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import AutomationVisual from "./AutomationVisual";

export default function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.21, 0.47, 0.32, 0.98] as const;

  return (
    <section id="home" className="relative overflow-hidden pt-[72px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.14] blur-[140px]" />
        <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-accent-violet/[0.1] blur-[120px]" />
        <div className="absolute top-1/2 -right-40 h-[420px] w-[420px] rounded-full bg-accent-cyan/[0.08] blur-[120px]" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-16 py-20 md:py-28 lg:grid-cols-2 lg:gap-12">
          <div className="relative z-10">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {siteConfig.badge}
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-6xl"
            >
              I Build{" "}
              <span className="text-gradient">AI-Powered Systems</span> That
              Automate{" "}
              <span className="relative inline-block">
                Real Business.
              </span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg"
            >
              {siteConfig.subheadline}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-violet px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(79,125,255,0.4)] transition-all hover:shadow-[0_0_48px_rgba(79,125,255,0.6)]"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/[0.07]"
              >
                View My Work
              </a>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease }}
              className="mt-8 flex items-center gap-2 text-sm text-zinc-500"
            >
              <MapPin className="h-4 w-4 text-accent" />
              <span>
                {siteConfig.location} •{" "}
                <span className="text-zinc-400">Available for Global Projects</span>
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="relative"
          >
            <AutomationVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
