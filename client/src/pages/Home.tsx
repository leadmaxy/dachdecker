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
      name: "TAIFUN Software",
      provider: "TAIFUN Software",
      slug: "taifun-software",
      description: "Branchenlösung für Dachdeckerbetriebe mit Fokus auf Kalkulation und Auftragsabwicklung.",
      priceRange: "ab 40 EUR/Monat",
      features: ["Digitales Aufmaß", "Cloud & Mobile App", "GAEB/STLB-Bau", "Material- und Gerüstplanung"],
      badges: ["Cloud", "Mobile", "Testsieger", "Aufmaß"],
      recommended: true,
    },
    {
      name: "Sykasoft",
      provider: "Sykasoft GmbH",
      slug: "sykasoft",
      description: "All-in-One Cloud-Lösung für Dachdeckerbetriebe mit Baustellenfokus.",
      priceRange: "ab 39 EUR/Monat",
      features: ["Aufmaß & Flächenberechnung", "Cloud & Mobile", "Projekt- und Baustellenpläne", "Foto-Doku & Mängel"],
      badges: ["Cloud", "Mobile", "Doku", "DSGVO"],
      recommended: true,
    },
    {
      name: "ToolTime",
      provider: "ToolTime GmbH",
      slug: "tooltime",
      description: "Preiswerte, benutzerfreundliche Cloud-Lösung für kleine Dachdecker-Teams.",
      priceRange: "ab 29 EUR/Monat",
      features: ["Angebote & Rechnungen", "Mobile App", "Baustellendokumentation", "DATEV-Export"],
      badges: ["Cloud", "Mobile", "Preis-Leistung"],
      recommended: true,
    },
    {
      name: "PSS",
      provider: "PSS",
      slug: "pss",
      description: "Branchensoftware für Dachdeckerbetriebe mit Fokus auf Organisation und Prozesse.",
      priceRange: "ab 145 EUR/Monat",
      features: ["Einsatzplanung", "Routenoptimierung", "Team-Chat", "Wetterfenster-Planung"],
      badges: ["Cloud", "Planung", "Field Service"],
      recommended: true,
    },
    {
      name: "Digi-Software",
      provider: "Digi-Software",
      slug: "digi-software",
      description: "Softwarelösung für Dach, Fassade und Bau mit zentraler Auftragsverwaltung.",
      priceRange: "ab 50 EUR/Monat",
      features: ["GAEB-Import/Export", "Mobile App", "E-Rechnung", "Checklisten"],
      badges: ["Cloud", "Mobile", "Benutzerfreundlich"],
      recommended: true,
    },
    {
      name: "extra group",
      provider: "extra group",
      slug: "extra-group",
      description: "Moderne Handwerkersoftware mit Fokus auf digitale Baustellendokumentation.",
      priceRange: "ab 59 EUR/Monat",
      features: ["Mobile Baustelle", "Foto & Mängel", "Auto-Preisupdate", "GAEB-Import/Export"],
      badges: ["Cloud", "Mobile", "Doku"],
      recommended: false,
    },
    {
      name: "M-SOFT",
      provider: "M-SOFT",
      slug: "m-soft-dachdecker",
      description: "Branchensoftware für Dachdecker, Zimmerei und Holzbau.",
      priceRange: "ab 10 EUR/Monat",
      features: ["Einsatzplanung", "Zeiterfassung", "Mobile App", "Offline-Funktion"],
      badges: ["Cloud", "Mobile", "Preis-Leistung"],
      recommended: false,
    },
    {
      name: "Craftnote",
      provider: "Craftnote GmbH",
      slug: "craftnote",
      description: "Moderne App-First-Lösung für digitale Baustellendokumentation im Dachbau.",
      priceRange: "ab 39 EUR/Monat",
      features: ["Mobile App", "Baustellendokumentation", "Team-Chat", "Digitale Unterschriften"],
      badges: ["Mobile", "Cloud", "DSGVO"],
      recommended: false,
    },
    {
      name: "Plancraft",
      provider: "Plancraft GmbH",
      slug: "plancraft",
      description: "Innovative All-in-One-Lösung mit Fokus auf digitale Projektplanung im Bau.",
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
      description: "Teams auf dem Dach brauchen Echtzeit-Zugriff auf Aufträge und Zeiten.",
      icon: Smartphone,
    },
    {
      id: "cloud-vs-onprem",
      title: "Cloud vs. On-Premise",
      category: "Vergleich",
      description: "Welche Lösung passt für Dachdeckerbetriebe? Vergleichen Sie Flexibilität und Kosten.",
      icon: Cloud,
    },
    {
      id: "schnittstellen",
      title: "Wichtige Schnittstellen",
      category: "Integration",
      description: "DATEV, GAEB, STLB-Bau - warum Integrationen Zeit und Geld sparen.",
      icon: Settings,
    },
    {
      id: "wartung-digital",
      title: "Inspektion digitalisieren",
      category: "Service",
      description: "Automatische Terminplanung und digitale Objekt-Dokumentation.",
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
      title: "Trends 2026",
      category: "Zukunft",
      description: "Drohnen-Aufmaß, PV-Services und KI in der Baustellendokumentation.",
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
      description: "Zeiterfassung und Baustellendoku direkt vom Smartphone, auch offline nutzbar."
    },
    {
      icon: "integration" as const,
      title: "Schnittstellen",
      description: "Integration mit DATEV, GAEB, STLB-Bau und weiteren Branchenstandards."
    },
    {
      icon: "time" as const,
      title: "Kalkulation",
      description: "Dachflächen, Material und Lohn in Minuten kalkulieren."
    },
    {
      icon: "maintenance" as const,
      title: "Inspektion & Wartung",
      description: "Digitale Inspektionspläne mit Erinnerungen und Checklisten."
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
      description: "Baustellendoku für unterwegs",
      icon: "mobile" as const,
      badge: "Praktisch"
    },
    {
      id: "integration",
      title: "Schnittstellen",
      description: "DATEV, GAEB, STLB-Bau",
      icon: "integration" as const,
      badge: "Wichtig"
    },
    {
      id: "wartung",
      title: "Inspektion",
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
              Führende Dachdecker-Softwarelösungen
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

        <IllustratedFeatureGrid title="Funktionen moderner Dachdecker-Software" features={features} />

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
          title="Finden Sie die perfekte Dachdecker-Software"
          description="Vergleichen Sie jetzt kostenlos Softwarelösungen und finden Sie die beste Lösung für Ihren Betrieb."
        />
      </main>

      <Footer />
    </div>
  );
}
