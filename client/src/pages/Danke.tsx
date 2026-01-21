import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Danke() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <div className="mb-6 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-thanks-title">
              Vielen Dank!
            </h1>
            <p className="text-lg text-muted-foreground mb-4" data-testid="text-thanks-subtitle">
              Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.
            </p>
            <p className="text-sm text-muted-foreground mb-8" data-testid="text-thanks-detail">
              Ihre Nachricht wurde erfolgreich gesendet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" data-testid="button-back-home">
                <Link href="/">Zurück zur Startseite</Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-back-contact">
                <Link href="/kontakt">Weitere Anfrage stellen</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
