"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

const COORDS = { lat: 47.8979199, lng: 106.8836166 };

const MAP_SRC = (locale: Locale) =>
  `https://www.google.com/maps?q=${COORDS.lat},${COORDS.lng}&z=18&output=embed&hl=${
    locale === "mn" ? "mn" : "en"
  }`;

export function MapPlaceholder({ locale }: { locale: Locale }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("contact.map.title", locale)}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="aspect-video overflow-hidden rounded-lg">
          <iframe
            title="Location Map"
            src={MAP_SRC(locale)}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <a
          className="mt-3 inline-block text-sm underline text-muted-foreground"
          href={`https://www.google.com/maps/search/?api=1&query=${COORDS.lat},${COORDS.lng}`}
          target="_blank"
          rel="noreferrer"
        >
          {locale === "mn" ? "Google Maps дээр нээх" : "Open in Google Maps"}
        </a>
      </CardContent>
    </Card>
  );
}
