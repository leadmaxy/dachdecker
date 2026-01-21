import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, TrendingUp } from "lucide-react";

export default function Hero() {
  const stats = [
    { icon: CheckCircle2, label: "40+ Dachdecker-Lösungen" },
    { icon: Shield, label: "DSGVO-konform & sicher" },
    { icon: TrendingUp, label: "Branchenfokus Dach & Fassade" },
  ];

  return (
    <section className="relative bg-background py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-6 fade-up" variant="secondary" data-testid="badge-hero-year">
            Marktcheck 2026
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 fade-up fade-up-delay-1" data-testid="text-hero-title">
            Die beste Dachdecker-Software für Ihren Betrieb
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 fade-up fade-up-delay-2" data-testid="text-hero-description">
            Vergleichen Sie Lösungen für Dach, Fassade und PV. Mit digitalem Aufmaß,
            Baustellendoku, Kalkulation und mobilen Apps für Ihre Teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-up fade-up-delay-3">
            <Button size="lg" data-testid="button-hero-compare">
              Software vergleichen
            </Button>
            <Button size="lg" variant="outline" data-testid="button-hero-consult">
              Kostenlose Beratung
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 fade-up fade-up-delay-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm"
                data-testid={`stat-${index}`}
              >
                <stat.icon className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
