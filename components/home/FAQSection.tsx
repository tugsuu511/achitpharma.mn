"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

export function FAQSection({ locale }: { locale: Locale }) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("faq.title", locale)}</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("faq.q1", locale)}</AccordionTrigger>
            <AccordionContent>{t("faq.a1", locale)}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>{t("faq.q2", locale)}</AccordionTrigger>
            <AccordionContent>{t("faq.a2", locale)}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>{t("faq.q3", locale)}</AccordionTrigger>
            <AccordionContent>{t("faq.a3", locale)}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>{t("faq.q4", locale)}</AccordionTrigger>
            <AccordionContent>{t("faq.a4", locale)}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>{t("faq.q5", locale)}</AccordionTrigger>
            <AccordionContent>{t("faq.a5", locale)}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
