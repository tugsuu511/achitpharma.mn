"use client";

import { useLocale } from "@/lib/locale-store";
import { PartnerLogos } from "@/components/sections/partners/PartnerLogos";

export default function PartnersPage() {
  const locale = useLocale();

  return (
    <div className="flex flex-col min-h-screen">
      {/* <PartnersHero locale={locale} /> */}
      <PartnerLogos locale={locale} />
    </div>
  );
}
