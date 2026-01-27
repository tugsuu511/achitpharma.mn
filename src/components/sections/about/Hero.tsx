"use client";

import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

export function AboutHero({ locale }: { locale: Locale }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {t("about.hero.title", locale)}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t("about.hero.subtitle", locale)}
          </p>
        </div>
      </div>
    </section>
  );
}
