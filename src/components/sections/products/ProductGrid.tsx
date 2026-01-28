"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import type { Product } from "@/types";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { Button } from "@/components/ui/button";

export function ProductGrid({
  locale,
  products,
  empty,
}: {
  locale: Locale;
  products: Product[];
  empty: boolean;
}) {
  const [warningId, setWarningId] = useState<string | null>(null);
  const warningTimerRef = useRef<number | null>(null);

  const showWarningFor = (id: string) => {
    setWarningId(id);
    if (warningTimerRef.current) {
      window.clearTimeout(warningTimerRef.current);
    }
    warningTimerRef.current = window.setTimeout(() => {
      setWarningId(null);
      warningTimerRef.current = null;
    }, 2000);
  };

  if (empty) {
    return (
      <div className="rounded-2xl border bg-muted/30 p-10 text-center">
        <div className="text-lg font-semibold">
          {t("products.emptyTitle", locale) ?? "No products found"}
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          {t("products.emptyDesc", locale) ?? "Try changing your filters or search."}
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="group rounded-2xl border bg-background p-4 shadow-sm transition hover:shadow-md"
        >
          <Link href={`/products/${product.id}`} className="block">
            {product.imageSrc ? (
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt ?? product.name}
                  fill
                  className="object-cover p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ) : (
              <div className="w-full aspect-[4/3] rounded-2xl bg-muted" />
            )}

            <div className="mt-4 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="truncate text-base font-semibold">
                  {product.name}
                </div>
                <div className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {product.description}
                </div>
              </div>

              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${product.color}`}
              >
                {product.badge}
              </span>
            </div>
          </Link>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border px-2 py-1">
              {product.category}
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="text-base font-extrabold text-slate-900">
                {product.price ?? "0₮"}
              </div>
              <div
                className={`text-xs text-red-600 leading-4 ${
                  warningId === product.id ? "opacity-100" : "opacity-0"
                }`}
              >
                Энэ бүтээгдэхүүн жороор олгодог тул захиалах боломжгүй.
              </div>
            </div>
            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                price: product.price ?? "0",
                imageSrc: product.imageSrc,
                requiresPrescription: product.requiresPrescription,
              }}
              onPrescriptionAttempt={() => showWarningFor(product.id)}
            />
          </div>

          <div className="mt-4">
            <Button asChild variant="outline" className="w-full">
              <Link href={`/products/${product.id}`}>
                {t("products.learnMore", locale) ?? "View details"}
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
