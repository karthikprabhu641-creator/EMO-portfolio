import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "mono-syntax-system",
    title: "Mono Syntax Studio",
    subtitle: "Code Intelligence & Visual Language",
    description:
      "A developer tooling interface balancing editorial typography with strict monochromatic data grids.",
    category: "Design System",
    year: "2026",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "2",
    slug: "ethereal-canvas",
    title: "Ethereal Kinetic Canvas",
    subtitle: "Interactive Web Experience",
    description:
      "Generative motion graphics platform exploring tactile user physics and lightweight web rendering.",
    category: "Interactive",
    year: "2025",
    tags: ["React", "WebGL", "Framer Motion"],
    featured: true,
  },
  {
    id: "3",
    slug: "editorial-archive",
    title: "Curated Journal Archive",
    subtitle: "Digital Publishing Architecture",
    description:
      "Minimalist content platform engineered for long-form reading comfort and high-fidelity typography.",
    category: "Editorial",
    year: "2025",
    tags: ["Next.js", "Contentlayer", "Typography"],
    featured: false,
  },
];
