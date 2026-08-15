"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="section-pad relative bg-ink-soft/50">
      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan glow-dot" />
                FAQ
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-2xl border transition-colors ${
                      isOpen
                        ? "border-accent/30 bg-ink-card/80"
                        : "border-white/[0.08] bg-ink-card/50 hover:border-white/20"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-semibold text-white md:text-base">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-accent" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
