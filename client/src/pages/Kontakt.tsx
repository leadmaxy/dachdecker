import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare
} from "lucide-react";

export default function Kontakt() {
  const contactInfo = [
    {
      icon: Mail,
      title: "E-Mail",
      value: "info@dachdecker-software-vergleich.de",
      description: "Wir antworten in der Regel innerhalb von 24 Stunden"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+49 (0) 123 456789",
      description: "Mo-Fr: 9:00 - 17:00 Uhr"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Musterstraße 123, 12345 Musterstadt",
      description: "Deutschland"
    },
    {
      icon: Clock,
      title: "Geschäftszeiten",
      value: "Montag bis Freitag",
      description: "9:00 - 17:00 Uhr"
    }
  ];

  const services = [
    "Kostenlose Erstberatung zur Software-Auswahl",
    "Vergleich verschiedener Dachdecker-Software-Lösungen",
    "Unterstützung bei der Anbieter-Auswahl",
    "Informationen zu Preisen und Funktionen",
    "Empfehlungen basierend auf Ihrer Betriebsgröße",
    "Vermittlung von Demo-Terminen"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="mb-4" variant="secondary" data-testid="badge-page">
                Kontakt
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-title">
                Wir helfen Ihnen weiter
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-subtitle">
                Haben Sie Fragen zur passenden Dachdecker-Software für Ihren Betrieb? 
                Kontaktieren Sie uns – wir beraten Sie kostenlos und unverbindlich.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-2 mb-16">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6" data-testid="text-contact-title">
                    Kontaktinformationen
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <Card 
                        key={index}
                        className="hover-elevate active-elevate-2 transition-all"
                        data-testid={`card-contact-${index}`}
                      >
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10">
                              <info.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-1" data-testid={`text-contact-title-${index}`}>
                                {info.title}
                              </CardTitle>
                              <p className="font-semibold mb-1" data-testid={`text-contact-value-${index}`}>
                                {info.value}
                              </p>
                              <CardDescription data-testid={`text-contact-desc-${index}`}>
                                {info.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="hover-elevate active-elevate-2 transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <CardTitle className="text-xl mb-2">
                          Unsere Leistungen
                        </CardTitle>
                        <CardDescription>
                          Das bieten wir Ihnen kostenlos an:
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {services.map((service, index) => (
                        <li 
                          key={index} 
                          className="flex items-start gap-3 text-sm"
                          data-testid={`text-service-${index}`}
                        >
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="hover-elevate active-elevate-2 transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl" data-testid="text-form-title">
                      Schreiben Sie uns
                    </CardTitle>
                    <CardDescription>
                      Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      className="space-y-6"
                      action="https://formspree.io/f/mzddyoal"
                      method="POST"
                    >
                      <input type="hidden" name="_subject" value="Neue Anfrage: Dachdecker-Software" />
                      <input type="hidden" name="_redirect" value="https://leadmaxy.github.io/dachdecker/danke" />
                      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="vorname">Vorname *</Label>
                          <Input
                            id="vorname" 
                            name="vorname"
                            placeholder="Max"
                            data-testid="input-vorname"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nachname">Nachname *</Label>
                          <Input
                            id="nachname" 
                            name="nachname"
                            placeholder="Mustermann"
                            data-testid="input-nachname"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="firma">Firma</Label>
                        <Input
                          id="firma" 
                          name="firma"
                          placeholder="Mustermann Dach GmbH"
                          data-testid="input-firma"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                          id="email" 
                          type="email"
                          name="email"
                          placeholder="max@mustermann.de"
                          data-testid="input-email"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="telefon">Telefon</Label>
                        <Input
                          id="telefon" 
                          type="tel"
                          name="telefon"
                          placeholder="+49 123 456789"
                          data-testid="input-telefon"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mitarbeiter">Anzahl Mitarbeiter</Label>
                        <Input
                          id="mitarbeiter" 
                          name="mitarbeiter"
                          placeholder="z.B. 5"
                          data-testid="input-mitarbeiter"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="nachricht">Ihre Nachricht *</Label>
                        <Textarea
                          id="nachricht" 
                          rows={6}
                          name="nachricht"
                          placeholder="Beschreiben Sie kurz, welche Software-Lösung Sie suchen oder welche Fragen Sie haben..."
                          data-testid="textarea-nachricht"
                        />
                      </div>

                      <div className="text-sm text-muted-foreground">
                        * Pflichtfelder
                      </div>

                      <Button 
                        size="lg" 
                        className="w-full"
                        data-testid="button-submit"
                      >
                        Nachricht senden
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben. 
                        Weitere Informationen finden Sie in unserer Datenschutzerklärung.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/30">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-cta-title">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Viele Antworten finden Sie bereits in unserem FAQ-Bereich. 
              Schauen Sie dort gerne erst einmal vorbei.
            </p>
            <Button size="lg" variant="outline" data-testid="button-cta-faq">
              Zu den häufig gestellten Fragen
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
