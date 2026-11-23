import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "./container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-32 py-16 bg-neutral">
      <Container size="full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-mono text-xs text-on-surface/60">
            © {currentYear} {SITE_CONFIG.name}. Built with Next.js & React.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-on-surface/70 hover:text-primary transition-colors"
            >
              GITHUB
            </Link>
            <Link
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-on-surface/70 hover:text-primary transition-colors"
            >
              LINKEDIN
            </Link>
            <Link
              href={`mailto:${SITE_CONFIG.links.email}`}
              className="font-mono text-xs text-on-surface/70 hover:text-primary transition-colors"
            >
              EMAIL
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
