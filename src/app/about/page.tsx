import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";

export default function AboutPage() {
  const principles = [
    {
      title: "Negative Space as Presence",
      description:
        "The layout uses generous vertical intervals (xs through xl) to give thoughts room to breathe. Restraint signals confidence.",
    },
    {
      title: "Editorial & Technical Harmony",
      description:
        "Headings use Emotion Serif at light weights for a refined presence, while body copy speaks in precise IBM Plex Mono cadence.",
    },
    {
      title: "Tactile Flatness",
      description:
        "No heavy artificial drop shadows. Visual hierarchy is established through contrast, scale, and rounded pill geometry.",
    },
  ];

  const stack = [
    "Next.js App Router",
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Editorial Design System",
    "Mono Typography",
  ];

  return (
    <Container size="md" className="py-20 md:py-28">
      {/* Profile Header */}
      <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
        <Chip variant="outline" className="mb-6 caption-md uppercase tracking-widest">
          FOUNDATIONS & MANIFESTO
        </Chip>
        <h1 className="headline-lg text-on-surface font-light">
          Disciplined Rigor.
        </h1>
        <p className="mt-6 font-mono text-[16px] md:text-[18px] font-light text-on-surface/75 leading-relaxed">
          Emotion Agency is rooted in clarity, editorial typography, and disciplined
          digital engineering. Building tools and interfaces that prioritize human
          attention and craft.
        </p>
      </div>

      {/* Core Principles */}
      <div className="space-y-6 mb-16">
        {principles.map((p, idx) => (
          <Card key={idx} className="p-8 border-border">
            <span className="caption-md text-tertiary uppercase tracking-widest">
              PRINCIPLE 0{idx + 1}
            </span>
            <h3 className="headline-sm text-on-surface mt-1 mb-3">
              {p.title}
            </h3>
            <p className="font-mono text-sm font-light text-on-surface/75 leading-relaxed">
              {p.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Technical Stack */}
      <Card className="p-8 text-center border-border">
        <span className="caption-md text-tertiary uppercase tracking-widest block mb-4">
          TECHNICAL INFRASTRUCTURE
        </span>
        <div className="flex flex-wrap justify-center gap-2.5">
          {stack.map((item) => (
            <Chip key={item} variant="surface">
              {item}
            </Chip>
          ))}
        </div>
      </Card>
    </Container>
  );
}
