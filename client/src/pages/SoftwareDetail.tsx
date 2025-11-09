import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, ExternalLink } from "lucide-react";
import { routes } from "@/lib/navigation";

// Static software data - in a real app, this would come from an API or database
const softwareDatabase = {
  labelwin: {
    name: "Labelwin",
    provider: "M-SOFT",
    description: "Umfassende Lösung für SHK-Betriebe mit starkem Fokus auf Angebotswesen und Auftragsbearbeitung.",
    longDescription: "Labelwin ist eine professionelle Handwerkersoftware, die speziell für die Anforderungen von SHK-Betrieben entwickelt wurde. Die Software bietet eine vollständige Lösung von der Angebotserstellung über die Auftragsabwicklung bis zur Rechnungsstellung.",
    priceRange: "ab 999 EUR",
    features: [
      "Mobile Zeiterfassung für Monteure",
      "DATEV-Schnittstelle für nahtlose Buchhaltungsintegration",
      "Wartungsmodul mit automatischer Erinnerung",
      "Cloud-fähig für Zugriff von überall",
      "Digitale Auftragsplanung und -verwaltung",
      "Materialverwaltung und Lagerhaltung",
      "Angebotserstellung mit Vorlagen",
      "Rechnungsstellung und Mahnwesen"
    ],
    badges: ["Cloud", "Mobile", "DSGVO"],
    recommended: true,
    website: "https://www.m-soft.de",
  },
  pds: {
    name: "PDS",
    provider: "PDS GmbH",
    description: "Etablierte Software mit Fokus auf Integration und Schnittstellen zu anderen Systemen.",
    longDescription: "PDS bietet eine umfassende Handwerkersoftware mit hervorragenden Integrationsmöglichkeiten. Die Software lässt sich nahtlos in bestehende IT-Infrastrukturen einbinden und kommuniziert mit allen wichtigen Branchensystemen.",
    priceRange: "ab 39 EUR/Monat",
    features: [
      "DATANORM-Schnittstelle für Artikelstammdaten",
      "IDS-kompatibel für Großhändleranbindung",
      "Professionelles Angebotswesen",
      "Projektmanagement-Funktionen",
      "Cloud-basierte Lösung",
      "Multi-User-Zugriff",
      "Dokumentenmanagement",
      "Kundenverwaltung (CRM)"
    ],
    badges: ["Cloud", "Integration"],
    recommended: false,
    website: "https://www.pds.de",
  },
  heizmobil: {
    name: "HeizMobil",
    provider: "SoftTech",
    description: "Spezialisiert auf mobile Lösungen für Servicetechniker im Außendienst.",
    longDescription: "HeizMobil ist die ideale Lösung für SHK-Betriebe, die viel im Außendienst tätig sind. Die App funktioniert auch offline und synchronisiert Daten automatisch, sobald eine Internetverbindung verfügbar ist.",
    priceRange: "ab 29 EUR/Monat",
    features: [
      "Offline-Nutzung auch ohne Internetverbindung",
      "GPS-Tracking für Einsatzplanung",
      "Foto-Dokumentation direkt im Auftrag",
      "Digitale Unterschriften auf dem Tablet",
      "Zeiterfassung vor Ort",
      "Serviceberichte erstellen",
      "Ersatzteilbestellung unterwegs",
      "Push-Benachrichtigungen für neue Aufträge"
    ],
    badges: ["Mobile", "Service"],
    recommended: false,
    website: "https://www.heizmobil.de",
  },
};

type SoftwareSlug = keyof typeof softwareDatabase;

export default function SoftwareDetail() {
  const params = useParams();
  const slug = params.slug as SoftwareSlug;
  
  const software = softwareDatabase[slug];

  if (!software) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="container mx-auto max-w-2xl px-4 text-center">
            <h1 className="text-4xl font-bold mb-4" data-testid="text-not-found">
              Software nicht gefunden
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Die gewünschte Software-Lösung konnte nicht gefunden werden.
            </p>
            <Button asChild data-testid="button-back-home">
              <Link href={routes.home}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Startseite
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-8 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto max-w-5xl px-4">
            <Button asChild variant="ghost" className="mb-6" data-testid="button-back">
              <Link href={routes.home}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Übersicht
              </Link>
            </Button>

            <div className="mb-8">
              {software.recommended && (
                <Badge className="mb-4" data-testid="badge-recommended">
                  Empfohlen
                </Badge>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-software-name">
                {software.name}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4" data-testid="text-provider">
                von {software.provider}
              </p>

              {software.badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {software.badges.map((badge, index) => (
                    <Badge key={index} variant="secondary" data-testid={`badge-feature-${index}`}>
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Über {software.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-description">
                      {software.longDescription}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Funktionen & Features</CardTitle>
                    <CardDescription>
                      Alle wichtigen Funktionen im Überblick
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {software.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-2"
                          data-testid={`feature-${index}`}
                        >
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Preise</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Preis</div>
                      <div className="text-2xl font-bold" data-testid="text-price">
                        {software.priceRange}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button asChild className="w-full" data-testid="button-visit-website">
                        <a href={software.website} target="_blank" rel="noopener noreferrer">
                          Zur Anbieter-Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      
                      <Button asChild variant="outline" className="w-full" data-testid="button-contact">
                        <Link href={routes.kontakt}>
                          Beratung anfragen
                        </Link>
                      </Button>
                    </div>

                    <div className="text-xs text-muted-foreground pt-4 border-t">
                      <p>Kostenlose und unverbindliche Beratung zu allen Softwarelösungen</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Mehr erfahren</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button asChild variant="outline" className="w-full justify-start" data-testid="button-compare-all">
                      <Link href={routes.vergleich}>
                        Alle Software vergleichen
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start" data-testid="button-funktionen">
                      <Link href={routes.funktionen}>
                        Funktionen-Übersicht
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start" data-testid="button-preise">
                      <Link href={routes.preise}>
                        Preise vergleichen
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
