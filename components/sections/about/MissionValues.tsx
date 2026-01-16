"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import { Award, Heart, Lightbulb, Shield } from "lucide-react";

const icons = {
  quality: Award,
  care: Heart,
  innovation: Lightbulb,
  trust: Shield,
};

export function MissionValues({ locale }: { locale: Locale }) {
  const values = [
    { key: "quality", icon: icons.quality },
    { key: "care", icon: icons.care },
    { key: "innovation", icon: icons.innovation },
    { key: "trust", icon: icons.trust },
  ] as const;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("about.mission.title", locale)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ key, icon: Icon }) => (
            <Card key={key}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-6 w-6 text-primary" />
                  <CardTitle>{t(`about.mission.values.${key}.title`, locale)}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t(`about.mission.values.${key}.description`, locale)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
