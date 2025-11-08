import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SoftwareCard from "@/components/SoftwareCard";
import ContentTopicCard from "@/components/ContentTopicCard";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FeatureGrid from "@/components/FeatureGrid";
import { faqData } from "@shared/schema";
import {
  Cloud,
  Smartphone,
  Settings,
  TrendingUp,
  Users,
  Wrench,
  Clock,
  Database,
  Shield,
  Zap
} from "lucide-react";

export default function Home() {
  const softwareData = [
    {
      name: "Labelwin",
      provider: "M-SOFT",
      description: "Umfassende Lösung für SHK-Betriebe mit starkem Fokus auf Angebotswesen und Auftragsbearbeitung.",
      priceRange: "ab 999 EUR",
      features: ["Mobile Zeiterfassung", "DATEV-Schnittstelle", "Wartungsmodul", "Cloud-fähig"],
      badges: ["Cloud", "Mobile", "DSGVO"],
      recommended: true,
    },
    {
      name: "PDS",
      provider: "PDS GmbH",
      description: "Etablierte Software mit Fokus auf Integration und Schnittstellen zu anderen Systemen.",
      priceRange: "ab 39 EUR/Monat",
      features: ["DATANORM-Schnittstelle", "IDS-kompatibel", "Angebotswesen", "Projektmanagement"],
      badges: ["Cloud", "Integration"],
    },
    {
      name: "HeizMobil",
      provider: "SoftTech",
      description: "Spezialisiert auf mobile Lösungen für Servicetechniker im Außendienst.",
      priceRange: "ab 29 EUR/Monat",
      features: ["Offline-Nutzung", "GPS-Tracking", "Foto-Dokumentation", "Unterschriften"],
      badges: ["Mobile", "Service"],
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
      icon: Cloud,
      title: "Cloud-basiert",
      description: "Zugriff von überall, automatische Updates und sichere Datenhaltung in deutschen Rechenzentren."
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Zeiterfassung und Auftragsabwicklung direkt vom Smartphone, auch offline nutzbar."
    },
    {
      icon: Settings,
      title: "Schnittstellen",
      description: "Integration mit DATEV, DATANORM und weiteren branchenüblichen Systemen."
    },
    {
      icon: Clock,
      title: "Zeiterfassung",
      description: "Erfassen Sie Arbeitszeiten projektbezogen und optimieren Sie Ihre Kalkulation."
    },
    {
      icon: Database,
      title: "Lagerverwaltung",
      description: "Behalten Sie den Überblick über Material und optimieren Sie Ihre Lagerhaltung."
    },
    {
      icon: Shield,
      title: "DSGVO-konform",
      description: "Erfüllt alle deutschen Datenschutzanforderungen mit Serverstandort Deutschland."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />

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

        <FeatureGrid title="Funktionen moderner SHK-Software" features={features} />

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
