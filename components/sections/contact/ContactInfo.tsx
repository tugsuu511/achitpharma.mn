"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const infoItems = [
  { key: "address", icon: MapPin },
  { key: "phone", icon: Phone },
  { key: "email", icon: Mail },
  { key: "hours", icon: Clock },
] as const;

export function ContactInfo({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-6">
      {infoItems.map(({ key, icon: Icon }) => (
        <Card key={key}>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">{t(`contact.info.${key}.title`, locale)}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t(`contact.info.${key}.value`, locale)}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
