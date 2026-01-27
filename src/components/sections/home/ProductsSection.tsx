"use client";

import Link from "next/link";
import Image from "next/image";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import { PRODUCT_IMAGES } from "@/data/product-assets";

export function ProductsSection({ locale }: { locale: Locale }) {
  const products = [
    {
      id: "adva-iron",
      name: t("products.advaIron.name", locale),
      description: t("products.advaIron.description", locale),
      badge: t("products.advaIron.badge", locale),
      imageSrc: PRODUCT_IMAGES["adva-iron"],
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    },
    {
      id: "adva-biotics",
      name: t("products.advaBiotics.name", locale),
      description: t("products.advaBiotics.description", locale),
      badge: t("products.advaBiotics.badge", locale),
      imageSrc: PRODUCT_IMAGES["adva-biotics"],
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      id: "aclavcare",
      name: t("products.aclavcare.name", locale),
      description: t("products.aclavcare.description", locale),
      badge: t("products.aclavcare.badge", locale),
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    },
    {
      id: "mozincare",
      name: t("products.mozincare.name", locale),
      description: t("products.mozincare.description", locale),
      badge: t("products.mozincare.badge", locale),
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("products.title", locale)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {locale === "mn"
              ? "Хүүхдийн эрүүл мэндэд дэмжлэг үзүүлэх чанартай бүтээгдэхүүнүүд"
              : "Quality products supporting children's health"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                  {product.imageSrc ? (
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Package className="h-16 w-16 text-primary/40" />
                    </div>
                  )}
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
                  <Link href={`/products/${product.id}`}>{t("products.learnMore", locale)}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
