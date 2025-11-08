import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface ComparisonItem {
  feature: string;
  cloud: boolean | string;
  onPremise: boolean | string;
}

interface ComparisonTableProps {
  title: string;
  items: ComparisonItem[];
}

export default function ComparisonTable({ title, items }: ComparisonTableProps) {
  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-primary mx-auto" data-testid="icon-check" />
      ) : (
        <X className="h-5 w-5 text-muted-foreground mx-auto" data-testid="icon-x" />
      );
    }
    return <span className="text-sm" data-testid="text-cell-value">{value}</span>;
  };

  return (
    <Card data-testid="card-comparison-table">
      <CardHeader>
        <CardTitle data-testid="text-comparison-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold text-sm" data-testid="header-feature">
                  Merkmal
                </th>
                <th className="text-center py-3 px-4 font-semibold text-sm" data-testid="header-cloud">
                  Cloud
                </th>
                <th className="text-center py-3 px-4 font-semibold text-sm" data-testid="header-onpremise">
                  On-Premise
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b last:border-0" data-testid={`row-${index}`}>
                  <td className="py-3 px-4 text-sm" data-testid={`feature-${index}`}>
                    {item.feature}
                  </td>
                  <td className="py-3 px-4 text-center" data-testid={`cloud-${index}`}>
                    {renderCell(item.cloud)}
                  </td>
                  <td className="py-3 px-4 text-center" data-testid={`onpremise-${index}`}>
                    {renderCell(item.onPremise)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
