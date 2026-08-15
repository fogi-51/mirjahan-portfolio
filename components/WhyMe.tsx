import { whyMe } from "@/lib/data";
import { getIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyMe() {
  return (
    <section id="why" className="section-pad relative bg-ink-soft/50">
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="Technology Is Easy. Solving the Right Problem Isn't."
          description="Anyone can wire up tools. The real value is understanding the business problem, then designing the right system around it."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyMe.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.07}>
                <div className="group h-full rounded-2xl border border-white/[0.08] bg-ink-card/60 p-6 transition-all hover:-translate-y-1 hover:border-accent/35">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent transition-all group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(79,125,255,0.3)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
