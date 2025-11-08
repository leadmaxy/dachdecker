import VisualCategorySection from '../VisualCategorySection';

export default function VisualCategorySectionExample() {
  const mockCategories = [
    {
      id: "cloud",
      title: "Cloud-Lösungen",
      description: "Flexible Software mit Zugriff von überall",
      icon: "cloud" as const,
      badge: "Beliebt"
    },
    {
      id: "mobile",
      title: "Mobile Apps",
      description: "Zeiterfassung für unterwegs",
      icon: "mobile" as const,
      badge: "Praktisch"
    },
    {
      id: "integration",
      title: "Schnittstellen",
      description: "DATEV, DATANORM & mehr",
      icon: "integration" as const,
      badge: "Wichtig"
    },
    {
      id: "wartung",
      title: "Wartung",
      description: "Digitale Serviceplanung",
      icon: "maintenance" as const,
      badge: "Neu"
    }
  ];

  return (
    <VisualCategorySection
      title="Entdecken Sie die wichtigsten Kategorien"
      subtitle="Finden Sie die perfekte Lösung für Ihre Anforderungen"
      categories={mockCategories}
    />
  );
}
