import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";

export default function ContactPage() {
  return (
    <Container size="sm" className="py-20 md:py-28">
      <div className="text-center mb-12 flex flex-col items-center">
        <Chip variant="outline" className="mb-6 caption-md uppercase tracking-widest">
          COMMUNICATION
        </Chip>
        <h1 className="headline-lg text-on-surface font-light">
          Initiate Dialogue
        </h1>
        <p className="mt-4 font-mono text-sm md:text-base font-light text-on-surface/75 max-w-md">
          Available for selected consulting, design systems, and creative engineering commissions.
        </p>
      </div>

      <Card className="p-8 md:p-12 border-border">
        <form className="space-y-6">
          <div>
            <label className="block caption-md uppercase tracking-wider text-on-surface/80 mb-2">
              Full Name
            </label>
            <Input placeholder="Karthik or Studio Name" required />
          </div>

          <div>
            <label className="block caption-md uppercase tracking-wider text-on-surface/80 mb-2">
              Email Address
            </label>
            <Input type="email" placeholder="karthik@example.com" required />
          </div>

          <div>
            <label className="block caption-md uppercase tracking-wider text-on-surface/80 mb-2">
              Project Brief
            </label>
            <textarea
              rows={4}
              placeholder="Outline your timeline, scope, and objectives..."
              className="w-full bg-surface text-on-surface font-mono text-[16px] font-light leading-[24px] rounded-2xl px-6 py-4 border border-border placeholder:text-tertiary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
              required
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            SEND INQUIRY
          </Button>
        </form>
      </Card>
    </Container>
  );
}
