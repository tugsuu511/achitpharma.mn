"use client";

import { Truck, Heart, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

export function TrustSection({ locale }: { locale: Locale }) {
  const trustItems = [
    {
      icon: Truck,
      title: t("trust.delivery.title", locale),
      description: t("trust.delivery.description", locale),
    },
    {
      icon: Heart,
      title: t("trust.formula.title", locale),
      description: t("trust.formula.description", locale),
    },
    {
      icon: Award,
      title: t("trust.quality.title", locale),
      description: t("trust.quality.description", locale),
    },
    {
      icon: BookOpen,
      title: t("trust.guidance.title", locale),
      description: t("trust.guidance.description", locale),
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
