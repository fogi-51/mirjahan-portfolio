import { processSteps } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Process() {
  return (
    <section id="process" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 -left-40 h-[420px] w-[420px] rounded-full bg-accent/[0.07] blur-[130px]" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Process"
          title="From Idea To Working System"
          description="A clear, structured process so you always know what's happening and what comes next."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="pointer-events-none absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-accent/50 via-accent-violet/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={step.number} delay={i * 0.06}>
                  <div
                    className={`relative flex gap-6 sm:w-[calc(50%-2rem)] sm:items-center ${
                      isLeft
                        ? "sm:mr-auto sm:flex-row"
                        : "sm:ml-auto sm:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-ink shadow-[0_0_24px_rgba(79,125,255,0.25)] ${
                        isLeft ? "" : "sm:order-none"
                      }`}
                    >
                      <span className="font-display text-base font-bold text-accent">
                        {step.number}
                      </span>
                    </div>
                    <div className="glass-card flex-1 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-accent/30">
                      <h3 className="font-display text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
