import { problems, solutions } from "@/lib/data";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProblemSolution() {
  return (
    <section id="transformation" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[150px]" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          eyebrow="The Transformation"
          title="From Manual Chaos To Intelligent Automation"
          description="The problems below cost businesses hours every single week. The same operations can run automatically with AI and modern automation."
        />

        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <XCircle className="h-4 w-4" />
                </span>
                The Problems
              </h3>
              <ul className="space-y-3">
                {problems.map((problem) => (
                  <li
                    key={problem}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3 text-sm text-zinc-400"
                  >
                    <XCircle className="h-4 w-4 shrink-0 text-red-400/70" />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex items-center justify-center py-2 lg:flex-col lg:gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-gradient-to-br from-accent/20 to-accent-violet/20 shadow-[0_0_30px_rgba(79,125,255,0.3)]">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 flex flex-col items-start lg:ml-0 lg:items-center">
                <span className="font-display text-base font-bold tracking-wide text-white">
                  AI + AUTOMATION
                </span>
                <span className="text-xs text-zinc-500">replaces manual work</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="relative rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.07] to-accent-violet/[0.07] p-6 backdrop-blur-xl md:p-8">
              <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                The Solutions
              </h3>
              <ul className="space-y-3">
                {solutions.map((solution) => (
                  <li
                    key={solution}
                    className="flex items-center gap-3 rounded-xl border border-accent/15 bg-white/[0.03] px-4 py-3 text-sm font-medium text-zinc-200"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
