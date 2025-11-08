import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Datenschutz() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-bold mb-8" data-testid="text-title">
            Datenschutzerklärung
          </h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>1. Datenschutz auf einen Blick</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <h3 className="text-lg font-semibold mb-3">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              </p>
              
              <h3 className="text-lg font-semibold mb-3">Datenerfassung auf dieser Website</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" 
                in dieser Datenschutzerklärung entnehmen.
              </p>
              
              <p className="text-muted-foreground mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              
              <p className="text-muted-foreground">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, 
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>2. Hosting</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              
              <h3 className="text-lg font-semibold mb-3">Externes Hosting</h3>
              <p className="text-muted-foreground mb-4">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
                Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
              </p>
              
              <p className="text-muted-foreground">
                Das Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen 
                und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, 
                schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen 
                professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>3. Allgemeine Hinweise und Pflichtinformationen</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <h3 className="text-lg font-semibold mb-3">Datenschutz</h3>
              <p className="text-muted-foreground mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den 
                gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              
              <h3 className="text-lg font-semibold mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-muted-foreground mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              
              <p className="text-muted-foreground mb-4">
                SHK-Software-Vergleich.de<br />
                Max Mustermann<br />
                Musterstraße 123<br />
                12345 Musterstadt<br />
                Telefon: +49 (0) 123 456789<br />
                E-Mail: info@shk-software-vergleich.de
              </p>
              
              <p className="text-xs text-muted-foreground/70 mb-4 pt-2 border-t">
                Hinweis: Dies sind Beispieldaten. Für produktiven Einsatz mit eigenen Firmendaten ersetzen.
              </p>
              
              <p className="text-muted-foreground mb-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein 
                oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von 
                personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
              
              <h3 className="text-lg font-semibold mb-3">Speicherdauer</h3>
              <p className="text-muted-foreground mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer 
                genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck 
                für die Datenverarbeitung entfällt.
              </p>
              
              <h3 className="text-lg font-semibold mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="text-muted-foreground">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung 
                möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. 
                Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom 
                Widerruf unberührt.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>4. Datenerfassung auf dieser Website</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <h3 className="text-lg font-semibold mb-3">Server-Log-Dateien</h3>
              <p className="text-muted-foreground mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
                Dies sind:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              
              <p className="text-muted-foreground mb-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
              
              <p className="text-muted-foreground">
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. 
                Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien 
                Darstellung und der Optimierung seiner Website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Ihre Rechte</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground mb-4">
                Sie haben jederzeit das Recht auf:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
                <li>Berichtigung unrichtiger personenbezogener Daten</li>
                <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten</li>
                <li>Einschränkung der Datenverarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten</li>
                <li>Beschwerde bei einer Aufsichtsbehörde</li>
              </ul>
              
              <p className="text-muted-foreground">
                Wenn Sie von einem dieser Rechte Gebrauch machen möchten, wenden Sie sich 
                bitte an uns unter den oben angegebenen Kontaktdaten.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
