import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, ExternalLink } from "lucide-react";
import { routes } from "@/lib/navigation";

// Static software data - in a real app, this would come from an API or database
const softwareDatabase = {
  labelwin: {
    name: "Labelwin",
    provider: "M-SOFT",
    description: "Umfassende Lösung für Dachdeckerbetriebe mit starkem Fokus auf Angebotswesen und Auftragsbearbeitung.",
    longDescription: "Labelwin ist eine professionelle Handwerkersoftware, die speziell für die Anforderungen von Dachdeckerbetrieben entwickelt wurde. Die Software bietet eine vollständige Lösung von der Angebotserstellung über die Auftragsabwicklung bis zur Rechnungsstellung.",
    priceRange: "ab 999 EUR",
    features: [
      "Mobile Zeiterfassung für Teams",
      "DATEV-Schnittstelle für nahtlose Buchhaltungsintegration",
      "Wartungsmodul mit automatischer Erinnerung",
      "Cloud-fähig für Zugriff von überall",
      "Digitale Auftragsplanung und -verwaltung",
      "Materialverwaltung und Lagerhaltung",
      "Angebotserstellung mit Vorlagen",
      "Rechnungsstellung und Mahnwesen"
    ],
    badges: ["Cloud", "Mobile", "DSGVO"],
    recommended: true,
    website: "https://www.m-soft.de",
  },
  pds: {
    name: "PDS",
    provider: "PDS GmbH",
    description: "Etablierte Software mit Fokus auf Integration und Schnittstellen zu anderen Systemen.",
    longDescription: "PDS bietet eine umfassende Handwerkersoftware mit hervorragenden Integrationsmöglichkeiten. Die Software lässt sich nahtlos in bestehende IT-Infrastrukturen einbinden und kommuniziert mit allen wichtigen Branchensystemen.",
    priceRange: "ab 39 EUR/Monat",
    features: [
      "GAEB/STLB-Bau für Leistungsverzeichnisse",
      "Hersteller- und Großhandelsschnittstellen",
      "Professionelles Angebotswesen",
      "Projektmanagement-Funktionen",
      "Cloud-basierte Lösung",
      "Multi-User-Zugriff",
      "Dokumentenmanagement",
      "Kundenverwaltung (CRM)"
    ],
    badges: ["Cloud", "Integration"],
    recommended: false,
    website: "https://www.pds.de",
  },
  heizmobil: {
    name: "DachMobil",
    provider: "SoftTech",
    description: "Spezialisiert auf mobile Lösungen für Servicetechniker im Außendienst.",
    longDescription: "DachMobil ist die ideale Lösung für Dachdeckerbetriebe, die viel im Außendienst tätig sind. Die App funktioniert auch offline und synchronisiert Daten automatisch, sobald eine Internetverbindung verfügbar ist.",
    priceRange: "ab 29 EUR/Monat",
    features: [
      "Offline-Nutzung auch ohne Internetverbindung",
      "GPS-Tracking für Einsatzplanung",
      "Foto-Dokumentation direkt im Auftrag",
      "Digitale Unterschriften auf dem Tablet",
      "Zeiterfassung vor Ort",
      "Serviceberichte erstellen",
      "Ersatzteilbestellung unterwegs",
      "Push-Benachrichtigungen für neue Aufträge"
    ],
    badges: ["Mobile", "Service"],
    recommended: false,
    website: "https://www.dachmobil.de",
  },
  sykasoft: {
    name: "Sykasoft",
    provider: "Sykasoft GmbH",
    description: "All-in-One Cloud-Lösung für Klein- und Mittelbetriebe mit KI-Unterstützung und Schwerpunkt auf Benutzerfreundlichkeit.",
    longDescription: "Sykasoft ist eine moderne, cloudbasierte Handwerkersoftware, die speziell für Dachdeckerbetriebe entwickelt wurde. Mit KI-gestützten Funktionen für automatische Arbeitsbericht-Erstellung und intuitiver Bedienung bietet Sykasoft eine umfassende Lösung für digitales Arbeiten. Die Software verbindet Büro und Baustelle nahtlos und ermöglicht vollständiges mobiles Arbeiten.",
    priceRange: "ab 39 EUR/Monat",
    features: [
      "KI-gestützte Arbeitsbericht-Erstellung",
      "Cloud & Mobile App (iOS/Android)",
      "GAEB/STLB-Bau Integration",
      "Angebots- und Rechnungserstellung",
      "Digitales Bautagebuch mit Unterschriften",
      "Zeiterfassung & Projektmanagement",
      "DATEV-Schnittstelle & E-Rechnung",
      "14 Tage kostenlose Testphase"
    ],
    badges: ["Cloud", "Mobile", "KI", "DSGVO"],
    recommended: true,
    website: "https://www.sykasoft.de",
  },
  baufaktura: {
    name: "BauFaktura",
    provider: "BauFaktura GmbH",
    description: "Spezialisierte Bau- und Dachdecker-Software mit starkem Fokus auf Großhandelsanbindung und Kalkulation.",
    longDescription: "BauFaktura ist eine professionelle Softwarelösung für das Bauhandwerk und Dachdeckerbetriebe mit besonderem Schwerpunkt auf präzise Kalkulation und nahtlose Großhandelsintegration. Die Software bietet umfassende Funktionen für Auftragsabwicklung, Material- und Projektmanagement sowie Zeiterfassung. Mit über 20 Jahren Erfahrung ist BauFaktura eine bewährte Lösung für mittelständische Handwerksbetriebe.",
    priceRange: "ab 79 EUR/Monat",
    features: [
      "Umfassende Kalkulationsfunktionen",
      "GAEB/STLB-Bau Integration",
      "GAEB-Import/Export für Ausschreibungen",
      "Materialverwaltung & Lagerhaltung",
      "Mobile Zeiterfassung",
      "Projektmanagement & Bautagebuch",
      "DATEV-Export & ZUGFeRD",
      "Wartungsplanung für Serviceaufträge"
    ],
    badges: ["Cloud", "Desktop", "GAEB"],
    recommended: false,
    website: "https://www.baufaktura.de",
  },
  craftnote: {
    name: "Craftnote",
    provider: "Craftnote GmbH",
    description: "Moderne App-First-Lösung für digitale Baustellendokumentation und Projektmanagement.",
    longDescription: "Craftnote ist eine innovative, mobile-first Handwerkersoftware, die sich auf digitale Baustellendokumentation und Projektmanagement spezialisiert hat. Die benutzerfreundliche App ermöglicht es Dachdeckerbetrieben, Baustellen komplett digital zu dokumentieren, Aufgaben zu verwalten und mit dem Team in Echtzeit zu kommunizieren. Besonders geeignet für Betriebe, die Wert auf moderne, intuitive Software legen.",
    priceRange: "ab 39 EUR/Monat",
    features: [
      "Mobile App (iOS & Android)",
      "Digitale Baustellendokumentation mit Fotos",
      "Aufgabenverwaltung & Checklisten",
      "Team-Chat & Kommunikation",
      "Zeiterfassung direkt vor Ort",
      "Cloud-Synchronisation",
      "Digitale Unterschriften",
      "Offline-Funktionalität"
    ],
    badges: ["Mobile", "Cloud", "DSGVO"],
    recommended: true,
    website: "https://www.craftnote.de",
  },
  tooltime: {
    name: "ToolTime",
    provider: "ToolTime GmbH",
    description: "Preiswerte, benutzerfreundliche Cloud-Lösung speziell für Klein- und Mittelbetriebe.",
    longDescription: "ToolTime ist eine einfach zu bedienende Handwerkersoftware, die speziell für kleine und mittlere Dachdeckerbetriebe entwickelt wurde. Die Cloud-basierte Lösung bietet alle wichtigen Funktionen für die tägliche Arbeit zu einem attraktiven Preis-Leistungs-Verhältnis. Mit der mobilen App können Teams direkt von der Baustelle aus arbeiten und Daten mit dem Büro synchronisieren.",
    priceRange: "ab 29 EUR/Monat",
    features: [
      "Angebots- und Rechnungserstellung",
      "Mobile App für Außendienst",
      "Zeiterfassung & Terminplanung",
      "Digitales Aufmaß",
      "Kundenverwaltung (CRM)",
      "Lexware-Integration für Buchhaltung",
      "GAEB/STLB-Bau Schnittstelle",
      "14 Tage kostenlos testen"
    ],
    badges: ["Cloud", "Mobile", "Preis-Leistung"],
    recommended: true,
    website: "https://www.tooltime.app",
  },
  plancraft: {
    name: "Plancraft",
    provider: "Plancraft GmbH",
    description: "Innovative All-in-One-Lösung mit Fokus auf digitale Projektplanung und Auftragsabwicklung.",
    longDescription: "Plancraft ist eine moderne Handwerkersoftware, die alle Bereiche von der Projektplanung bis zur Abrechnung abdeckt. Die Software zeichnet sich durch ihre intuitive Bedienung und durchdachte Workflows aus. Besonders stark ist Plancraft in der digitalen Projektplanung und Materialverwaltung. Die Cloud-basierte Lösung ermöglicht es Teams, von überall aus zu arbeiten.",
    priceRange: "ab 49 EUR/Monat",
    features: [
      "Digitale Projektplanung",
      "Angebotserstellung mit Vorlagen",
      "Materialverwaltung & Bestellwesen",
      "Mobile App (iOS & Android)",
      "Zeiterfassung & Stundenzettel",
      "Rechnungsstellung & E-Rechnung",
      "GAEB/STLB-Bau Integration",
      "Kostenlose Testphase"
    ],
    badges: ["Cloud", "Mobile", "DSGVO"],
    recommended: false,
    website: "https://www.plancraft.de",
  },
  mfr: {
    name: "mfr",
    provider: "mfr Deutschland",
    description: "Field Service Management Software mit KI-gestützter Einsatzplanung für Außendienstfokus.",
    longDescription: "mfr ist eine cloudbasierte Field Service Management Software, die speziell für Dachdeckerbetriebe mit starkem Außendienstfokus entwickelt wurde. Die Software bietet über 100 Funktionen in einer Plattform und zeichnet sich durch KI-gestützte Einsatzplanung und Routenoptimierung aus. Ideal für Betriebe mit 5-500 Mitarbeitern im Außendienst, die ihre Prozesse von der Angebotsstellung bis zur Rechnung digitalisieren möchten.",
    priceRange: "ab 145 EUR/Monat",
    features: [
      "KI-gestützte Einsatzplanung & Routing",
      "Hersteller- und Großhandel-Integration",
      "Mobile App mit Offline-Funktion",
      "Digitale Checklisten & Serviceberichte",
      "Wartungsmanagement mit Automatisierung",
      "Kundenterminplaner mit KI",
      "Mobiles Warenlager im Fahrzeug",
      "DATEV & lexoffice Integration"
    ],
    badges: ["Cloud", "KI", "Field Service"],
    recommended: true,
    website: "https://www.mfr-deutschland.de",
  },
  officeon: {
    name: "OfficeOn",
    provider: "Bosch",
    description: "Benutzerfreundliche Handwerkersoftware von Bosch für Büro und Baustelle.",
    longDescription: "Bosch OfficeOn ist eine cloudbasierte Handwerkersoftware, die speziell für kleine und mittlere Dachdeckerbetriebe entwickelt wurde. Die Software verbindet Büro und Baustelle digital und zeichnet sich durch besondere Benutzerfreundlichkeit aus. Mit der Integration von GAEB/Herstellerkatalogen und der intuitiven mobilen App bietet OfficeOn eine schlanke, aber leistungsstarke Lösung.",
    priceRange: "ab 50 EUR/Monat",
    features: [
      "Web-App & Mobile App (iOS/Android)",
      "GAEB/Herstelleranbindung",
      "Angebots- & Rechnungserstellung",
      "E-Rechnung (ZUGFeRD, XRechnung)",
      "Digitale Zeiterfassung",
      "Baustellendokumentation mit Fotos",
      "DATEV & LexOffice Integration",
      "Offline-Fähigkeit"
    ],
    badges: ["Cloud", "Mobile", "Benutzerfreundlich"],
    recommended: true,
    website: "https://bosch-officeon.com",
  },
  cendas: {
    name: "CENDAS",
    provider: "CENDAS powered by Würth",
    description: "Spezialisierte Bausoftware für digitale Bauprojekte mit KI-Assistent.",
    longDescription: "CENDAS ist eine spezialisierte Bausoftware für Dachdeckerbetriebe, die von Würth unterstützt wird. Die Software digitalisiert Bauprojekte von der Planung über die Ausführung bis zur Dokumentation. Mit dem integrierten KI-Assistenten können Plankomponenten automatisch erkannt und Aufgaben erstellt werden. Ideal für Betriebe, die komplexe Bauprojekte digital managen möchten.",
    priceRange: "ab 199 EUR/Monat",
    features: [
      "KI-Assistent für Planerkennung",
      "Digitale Baupläne mit Offline-Zugriff",
      "Ticketsystem für Aufgabenverwaltung",
      "Echtzeit-Revision & Änderungsmanagement",
      "Mängelmanagement mit Fotodokumentation",
      "Digitales Bautagebuch",
      "Mobile App (iOS & Android)",
      "Dashboard mit SOLL-IST-Abgleich"
    ],
    badges: ["Cloud", "KI", "Bau"],
    recommended: false,
    website: "https://www.cendas.net",
  },
  sage50: {
    name: "Sage 50 Handwerk",
    provider: "Sage",
    description: "Etablierte kaufmännische Komplettlösung mit integrierter Buchhaltung.",
    longDescription: "Sage 50 Handwerk ist eine bewährte kaufmännische Softwarelösung für Handwerksbetriebe mit über 40 Jahren Markterfahrung. Die Software bietet einen umfassenden Funktionsumfang von der Auftragsbearbeitung über Warenwirtschaft bis zur integrierten Finanzbuchhaltung. Besonders geeignet für Betriebe bis 25 Mitarbeiter, die eine etablierte, zuverlässige Lösung mit starkem Support suchen.",
    priceRange: "ab 45 EUR/Monat",
    features: [
      "Vollständige Auftragsbearbeitung",
      "Integrierte Finanzbuchhaltung",
      "Warenwirtschaft & Lagerverwaltung",
      "GAEB/STLB-Bau Integration",
      "Mobile Projektmappe (Cloud)",
      "Service- & Wartungsplanung",
      "GAEB/XML-Import für Ausschreibungen",
      "E-Rechnungen (ZUGFeRD, XRechnung)"
    ],
    badges: ["Desktop", "Cloud", "Buchhaltung"],
    recommended: false,
    website: "https://www.sage.com/de-de/produkte/sage-50-handwerk",
  },
  dasprogramm: {
    name: "Das Programm",
    provider: "Das Programm",
    description: "Testsieger 2026 mit bestem Preis-Leistungs-Verhältnis und KI-Funktionen.",
    longDescription: "Das Programm ist eine cloudbasierte All-in-One-Handwerkersoftware, die 2026 als Testsieger (Note 1,3) ausgezeichnet wurde. Die Software bietet das beste Preis-Leistungs-Verhältnis am Markt und zeichnet sich durch KI-gestützte Funktionen wie automatische Arbeitsbericht-Erstellung aus. Ideal für Solo-Selbstständige bis mittlere Dachdeckerbetriebe, die eine benutzerfreundliche, kosteneffiziente Lösung suchen.",
    priceRange: "ab 40 EUR/Monat",
    features: [
      "KI-gestützte Arbeitsbericht-Erstellung",
      "Angebots- & Rechnungserstellung",
      "Digitales Aufmaß & Kalkulation",
      "Mobiles Bautagebuch mit Signatur",
      "Zeiterfassung & Stempeluhr",
      "GAEB/STLB-Bau Schnittstellen",
      "Cloud & Mobile App (iOS/Android)",
      "14 Tage kostenlos testen"
    ],
    badges: ["Cloud", "Mobile", "Testsieger", "KI"],
    recommended: true,
    website: "https://das-programm.io",
  },
  streit: {
    name: "Streit V.1",
    provider: "Streit Datentechnik",
    description: "Vollumfängliche ERP-Lösung mit integrierter Buchhaltung für anspruchsvolle Betriebe.",
    longDescription: "Streit V.1 ist eine vollumfängliche ERP-Handwerkersoftware mit über 40 Jahren Markterfahrung. Die Software bietet eine komplette Lösung inklusive integrierter Finanz- und Betriebsbuchhaltung. Besonders stark ist Streit V.1 in der Großhandelsanbindung und im Wartungsmanagement. Ideal für Dachdeckerbetriebe jeder Größe, die eine ausgereifte Komplettlösung mit allen Funktionen aus einer Hand suchen.",
    priceRange: "ab 95 EUR/Monat",
    features: [
      "Integrierte Finanzbuchhaltung",
      "Hersteller- und Großhandel-Integration",
      "Umfassendes Wartungsprogramm",
      "Mobile Apps (Monteur+, Zeit+, Lager+)",
      "Digitales Archiv (DMS) GoBD-konform",
      "Werkzeugverwaltung",
      "DATEV-Schnittstelle & E-Rechnung",
      "Kostenlose Nutzung für Existenzgründer"
    ],
    badges: ["Desktop", "ERP", "Buchhaltung"],
    recommended: false,
    website: "https://www.streit-software.de",
  },
  taifun: {
    name: "TAIFUN",
    provider: "TAIFUN Software",
    description: "Kaufmännische Komplettlösung mit über 35 Jahren Erfahrung und modularem Aufbau.",
    longDescription: "TAIFUN ist eine kaufmännische Komplettlösung für Handwerksbetriebe mit über 35 Jahren Entwicklungserfahrung. Die modular aufgebaute Software bietet tiefe Großhandelsintegration und spezialisierte Funktionen für Dachdeckerbetriebe. Mit über 20 Zusatzmodulen wächst TAIFUN mit den Anforderungen des Betriebs. Besonders geeignet für etablierte Dachdeckerbetriebe mit 3-50 Mitarbeitern.",
    priceRange: "ab 30 EUR/Monat",
    features: [
      "Open Masterdata für Echtzeit-Großhandelspreise",
      "Aufmaß-Tools-Integration",
      "Wartungsmanagement für Serviceaufträge",
      "Mobile App (iOS & Android)",
      "Ressourcenplanung für Mitarbeiter & Geräte",
      "GAEB/STLB-Bau & Herstellerintegration",
      "GAEB-Export für Ausschreibungen",
      "Über 20 Zusatzmodule verfügbar"
    ],
    badges: ["Desktop", "Cloud", "Modular"],
    recommended: false,
    website: "https://www.taifun-software.de",
  },
  hero: {
    name: "HERO",
    provider: "HERO Software",
    description: "Cloud-Handwerkersoftware mit bestem Mobile-App-Rating und starkem Dachdeckerfokus.",
    longDescription: "HERO ist eine cloudbasierte Handwerkersoftware, die als Testsieger in mehreren Vergleichen ausgezeichnet wurde. Die Software bietet eine ausgezeichnete mobile App und starke Integration mit Herstellern und Großhändlern. Mit automatischen Preiskatalog-Updates und Echtzeit-Synchronisation ist HERO ideal für Betriebe, die Wert auf moderne, cloud-native Software legen.",
    priceRange: "ab 59 EUR/Monat",
    features: [
      "Hersteller- und Großhandel-Integration",
      "Mobile App (iOS & Android) mit Top-Rating",
      "Automatische Preiskatalog-Updates",
      "Digitale Scheduling-Board (Gantt)",
      "Wartungs- & Servicevertragsverwaltung",
      "DATEV-Export & GAEB-Import/Export",
      "Warehouse Management",
      "14 Tage kostenlos testen"
    ],
    badges: ["Cloud", "Mobile", "Testsieger"],
    recommended: true,
    website: "https://hero-software.de",
  },
  craftboxx: {
    name: "Craftboxx",
    provider: "Craftboxx",
    description: "Schlanke, fokussierte Lösung für Einsatzplanung und Zeiterfassung zu fairem Preis.",
    longDescription: "Craftboxx ist eine spezialisierte Handwerkersoftware, die sich auf die Kernfunktionen Einsatzplanung, Zeiterfassung und Auftragsdokumentation konzentriert. Die Software verzichtet bewusst auf Angebots- und Rechnungserstellung, um eine schlanke, benutzerfreundliche Lösung zu bieten. Ideal für Klein- und Mittelbetriebe, die gezielt ihre Einsatzplanung digitalisieren möchten.",
    priceRange: "ab 10 EUR/Monat",
    features: [
      "Digitale Einsatzplanung mit Drag & Drop",
      "Kalender- & Kartenansicht für Routen",
      "Mobile App mit Offline-Funktion",
      "Sekundengenaue Zeiterfassung",
      "Digitale Abnahmeprotokolle mit Fotos",
      "Echtzeit-Synchronisation",
      "DSGVO-konform (deutsche Rechenzentren)",
      "Keine Vertragsbindung"
    ],
    badges: ["Cloud", "Mobile", "Preis-Leistung"],
    recommended: true,
    website: "https://www.craftboxx.de",
  },
  openhandwerk: {
    name: "openHandwerk",
    provider: "openHandwerk",
    description: "Cloud-basierte All-in-One-Lösung mit umfangreichen kostenlosen Schnittstellen.",
    longDescription: "openHandwerk ist eine cloud-basierte All-in-One-Handwerkersoftware aus Berlin mit besonderem Fokus auf Dachdeckerbetriebe. Die Software bietet über 18 kostenlose Schnittstellen zu Großhändlern und anderen Systemen. Mit GAEB, Herstellerintegration und KlarPris-Integration ermöglicht openHandwerk nahtlose Anbindung an die Dachdeckerbranche. Ideal für Betriebe mit 1-100+ Mitarbeitern.",
    priceRange: "ab 25 EUR/Monat",
    features: [
      "GAEB & Herstellerintegration",
      "KlarPris Webshop-Integration",
      "18+ kostenlose Schnittstellen",
      "Vollständige Auftragsabwicklung",
      "Mobile App mit Offline-Funktion",
      "Baustellendokumentation mit Fotos",
      "Digitale Zeiterfassung",
      "Nachkalkulation in Echtzeit"
    ],
    badges: ["Cloud", "Mobile", "Integration"],
    recommended: false,
    website: "https://openhandwerk.de",
  },
  lexware: {
    name: "Lexware Handwerk",
    provider: "Lexware",
    description: "Bewährte kaufmännische Software mit über 500.000 KMU-Kunden in Deutschland.",
    longDescription: "Lexware Handwerk ist eine etablierte Handwerkersoftware mit jahrzehntelanger Erfahrung und über 500.000 KMU-Kunden. Die Software bietet umfassende kaufmännische Funktionen von der Auftragsbearbeitung über Warenwirtschaft bis zu integrierten Buchhaltungsfunktionen. Mit GAEB/STLB-Bau und DATEV-Schnittstellen ist Lexware Handwerk speziell auf die Bedürfnisse von Dachdeckerbetrieben zugeschnitten.",
    priceRange: "ab 220 EUR/Jahr",
    features: [
      "Auftragsbearbeitung & Rechnungswesen",
      "GAEB/STLB-Bau Schnittstellen",
      "Aufmaßberechnung für präzise Kalkulation",
      "Teil- & Abschlagsrechnungen",
      "Warenwirtschaft & Lagerverwaltung",
      "E-Rechnung (ZUGFeRD, XRechnung)",
      "DATEV-Export für Steuerberater",
      "30 Tage kostenlos testen"
    ],
    badges: ["Desktop", "Etabliert"],
    recommended: false,
    website: "https://shop.lexware.de/lexware-handwerk-plus",
  },
  addison: {
    name: "ADDISON Handwerk",
    provider: "Wolters Kluwer",
    description: "Professionelle Betriebssoftware mit über 30 Jahren Entwicklung für anspruchsvolle Betriebe.",
    longDescription: "ADDISON Handwerk ist eine kaufmännische Betriebssoftware von Wolters Kluwer mit über 30 Jahren Entwicklungsgeschichte. Die Software richtet sich an anspruchsvolle Dachdeckerbetriebe und bietet umfassende Funktionen für alle kaufmännischen Prozesse. Mit Open Masterdata und Großhandelsintegration bietet ADDISON tiefe Branchenanbindung. Verfügbar als On-Premise oder ASP-Cloud-Version.",
    priceRange: "Preis auf Anfrage",
    features: [
      "Open Masterdata für Echtzeit-Artikeldaten",
      "Großhandel-Integration",
      "Umfassende Wartungsverwaltung",
      "GAEB-Schnittstelle für Ausschreibungen",
      "Finanzbuchhaltung integriert",
      "DATEV & Elster-Integration",
      "Dokumentenmanagement",
      "GoBD- und DSGVO-zertifiziert"
    ],
    badges: ["Desktop", "Cloud", "Enterprise"],
    recommended: false,
    website: "https://www.wolterskluwer.com/de-de/solutions/addison-handwerk",
  },
  sanderdoll: {
    name: "Celsius Office",
    provider: "Sander & Doll",
    description: "Branchenspezialisierte Dachdecker-Software mit starker Großhandelsanbindung.",
    longDescription: "Celsius Office von Sander & Doll ist eine spezialisierte Handwerkersoftware, die gezielt für Dachdeckerbetriebe entwickelt wurde. Die Software zeichnet sich durch besonders starke Großhandelsanbindung über OCI/Hersteller-Connect aus und bietet spezielle Funktionen wie Metallpreis-Management und Inspektionsplanung. Mit mobiler App und umfassenden Compliance-Funktionen ideal für professionelle Dachdeckerbetriebe.",
    priceRange: "Preis auf Anfrage",
    features: [
      "OCI/Hersteller-Connect für direkte Großhändler-Bestellung",
      "NE-Metall-Management mit Preisanpassung",
      "Wartungsintervall-Assistent",
      "Mobile App mit Offline-Funktion",
      "E-Rechnung (ZUGFeRD, XRechnung)",
      "GoBD- und GDPR-zertifiziert",
      "Digitale Checklisten & Protokolle",
      "GAEB/XML-Import für Ausschreibungen"
    ],
    badges: ["Desktop", "Cloud", "Dach-Spezialist"],
    recommended: false,
    website: "https://sander-doll.com/branchen/shk-software",
  },
  passtprime: {
    name: "PASST.prime",
    provider: "M-SOFT",
    description: "Modulare Handwerkersoftware mit über 30 Jahren Erfahrung und flexibler Anpassung.",
    longDescription: "PASST.prime ist eine modulare Handwerkersoftware von M-SOFT mit über 30 Jahren Entwicklungserfahrung. Die Software bietet rund 100 Module, Schnittstellen und Zusatzprogramme für maximale Flexibilität. Mit GAEB/STLB-Bau, Hersteller-Schnittstellen und Aufmaß-Integration ist PASST.prime speziell auf Dachdeckeranforderungen zugeschnitten. Der modulare Aufbau ermöglicht individuelle Anpassung an Betriebsgröße und Anforderungen.",
    priceRange: "Preis auf Anfrage",
    features: [
      "Rund 100 Module für individuelle Konfiguration",
      "GAEB/STLB-Bau & Hersteller-Schnittstelle",
      "Wartungsplanung mit automatischer Auftragserstellung",
      "Mobile Serviceauftragsabwicklung",
      "GAEB-Format für Leistungsverzeichnisse",
      "Zeiterfassung TIME4 (browserbasiert)",
      "ELO-Dokumentenmanagement (GoBD)",
      "Microsoft Office Integration"
    ],
    badges: ["Desktop", "Modular", "Anpassbar"],
    recommended: false,
    website: "https://www.msoft.de",
  },
};

