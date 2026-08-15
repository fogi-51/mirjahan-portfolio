import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative bg-ink-soft/50">
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="A snapshot of the AI, automation and software systems I build. Every project follows the same principle: solve the real business problem, cleanly."
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
