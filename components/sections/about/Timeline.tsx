"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

const timelineItems = ["founded", "firstProduct", "expansion", "partnership"] as const;

export function Timeline({ locale }: { locale: Locale }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("about.timeline.title", locale)}
        </h2>
        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <div key={item} className="flex gap-6">
              <div className="flex flex-col items-center">
                <Badge variant="outline" className="mb-2">
                  {t(`about.timeline.items.${item}.year`, locale)}
                </Badge>
                {index < timelineItems.length - 1 && (
                  <div className="w-px h-full bg-border min-h-[60px]" />
                )}
              </div>
              <Card className="flex-1">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`about.timeline.items.${item}.title`, locale)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(`about.timeline.items.${item}.description`, locale)}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
