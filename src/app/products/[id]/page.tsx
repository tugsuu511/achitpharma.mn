"use client";

import * as React from "react";
import { notFound, useParams } from "next/navigation";

import { useLocale } from "@/lib/locale-store";

import { ProductDetailBackground } from "@/components/sections/product-detail/ProductDetailBackground";
import { ProductImagePane } from "@/components/sections/product-detail/ProductImagePane";
import { ProductInfoPane } from "@/components/sections/product-detail/ProductInfoPane";
import { resolveProductDetail } from "@/components/sections/product-detail/productDetailData";
import type { Product } from "@/types";

export default function ProductDetailPage() {
  const params = useParams();
  const locale = useLocale();

  const idStr = Array.isArray(params.id) ? params.id[0] : params.id;
  const resolved = resolveProductDetail(idStr as string, locale);

  if (!resolved) {
    return notFound();
  }

  const { product, name, description, badge, benefits } = resolved;

  return (
    <div className="relative min-h-screen w-full font-sans text-slate-800">
      <ProductDetailBackground />

      <div className="relative z-10 flex min-h-screen flex-col md:flex-row">
        <ProductImagePane product={product as Product} name={name} />

        <ProductInfoPane
          product={product as Product}
          name={name}
          description={description}
          badge={badge}
          benefits={benefits}
        />
      </div>
    </div>
  );
}
