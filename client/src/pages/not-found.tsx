import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-muted-foreground mb-2">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Seite nicht gefunden</h2>
          <p className="text-muted-foreground">
            Die von Ihnen gesuchte Seite existiert leider nicht.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Zur Startseite
            </Button>
          </Link>
          <Link href="/vergleich">
            <Button variant="outline" className="w-full sm:w-auto">
              <Search className="mr-2 h-4 w-4" />
              Software vergleichen
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
