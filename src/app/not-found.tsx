import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container size="sm" className="py-32 text-center">
      <span className="font-mono text-sm uppercase tracking-widest text-tertiary">
        404 ERROR
      </span>
      <h1 className="mt-4 font-serif text-6xl font-light text-on-surface">
        Page Not Found
      </h1>
      <p className="mt-4 font-mono text-sm text-on-surface/70">
        The requested document or page does not exist in this archive.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button variant="primary" size="md">
            RETURN HOME
          </Button>
        </Link>
      </div>
    </Container>
  );
}
