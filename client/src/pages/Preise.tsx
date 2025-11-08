import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";

export default function Preise() {
  const pricingModels = [
    {
      title: "Einmalzahlung (On-Premise)",
      badge: "Klassisch",
      description: "Software kaufen und dauerhaft nutzen",
      priceRange: "2.000 € - 15.000 €",
      pros: [
        "Einmalige Investition",
        "Keine monatlichen Kosten",
        "Volle Datenkontrolle vor Ort",
        "Unabhängig von Internet"
      ],
      cons: [
        "Hohe Anfangsinvestition",
        "Eigene IT-Infrastruktur nötig",
        "Updates meist kostenpflichtig",
        "Keine automatischen Backups"
      ]
    },
    {
      title: "Monatliche Miete (Cloud)",
      badge: "Beliebt",
      description: "Software als Service nutzen",
      priceRange: "30 € - 150 € pro Nutzer/Monat",
      pros: [
        "Geringe Einstiegskosten",
        "Automatische Updates inklusive",
        "Von überall nutzbar",
        "Professionelle Backups"
      ],
      cons: [
        "Laufende monatliche Kosten",
        "Internet-Abhängigkeit",
        "Daten beim Anbieter",
        "Langfristig teurer als Kauf"
      ]
    }
  ];

  const priceFactors = [
    {
      factor: "Anzahl der Nutzer",
      description: "Die meisten Anbieter berechnen pro aktivem Benutzer. Rechnen Sie mit 40-80 € pro Nutzer/Monat."
    },
    {
      factor: "Funktionsumfang",
      description: "Basis-Pakete starten ab 30 €/Monat, Komplettlösungen mit allen Modulen können 150+ € kosten."
    },
    {
      factor: "Implementierung & Schulung",
      description: "Einrichtung: 500-3.000 €. Schulungen: 500-1.500 € je nach Teilnehmerzahl."
    },
    {
      factor: "Support & Wartung",
      description: "Bei Cloud meist inklusive. On-Premise: 15-20% des Kaufpreises jährlich."
    },
    {
      factor: "Datenimport",
      description: "Migration aus Altsystem: 500-2.000 € je nach Datenmenge und Komplexität."
    },
    {
      factor: "Individuelle Anpassungen",
      description: "Spezielle Anforderungen werden meist separat berechnet (ab 1.000 €)."
    }
  ];

  const examples = [
    {
      size: "Einzelunternehmer",
      users: "1 Nutzer",
      modules: "Basis-Modul (Aufträge, Kunden, Angebote)",
      cloud: "35-60 €/Monat",
      onpremise: "2.000-4.000 € einmalig"
    },
    {
      size: "Kleiner Betrieb",
      users: "3-5 Nutzer",
      modules: "Standard (+ Zeiterfassung, Lager, Mobile)",
      cloud: "150-300 €/Monat",
      onpremise: "5.000-10.000 € einmalig"
    },
    {
      size: "Mittlerer Betrieb",
      users: "10-20 Nutzer",
      modules: "Premium (+ Wartung, CRM, Controlling)",
      cloud: "600-1.500 €/Monat",
      onpremise: "12.000-25.000 € einmalig"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="mb-4" variant="secondary" data-testid="badge-page">
                Preisübersicht
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-title">
                Was kostet SHK-Software?
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-subtitle">
                Transparente Übersicht zu Preismodellen, Kosten und versteckten Gebühren. 
                Damit Sie wissen, womit Sie rechnen müssen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-models-title">
              Preismodelle im Vergleich
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-16">
              {pricingModels.map((model, index) => (
                <Card 
                  key={index} 
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-model-${index}`}
                >
                  <CardHeader>
                    <Badge className="w-fit mb-3" data-testid={`badge-model-${index}`}>
                      {model.badge}
                    </Badge>
                    <CardTitle className="text-2xl mb-2" data-testid={`text-model-title-${index}`}>
                      {model.title}
                    </CardTitle>
                    <CardDescription className="text-base" data-testid={`text-model-desc-${index}`}>
                      {model.description}
                    </CardDescription>
                    <div className="text-3xl font-bold text-primary mt-4" data-testid={`text-model-price-${index}`}>
                      {model.priceRange}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Vorteile</h4>
                      <ul className="space-y-2">
                        {model.pros.map((pro, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Nachteile</h4>
                      <ul className="space-y-2">
                        {model.cons.map((con, cIndex) => (
                          <li key={cIndex} className="flex items-start gap-2 text-sm">
                            <Info className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-factors-title">
              Preisbestimmende Faktoren
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
              {priceFactors.map((item, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-factor-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg" data-testid={`text-factor-title-${index}`}>
                      {item.factor}
                    </CardTitle>
                    <CardDescription data-testid={`text-factor-desc-${index}`}>
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-examples-title">
              Preis-Beispiele nach Betriebsgröße
            </h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {examples.map((example, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-example-${index}`}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2" data-testid={`text-example-size-${index}`}>
                          {example.size}
                        </CardTitle>
                        <CardDescription className="space-y-1">
                          <div data-testid={`text-example-users-${index}`}>{example.users}</div>
                          <div data-testid={`text-example-modules-${index}`}>{example.modules}</div>
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-2 min-w-[200px]">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Cloud:</span>
                          <span className="font-semibold text-primary" data-testid={`text-example-cloud-${index}`}>
                            {example.cloud}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Kauf:</span>
                          <span className="font-semibold" data-testid={`text-example-onprem-${index}`}>
                            {example.onpremise}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/30">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-cta-title">
              Individuelles Angebot einholen
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Die beste Methode: Holen Sie sich mehrere Angebote ein und vergleichen Sie 
              nicht nur den Preis, sondern auch Leistungsumfang und Service.
            </p>
            <Button size="lg" data-testid="button-cta-request">
              Kostenlose Angebote vergleichen
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
