"use client";

import Image from "next/image";
import Link from "next/link";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import type { Product } from "@/types";
import { ProductDetail } from "@/types";

export function ProductGrid({
  locale,
  products,
  empty,
}: {
  locale: Locale;
  products: Product[];
  empty: boolean;
}) {
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
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group rounded-2xl border bg-background p-4 shadow-sm transition hover:shadow-md"
        >
          
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

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border px-2 py-1">
              {product.category}
            </span>
          </div>

          <div className="mt-4 text-sm font-medium underline-offset-4 group-hover:underline">
            {t("products.learnMore", locale) ?? "View details"}
          </div>
        </Link>
      ))}
    </div>
  );
}
