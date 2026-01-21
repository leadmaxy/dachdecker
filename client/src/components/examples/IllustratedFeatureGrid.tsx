import IllustratedFeatureGrid from '../IllustratedFeatureGrid';

export default function IllustratedFeatureGridExample() {
  const mockFeatures = [
    {
      icon: "cloud" as const,
      title: "Cloud-basiert",
      description: "Zugriff von überall, automatische Updates und sichere Datenhaltung in deutschen Rechenzentren."
    },
    {
      icon: "mobile" as const,
      title: "Mobile App",
      description: "Zeiterfassung und Baustellendoku direkt vom Smartphone, auch offline nutzbar."
    },
    {
      icon: "integration" as const,
      title: "Schnittstellen",
      description: "Integration mit DATEV, GAEB, STLB-Bau und weiteren Branchenstandards."
    },
    {
      icon: "time" as const,
      title: "Kalkulation",
      description: "Dachflächen, Material und Lohn in Minuten kalkulieren."
    },
    {
      icon: "maintenance" as const,
      title: "Inspektion & Wartung",
      description: "Digitale Inspektionspläne mit Erinnerungen und Checklisten."
    },
    {
      icon: "default" as const,
      title: "DSGVO-konform",
      description: "Erfüllt alle deutschen Datenschutzanforderungen mit Serverstandort Deutschland."
    }
  ];

  return (
    <IllustratedFeatureGrid
      title="Funktionen moderner Dachdecker-Software"
      features={mockFeatures}
    />
  );
}
