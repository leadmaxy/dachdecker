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
      description: "Zeiterfassung und Auftragsabwicklung direkt vom Smartphone, auch offline nutzbar."
    },
    {
      icon: "integration" as const,
      title: "Schnittstellen",
      description: "Integration mit DATEV, DATANORM und weiteren branchenüblichen Systemen."
    },
    {
      icon: "time" as const,
      title: "Zeiterfassung",
      description: "Erfassen Sie Arbeitszeiten projektbezogen und optimieren Sie Ihre Kalkulation."
    },
    {
      icon: "maintenance" as const,
      title: "Wartungsmodul",
      description: "Digitale Wartungsplanung mit automatischen Erinnerungen und Terminvorlagen."
    },
    {
      icon: "default" as const,
      title: "DSGVO-konform",
      description: "Erfüllt alle deutschen Datenschutzanforderungen mit Serverstandort Deutschland."
    }
  ];

  return (
    <IllustratedFeatureGrid
      title="Funktionen moderner SHK-Software"
      features={mockFeatures}
    />
  );
}
