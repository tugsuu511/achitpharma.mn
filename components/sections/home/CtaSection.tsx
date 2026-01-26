"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

export function CtaSection({ locale }: { locale: Locale }) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("cta.title", locale)}</h2>

        <Button asChild size="lg" variant="secondary" className="text-base">
          <Link href="/contact">
            {t("cta.button", locale)}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
