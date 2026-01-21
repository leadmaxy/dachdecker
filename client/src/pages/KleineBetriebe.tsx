import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Euro, 
  Zap, 
  Clock,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

export default function KleineBetriebe() {
  const challenges = [
    {
      challenge: "Begrenztes Budget",
      solution: "Cloud-Lösungen mit monatlicher Zahlung statt hoher Anfangsinvestition. Preise ab 30 €/Monat für Einzelunternehmer."
    },
    {
      challenge: "Wenig Zeit für Einarbeitung",
      solution: "Intuitive Benutzeroberflächen, die auch ohne IT-Kenntnisse schnell bedienbar sind. Online-Tutorials und Support inklusive."
    },
    {
      challenge: "Keine IT-Abteilung",
      solution: "Cloud-Software braucht keinen eigenen Server und keine IT-Betreuung. Alles läuft im Browser oder in der App."
    },
    {
      challenge: "Überforderung durch zu viele Funktionen",
      solution: "Skalierbare Lösungen, die mit Ihrem Betrieb mitwachsen. Starten Sie klein und buchen Sie Funktionen bei Bedarf hinzu."
    }
  ];

  const essentials = [
    {
      feature: "Auftragsabwicklung",
      description: "Angebote, Auftragsbestätigungen und Rechnungen erstellen",
      priority: "Muss"
    },
    {
      feature: "Kundenverwaltung",
      description: "Kontaktdaten, Ansprechpartner und Auftragshistorie",
      priority: "Muss"
    },
    {
      feature: "Zeiterfassung",
      description: "Arbeitszeiten projektbezogen erfassen",
      priority: "Sollte"
    },
    {
      feature: "Mobile App",
      description: "Aufträge und Zeiten von unterwegs erfassen",
      priority: "Sollte"
    },
    {
      feature: "DATEV-Schnittstelle",
      description: "Automatischer Export für Steuerberater",
      priority: "Sollte"
    },
    {
      feature: "Lagerverwaltung",
      description: "Materialbestand und Fahrzeuglager",
      priority: "Kann"
    }
  ];

  const recommendations = [
    {
      betriebsgroesse: "1 Person (Einzelunternehmer)",
      empfehlung: "Basis Cloud-Lösung",
      preis: "30-60 €/Monat",
      funktionen: "Auftragsabwicklung, Kunden, einfache Zeiterfassung",
      beispiele: ["Dachdecker-Software Basis-Pakete", "Dach-Komplett Starter"]
    },
    {
      betriebsgroesse: "2-5 Mitarbeiter",
      empfehlung: "Standard Cloud-Lösung",
      preis: "100-250 €/Monat",
      funktionen: "Aufträge, Kunden, Zeiterfassung, Mobile App, DATEV",
      beispiele: ["Dach-Komplett Standard", "Handwerker-Software Professional"]
    },
    {
      betriebsgroesse: "6-10 Mitarbeiter",
      empfehlung: "Professional Cloud-Lösung",
      preis: "300-600 €/Monat",
      funktionen: "Alle Standard-Features + Lager, Wartung, Controlling",
      beispiele: ["Dach-Komplett Plus", "Enterprise-Lösungen für Handwerk"]
    }
  ];

  const tips = [
    {
      icon: Euro,
      title: "Kostenlosen Test nutzen",
      description: "Nutzen Sie kostenlose Testphasen (meist 14-30 Tage), um die Software in Ruhe auszuprobieren."
    },
    {
      icon: Users,
      title: "Mitarbeiter einbeziehen",
      description: "Lassen Sie Ihre Teams bei der Auswahl mitreden – sie müssen später täglich damit arbeiten."
    },
    {
      icon: Zap,
      title: "Klein starten",
      description: "Beginnen Sie mit den wichtigsten Funktionen und erweitern Sie später bei Bedarf."
    },
    {
      icon: Clock,
      title: "Zeit für Umstellung einplanen",
      description: "Rechnen Sie 2-4 Wochen für Einrichtung und Einarbeitung ein. Parallelbetrieb ist anfangs sinnvoll."
    },
    {
      icon: CheckCircle2,
      title: "Support-Qualität prüfen",
      description: "Guter Support ist für kleine Betriebe wichtiger als viele Funktionen. Testen Sie die Erreichbarkeit."
    },
    {
      icon: TrendingUp,
      title: "Skalierbarkeit beachten",
      description: "Wählen Sie eine Lösung, die mitwachsen kann, wenn Sie expandieren möchten."
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
                Für kleine Betriebe
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-title">
                Dachdecker-Software für kleine Betriebe
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-subtitle">
                Als kleiner Betrieb brauchen Sie eine Lösung, die einfach ist, wenig kostet 
                und trotzdem alle wichtigen Funktionen bietet. Hier erfahren Sie, worauf es ankommt.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-challenges-title">
              Herausforderungen kleiner Betriebe – und die Lösungen
            </h2>
            
            <div className="space-y-6 max-w-4xl mx-auto mb-16">
              {challenges.map((item, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-challenge-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg mb-3" data-testid={`text-challenge-title-${index}`}>
                      Herausforderung: {item.challenge}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed" data-testid={`text-challenge-solution-${index}`}>
                      <strong className="text-foreground">Lösung:</strong> {item.solution}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-essentials-title">
              Diese Funktionen sind wirklich wichtig
            </h2>
            
            <div className="max-w-4xl mx-auto mb-16">
              <div className="space-y-4">
                {essentials.map((item, index) => (
                  <Card 
                    key={index}
                    className="hover-elevate active-elevate-2 transition-all"
                    data-testid={`card-essential-${index}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-lg" data-testid={`text-essential-title-${index}`}>
                              {item.feature}
                            </CardTitle>
                            <Badge 
                              variant={item.priority === "Muss" ? "default" : item.priority === "Sollte" ? "secondary" : "outline"}
                              data-testid={`badge-essential-${index}`}
                            >
                              {item.priority}
                            </Badge>
                          </div>
                          <CardDescription data-testid={`text-essential-desc-${index}`}>
                            {item.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-recommendations-title">
              Empfehlungen nach Betriebsgröße
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3 mb-16">
              {recommendations.map((rec, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-recommendation-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg mb-4" data-testid={`text-rec-size-${index}`}>
                      {rec.betriebsgroesse}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Empfehlung</div>
                      <div className="font-semibold" data-testid={`text-rec-type-${index}`}>
                        {rec.empfehlung}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Preis</div>
                      <div className="text-xl font-bold text-primary" data-testid={`text-rec-price-${index}`}>
                        {rec.preis}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Funktionen</div>
                      <div className="text-sm" data-testid={`text-rec-functions-${index}`}>
                        {rec.funktionen}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-tips-title">
              Praktische Tipps für die Auswahl
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tips.map((tip, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-tip-${index}`}
                >
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                      <tip.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg mb-2" data-testid={`text-tip-title-${index}`}>
                      {tip.title}
                    </CardTitle>
                    <CardDescription data-testid={`text-tip-desc-${index}`}>
                      {tip.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/30">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <div className="mb-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-6" data-testid="text-cta-title">
                Die richtige Software für Ihren kleinen Betrieb finden
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vergleichen Sie Lösungen, die speziell für kleine Dachdeckerbetriebe entwickelt wurden. 
                Einfach, günstig und trotzdem professionell.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" data-testid="button-cta-compare">
                Software vergleichen
              </Button>
              <Button size="lg" variant="outline" data-testid="button-cta-consult">
                Kostenlos beraten lassen
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
