"use client";

import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

export function PartnersHero({ locale }: { locale: Locale }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t("partners.hero.title", locale)}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {t("partners.hero.subtitle", locale)}
        </p>
      </div>
    </section>
  );
}
