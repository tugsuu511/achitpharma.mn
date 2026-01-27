"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import { ProductDetail } from "@/types";

interface ProductImagePaneProps {
  product: ProductDetail;
  name: string;
}

export function ProductImagePane({ product, name }: ProductImagePaneProps) {
  return (
    <div className="relative flex h-[50vh] w-full items-center justify-start md:h-screen md:w-[60%]">
      {/* Back Button */}
      <Link
        href="/products"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/40 shadow-sm backdrop-blur transition hover:bg-white/70"
      >
        <ArrowLeft className="h-5 w-5 text-slate-700" />
      </Link>

      {/* Wrapper for Image to Align Left (near zero padding) */}
      <div className="relative h-full w-full pl-0 md:pl-0">
        {/* Radial Glow behind product */}
        <div className="absolute left-[10%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-white/40 blur-[80px] md:h-[600px] md:w-[600px]" />

        <div className="relative h-full w-full">
          {product.imageSrc ? (
            <Image
              src={product.imageSrc}
              alt={name}
              fill
              className="object-contain object-center md:object-left"
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Package className="h-20 w-20 text-slate-400/60" />
            </div>
          )}
        </div>

        {/* Gradient Mask for "Melting" Effect on the Right Edge */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent 60%, rgba(255,255,255,0) 100%)",
            maskImage: "linear-gradient(to right, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 70%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
