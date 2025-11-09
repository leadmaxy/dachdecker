import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { routes } from "@/lib/navigation";
import heroImage from "@assets/generated_images/Tradesman_with_digital_tools_49e2ab05.png";

export default function EnhancedHero() {
  const stats = [
    { icon: CheckCircle2, label: "50+ Software-Lösungen" },
    { icon: Shield, label: "DSGVO-konform" },
    { icon: TrendingUp, label: "Unabhängig" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-background to-card/30 py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <Badge className="mb-6" variant="secondary" data-testid="badge-hero-year">
              Aktualisiert 2025
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
              Die beste SHK-Software für Ihr Handwerksunternehmen
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="text-hero-description">
              Vergleichen Sie professionelle Softwarelösungen für Sanitär, Heizung und Klima. 
              Mit Cloud, mobiler App und allen wichtigen Schnittstellen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" data-testid="button-hero-compare">
                <Link href={routes.vergleich}>
                  Software vergleichen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-hero-consult">
                <Link href={routes.kontakt}>
                  Kostenlos beraten lassen
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8">
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

          <div className="relative lg:block hidden">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={heroImage} 
                alt="Professioneller Handwerker nutzt digitale SHK-Software"
                className="w-full h-auto rounded-lg"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
