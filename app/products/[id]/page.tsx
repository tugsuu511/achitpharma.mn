"use client";

import * as React from "react";
import { useParams, notFound } from "next/navigation";

import { useLocale } from "@/lib/locale-store";
import { t } from "@/lib/i18n";

import { ProductDetailBackground } from "@/components/sections/product-detail/ProductDetailBackground";
import { ProductImagePane } from "@/components/sections/product-detail/ProductImagePane";
import { ProductInfoPane } from "@/components/sections/product-detail/ProductInfoPane";
import { Product } from "@/types";
import { PRODUCT_IMAGES } from "@/data/product-assets";


// --- Mock Data ---
const PRODUCTS_DB: Record<string, Partial<Product>> = {
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

// Route id (kebab-case) -> i18n key (camelCase)
const I18N_PRODUCT_KEYS: Record<string, string> = {
  "adva-iron": "advaIron",
  "adva-biotics": "advaBiotics",
  aclavcare: "aclavcare",
  mozincare: "mozincare",
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

  const i18nKey = product.id ? I18N_PRODUCT_KEYS[product.id] : undefined;

  // 2. Safe i18n Helpers
  const getName = () =>
    (i18nKey ? t(`products.${i18nKey}.name`, locale) : "") ||
    product.id ||
    "Unknown";
  const getDescription = () =>
    (i18nKey ? t(`products.${i18nKey}.description`, locale) : "") ||
    "Product description unavailable.";
  const getBadge = () =>
    (i18nKey ? t(`products.${i18nKey}.badge`, locale) : "") || "Premium";
  
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
        {/* Helper cast: Components expect Product but we only have Partial here. 
            In a real app, we'd merge with full data or update component types. 
            For now, as components only use a few fields, we can cast or update components. 
            Updating components to Partial is safer. */}
        <ProductImagePane product={product as Product} name={getName()} />
        
        <ProductInfoPane 
          product={product as Product} 
          name={getName()} 
          description={getDescription()} 
          badge={getBadge()} 
          benefits={getBenefits()}
        />
      </div>
    </div>
  );
}
