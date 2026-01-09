"use client";

import Link from "next/link";
import { ArrowRight, Award, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

export function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {t("hero.headline", locale)}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              {t("hero.subheadline", locale)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/products">
                  {t("hero.ctaPrimary", locale)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/contact">{t("hero.ctaSecondary", locale)}</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 p-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-primary/20" />

              <Sparkles className="h-32 w-32 text-primary/40" />

              <div className="absolute -top-4 -right-4 bg-primary/10 rounded-full p-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary/10 rounded-full p-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
