"use client";

import * as React from "react";
import Link from "next/link";
import { ShoppingCart, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ProductDetail } from "@/types";
import { ProductTabs } from "./ProductTabs";

interface ProductInfoPaneProps {
  product: ProductDetail;
  name: string;
  description: string;
  badge: string;
  benefits: string[];
}

export function ProductInfoPane({
  product,
  name,
  description,
  badge,
  benefits,
}: ProductInfoPaneProps) {
  return (
    <div className="flex w-full flex-col bg-white/30 text-slate-900 backdrop-blur-xl md:h-screen md:w-[40%] md:overflow-y-auto border-l border-white/20 shadow-[-10px_0_30px_rgba(0,0,0,0.02)]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-6 pt-8 text-xs font-medium text-slate-500/80 md:px-10 md:pt-12">
        <Link href="/" className="hover:text-teal-700 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-teal-700 transition-colors">
          Products
        </Link>
        <span>/</span>
        <span className="text-slate-800">{name}</span>
      </div>

      <div className="flex-1 px-6 py-6 md:px-10 md:py-8">
        {/* Header */}
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-white/50 px-3 py-1 text-teal-800 backdrop-blur border border-white/40"
            >
              {badge}
            </Badge>
            <Badge
              variant="outline"
              className="border-teal-600/20 text-teal-800"
            >
              Kids Safe
            </Badge>
            <Badge
              variant="outline"
              className="border-purple-600/20 text-purple-800"
            >
              No Added Sugar
            </Badge>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            {name}
          </h1>

          <p className="text-lg leading-relaxed text-slate-600/90 font-medium max-w-md">
            {description}
          </p>

          <div className="flex items-baseline gap-4 pt-2">
            <span className="text-4xl font-bold text-slate-900 tracking-tight">
              {product.price}
            </span>
            <span className="text-sm font-bold text-green-700 bg-green-100/50 px-2 py-1 rounded-md">
              In Stock
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-6 sm:flex-row">
            <Button
              size="lg"
              className="h-14 gap-2 rounded-full bg-slate-900 px-8 text-base font-bold text-white shadow-xl shadow-slate-900/10 hover:bg-slate-800 hover:scale-[1.02] transition-all"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 gap-2 rounded-full border-slate-300 bg-white/20 text-slate-800 hover:bg-white/40 backdrop-blur-sm"
            >
              <MessageCircle className="h-5 w-5" />
              Consult Pharmacist
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <ProductTabs benefits={benefits} />
        </div>

        {/* Bottom Padding for scroll */}
        <div className="h-20 md:h-10" />
      </div>
    </div>
  );
}
