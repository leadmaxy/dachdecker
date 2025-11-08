import FeatureGrid from '../FeatureGrid';
import { Cloud, Smartphone, Settings, Clock, Database, Shield } from 'lucide-react';

export default function FeatureGridExample() {
  const mockFeatures = [
    {
      icon: Cloud,
      title: "Cloud-basiert",
      description: "Zugriff von überall, automatische Updates und sichere Datenhaltung in deutschen Rechenzentren."
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Zeiterfassung und Auftragsabwicklung direkt vom Smartphone, auch offline nutzbar."
    },
    {
      icon: Settings,
      title: "Schnittstellen",
      description: "Integration mit DATEV, DATANORM und weiteren branchenüblichen Systemen."
    },
    {
      icon: Clock,
      title: "Zeiterfassung",
      description: "Erfassen Sie Arbeitszeiten projektbezogen und optimieren Sie Ihre Kalkulation."
    },
    {
      icon: Database,
      title: "Lagerverwaltung",
      description: "Behalten Sie den Überblick über Material und optimieren Sie Ihre Lagerhaltung."
    },
    {
      icon: Shield,
      title: "DSGVO-konform",
      description: "Erfüllt alle deutschen Datenschutzanforderungen mit Serverstandort Deutschland."
    }
  ];

  return (
    <FeatureGrid
      title="Funktionen moderner SHK-Software"
      features={mockFeatures}
    />
  );
}
