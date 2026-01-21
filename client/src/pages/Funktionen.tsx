import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Smartphone, 
  Calendar, 
  FileText, 
  Users, 
  Calculator,
  Wrench,
  Package,
  TrendingUp,
  Shield,
  Clock,
  Database
} from "lucide-react";

export default function Funktionen() {
  const featureCategories = [
    {
      title: "Auftragsmanagement",
      icon: FileText,
      features: [
        "Digitale Auftragserfassung mit Vorlagen",
        "Angebotserstellung mit GAEB/STLB-Bau",
        "Automatische Rechnungsstellung",
        "Mahnwesen und Zahlungsüberwachung",
        "Digitale Auftragsakte mit Dokumentenverwaltung"
      ]
    },
    {
      title: "Zeiterfassung & Einsatzplanung",
      icon: Clock,
      features: [
        "Mobile Zeiterfassung direkt am Einsatzort",
        "Projektbezogene Stundenerfassung",
        "Digitaler Stundenzettel mit GPS-Stempel",
        "Automatische Übertragung zur Lohnabrechnung",
        "Urlaubsplanung und Abwesenheitsverwaltung"
      ]
    },
    {
      title: "Lagerverwaltung",
      icon: Package,
      features: [
        "Materialverwaltung mit Bestandsführung",
        "Automatische Nachbestellung bei Mindestbestand",
        "Fahrzeugbestand und mobile Lager verwalten",
        "Inventur-Funktionen",
        "Integration mit Hersteller- und Großhandelssystemen"
      ]
    },
    {
      title: "Kundenverwaltung (CRM)",
      icon: Users,
      features: [
        "Zentrale Kundendatenbank",
        "Ansprechpartner und Kontakthistorie",
        "Gebäude, Dachflächen und PV-Anlagen zu Kunden zuordnen",
        "Automatische Geburtstags- und Jubiläumserinnerungen",
        "DSGVO-konforme Datenverwaltung"
      ]
    },
    {
      title: "Inspektion & Wartung",
      icon: Wrench,
      features: [
        "Inspektionsverträge digital verwalten",
        "Automatische Erinnerungen und Intervalle",
        "Inspektionsprotokolle für Dächer und Fassaden",
        "Mängel- und Reparaturmeldungen koordinieren",
        "Digitale Objekt- und Wartungshistorie"
      ]
    },
    {
      title: "Kalkulation & Controlling",
      icon: Calculator,
      features: [
        "Nachkalkulation von Aufträgen",
        "Projektkostenrechnung",
        "Stundensatzkalkulation",
        "Deckungsbeitragsrechnung",
        "Betriebswirtschaftliche Auswertungen"
      ]
    },
    {
      title: "Mobile Funktionen",
      icon: Smartphone,
      features: [
        "Offline-Fähigkeit für Baustellen ohne Internet",
        "Foto-Dokumentation direkt aus der App",
        "Digitale Unterschrift des Kunden",
        "Navigation zum Einsatzort",
        "Push-Benachrichtigungen für Eilaufträge"
      ]
    },
    {
      title: "Cloud & Datensicherheit",
      icon: Cloud,
      features: [
        "Automatische Backups in deutschen Rechenzentren",
        "Verschlüsselte Datenübertragung (SSL/TLS)",
        "Mehrmandantenfähigkeit",
        "Rollenbasierte Zugriffsrechte",
        "Revisionssichere Archivierung"
      ]
    },
    {
      title: "Schnittstellen & Integration",
      icon: Database,
      features: [
        "DATEV-Schnittstelle für Buchhaltung",
        "GAEB/STLB-Bau für Ausschreibungen",
        "DATEV, ZVDH und Herstellerkataloge",
        "E-Mail und Kalender-Synchronisation",
        "API für individuelle Integrationen"
      ]
    },
    {
      title: "Reporting & Auswertungen",
      icon: TrendingUp,
      features: [
        "Dashboard mit wichtigen Kennzahlen",
        "Umsatz- und Liquiditätsauswertungen",
        "Mitarbeiter-Leistungsübersicht",
        "Auftragsauslastung und Pipeline",
        "Exportfunktionen (Excel, PDF)"
      ]
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
                Funktionsübersicht
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-title">
                Alle wichtigen Funktionen für Dachdeckerbetriebe
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-subtitle">
                Moderne Handwerkersoftware bietet weit mehr als nur digitale Auftragszettel. 
                Entdecken Sie die umfassenden Funktionen, die Ihren Arbeitsalltag erleichtern.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2">
              {featureCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-feature-${index}`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2" data-testid={`text-category-title-${index}`}>
                          {category.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.features.map((feature, fIndex) => (
                        <li 
                          key={fIndex} 
                          className="flex items-start gap-3 text-sm"
                          data-testid={`text-feature-${index}-${fIndex}`}
                        >
                          <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/30">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-cta-title">
              Welche Funktionen sind für Sie wichtig?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Lassen Sie sich kostenlos beraten, welche Software-Lösung am besten zu 
              Ihren Anforderungen passt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" data-testid="button-cta-consult">
                Kostenlose Beratung anfragen
              </Button>
              <Button size="lg" variant="outline" data-testid="button-cta-compare">
                Software vergleichen
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
