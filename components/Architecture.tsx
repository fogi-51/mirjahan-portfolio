"use client";

import { motion, useReducedMotion } from "framer-motion";
import { architectureSteps } from "@/lib/data";
import { getIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Architecture() {
  const reduce = useReducedMotion();

  return (
    <section id="architecture" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-accent-violet/[0.08] blur-[140px]" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          eyebrow="How It Works"
          title="The Automation Architecture"
          description="This is how an end-to-end automated system is wired together — from the customer's first message to the final automated business action."
        />

        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 hidden lg:block">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
              </div>

              <div className="space-y-4 lg:space-y-0">
                {architectureSteps.map((step, i) => {
                  const Icon = getIcon(step.icon);
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div
                      key={step.label}
                      initial={reduce ? false : { opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="relative flex items-center justify-center lg:justify-start"
                    >
                      <div
                        className={`flex w-full items-center gap-4 lg:w-[calc(50%-2.5rem)] lg:gap-6 ${
                          isLeft ? "" : "lg:ml-auto lg:flex-row-reverse"
                        }`}
                      >
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent shadow-[0_0_20px_rgba(79,125,255,0.2)] lg:h-14 lg:w-14`}
                        >
                          <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                        </div>
                        <div className="flex-1 rounded-2xl border border-white/[0.08] bg-ink-card/70 px-5 py-4 backdrop-blur-xl">
                          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                            Step {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="mt-0.5 block font-display text-base font-semibold text-white lg:text-lg">
                            {step.label}
                          </span>
                        </div>
                      </div>

                      <div className="pointer-events-none absolute left-1/2 top-full hidden h-4 w-px -translate-x-1/2 bg-accent/40 lg:block" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
