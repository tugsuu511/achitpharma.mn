"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import { PRODUCT_IMAGES } from "@/data/product-assets";

export function ProductsSection({ locale }: { locale: Locale }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.max(node.clientWidth * 0.9, 320);
    node.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

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
    {
      id: "ondalenz-4mg",
      name: t("products.ondalenz4.name", locale),
      description: t("products.ondalenz4.description", locale),
      badge: t("products.ondalenz4.badge", locale),
      imageSrc: PRODUCT_IMAGES["ondalenz-4mg"],
      color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    },
    {
      id: "ondalenz-8mg",
      name: t("products.ondalenz8.name", locale),
      description: t("products.ondalenz8.description", locale),
      badge: t("products.ondalenz8.badge", locale),
      imageSrc: PRODUCT_IMAGES["ondalenz-8mg"],
      color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
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

        <div className="relative">
          <div className="mb-6 flex items-center justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => scrollByAmount("left")}
              aria-label={locale === "mn" ? "Зүүн тийш гүйлгэх" : "Scroll left"}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => scrollByAmount("right")}
              aria-label={locale === "mn" ? "Баруун тийш гүйлгэх" : "Scroll right"}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product) => (
              <Card
                key={product.id}
                className="flex min-w-[260px] flex-col snap-start transition-shadow hover:shadow-lg md:min-w-[320px] lg:min-w-[340px]"
              >
                <CardHeader>
                  <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                    {product.imageSrc ? (
                      <Image
                        src={product.imageSrc}
                        alt={product.name}
                        fill
                        className="object-contain p-6"
                        sizes="(max-width: 1024px) 80vw, 340px"
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
      </div>
    </section>
  );
}
