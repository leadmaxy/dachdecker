import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-bold mb-8" data-testid="text-title">
            Impressum
          </h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Angaben gemäß § 5 TMG</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-muted-foreground">
                <p>SHK-Software-Vergleich.de</p>
                <p>Max Mustermann</p>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
                <p>Deutschland</p>
                <p className="text-xs text-muted-foreground/70 mt-4 pt-4 border-t">
                  Hinweis: Dies sind Beispieldaten. Für produktiven Einsatz mit eigenen Firmendaten ersetzen.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Kontakt</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-muted-foreground">
                <p>Telefon: +49 (0) 123 456789</p>
                <p>E-Mail: info@shk-software-vergleich.de</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Umsatzsteuer-ID</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE123456789 (Beispiel)
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Wirtschafts-ID</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Wirtschafts-Identifikationsnummer gemäß § 139c Abgabenordnung:<br />
                DE123456789012 (Beispiel)
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Aufsichtsbehörde</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground">
                <p>Handwerkskammer Musterstadt</p>
                <p>Handwerkerstraße 1, 12345 Musterstadt</p>
                <p className="mt-2">
                  Berufsbezeichnung: Fachberater für Handwerkersoftware<br />
                  Verliehen in: Deutschland
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Verbraucherstreitbeilegung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) 
                bereit:<br />
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              
              <p className="text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Haftungsausschluss</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Haftung für Inhalte</h3>
                <p className="text-muted-foreground">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind 
                  wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte 
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                  rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Haftung für Links</h3>
                <p className="text-muted-foreground">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
                  keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Urheberrecht</h3>
                <p className="text-muted-foreground">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
