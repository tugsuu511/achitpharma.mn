"use client";

import * as React from "react";
import { Check, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
};

interface ProductTabsProps {
  benefits: string[];
}

export function ProductTabs({ benefits }: ProductTabsProps) {
  return (
    <Tabs defaultValue="info" className="w-full">
      <TabsList className="mb-8 h-auto w-full flex-wrap justify-start gap-3 bg-transparent p-0">
        {["info", "composition", "application", "faq"].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className="rounded-full border border-transparent bg-white/40 px-6 py-2.5 font-semibold text-slate-600 data-[state=active]:border-white/60 data-[state=active]:bg-white/70 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm backdrop-blur-sm capitalize transition-all"
          >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="min-h-[300px]">
        <TabsContent value="info" className="mt-0 focus-visible:outline-none">
          <motion.div {...fadeIn} className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Why parents love it
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((b, i) => (
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
                Who is it for?
              </h4>
              <p className="text-indigo-800/80 leading-relaxed font-medium">
                Perfect for children aged 4-12 who need an extra boost of
                immunity and daily vitamins. Scientifically formulated for fussy
                eaters to ensure they get the nutrients they need to thrive.
              </p>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="composition" className="mt-0 focus-visible:outline-none">
          <motion.div {...fadeIn}>
            <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white/40 backdrop-blur-sm shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="px-5 py-4 font-bold text-slate-700">
                      Ingredient
                    </th>
                    <th className="px-5 py-4 font-bold text-slate-700">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100/50">
                  <tr>
                    <td className="px-5 py-4 font-medium">Vitamin C</td>
                    <td className="px-5 py-4 text-slate-500 font-mono">50mg</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium">Zinc</td>
                    <td className="px-5 py-4 text-slate-500 font-mono">5mg</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium">L. Rhamnosus</td>
                    <td className="px-5 py-4 text-slate-500 font-mono">
                      1 Billion CFU
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
              <div className="p-1 rounded-full bg-green-100 text-green-600">
                <Check className="h-3 w-3" />
              </div>
              <span>100% Natural Ingredients. No nasties.</span>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="application" className="mt-0 focus-visible:outline-none">
          <motion.div {...fadeIn} className="space-y-6">
            <div className="rounded-2xl bg-white/40 p-6 border border-white/40">
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                How to Use
              </h3>
              <ol className="space-y-4">
                {[
                  "Shake the bottle well before use.",
                  "Use the provided measuring cup for accurate dosage.",
                  "Can be taken directly or mixed with water/juice.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                      {i + 1}
                    </span>
                    <span className="text-slate-700 font-medium">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-orange-100/50 bg-orange-50/40 p-5 text-orange-900 backdrop-blur-sm">
              <AlertCircle className="h-6 w-6 text-orange-500 shrink-0" />
              <div>
                <strong className="block mb-1 text-lg">Daily Dosage</strong>
                <div className="text-sm opacity-90 font-medium space-y-1">
                  <p>
                    4-8 years: <span className="font-bold">5ml daily</span>
                  </p>
                  <p>
                    9-12 years: <span className="font-bold">10ml daily</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="faq" className="mt-0 focus-visible:outline-none">
          <motion.div {...fadeIn}>
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem
                value="item-1"
                className="border-none rounded-2xl bg-white/40 px-2 shadow-sm"
              >
                <AccordionTrigger className="px-4 text-left font-semibold text-slate-800 hover:text-teal-700 hover:no-underline">
                  Is this product vegan?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-slate-600 font-medium leading-relaxed">
                  Yes, it is 100% plant-based and suitable for vegetarians and
                  vegans.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-none rounded-2xl bg-white/40 px-2 shadow-sm"
              >
                <AccordionTrigger className="px-4 text-left font-semibold text-slate-800 hover:text-teal-700 hover:no-underline">
                  How should I store it?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-slate-600 font-medium leading-relaxed">
                  Keep in a cool, dry place. Once opened, we recommend keeping
                  it in the fridge and using within 45 days for maximum
                  freshness.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-none rounded-2xl bg-white/40 px-2 shadow-sm"
              >
                <AccordionTrigger className="px-4 text-left font-semibold text-slate-800 hover:text-teal-700 hover:no-underline">
                  Any allergens?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-slate-600 font-medium leading-relaxed">
                  Free from gluten, dairy, and soy. Produced in a facility that
                  handles nuts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
