import { services } from "@/lib/data";
import { getIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const serviceIcons = [
  "Workflow",
  "Brain",
  "Zap",
  "MessageSquare",
  "Layers",
  "Code2",
  "Plug",
  "Settings",
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative bg-ink-soft/50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-accent-violet/[0.07] blur-[130px]" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Services"
          title="What I Build For Businesses"
          description="Practical AI, automation and software systems designed around real business problems — built to work, not to impress."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = getIcon(serviceIcons[i] ?? "Settings");
            return (
              <Reveal key={service.title} delay={(i % 4) * 0.07}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-card/60 p-6 transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:bg-ink-card">
                  <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/[0.12] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent transition-all group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(79,125,255,0.35)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {service.description}
                    </p>
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
