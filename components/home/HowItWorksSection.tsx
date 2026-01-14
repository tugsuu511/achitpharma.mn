"use client";

import { ArrowRight, Clock, Package, ShoppingCart } from "lucide-react";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

export function HowItWorksSection({ locale }: { locale: Locale }) {
  const steps = [
    {
      icon: ShoppingCart,
      title: t("howItWorks.step1.title", locale),
      description: t("howItWorks.step1.description", locale),
    },
    {
      icon: Package,
      title: t("howItWorks.step2.title", locale),
      description: t("howItWorks.step2.description", locale),
    },
    {
      icon: Clock,
      title: t("howItWorks.step3.title", locale),
      description: t("howItWorks.step3.description", locale),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("howItWorks.title", locale)}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="relative inline-flex">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>

                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-border -translate-y-1/2">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
