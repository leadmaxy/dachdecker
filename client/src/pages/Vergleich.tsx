import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import SoftwareCard from "@/components/SoftwareCard";
import CTASection from "@/components/CTASection";

export default function Vergleich() {
  const comparisonData = [
    { feature: "Flexibilität", cloud: true, onPremise: false },
    { feature: "Investitionskosten", cloud: "Gering", onPremise: "Hoch" },
    { feature: "Laufende Kosten", cloud: "Monatlich", onPremise: "Niedrig" },
    { feature: "Updates", cloud: "Automatisch", onPremise: "Manuell" },
    { feature: "Zugriff von überall", cloud: true, onPremise: false },
    { feature: "Kontrolle über Daten", cloud: false, onPremise: true },
    { feature: "IT-Kenntnisse erforderlich", cloud: "Minimal", onPremise: "Hoch" },
    { feature: "Skalierbarkeit", cloud: true, onPremise: false },
  ];

  const softwareOptions = [
    {
      name: "M-SOFT",
      provider: "M-SOFT",
      description: "Branchensoftware für Dachdecker, Zimmerei und Holzbau mit modularen Funktionen.",
      priceRange: "ab 49 EUR/Monat",
      features: ["Automatische Backups", "Mobile App inklusive", "DATEV-Integration", "GAEB-Import"],
      badges: ["Cloud", "Empfohlen"],
      recommended: true,
    },
    {
      name: "Digi-Software",
      provider: "Digi-Software",
      description: "Flexible Lösung für Dachdeckerbetriebe mit zentraler Auftragsverwaltung.",
      priceRange: "ab 39 EUR/Monat",
      features: ["Hybrid-Betrieb möglich", "GAEB/STLB-Bau", "Modularer Aufbau", "Kostenlose Updates"],
      badges: ["Cloud", "On-Premise"],
    },
    {
      name: "TAIFUN Software",
      provider: "TAIFUN Software",
      description: "On-Premise oder Cloud für Dachdeckerbetriebe mit Fokus auf Kalkulation.",
      priceRange: "ab 1.499 EUR",
      features: ["Einmaliger Kaufpreis", "Volle Datenkontrolle", "Anpassbar", "Keine Internetabhängigkeit"],
      badges: ["On-Premise"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
                Software-Vergleich
              </h1>
              <p className="text-lg text-muted-foreground">
                Vergleichen Sie verschiedene Dachdecker-Softwarelösungen und finden Sie die beste Option für Ihren Betrieb
              </p>
            </div>

            <div className="mb-16">
              <ComparisonTable
                title="Cloud vs. On-Premise: Der direkte Vergleich"
                items={comparisonData}
              />
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">Welche Lösung passt zu Ihrem Betrieb?</h2>
              <p className="text-muted-foreground mb-6">
                Die Wahl zwischen Cloud und On-Premise Software hängt von verschiedenen Faktoren ab:
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">Cloud-Software eignet sich für:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Betriebe mit Außendienst-Mitarbeitern</li>
                    <li>• Teams, die von verschiedenen Standorten arbeiten</li>
                    <li>• Unternehmen ohne eigene IT-Abteilung</li>
                    <li>• Betriebe, die flexibel skalieren möchten</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">On-Premise eignet sich für:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Betriebe mit eigener IT-Infrastruktur</li>
                    <li>• Unternehmen mit besonderen Datenschutzanforderungen</li>
                    <li>• Firmen ohne stabile Internetverbindung</li>
                    <li>• Betriebe, die volle Kontrolle bevorzugen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-software-options-title">
              Unsere Empfehlungen
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {softwareOptions.map((software, index) => (
                <SoftwareCard key={index} {...software} />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Noch unsicher? Wir beraten Sie kostenlos"
          description="Unsere Experten helfen Ihnen, die richtige Software für Ihre individuellen Anforderungen zu finden."
          primaryButtonText="Kostenlose Beratung"
          secondaryButtonText="Weitere Vergleiche ansehen"
        />
      </main>

      <Footer />
    </div>
  );
}
