import ContentTopicCard from '../ContentTopicCard';
import { Cloud } from 'lucide-react';

export default function ContentTopicCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <ContentTopicCard
        id="cloud-vs-onprem"
        title="Cloud vs. On-Premise"
        category="Vergleich"
        description="Welche Lösung passt für SHK-Betriebe? Vergleichen Sie Flexibilität, Kosten und Sicherheit."
        icon={Cloud}
      />
    </div>
  );
}
