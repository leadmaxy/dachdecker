import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import { Link } from "wouter";
import { routes } from "@/lib/navigation";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showTrustBadge?: boolean;
}

export default function CTASection({
  title,
  description,
  primaryButtonText = "Jetzt vergleichen",
  secondaryButtonText = "Beratung anfordern",
  showTrustBadge = true,
}: CTASectionProps) {
  return (
    <section className="py-16 bg-card" data-testid="section-cta">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-title">
          {title}
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button asChild size="lg" data-testid="button-cta-primary">
            <Link href={routes.vergleich}>
              {primaryButtonText}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" data-testid="button-cta-secondary">
            <Link href={routes.kontakt}>
              {secondaryButtonText}
            </Link>
          </Button>
        </div>

        {showTrustBadge && (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground" data-testid="badge-trust">
            <Shield className="h-4 w-4" />
            <span>DSGVO-konform • Kostenlos • Unverbindlich</span>
          </div>
        )}
      </div>
    </section>
  );
}
