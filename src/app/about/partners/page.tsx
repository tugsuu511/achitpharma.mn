"use client";

import { useLocale } from "@/lib/locale-store";
import { PartnerLogos } from "@/components/sections/partners/PartnerLogos";

export default function PartnersPage() {
  const locale = useLocale();

  return (
    <main className="flex min-h-screen flex-col">
      <PartnerLogos locale={locale} />
    </main>
  );
}
