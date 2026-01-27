"use client";

import * as React from "react";
import { Check, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { ProductTabsContent } from "./productDetailData";

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
};

interface ProductTabsProps {
  content: ProductTabsContent;
}

export function ProductTabs({ content }: ProductTabsProps) {
  const tabItems = [
    { key: "info", label: content.tabLabels.info },
    { key: "composition", label: content.tabLabels.composition },
    { key: "application", label: content.tabLabels.application },
    { key: "faq", label: content.tabLabels.faq },
  ] as const;

  return (
    <Tabs defaultValue="info" className="w-full">
      <TabsList className="mb-8 h-auto w-full flex-wrap justify-start gap-3 bg-transparent p-0">
        {tabItems.map((tab) => (
          <TabsTrigger
            key={tab.key}
            value={tab.key}
            className="rounded-full border border-transparent bg-white/40 px-6 py-2.5 font-semibold text-slate-600 data-[state=active]:border-white/60 data-[state=active]:bg-white/70 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm backdrop-blur-sm capitalize transition-all"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="min-h-[300px]">
        <TabsContent value="info" className="mt-0 focus-visible:outline-none">
          <motion.div {...fadeIn} className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {content.benefitsTitle}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {content.benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-2xl bg-white/40 border border-white/40 p-4 shadow-sm backdrop-blur-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/40 p-6 backdrop-blur-sm">
              <h4 className="mb-2 font-bold text-indigo-900 flex items-center gap-2">
                {content.whoForTitle}
              </h4>
              <p className="text-indigo-800/80 leading-relaxed">
                {content.whoForBody}
              </p>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent
          value="composition"
          className="mt-0 focus-visible:outline-none"
        >
          <motion.div {...fadeIn}>
            <div className="mb-4 text-base font-bold text-slate-900">
              {content.compositionTitle}
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white/40 backdrop-blur-sm shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="px-5 py-4 font-bold text-slate-700">
                      {content.ingredientLabel}
                    </th>
                    <th className="px-5 py-4 font-bold text-slate-700">
                      {content.amountLabel}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100/50">
                  {content.compositionRows.map((row, idx) => (
                    <tr key={`${row.ingredient}-${idx}`}>
                      <td className="px-5 py-4">{row.ingredient}</td>
                      <td className="px-5 py-4 text-slate-500 font-mono">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <div className="p-1 rounded-full bg-green-100 text-green-600">
                <Check className="h-3 w-3" />
              </div>
              <span>{content.compositionNote}</span>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent
          value="application"
          className="mt-0 focus-visible:outline-none"
        >
          <motion.div {...fadeIn} className="space-y-6">
            <div className="rounded-2xl bg-white/40 p-6 border border-white/40">
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                {content.usageTitle}
              </h3>
              <ol className="space-y-4">
                {content.usageSteps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                      {i + 1}
                    </span>
                    <span className="text-slate-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-orange-100/50 bg-orange-50/40 p-5 text-orange-900 backdrop-blur-sm">
              <AlertCircle className="h-6 w-6 text-orange-500 shrink-0" />
              <div>
                <strong className="block mb-1 text-lg">{content.dosageTitle}</strong>
                <div className="text-sm opacity-90 space-y-1">
                  {content.dosageLines.map((line, idx) => (
                    <p key={`${line}-${idx}`}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="faq" className="mt-0 focus-visible:outline-none">
          <motion.div {...fadeIn}>
            <div className="mb-4 text-base font-bold text-slate-900">
              {content.faqTitle}
            </div>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {content.faqItems.map((item, idx) => (
                <AccordionItem
                  key={`${item.question}-${idx}`}
                  value={`item-${idx + 1}`}
                  className="border-none rounded-2xl bg-white/40 px-2 shadow-sm"
                >
                  <AccordionTrigger className="px-4 text-left font-semibold text-slate-800 hover:text-teal-700 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-slate-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