type SoftwareSlug = keyof typeof softwareDatabase;

export default function SoftwareDetail() {
  const params = useParams();
  const slug = params.slug as SoftwareSlug;
  
  const software = softwareDatabase[slug];

  if (!software) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="container mx-auto max-w-2xl px-4 text-center">
            <h1 className="text-4xl font-bold mb-4" data-testid="text-not-found">
              Software nicht gefunden
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Die gewünschte Software-Lösung konnte nicht gefunden werden.
            </p>
            <Button asChild data-testid="button-back-home">
              <Link href={routes.home}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Startseite
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-8 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto max-w-5xl px-4">
            <Button asChild variant="ghost" className="mb-6" data-testid="button-back">
              <Link href={routes.home}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Übersicht
              </Link>
            </Button>

            <div className="mb-8">
              {software.recommended && (
                <Badge className="mb-4" data-testid="badge-recommended">
                  Empfohlen
                </Badge>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-software-name">
                {software.name}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4" data-testid="text-provider">
                von {software.provider}
              </p>

              {software.badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {software.badges.map((badge, index) => (
                    <Badge key={index} variant="secondary" data-testid={`badge-feature-${index}`}>
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Über {software.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-description">
                      {software.longDescription}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Funktionen & Features</CardTitle>
                    <CardDescription>
                      Alle wichtigen Funktionen im Überblick
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {software.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-2"
                          data-testid={`feature-${index}`}
                        >
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Preise</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Preis</div>
                      <div className="text-2xl font-bold" data-testid="text-price">
                        {software.priceRange}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button asChild className="w-full" data-testid="button-visit-website">
                        <a href={software.website} target="_blank" rel="noopener noreferrer">
                          Zur Anbieter-Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      
                      <Button asChild variant="outline" className="w-full" data-testid="button-contact">
                        <Link href={routes.kontakt}>
                          Beratung anfragen
                        </Link>
                      </Button>
                    </div>

                    <div className="text-xs text-muted-foreground pt-4 border-t">
                      <p>Kostenlose und unverbindliche Beratung zu allen Softwarelösungen</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Mehr erfahren</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button asChild variant="outline" className="w-full justify-start" data-testid="button-compare-all">
                      <Link href={routes.vergleich}>
                        Alle Software vergleichen
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start" data-testid="button-funktionen">
                      <Link href={routes.funktionen}>
                        Funktionen-Übersicht
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start" data-testid="button-preise">
                      <Link href={routes.preise}>
                        Preise vergleichen
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
