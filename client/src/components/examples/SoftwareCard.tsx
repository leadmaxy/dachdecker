import SoftwareCard from '../SoftwareCard';

export default function SoftwareCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <SoftwareCard
        name="Labelwin"
        provider="M-SOFT"
        description="Umfassende Lösung für Dachdeckerbetriebe mit starkem Fokus auf Angebotswesen und Auftragsbearbeitung."
        priceRange="ab 999 EUR"
        features={[
          "Mobile Zeiterfassung",
          "DATEV-Schnittstelle",
          "Inspektionsmodul",
          "Cloud-fähig"
        ]}
        badges={["Cloud", "Mobile", "DSGVO"]}
        recommended={true}
      />
    </div>
  );
}
