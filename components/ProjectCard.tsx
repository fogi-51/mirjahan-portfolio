import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  technology: string[];
  result: string;
};

export default function ProjectCard({ project }: { project: Project; index: number }) {
  return (
    <article className="group glass-card relative overflow-hidden rounded-3xl p-6 transition-all hover:border-accent/30 hover:bg-ink-card md:p-8">
      <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-accent/[0.08] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative grid gap-8 lg:grid-cols-[280px_1fr]">
        <div className="flex flex-col justify-between gap-6 lg:border-r lg:border-white/[0.06] lg:pr-8">
          <div>
            <span className="inline-block rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-cyan">
              {project.category}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-white transition-colors group-hover:text-accent md:text-2xl">
              {project.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technology.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-400/90">
              Challenge
            </h4>
            <p className="text-sm leading-relaxed text-zinc-400">
              {project.challenge}
            </p>
          </div>
          <div>
            <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
              Solution
            </h4>
            <p className="text-sm leading-relaxed text-zinc-400">
              {project.solution}
            </p>
          </div>
          <div>
            <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Result
            </h4>
            <p className="text-sm leading-relaxed text-zinc-400">
              {project.result}
            </p>
          </div>
        </div>

        <ArrowUpRight className="absolute top-6 right-6 hidden h-5 w-5 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent md:block" />
      </div>
    </article>
  );
}
