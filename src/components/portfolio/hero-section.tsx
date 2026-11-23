import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";

export function HeroSection() {
  return (
    <section className="pt-20 pb-28 md:pt-32 md:pb-40 text-center flex flex-col items-center">
      {/* Short Lead-in / Chip */}
      <div className="mb-8">
        <Chip variant="surface" className="tracking-[0.08em] uppercase caption-md text-on-surface/80">
          Karthik · Creative Development & Systems
        </Chip>
      </div>

      {/* Hero Serif Headline (headline-lg in design.md) */}
      <h1 className="headline-lg text-on-surface max-w-4xl mx-auto font-light">
        Airy, editorial & quietly refined.
      </h1>

      {/* Body Copy (body-lg in design.md) */}
      <p className="mt-8 font-mono text-[16px] md:text-[18.6667px] font-light md:font-normal leading-[26px] md:leading-[30px] text-on-surface/75 max-w-2xl mx-auto">
        Balancing poetic serif headlines with technical mono cadence. Focused on
        digital craftsmanship, tactile interfaces, and restrained design systems.
      </p>

      {/* Button CTA Group (primary commitment & secondary entry) */}
      <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <Link href="/projects">
          <Button variant="primary" size="lg">
            EXPLORE WORKS
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="secondary" size="lg">
            START DIALOGUE
          </Button>
        </Link>
      </div>
    </section>
  );
}
