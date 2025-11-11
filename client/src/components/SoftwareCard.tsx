import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { routes, createSoftwareSlug } from "@/lib/navigation";

interface SoftwareCardProps {
  name: string;
  provider: string;
  description: string;
  priceRange: string;
  features: string[];
  badges?: string[];
  recommended?: boolean;
  slug?: string;
}

export default function SoftwareCard({
  name,
  provider,
  description,
  priceRange,
  features,
  badges = [],
  recommended = false,
  slug,
}: SoftwareCardProps) {
  return (
    <Card className={`relative ${recommended ? 'border-primary' : ''}`} data-testid={`card-software-${name.toLowerCase().replace(/\s/g, '-')}`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground" data-testid="badge-recommended">
            Empfohlen
          </Badge>
        </div>
      )}
      
      <CardHeader className="space-y-0 pb-2">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            <CardTitle className="text-xl" data-testid={`text-software-name-${name.toLowerCase().replace(/\s/g, '-')}`}>{name}</CardTitle>
            <CardDescription className="mt-1" data-testid={`text-software-provider-${provider.toLowerCase().replace(/\s/g, '-')}`}>{provider}</CardDescription>
          </div>
        </div>
        
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-feature-${index}`}>
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground" data-testid="text-software-description">
          {description}
        </p>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2" data-testid={`feature-${index}`}>
              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <div className="text-sm text-muted-foreground mb-1">Preis</div>
          <div className="text-lg font-semibold" data-testid="text-software-price">
            {priceRange}
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full" variant={recommended ? "default" : "outline"} data-testid="button-details">
          <Link href={routes.software(slug || createSoftwareSlug(name))}>
            Details ansehen
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
