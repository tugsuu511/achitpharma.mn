"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

const steps = ["step1", "step2", "step3", "step4"] as const;

export function Steps({ locale }: { locale: Locale }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("partners.steps.title", locale)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={step}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="text-lg px-3 py-1">
                    {index + 1}
                  </Badge>
                  <CardTitle className="text-lg">
                    {t(`partners.steps.${step}.title`, locale)}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t(`partners.steps.${step}.description`, locale)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
