import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ContentTopicCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
}

export default function ContentTopicCard({
  id,
  title,
  category,
  description,
  icon: Icon,
}: ContentTopicCardProps) {
  return (
    <Link href={`/thema/${id}`}>
      <Card className="hover-elevate active-elevate-2 transition-all cursor-pointer h-full" data-testid={`card-topic-${id}`}>
        <CardHeader className="space-y-0 pb-4">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary flex-shrink-0">
              <Icon className="h-5 w-5" />
            </div>
            <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${category.toLowerCase()}`}>
              {category}
            </Badge>
          </div>

          <CardTitle className="text-lg mb-2" data-testid={`text-topic-title-${id}`}>
            {title}
          </CardTitle>
          
          <CardDescription className="text-sm leading-relaxed" data-testid={`text-topic-description-${id}`}>
            {description}
          </CardDescription>

          <div className="flex items-center gap-1 text-sm text-primary font-medium pt-3">
            <span>Mehr erfahren</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
