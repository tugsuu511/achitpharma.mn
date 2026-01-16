"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import { HeadphonesIcon, GraduationCap, Award } from "lucide-react";

const icons = {
  support: HeadphonesIcon,
  training: GraduationCap,
  quality: Award,
};

const benefits = ["support", "training", "quality"] as const;

export function Benefits({ locale }: { locale: Locale }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("partners.benefits.title", locale)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((key) => {
            const Icon = icons[key];
            return (
              <Card key={key}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle>{t(`partners.benefits.items.${key}.title`, locale)}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t(`partners.benefits.items.${key}.description`, locale)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
