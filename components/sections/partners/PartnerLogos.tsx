"use client";

import { Card, CardContent } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import Image from "next/image";

export function PartnerLogos({ locale }: { locale: Locale }) {
  // Placeholder logos - replace with actual partner logos
  const logos = [
    { name: "Partner 1", src: "/brand/logo.png" },
    { name: "Partner 2", src: "/brand/logo.png" },
    { name: "Partner 3", src: "/brand/logo.png" },
    { name: "Partner 4", src: "/brand/logo.png" },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("partners.logos.title", locale)}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <Card key={index} className="flex items-center justify-center p-6">
              <CardContent className="p-0">
                <div className="h-24 w-24 relative mx-auto">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
