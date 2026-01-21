import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Vergleich from "@/pages/Vergleich";
import FAQ from "@/pages/FAQ";
import Funktionen from "@/pages/Funktionen";
import Preise from "@/pages/Preise";
import Cloud from "@/pages/Cloud";
import Mobile from "@/pages/Mobile";
import Wartung from "@/pages/Wartung";
import KleineBetriebe from "@/pages/KleineBetriebe";
import Datenschutz from "@/pages/Datenschutz";
import Impressum from "@/pages/Impressum";
import Kontakt from "@/pages/Kontakt";
import Thema from "@/pages/Thema";
import SoftwareDetail from "@/pages/SoftwareDetail";
import Danke from "@/pages/Danke";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/vergleich" component={Vergleich} />
      <Route path="/faq" component={FAQ} />
      <Route path="/funktionen" component={Funktionen} />
      <Route path="/preise" component={Preise} />
      <Route path="/cloud" component={Cloud} />
      <Route path="/mobile" component={Mobile} />
      <Route path="/wartung" component={Wartung} />
      <Route path="/kleine-betriebe" component={KleineBetriebe} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/danke" component={Danke} />
      <Route path="/thema/:id" component={Thema} />
      <Route path="/software/:slug" component={SoftwareDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </WouterRouter>
    </QueryClientProvider>
  );
}
