import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Clock, 
  Camera, 
  MapPin, 
  Wifi, 
  FileText,
  PenTool,
  Bell
} from "lucide-react";

export default function Mobile() {
  const features = [
    {
      icon: Clock,
      title: "Zeiterfassung vor Ort",
      description: "Erfassen Sie Arbeitszeiten direkt am Einsatzort mit Start-/Stopp-Button. GPS-Stempel dokumentiert automatisch den Standort."
    },
    {
      icon: Camera,
      title: "Foto-Dokumentation",
      description: "Dokumentieren Sie Schäden, Baufortschritt oder Abnahmen direkt mit der Kamera. Fotos werden automatisch dem Auftrag zugeordnet."
    },
    {
      icon: PenTool,
      title: "Digitale Unterschrift",
      description: "Lassen Sie Auftragszettel, Abnahmeprotokolle oder Lieferscheine direkt auf dem Tablet unterschreiben."
    },
    {
      icon: FileText,
      title: "Auftragsbearbeitung",
      description: "Greifen Sie mobil auf Aufträge zu, erfassen Material und Arbeitszeit, erstellen Notizen – alles direkt in der App."
    },
    {
      icon: MapPin,
      title: "Navigation",
      description: "Lassen Sie sich direkt zum Kundenstandort navigieren. Kontaktdaten und Anfahrtsbeschreibung sind immer dabei."
    },
    {
      icon: Wifi,
      title: "Offline-Fähigkeit",
      description: "Arbeiten Sie auch ohne Internetverbindung weiter. Alle Daten werden automatisch synchronisiert, sobald Sie wieder online sind."
    },
    {
      icon: Bell,
      title: "Push-Benachrichtigungen",
      description: "Werden Sie sofort über neue Eilaufträge, Terminänderungen oder wichtige Nachrichten informiert."
    },
    {
      icon: FileText,
      title: "Lagerbestand prüfen",
      description: "Prüfen Sie mobil die Verfügbarkeit von Material auf dem Lager oder im Fahrzeug, bevor Sie zum Kunden fahren."
    }
  ];

  const benefits = [
    {
      title: "Zeitersparnis",
      description: "Keine doppelte Dateneingabe mehr. Alles wird direkt digital erfasst und automatisch ins System übertragen."
    },
    {
      title: "Weniger Fehler",
      description: "Handschriftliche Auftragszettel, die unleserlich sind oder verloren gehen, gehören der Vergangenheit an."
    },
    {
      title: "Schnellere Abrechnung",
      description: "Da alle Daten sofort im System sind, können Sie Rechnungen schneller erstellen und früher bezahlt werden."
    },
    {
      title: "Bessere Kundenkommunikation",
      description: "Kunden erhalten direkt am Einsatzort Informationen, Fotos oder ein unterschriebenes Protokoll per E-Mail."
    },
    {
      title: "Transparenz",
      description: "Sie sehen jederzeit, wo Ihre Monteure gerade sind und woran sie arbeiten – perfekt für Notfälle oder Rückfragen."
    },
    {
      title: "Professioneller Auftritt",
      description: "Digitale Abläufe signalisieren Modernität und Professionalität gegenüber Ihren Kunden."
    }
  ];

  const requirements = [
    {
      aspect: "Betriebssystem",
      details: "Die meisten Apps gibt es für iOS (iPhone/iPad) und Android. Prüfen Sie die Kompatibilität mit Ihren Geräten."
    },
    {
      aspect: "Internetverbindung",
      details: "Für die Synchronisation wird Internet benötigt. Achten Sie auf Offline-Fähigkeit bei schlechtem Empfang auf Baustellen."
    },
    {
      aspect: "Hardware",
      details: "Smartphones oder robuste Tablets. Für Baustellen gibt es spezielle Outdoor-Geräte mit IP-Schutz gegen Staub und Wasser."
    },
    {
      aspect: "Schulung",
      details: "Planen Sie Zeit ein, um Ihre Monteure mit der App vertraut zu machen. Die meisten Apps sind intuitiv bedienbar."
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
                Mobile Apps
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-title">
                Mobile Apps für SHK-Monteure
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-subtitle">
                Moderne SHK-Software bietet mobile Apps für Smartphone und Tablet. 
                Erfassen Sie Zeiten, Aufträge und Material direkt vor Ort – papierlos und effizient.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-features-title">
              Funktionen mobiler SHK-Apps
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
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

            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-benefits-title">
              Vorteile für Ihren Betrieb
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16 max-w-6xl mx-auto">
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

            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-requirements-title">
              Was Sie für den Einsatz benötigen
            </h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {requirements.map((req, index) => (
                <Card 
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-requirement-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg mb-2" data-testid={`text-requirement-title-${index}`}>
                      {req.aspect}
                    </CardTitle>
                    <CardDescription className="text-base" data-testid={`text-requirement-details-${index}`}>
                      {req.details}
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
              <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-6" data-testid="text-cta-title">
                Welche Software bietet die beste mobile App?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vergleichen Sie SHK-Software mit mobilen Apps und finden Sie die Lösung, 
                die am besten zu Ihren Arbeitsabläufen passt.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" data-testid="button-cta-compare">
                Software mit mobiler App vergleichen
              </Button>
              <Button size="lg" variant="outline" data-testid="button-cta-demo">
                Demo anfragen
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
