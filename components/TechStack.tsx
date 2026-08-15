import { skillGroups } from "@/lib/data";
import { getIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TechStack() {
  return (
    <section id="skills" className="section-pad relative bg-ink-soft/50">
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Skills & Technology"
          title="The Stack Behind The Systems"
          description="The technologies I use daily to design, build and deploy AI-powered systems. Tools change — the focus on solving business problems doesn't."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = getIcon(group.icon);
            return (
              <Reveal key={group.category} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-white/[0.08] bg-ink-card/60 p-6 transition-all hover:-translate-y-1 hover:border-accent/30">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-accent/40 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
