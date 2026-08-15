import { siteConfig } from "@/lib/data";
import { getIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const capabilities = [
  { icon: "Brain", label: "AI Development" },
  { icon: "Workflow", label: "Automation" },
  { icon: "Bot", label: "AI Agents" },
  { icon: "Workflow", label: "n8n" },
  { icon: "MessageSquare", label: "Chatbots" },
  { icon: "Layers", label: "SaaS" },
  { icon: "Globe", label: "Web Applications" },
  { icon: "Plug", label: "API Integration" },
  { icon: "Cloud", label: "Cloud / Server Deployment" },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-40 h-[400px] w-[400px] rounded-full bg-accent/[0.07] blur-[130px]" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          eyebrow="About"
          title="Building Intelligent Systems, Not Just Websites."
        />

        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
              I&apos;m {siteConfig.name}, an AI Developer and Automation
              Engineer from {siteConfig.location}. I combine AI, automation and
              software development to solve practical business problems — not
              build decorative demos. My work connects AI agents, n8n
              workflows, chatbots, APIs and custom software into systems that
              actually run parts of a business.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">
              Instead of manually copying data, chasing leads or answering the
              same questions all day, businesses use my systems to make those
              things happen automatically. Whether it&apos;s a single workflow
              or a full SaaS platform, I build from the business problem
              backward — so the result is practical, reliable and measurable.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:mt-16">
          {capabilities.map((cap, i) => {
            const Icon = getIcon(cap.icon);
            return (
              <Reveal key={cap.label} delay={i * 0.05}>
                <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-white/[0.08] bg-ink-card/50 px-4 py-6 text-center transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-ink-card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent transition-all group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(79,125,255,0.35)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">
                    {cap.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
