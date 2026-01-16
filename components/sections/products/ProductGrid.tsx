"use client";

import Link from "next/link";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

interface Product {
  id: string;
  name: string;
  description: string;
  badge: string;
  color: string;
  category: string;
  ageRange: string;
  formFactor: string;
}

interface ProductGridProps {
  locale: Locale;
  products: Product[];
  empty?: boolean;
}

export function ProductGrid({ locale, products, empty }: ProductGridProps) {
  if (empty || products.length === 0) {
    return (
      <Alert>
        <AlertDescription>
          <div className="text-center py-8">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              {t("productsPage.empty.title", locale)}
            </h3>
            <p className="text-muted-foreground">
              {t("productsPage.empty.description", locale)}
            </p>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 mb-4 flex items-center justify-center">
              <Package className="h-16 w-16 text-primary/40" />
            </div>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <Badge className={product.color}>{product.badge}</Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>{product.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href={`/products#${product.id}`}>{t("products.learnMore", locale)}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
