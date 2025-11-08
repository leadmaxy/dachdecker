import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title?: string;
  features: Feature[];
}

export default function FeatureGrid({ title, features }: FeatureGridProps) {
  return (
    <section className="py-12" data-testid="section-features">
      <div className="container mx-auto max-w-7xl px-4">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-features-title">
            {title}
          </h2>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} data-testid={`card-feature-${index}`}>
              <CardHeader className="space-y-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <CardTitle className="text-xl mb-2" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </CardTitle>
                
                <CardDescription className="text-sm leading-relaxed" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
