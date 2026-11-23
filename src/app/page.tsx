import { Container } from "@/components/layout/container";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { PROJECTS } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <Container size="lg">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Projects Section (Clean editorial presentation) */}
      <section className="pt-20 pb-28 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="caption-md text-tertiary uppercase tracking-widest block mb-2">
              CURATED ARCHIVE (01–02)
            </span>
            <h2 className="headline-md text-on-surface">
              Featured Work
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-on-surface hover:text-primary transition-colors"
          >
            All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 3. Statement / Manifesto Section */}
      <section className="py-24 border-t border-border text-center flex flex-col items-center">
        <Chip variant="outline" className="mb-6 caption-md uppercase tracking-widest">
          PHILOSOPHY
        </Chip>

        <h3 className="headline-md text-on-surface max-w-3xl mx-auto font-light leading-snug">
          “Sparse center-weighted space, making the experience feel confident rather than busy.”
        </h3>

        <p className="mt-8 font-mono text-sm md:text-base text-on-surface/70 max-w-xl mx-auto leading-relaxed">
          Rejecting artificial depth, skeuomorphism, and visual noise in favor of
          structural clarity, deliberate typography, and tactile pill geometry.
        </p>

        <div className="mt-10">
          <Link href="/about">
            <Button variant="tertiary" className="font-mono text-sm tracking-wide">
              READ PROFILE & ARCHITECTURE →
            </Button>
          </Link>
        </div>
      </section>

      {/* 4. Center-weighted CTA Section */}
      <section className="py-24 border-t border-border text-center">
        <span className="caption-md text-tertiary uppercase tracking-widest block mb-4">
          NEXT STEP
        </span>
        <h2 className="headline-lg text-on-surface mb-8 font-light">
          Have an ambitious project?
        </h2>
        <div className="flex justify-center">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              INITIATE CONTACT
            </Button>
          </Link>
        </div>
      </section>
    </Container>
  );
}
