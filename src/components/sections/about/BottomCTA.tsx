"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

export function BottomCTA({ locale }: { locale: Locale }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center space-y-6">
            <h2 className="text-3xl font-bold">{t("about.cta.title", locale)}</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {t("about.cta.description", locale)}
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">{t("about.cta.button", locale)}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
