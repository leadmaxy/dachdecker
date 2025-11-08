import FAQSection from '../FAQSection';

export default function FAQSectionExample() {
  const mockFAQ = [
    {
      topic: "Cloud",
      question: "Ist Cloud-Software im Handwerk sicher?",
      answer: "Ja, wenn sie DSGVO-konform betrieben wird und Serverstandorte in Deutschland hat."
    },
    {
      topic: "Mobile",
      question: "Kann ich Zeiterfassung offline nutzen?",
      answer: "Ja, viele mobile Apps synchronisieren Daten später automatisch."
    },
    {
      topic: "Wartung",
      question: "Wie automatisiere ich Wartungsverträge?",
      answer: "Über digitale Wartungszyklen und Terminvorlagen im Wartungsmodul."
    }
  ];

  return <FAQSection items={mockFAQ} />;
}
