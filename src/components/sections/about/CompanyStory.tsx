"use client";

import { Card, CardContent } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

export function CompanyStory({ locale }: { locale: Locale }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-3xl font-bold mb-6">{t("about.story.title", locale)}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.story.content", locale)}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
