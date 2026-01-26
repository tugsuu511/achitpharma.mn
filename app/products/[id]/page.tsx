"use client";

import * as React from "react";
import { useParams, notFound } from "next/navigation";

import { useLocale } from "@/lib/locale-store";
import { t } from "@/lib/i18n";

import { ProductDetailBackground } from "@/components/sections/product-detail/ProductDetailBackground";
import { ProductImagePane } from "@/components/sections/product-detail/ProductImagePane";
import { ProductInfoPane } from "@/components/sections/product-detail/ProductInfoPane";
import { ProductDetail } from "@/components/sections/product-detail/types";
import { PRODUCT_IMAGES } from "@/components/sections/product-detail/assets";


// --- Mock Data ---
const PRODUCTS_DB: Record<string, ProductDetail> = {
  "adva-iron": {
    id: "adva-iron",
    price: "45,000₮",
    imageSrc: PRODUCT_IMAGES["adva-iron"],
  },
  "adva-biotics": {
    id: "adva-biotics",
    price: "25,000₮",
    imageSrc: PRODUCT_IMAGES["adva-biotics"],
  },
  "aclavcare": {
    id: "aclavcare",
    price: "16,560₮",
    imageSrc: "/products/aclavcare.png",
  },
  "mozincare": {
    id: "mozincare",
    price: "16,650₮",
    imageSrc: "/products/mozincare.png",
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const locale = useLocale();

  // 1. Resolve Product ID
  const idStr = Array.isArray(params.id) ? params.id[0] : params.id;
  const product = PRODUCTS_DB[idStr as string];

  if (!product) {
    return notFound();
  }

  // 2. Safe i18n Helpers
  const getName = () => t(`products.${product.id}.name`, locale) || product.id;
  const getDescription = () => t(`products.${product.id}.description`, locale) || "Product description unavailable.";
  const getBadge = () => t(`products.${product.id}.badge`, locale) || "Premium";
  
  const getBenefits = () => [
    "Supports daily immunity",
    "Promotes healthy growth",
    "Boosts energy levels",
    "Scientifically formulated"
  ];

  return (
    <div className="relative min-h-screen w-full font-sans text-slate-800">
      <ProductDetailBackground />

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen flex-col md:flex-row">
        <ProductImagePane product={product} name={getName()} />
        
        <ProductInfoPane 
          product={product} 
          name={getName()} 
          description={getDescription()} 
          badge={getBadge()} 
          benefits={getBenefits()}
        />
      </div>
    </div>
  );
}
