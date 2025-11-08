import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Bell, 
  FileCheck, 
  ClipboardList,
  Users,
  TrendingUp,
  CheckCircle2,
  Wrench
} from "lucide-react";

export default function Wartung() {
  const features = [
    {
      icon: Calendar,
      title: "Automatische Terminplanung",
      description: "Das System erinnert automatisch an fällige Wartungen und schlägt optimale Terminvorschläge vor."
    },
    {
      icon: Bell,
      title: "Erinnerungen",
      description: "Kunden und Monteure erhalten rechtzeitig Benachrichtigungen über anstehende Wartungstermine."
    },
    {
      icon: FileCheck,
      title: "Digitale Protokolle",
      description: "Wartungsprotokolle werden digital erstellt, archiviert und sind jederzeit abrufbar."
    },
    {
      icon: ClipboardList,
      title: "Checklisten",
      description: "Vordefinierte Prüf-Checklisten stellen sicher, dass nichts vergessen wird und alles normgerecht abläuft."
    },
    {
      icon: Users,
      title: "Kundenbindung",
      description: "Wartungsverträge schaffen planbare Umsätze und regelmäßigen Kundenkontakt."
    },
    {
      icon: TrendingUp,
      title: "Auslastungsoptimierung",
      description: "Planen Sie Wartungen in auftragsschwachen Zeiten und optimieren Sie die Monteur-Auslastung."
    }
  ];

  const types = [
    {
      type: "Heizungswartung",
      details: "Jährliche Inspektion von Gas-, Öl- oder Pelletheizungen inkl. Brenner-Check, Abgasmessung und Reinigung."
    },
    {
      type: "Trinkwasser-Prüfung",
      details: "Legionellen-Prüfung, Temperaturmessung und Dokumentation gemäß Trinkwasserverordnung."
    },
    {
      type: "Solaranlagen-Wartung",
      details: "Kontrolle der Solarkollektoren, Prüfung der Solarflüssigkeit und Funktionstest der Regelung."
    },
    {
      type: "Lüftungsanlagen",
      details: "Filterwechsel, Reinigung und Funktionsprüfung von kontrollierten Wohnraumlüftungen."
    },
    {
      type: "Wärmepumpen",
      details: "Inspektion, Druckprüfung und Effizienz-Check der Wärmepumpenanlage."
    },
    {
      type: "Aufzug-Wartung",
      details: "Regelmäßige Prüfung und Wartung von Aufzugsanlagen nach gesetzlichen Vorgaben."
    }
  ];

  const benefits = [
    {
      title: "Planbare Umsätze",
      description: "Wartungsverträge bringen regelmäßige, kalkulierbare Einnahmen – unabhängig von Saisongeschäft."
    },
    {
      title: "Auslastung optimieren",
      description: "Füllen Sie auftragsschwache Zeiten im Sommer mit Wartungsarbeiten und vermeiden Sie Leerlauf."
    },
    {
      title: "Weniger Notdienste",
      description: "Gut gewartete Anlagen fallen seltener aus – weniger Notrufe am Wochenende oder Feiertag."
    },
    {
      title: "Kundenbindung",
      description: "Regelmäßiger Kontakt zu Ihren Kunden stärkt die Bindung und öffnet Türen für weitere Aufträge."
    },
    {
      title: "Cross-Selling",
      description: "Bei Wartungen entdecken Sie oft Optimierungspotenzial – Chance für Zusatzaufträge und Modernisierungen."
    },
    {
      title: "Professioneller Auftritt",
      description: "Automatische Erinnerungen und digitale Protokolle zeigen Professionalität und Service-Qualität."
    }
  ];

  const workflow = [
    {
      step: "1. Vertrag anlegen",
      description: "Erfassen Sie Wartungsverträge mit Kunde, Objekt, Intervall und Leistungsumfang im System."
    },
    {
      step: "2. Automatische Planung",
      description: "Die Software plant Termine automatisch basierend auf dem Wartungsintervall und Ihrer Kapazität."
    },
    {
      step: "3. Erinnerungen",
      description: "Kunden erhalten Erinnerungen per E-Mail oder SMS, Monteure sehen anstehende Termine in der App."
    },
    {
      step: "4. Durchführung",
      description: "Monteur arbeitet Checkliste ab, macht Fotos und lässt sich das Protokoll unterschreiben."
    },
    {
      step: "5. Dokumentation",
      description: "Das Wartungsprotokoll wird automatisch archiviert und dem Kunden per E-Mail zugeschickt."
    },
    {
      step: "6. Abrechnung",
      description: "Wartungsgebühr wird automatisch in Rechnung gestellt – oder per Lastschrift eingezogen."
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
                Wartungsmodule
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-title">
                Digitale Wartungsplanung für SHK-Betriebe
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-subtitle">
                Wartungsverträge sind eine wichtige Einnahmequelle für SHK-Betriebe. 
                Mit digitaler Wartungsplanung vergessen Sie keine Termine mehr und steigern Ihre Kundenbindung.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-features-title">
              Funktionen eines Wartungsmoduls
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-feature-${index}`}
                >
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg mb-2" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </CardTitle>
                    <CardDescription data-testid={`text-feature-desc-${index}`}>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-types-title">
              Typische Wartungsarbeiten im SHK-Bereich
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
              {types.map((type, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-type-${index}`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-lg mb-2" data-testid={`text-type-title-${index}`}>
                          {type.type}
                        </CardTitle>
                        <CardDescription data-testid={`text-type-details-${index}`}>
                          {type.details}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-benefits-title">
              Vorteile für Ihren Betrieb
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-benefit-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg mb-2" data-testid={`text-benefit-title-${index}`}>
                      {benefit.title}
                    </CardTitle>
                    <CardDescription data-testid={`text-benefit-desc-${index}`}>
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-workflow-title">
              So funktioniert digitale Wartungsplanung
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {workflow.map((item, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-workflow-${index}`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2" data-testid={`text-workflow-step-${index}`}>
                          {item.step}
                        </CardTitle>
                        <CardDescription className="text-base" data-testid={`text-workflow-desc-${index}`}>
                          {item.description}
                        </CardDescription>
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
            <div className="mb-8">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-6" data-testid="text-cta-title">
                Software mit professionellem Wartungsmodul finden
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vergleichen Sie SHK-Software mit Wartungsfunktionen und steigern Sie 
                Ihre Effizienz und Kundenzufriedenheit.
              </p>
            </div>
            <Button size="lg" data-testid="button-cta-compare">
              Software mit Wartungsmodul vergleichen
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
