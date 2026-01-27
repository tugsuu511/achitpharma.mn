"use client";

import * as React from "react";
import { useParams, notFound } from "next/navigation";

import { ProductDetailBackground } from "@/components/sections/product-detail/ProductDetailBackground";
import { ProductImagePane } from "@/components/sections/product-detail/ProductImagePane";
import { ProductInfoPane } from "@/components/sections/product-detail/ProductInfoPane";
import { getProductById } from "@/data/product-details";

export default function ProductDetailPage() {
  const params = useParams();

  // 1. Resolve Product ID
  const idStr = Array.isArray(params.id) ? params.id[0] : params.id;
  const product = getProductById(idStr || "");

  if (!product) {
    return notFound();
  }

  return (
    <div className="relative min-h-screen w-full font-sans text-slate-800">
      <ProductDetailBackground />

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen flex-col md:flex-row">
        <ProductImagePane product={product} />
        <ProductInfoPane product={product} />
      </div>
    </div>
  );
}
