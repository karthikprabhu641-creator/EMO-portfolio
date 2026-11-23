import Link from "next/link";
import { Project } from "@/types";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard adhering strictly to design.md:
 * - Rounded.md (8px)
 * - Soft border containment without heavy dropshadow
 * - Poetic serif title pairing with technical mono metadata
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden flex flex-col justify-between border-border transition-all duration-300 hover:border-primary/50">
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="caption-md uppercase tracking-wider text-tertiary">
            {project.category} · {project.year}
          </span>
          <div className="rounded-full p-2.5 bg-surface border border-border group-hover:border-primary/50 transition-colors">
            <ArrowUpRight className="h-4 w-4 text-on-surface group-hover:text-primary transition-colors" />
          </div>
        </div>

        <h3 className="headline-sm text-on-surface mt-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="mt-3 font-mono text-sm font-light text-on-surface/75 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-border/50">
        {project.tags.map((tag) => (
          <Chip key={tag} variant="outline" className="text-[11px] py-1 px-3">
            {tag}
          </Chip>
        ))}
      </div>

      <Link
        href="/projects"
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title}`}
      />
    </Card>
  );
}
