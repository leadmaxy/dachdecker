import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { faqData } from "@shared/schema";

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
                Häufig gestellte Fragen
              </h1>
              <p className="text-lg text-muted-foreground">
                Antworten auf die wichtigsten Fragen rund um Dachdecker-Software
              </p>
            </div>
          </div>
        </section>

        <FAQSection items={[...faqData]} title="" />

        <CTASection
          title="Weitere Fragen?"
          description="Kontaktieren Sie uns für eine persönliche Beratung zu Dachdecker-Software für Ihren Betrieb."
          primaryButtonText="Kontakt aufnehmen"
          secondaryButtonText="Zurück zur Übersicht"
        />
      </main>

      <Footer />
    </div>
  );
}
