"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import { Users } from "lucide-react";

export function TeamHighlights({ locale }: { locale: Locale }) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("about.team.title", locale)}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("about.team.description", locale)}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                </div>
                <CardTitle className="text-center">Team Member</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {locale === "mn"
                    ? "Мэргэжлийн баг, туршлагатай мэргэжилтэн"
                    : "Professional team member with extensive experience"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
