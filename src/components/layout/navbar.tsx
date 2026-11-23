import Link from "next/link";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { Container } from "./container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-neutral/80 backdrop-blur-md">
      <Container size="full">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
          >
            {SITE_CONFIG.name}
          </Link>

          <nav className="flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs uppercase tracking-wider text-on-surface/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
