import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnhancedHero from "@/components/EnhancedHero";
import SoftwareCard from "@/components/SoftwareCard";
import ContentTopicCard from "@/components/ContentTopicCard";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import IllustratedFeatureGrid from "@/components/IllustratedFeatureGrid";
import VisualCategorySection from "@/components/VisualCategorySection";
import { faqData } from "@shared/schema";
import {
  Cloud,
  Smartphone,
  Settings,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

export default function Home() {
  const softwareData = [
    {
      name: "Das Programm",
      provider: "Das Programm",
      slug: "dasprogramm",
      description: "Testsieger 2025 mit bestem Preis-Leistungs-Verhältnis und KI-Funktionen.",
      priceRange: "ab 40 EUR/Monat",
      features: ["KI-Arbeitsberichte", "Cloud & Mobile App", "Digitales Aufmaß", "DATANORM & GAEB"],
      badges: ["Cloud", "Mobile", "Testsieger", "KI"],
      recommended: true,
    },
    {
      name: "Sykasoft",
      provider: "Sykasoft GmbH",
      slug: "sykasoft",
      description: "All-in-One Cloud-Lösung für Klein- und Mittelbetriebe mit KI-Unterstützung.",
      priceRange: "ab 39 EUR/Monat",
      features: ["KI-gestützte Berichte", "Cloud & Mobile", "IDS-Connect", "Zeiterfassung"],
      badges: ["Cloud", "Mobile", "KI", "DSGVO"],
      recommended: true,
    },
    {
      name: "ToolTime",
      provider: "ToolTime GmbH",
      slug: "tooltime",
      description: "Preiswerte, benutzerfreundliche Cloud-Lösung speziell für Klein- und Mittelbetriebe.",
      priceRange: "ab 29 EUR/Monat",
      features: ["Angebote & Rechnungen", "Mobile App", "Digitales Aufmaß", "Lexware-Integration"],
      badges: ["Cloud", "Mobile", "Preis-Leistung"],
      recommended: true,
    },
    {
      name: "mfr",
      provider: "mfr Deutschland",
      slug: "mfr",
      description: "Field Service Management Software mit KI-gestützter Einsatzplanung.",
      priceRange: "ab 145 EUR/Monat",
      features: ["KI-Einsatzplanung", "IDS & SHK Connect", "Offline-App", "Wartungsmanagement"],
      badges: ["Cloud", "KI", "Field Service"],
      recommended: true,
    },
    {
      name: "OfficeOn",
      provider: "Bosch",
      slug: "officeon",
      description: "Benutzerfreundliche Handwerkersoftware von Bosch für Büro und Baustelle.",
      priceRange: "ab 50 EUR/Monat",
      features: ["DATANORM/IDS-Anbindung", "Mobile App", "E-Rechnung", "Offline-fähig"],
      badges: ["Cloud", "Mobile", "Benutzerfreundlich"],
      recommended: true,
    },
    {
      name: "HERO",
      provider: "HERO Software",
      slug: "hero",
      description: "Cloud-Handwerkersoftware mit bestem Mobile-App-Rating und starker SHK-Unterstützung.",
      priceRange: "ab 59 EUR/Monat",
      features: ["IDS & SHK Connect", "Top Mobile App", "Auto-Preisupdate", "GAEB-Import/Export"],
      badges: ["Cloud", "Mobile", "Testsieger"],
      recommended: false,
    },
    {
      name: "Craftboxx",
      provider: "Craftboxx",
      slug: "craftboxx",
      description: "Schlanke, fokussierte Lösung für Einsatzplanung und Zeiterfassung zu fairem Preis.",
      priceRange: "ab 10 EUR/Monat",
      features: ["Einsatzplanung", "Zeiterfassung", "Mobile App", "Offline-Funktion"],
      badges: ["Cloud", "Mobile", "Preis-Leistung"],
      recommended: false,
    },
    {
      name: "Craftnote",
      provider: "Craftnote GmbH",
      slug: "craftnote",
      description: "Moderne App-First-Lösung für digitale Baustellendokumentation und Projektmanagement.",
      priceRange: "ab 39 EUR/Monat",
      features: ["Mobile App", "Baustellendokumentation", "Team-Chat", "Digitale Unterschriften"],
      badges: ["Mobile", "Cloud", "DSGVO"],
      recommended: false,
    },
    {
      name: "Plancraft",
      provider: "Plancraft GmbH",
      slug: "plancraft",
      description: "Innovative All-in-One-Lösung mit Fokus auf digitale Projektplanung.",
      priceRange: "ab 49 EUR/Monat",
      features: ["Projektplanung", "Materialverwaltung", "Mobile App", "E-Rechnung"],
      badges: ["Cloud", "Mobile", "DSGVO"],
      recommended: false,
    },
  ];

  const contentTopics = [
    {
      id: "mobile-zeiterfassung",
      title: "Mobile Zeiterfassung",
      category: "Funktionen",
      description: "Monteure im Außendienst benötigen Echtzeit-Zugriff auf Aufträge und Zeiterfassung.",
      icon: Smartphone,
    },
    {
      id: "cloud-vs-onprem",
      title: "Cloud vs. On-Premise",
      category: "Vergleich",
      description: "Welche Lösung passt für SHK-Betriebe? Vergleichen Sie Flexibilität und Kosten.",
      icon: Cloud,
    },
    {
      id: "schnittstellen",
      title: "Wichtige Schnittstellen",
      category: "Integration",
      description: "DATEV, DATANORM, IDS - warum Integrationen Zeit und Geld sparen.",
      icon: Settings,
    },
    {
      id: "wartung-digital",
      title: "Wartung digitalisieren",
      category: "Service",
      description: "Automatische Terminplanung und digitale Kundendokumentation.",
      icon: Wrench,
    },
    {
      id: "kleine-betriebe",
      title: "Software für kleine Betriebe",
      category: "Betriebsgröße",
      description: "Leichte Bedienung und günstige Cloudmodelle für 1-5 Mitarbeiter.",
      icon: Users,
    },
    {
      id: "trends-2025",
      title: "Trends 2025",
      category: "Zukunft",
      description: "KI und Automatisierung im SHK-Handwerk - von Smart Home bis Predictive Maintenance.",
      icon: TrendingUp,
    },
  ];

  const features = [
    {
      icon: "cloud" as const,
      title: "Cloud-basiert",
      description: "Zugriff von überall, automatische Updates und sichere Datenhaltung in deutschen Rechenzentren."
    },
    {
      icon: "mobile" as const,
      title: "Mobile App",
      description: "Zeiterfassung und Auftragsabwicklung direkt vom Smartphone, auch offline nutzbar."
    },
    {
      icon: "integration" as const,
      title: "Schnittstellen",
      description: "Integration mit DATEV, DATANORM und weiteren branchenüblichen Systemen."
    },
    {
      icon: "time" as const,
      title: "Zeiterfassung",
      description: "Erfassen Sie Arbeitszeiten projektbezogen und optimieren Sie Ihre Kalkulation."
    },
    {
      icon: "maintenance" as const,
      title: "Wartungsmodul",
      description: "Digitale Wartungsplanung mit automatischen Erinnerungen und Terminvorlagen."
    },
    {
      icon: "default" as const,
      title: "DSGVO-konform",
      description: "Erfüllt alle deutschen Datenschutzanforderungen mit Serverstandort Deutschland."
    }
  ];

  const visualCategories = [
    {
      id: "cloud",
      title: "Cloud-Lösungen",
      description: "Flexible Software mit Zugriff von überall",
      icon: "cloud" as const,
      badge: "Beliebt"
    },
    {
      id: "mobile",
      title: "Mobile Apps",
      description: "Zeiterfassung für unterwegs",
      icon: "mobile" as const,
      badge: "Praktisch"
    },
    {
      id: "integration",
      title: "Schnittstellen",
      description: "DATEV, DATANORM & mehr",
      icon: "integration" as const,
      badge: "Wichtig"
    },
    {
      id: "wartung",
      title: "Wartung",
      description: "Digitale Serviceplanung",
      icon: "maintenance" as const,
      badge: "Neu"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <EnhancedHero />

        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-featured-title">
              Führende SHK-Softwarelösungen
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {softwareData.map((software, index) => (
                <SoftwareCard key={index} {...software} />
              ))}
            </div>
          </div>
        </section>

        <VisualCategorySection 
          title="Software nach Kategorien entdecken"
          subtitle="Finden Sie die perfekte Lösung für Ihre spezifischen Anforderungen"
          categories={visualCategories}
        />

        <IllustratedFeatureGrid title="Funktionen moderner SHK-Software" features={features} />

        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" data-testid="text-topics-title">
                Vergleiche & Ratgeber
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Entdecken Sie detaillierte Vergleiche und praktische Anleitungen für Ihre Softwareauswahl
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {contentTopics.map((topic) => (
                <ContentTopicCard key={topic.id} {...topic} />
              ))}
            </div>
          </div>
        </section>

        <FAQSection items={[...faqData]} />

        <CTASection
          title="Finden Sie die perfekte SHK-Software"
          description="Vergleichen Sie jetzt kostenlos über 50 Softwarelösungen und finden Sie die beste Lösung für Ihren Betrieb."
        />
      </main>

      <Footer />
    </div>
  );
}
