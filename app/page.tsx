"use client";

import { useLocale } from "@/lib/locale-store";

import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { EducationSection } from "@/components/home/EducationSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CtaSection } from "@/components/home/CtaSection";

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
