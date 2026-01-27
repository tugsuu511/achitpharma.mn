"use client";

import { useLocale } from "@/lib/locale-store";
import { EducationHero } from "@/components/sections/education/EducationHero";
import { EducationTabs } from "@/components/sections/education/EducationTabs";
import { EducationFAQ } from "@/components/sections/education/EducationFAQ";

export default function EducationPage() {
  const locale = useLocale();

  return (
    <div className="flex flex-col min-h-screen">
      <EducationHero locale={locale} />
      <EducationTabs locale={locale} />
      <EducationFAQ locale={locale} />
    </div>
  );
}
