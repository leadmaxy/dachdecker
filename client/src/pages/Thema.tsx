import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import NotFound from "./not-found";

interface TopicContent {
  id: string;
  title: string;
  description: string;
  badge: string;
  sections: {
    title: string;
    content: string;
  }[];
  benefits: string[];
  cta: {
    title: string;
    description: string;
  };
}

const topicContent: Record<string, TopicContent> = {
  "datev-schnittstelle": {
    id: "datev-schnittstelle",
    title: "DATEV-Schnittstelle für Dachdecker-Software",
    description: "Automatischer Datenaustausch mit Ihrem Steuerbüro",
    badge: "Wichtig für Buchhaltung",
    sections: [
      {
        title: "Was ist die DATEV-Schnittstelle?",
        content: "Die DATEV-Schnittstelle ermöglicht den automatischen Export von Rechnungs- und Buchungsdaten aus Ihrer Handwerkersoftware direkt in das DATEV-System Ihres Steuerberaters. Das spart Zeit, vermeidet Fehler durch manuelle Eingaben und beschleunigt die Buchhaltung erheblich."
      },
      {
        title: "Wie funktioniert es?",
        content: "Ihre Dachdecker-Software exportiert alle relevanten Finanzdaten (Rechnungen, Zahlungen, Belege) in einem DATEV-kompatiblen Format. Ihr Steuerberater importiert diese Datei direkt in DATEV und muss die Daten nicht mehr manuell abtippen. Das spart beiden Seiten Zeit und Geld."
      },
      {
        title: "Welche Daten werden übertragen?",
        content: "Typischerweise werden Ausgangsrechnungen, Zahlungseingänge, Eingangsrechnungen, Kassenbelege und weitere buchungsrelevante Daten exportiert. Die meisten Schnittstellen unterstützen die DATEV-Formate ASCII oder CSV."
      }
    ],
    benefits: [
      "Zeit- und Kostenersparnis beim Steuerberater",
      "Weniger Fehler durch automatischen Datentransfer",
      "Schnellere Buchhaltung und Monatsabschlüsse",
      "Aktuelle Zahlen für bessere Unternehmenssteuerung",
      "DATEV-Standard wird von fast allen Steuerberatern genutzt"
    ],
    cta: {
      title: "Software mit DATEV-Schnittstelle finden",
      description: "Vergleichen Sie Dachdecker-Software mit DATEV-Anbindung und erleichtern Sie Ihre Buchhaltung."
    }
  },
  "mobile-zeiterfassung": {
    id: "mobile-zeiterfassung",
    title: "Mobile Zeiterfassung für Dachdecker-Teams",
    description: "Arbeitszeiten direkt auf der Baustelle erfassen",
    badge: "Effizienz steigern",
    sections: [
      {
        title: "Warum mobile Zeiterfassung?",
        content: "Handschriftliche Stundenzettel sind fehleranfällig, gehen verloren und müssen im Büro mühsam abgetippt werden. Mit mobiler Zeiterfassung erfassen Ihre Teams Arbeitszeiten direkt am Einsatzort per Smartphone oder Tablet – und die Daten landen automatisch im System."
      },
      {
        title: "Funktionsweise",
        content: "Der Mitarbeiter startet und stoppt die Zeiterfassung in der App, ordnet sie dem jeweiligen Auftrag oder Projekt zu und kann Pausen, Fahrzeiten und Materialverbrauch direkt erfassen. Optional wird der GPS-Standort mitprotokolliert. Alle Daten werden synchronisiert, sobald Internet verfügbar ist."
      },
      {
        title: "Vorteile für die Kalkulation",
        content: "Projektbezogene Zeiterfassung zeigt Ihnen genau, wie viele Stunden für welchen Auftrag angefallen sind. Das verbessert Ihre Nachkalkulation und hilft bei der Preisfindung für zukünftige Angebote. Sie sehen sofort, ob ein Projekt profitabel ist."
      }
    ],
    benefits: [
      "Keine handschriftlichen Stundenzettel mehr",
      "Automatische Übertragung ins System",
      "GPS-Nachweis für Außendienst-Mitarbeiter",
      "Bessere Nachkalkulation und Projektkontrolle",
      "Schnellere Lohnabrechnung",
      "Weniger Verwaltungsaufwand"
    ],
    cta: {
      title: "Dachdecker-Software mit mobiler Zeiterfassung",
      description: "Finden Sie die passende Lösung mit mobiler App für Ihre Teams."
    }
  },
  "auftragsabwicklung": {
    id: "auftragsabwicklung",
    title: "Digitale Auftragsabwicklung im Dachdeckerhandwerk",
    description: "Von der Anfrage bis zur Rechnung – alles digital",
    badge: "Kernfunktion",
    sections: [
      {
        title: "Was gehört zur Auftragsabwicklung?",
        content: "Die digitale Auftragsabwicklung umfasst alle Schritte von der Kundenanfrage über Angebot, Auftragsbestätigung, Leistungserfassung bis hin zur Rechnung. Moderne Software bildet diesen gesamten Prozess digital ab und spart dabei Zeit und Papier."
      },
      {
        title: "Automatisierung spart Zeit",
        content: "Vorlagen für Angebote, automatische Übernahme von Kundendaten, Leistungsverzeichnisse aus GAEB/STLB-Bau und rechtskonforme Rechnungsstellung nach GoBD – all das beschleunigt Ihre Prozesse erheblich. Was früher Stunden dauerte, ist heute in Minuten erledigt."
      },
      {
        title: "Alles an einem Ort",
        content: "Alle Dokumente zu einem Auftrag (E-Mails, Fotos, Pläne, Protokolle) werden zentral in der digitalen Auftragsakte gespeichert. So haben Sie und Ihre Monteure jederzeit Zugriff auf alle wichtigen Informationen – auch mobil."
      }
    ],
    benefits: [
      "Schnellere Angebotserstellung",
      "Weniger Fehler durch Vorlagen",
      "Automatische Rechnungsstellung",
      "Zentrale Dokumentenablage",
      "Besserer Überblick über offene Aufträge",
      "Professioneller Auftritt beim Kunden"
    ],
    cta: {
      title: "Auftragsmanagement-Software vergleichen",
      description: "Finden Sie die passende Software für Ihre Auftragsabwicklung."
    }
  }
};

export default function Thema() {
  const [match, params] = useRoute("/thema/:id");
  
  if (!match || !params?.id) {
    return <NotFound />;
  }

  const content = topicContent[params.id];

  if (!content) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="mb-4" variant="secondary" data-testid="badge-topic">
                {content.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-title">
                {content.title}
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-subtitle">
                {content.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="space-y-8 mb-16">
              {content.sections.map((section, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-section-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4" data-testid={`text-section-title-${index}`}>
                      {section.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed" data-testid={`text-section-content-${index}`}>
                      {section.content}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="mb-16 hover-elevate active-elevate-2 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">Vorteile auf einen Blick</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {content.benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3"
                      data-testid={`text-benefit-${index}`}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-card/30">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-cta-title">
              {content.cta.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {content.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" data-testid="button-cta-compare">
                Software vergleichen
                <ArrowRight className="ml-2 h-5 w-5" />
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
