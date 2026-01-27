"use client";

import { ProductDetail } from "@/types";
import type { ProductTabsContent } from "./productDetailData";
import { ProductTabs } from "./ProductTabs";


interface ProductInfoPaneProps {
  product: ProductDetail;
  name: string;
  description: string;
  badge: string;
  tabsContent: ProductTabsContent;
}

export function ProductInfoPane({
  product,
  name,
  description,
  tabsContent,
}: ProductInfoPaneProps) {
  return (
    <div className="flex w-full flex-col bg-white/30 text-slate-900 backdrop-blur-xl md:h-screen md:w-[40%] md:overflow-y-auto border-l border-white/20 shadow-[-10px_0_30px_rgba(0,0,0,0.02)]">
      {/* ✅ Center container */}
      <div className="flex flex-1 flex-col justify-center px-6 py-10 md:px-10 md:py-12">
        {/* Header */}
        <div className="space-y-5">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            {name}
          </h1>

          <p className="text-lg leading-relaxed text-slate-600/90 max-w-md">
            {description}
          </p>

          <div className="flex items-baseline gap-4 pt-2">
            <span className="text-4xl font-bold text-slate-900 tracking-tight">
              {product.price}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <ProductTabs content={tabsContent} />
        </div> 

        {/* (optional) scroll breathing space */}
        <div className="h-6 md:h-0" />
      </div>
    </div>
  );
}
