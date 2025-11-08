import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import cloudIcon from "@assets/generated_images/Cloud_software_icon_illustration_b558c660.png";
import mobileIcon from "@assets/generated_images/Mobile_app_icon_illustration_b4e37a03.png";
import integrationIcon from "@assets/generated_images/Integration_icon_illustration_bc89c7b3.png";
import maintenanceIcon from "@assets/generated_images/Maintenance_tools_icon_illustration_a47b2785.png";

interface Category {
  id: string;
  title: string;
  description: string;
  icon: "cloud" | "mobile" | "integration" | "maintenance";
  badge: string;
}

const iconMap = {
  cloud: cloudIcon,
  mobile: mobileIcon,
  integration: integrationIcon,
  maintenance: maintenanceIcon,
};

interface VisualCategorySectionProps {
  title: string;
  subtitle?: string;
  categories: Category[];
}

export default function VisualCategorySection({ title, subtitle, categories }: VisualCategorySectionProps) {
  return (
    <section className="py-16 bg-background" data-testid="section-visual-categories">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-section-title">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-section-subtitle">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/kategorie/${category.id}`}>
              <Card 
                className="hover-elevate active-elevate-2 transition-all cursor-pointer h-full group border-2 border-transparent hover:border-primary/20"
                data-testid={`card-category-${category.id}`}
              >
                <CardHeader className="space-y-0 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="relative w-20 h-20 flex items-center justify-center rounded-lg bg-primary/5 p-4 group-hover:bg-primary/10 transition-colors">
                      <img 
                        src={iconMap[category.icon]} 
                        alt={category.title}
                        className="w-full h-full object-contain"
                        data-testid={`img-category-icon-${category.id}`}
                      />
                    </div>
                  </div>

                  <Badge 
                    variant="secondary" 
                    className="text-xs mb-3 mx-auto" 
                    data-testid={`badge-category-${category.id}`}
                  >
                    {category.badge}
                  </Badge>

                  <CardTitle className="text-lg mb-3" data-testid={`text-category-title-${category.id}`}>
                    {category.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm leading-relaxed min-h-[3rem]" data-testid={`text-category-description-${category.id}`}>
                    {category.description}
                  </CardDescription>

                  <div className="flex items-center justify-center gap-1 text-sm text-primary font-medium pt-4 group-hover:gap-2 transition-all">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
