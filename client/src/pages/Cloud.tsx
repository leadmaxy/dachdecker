import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Cloud as CloudIcon, Server, Shield } from "lucide-react";

export default function Cloud() {
  const advantages = [
    {
      title: "Von überall arbeiten",
      description: "Greifen Sie vom Büro, Baustelle oder Zuhause auf Ihre Daten zu – Sie brauchen nur Internet."
    },
    {
      title: "Automatische Updates",
      description: "Neue Funktionen und Sicherheitsupdates werden automatisch eingespielt, ohne Ihre Arbeit zu unterbrechen."
    },
    {
      title: "Professionelle Backups",
      description: "Ihre Daten werden automatisch gesichert und sind jederzeit wiederherstellbar."
    },
    {
      title: "Keine IT-Verwaltung",
      description: "Kein eigener Server nötig, keine Wartung, keine Softwareinstallation – alles läuft im Browser."
    },
    {
      title: "Skalierbar",
      description: "Nutzer können flexibel hinzugefügt oder entfernt werden, je nach aktuellem Bedarf."
    },
    {
      title: "Geringe Einstiegskosten",
      description: "Monatliche Zahlung statt hoher Anfangsinvestition – ideal für den Cashflow."
    }
  ];

  const concerns = [
    {
      concern: "Datenschutz & DSGVO",
      answer: "Seriöse Anbieter hosten ausschließlich in deutschen oder EU-Rechenzentren und erfüllen alle DSGVO-Anforderungen. Achten Sie auf Zertifizierungen wie ISO 27001."
    },
    {
      concern: "Internetausfall",
      answer: "Viele Cloud-Lösungen bieten einen Offline-Modus in der mobilen App. Zeiterfassung und Auftragsbearbeitung funktionieren auch ohne Internet, die Synchronisation erfolgt später."
    },
    {
      concern: "Datensicherheit",
      answer: "Verschlüsselte Übertragung (SSL/TLS), verschlüsselte Speicherung und regelmäßige Backups sind Standard. Ihre Daten sind oft sicherer als auf dem eigenen PC."
    },
    {
      concern: "Langfristige Kosten",
      answer: "Cloud-Software ist auf Dauer teurer als ein einmaliger Kauf. Dafür entfallen Kosten für Server, Updates, IT-Betreuung und haben Sie immer die neueste Version."
    },
    {
      concern: "Anbieterwechsel",
      answer: "Achten Sie darauf, dass Ihre Daten jederzeit exportierbar sind (z.B. als CSV oder Excel). Die meisten Anbieter bieten beim Wechsel Unterstützung an."
    }
  ];

  const comparison = {
    cloud: {
      pros: [
        "Geringe Anfangsinvestition",
        "Automatische Updates",
        "Von überall nutzbar",
        "Keine eigene IT nötig",
        "Professionelle Backups",
        "Schnell einsatzbereit"
      ],
      cons: [
        "Monatliche Kosten",
        "Internet erforderlich",
        "Daten beim Anbieter",
        "Langfristig teurer"
      ]
    },
    onpremise: {
      pros: [
        "Einmalige Investition",
        "Volle Datenkontrolle",
        "Unabhängig vom Internet",
        "Langfristig günstiger"
      ],
      cons: [
        "Hohe Anfangskosten",
        "Eigener Server nötig",
        "Updates kostenpflichtig",
        "IT-Betreuung erforderlich",
        "Selbst um Backups kümmern",
        "Nur lokal nutzbar"
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="mb-4" variant="secondary" data-testid="badge-page">
                Cloud-Software
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-title">
                Cloud-Software für Dachdeckerbetriebe
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-subtitle">
                Cloud-basierte Handwerkersoftware wird immer beliebter. Erfahren Sie, 
                welche Vorteile Cloud-Lösungen bieten und worauf Sie achten sollten.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-advantages-title">
              Vorteile von Cloud-Software
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
              {advantages.map((item, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-advantage-${index}`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <CardTitle className="text-lg" data-testid={`text-advantage-title-${index}`}>
                        {item.title}
                      </CardTitle>
                    </div>
                    <CardDescription data-testid={`text-advantage-desc-${index}`}>
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-concerns-title">
              Häufige Bedenken – und die Antworten
            </h2>
            
            <div className="space-y-6 max-w-4xl mx-auto mb-16">
              {concerns.map((item, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-concern-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg mb-3" data-testid={`text-concern-title-${index}`}>
                      {item.concern}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed" data-testid={`text-concern-answer-${index}`}>
                      {item.answer}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-comparison-title">
              Cloud vs. On-Premise im direkten Vergleich
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              <Card className="hover-elevate active-elevate-2 transition-all" data-testid="card-cloud">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <CloudIcon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl" data-testid="text-cloud-title">
                      Cloud-Lösung
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Vorteile</h4>
                    <ul className="space-y-2">
                      {comparison.cloud.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Nachteile</h4>
                    <ul className="space-y-2">
                      {comparison.cloud.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <X className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate active-elevate-2 transition-all" data-testid="card-onpremise">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <Server className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <CardTitle className="text-2xl" data-testid="text-onpremise-title">
                      On-Premise (lokale Installation)
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Vorteile</h4>
                    <ul className="space-y-2">
                      {comparison.onpremise.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Nachteile</h4>
                    <ul className="space-y-2">
                      {comparison.onpremise.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <X className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/30">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <div className="mb-8">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-6" data-testid="text-cta-title">
                Welche Cloud-Lösung passt zu Ihnen?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vergleichen Sie die führenden Cloud-Lösungen für Dachdeckerbetriebe und 
                finden Sie die passende Software für Ihre Anforderungen.
              </p>
            </div>
            <Button size="lg" data-testid="button-cta-compare">
              Cloud-Software vergleichen
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
