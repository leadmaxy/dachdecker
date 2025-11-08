import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  topic: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

export default function FAQSection({ title = "Häufig gestellte Fragen", items }: FAQSectionProps) {
  return (
    <section className="py-12" data-testid="section-faq">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-testid="text-faq-title">
          {title}
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="hover:no-underline py-4" data-testid={`faq-question-${index}`}>
                <div className="flex items-center gap-3 text-left">
                  <Badge variant="secondary" className="text-xs flex-shrink-0" data-testid={`badge-topic-${index}`}>
                    {item.topic}
                  </Badge>
                  <span className="font-medium">{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4" data-testid={`faq-answer-${index}`}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
