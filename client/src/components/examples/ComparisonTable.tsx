import ComparisonTable from '../ComparisonTable';

export default function ComparisonTableExample() {
  const mockData = [
    { feature: "Flexibilität", cloud: true, onPremise: false },
    { feature: "Investitionskosten", cloud: "Gering", onPremise: "Hoch" },
    { feature: "Updates", cloud: "Automatisch", onPremise: "Manuell" },
    { feature: "Zugriff von überall", cloud: true, onPremise: false },
    { feature: "Kontrolle über Daten", cloud: false, onPremise: true },
  ];

  return (
    <div className="p-6 max-w-2xl">
      <ComparisonTable
        title="Cloud vs. On-Premise Vergleich"
        items={mockData}
      />
    </div>
  );
}
