"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import { MapPin } from "lucide-react";

export function MapPlaceholder({ locale }: { locale: Locale }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("contact.map.title", locale)}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center space-y-2">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
            <p className="text-sm text-muted-foreground">
              {locale === "mn" ? "Газрын зураг энд харагдана" : "Map will appear here"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
