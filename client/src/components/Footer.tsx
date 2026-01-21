import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground mb-4">
              <span className="text-lg font-bold">DACH</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Unabhängiger Vergleich von Dachdecker-Software für Dach, Fassade und PV.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Themen</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/funktionen" className="hover:text-foreground transition-colors" data-testid="link-footer-funktionen">
                  Funktionen
                </Link>
              </li>
              <li>
                <Link href="/preise" className="hover:text-foreground transition-colors" data-testid="link-footer-preise">
                  Preismodelle
                </Link>
              </li>
              <li>
                <Link href="/vergleich" className="hover:text-foreground transition-colors" data-testid="link-footer-vergleich">
                  Software-Vergleich
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors" data-testid="link-footer-faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kategorien</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/cloud" className="hover:text-foreground transition-colors" data-testid="link-footer-cloud">
                  Cloud-Lösungen
                </Link>
              </li>
              <li>
                <Link href="/mobile" className="hover:text-foreground transition-colors" data-testid="link-footer-mobile">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/wartung" className="hover:text-foreground transition-colors" data-testid="link-footer-wartung">
                  Wartungssoftware
                </Link>
              </li>
              <li>
                <Link href="/kleine-betriebe" className="hover:text-foreground transition-colors" data-testid="link-footer-kleine">
                  Kleine Betriebe
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/impressum" className="hover:text-foreground transition-colors" data-testid="link-footer-impressum">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-foreground transition-colors" data-testid="link-footer-datenschutz">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-foreground transition-colors" data-testid="link-footer-kontakt">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 Dachdecker-Software-Vergleich.de. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
