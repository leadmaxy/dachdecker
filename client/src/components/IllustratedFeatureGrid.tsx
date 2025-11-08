import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import cloudIcon from "@assets/generated_images/Cloud_software_icon_illustration_b558c660.png";
import mobileIcon from "@assets/generated_images/Mobile_app_icon_illustration_b4e37a03.png";
import integrationIcon from "@assets/generated_images/Integration_icon_illustration_bc89c7b3.png";
import timeIcon from "@assets/generated_images/Time_tracking_icon_illustration_73e65d47.png";
import maintenanceIcon from "@assets/generated_images/Maintenance_tools_icon_illustration_a47b2785.png";

interface Feature {
  icon: "cloud" | "mobile" | "integration" | "time" | "maintenance" | "default";
  title: string;
  description: string;
}

interface IllustratedFeatureGridProps {
  title?: string;
  features: Feature[];
}

const iconMap = {
  cloud: cloudIcon,
  mobile: mobileIcon,
  integration: integrationIcon,
  time: timeIcon,
  maintenance: maintenanceIcon,
  default: cloudIcon,
};

export default function IllustratedFeatureGrid({ title, features }: IllustratedFeatureGridProps) {
  return (
    <section className="py-16 bg-card/30" data-testid="section-illustrated-features">
      <div className="container mx-auto max-w-7xl px-4">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-features-title">
            {title}
          </h2>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-elevate active-elevate-2 transition-all border-0 bg-background/80 backdrop-blur" 
              data-testid={`card-feature-${index}`}
            >
              <CardHeader className="space-y-0">
                <div className="mb-6 flex justify-center">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <img 
                      src={iconMap[feature.icon] || iconMap.default} 
                      alt={feature.title}
                      className="w-full h-full object-contain"
                      data-testid={`img-feature-icon-${index}`}
                    />
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-3 text-center" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </CardTitle>
                
                <CardDescription className="text-sm leading-relaxed text-center" data-testid={`text-feature-description-${index}`}>
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
