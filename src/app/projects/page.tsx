import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/portfolio/project-card";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Container size="lg" className="py-20">
      <div className="max-w-2xl mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-tertiary">
          INDEX OF WORK
        </span>
        <h1 className="mt-2 font-serif text-5xl md:text-6xl font-light text-on-surface">
          Selected Projects
        </h1>
        <p className="mt-4 font-mono text-sm text-on-surface/70 leading-relaxed">
          A comprehensive collection of digital products, editorial platforms,
          and experimental user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  );
}
