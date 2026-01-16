"use client";

import { useLocale } from "@/lib/locale-store";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { MapPlaceholder } from "@/components/sections/contact/MapPlaceholder";
import { t } from "@/lib/i18n";

export default function ContactPage() {
  const locale = useLocale();

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title", locale)}</h1>
        <p className="text-xl text-muted-foreground">{t("contact.subtitle", locale)}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <ContactInfo locale={locale} />
        </div>
        <div>
          <ContactForm locale={locale} />
        </div>
      </div>

      <MapPlaceholder locale={locale} />
    </div>
  );
}
