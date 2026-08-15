"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  User,
  MessageSquare,
  Brain,
  Workflow,
  Plug,
  Database,
  Zap,
} from "lucide-react";

const steps = [
  { label: "USER", icon: User },
  { label: "AI AGENT", icon: Brain },
  { label: "n8n", icon: Workflow },
  { label: "API", icon: Plug },
  { label: "DATABASE", icon: Database },
  { label: "BUSINESS ACTION", icon: Zap },
];

export default function AutomationVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute inset-0 -z-10 rounded-[2rem] bg-radial-glow" />

      <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 [background-size:36px_36px]" />

        <div className="relative mb-6 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 glow-dot" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            Automation Pipeline
          </span>
        </div>

        <div className="relative flex flex-wrap items-center justify-center gap-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            const isFirst = i === 0;
            return (
              <div key={step.label} className="flex items-center">
                <motion.div
                  initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.18, duration: 0.4 }}
                  className={`group flex flex-col items-center gap-2 px-3 sm:px-4 ${
                    isFirst
                      ? ""
                      : isLast
                      ? ""
                      : "rounded-xl border border-white/[0.06] bg-white/[0.03]"
                  } py-3`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                      isLast
                        ? "border-accent-violet/40 bg-accent-violet/15 text-accent-violet"
                        : isFirst
                        ? "border-white/10 bg-white/[0.06] text-white"
                        : "border-accent/30 bg-accent/10 text-accent"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`text-[10px] font-semibold tracking-[0.15em] ${
                      isLast ? "text-accent-violet" : "text-zinc-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </motion.div>

                {i < steps.length - 1 && (
                  <motion.div
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.18, duration: 0.3 }}
                    className="hidden w-6 items-center sm:flex"
                    aria-hidden
                  >
                    <span className="relative flex h-px w-full items-center justify-center">
                      <span className="absolute h-px w-full bg-gradient-to-r from-accent/60 to-accent-violet/60" />
                      <span className="absolute right-0 h-1 w-1 rounded-full bg-accent glow-dot" />
                    </span>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="relative mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
              <Zap className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white">
                Workflow executed — no manual work required
              </p>
              <p className="truncate text-xs text-zinc-500">
                trigger → process → respond → log → notify
              </p>
            </div>
            <span className="ml-auto hidden shrink-0 rounded-md bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 sm:inline-block">
              Live
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
