"use client";

import { useLocale } from "@/lib/locale-store";
import { PartnersHero } from "@/components/sections/partners/PartnersHero";
import { Benefits } from "@/components/sections/partners/Benefits";
import { PartnerLogos } from "@/components/sections/partners/PartnerLogos";
import { Steps } from "@/components/sections/partners/Steps";
import { InquiryForm } from "@/components/sections/partners/InquiryForm";

export default function PartnersPage() {
  const locale = useLocale();

  return (
    <div className="flex flex-col min-h-screen">
      <PartnersHero locale={locale} />
      <Benefits locale={locale} />
      <PartnerLogos locale={locale} />
      <Steps locale={locale} />
      <InquiryForm locale={locale} />
    </div>
  );
}
