"use client";

import { t } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-store";

export default function EducationPage() {
  const locale = useLocale();

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl py-20">
      <h1 className="text-4xl font-bold mb-6">{t("nav.education", locale)}</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground">
          {locale === "mn"
            ? "Энэ хуудас бэлдэх явцдаа байна. Удахгүй мэдээлэл нэмэгдэх болно."
            : "This page is under construction. Content will be added soon."}
        </p>
      </div>
    </div>
  );
}
