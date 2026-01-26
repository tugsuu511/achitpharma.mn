"use client";

import { useLocale } from "@/lib/locale-store";

import { HeroSection } from "@/components/sections/home/HeroSection";
import { TrustSection } from "@/components/sections/home/TrustSection";
import { ProductsSection } from "@/components/sections/home/ProductsSection";
import { EducationSection } from "@/components/sections/home/EducationSection";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { CtaSection } from "@/components/sections/home/CtaSection";

export default function Home() {
  const locale = useLocale();

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection locale={locale} />
      <TrustSection locale={locale} />
      <ProductsSection locale={locale} />
      <EducationSection locale={locale} />
      <FAQSection locale={locale} />
      <CtaSection locale={locale} />
    </div>
  );
}
