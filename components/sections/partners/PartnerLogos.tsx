"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

type Partner = {
  id: string;
  name: string;
  logoSrc: string;
  x: number; // left %
  y: number; // top %
  location?: string;
};

const MAP_LIGHT = "/brand/world-map-light.jpg";
const MAP_DARK = "/brand/world-map-dark.jpg";

// ✅ footprint icon (public дотор байх ёстой)
const FOOTPRINT_SRC = "/brand/footprint.png";

export function PartnerLogos({ locale }: { locale: Locale }) {
  const { resolvedTheme } = useTheme();

  // ✅ hydration mismatch-ээс сэргийлнэ
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const partners: Partner[] = React.useMemo(
    () => [
     {
        id: "us",
        name: "Advacare (USA)",
        logoSrc: "/brand/logo.png",
        x: 23,
        y: 38,
        location: "United States",
      },
      {
        id: "mn",
        name: "Achit Pharma",
        logoSrc: "/brand/logo.png",
        x: 72.74,
        y: 39.94,
        location: "Mongolia",
      },
      {
        id: "de",
        name: "Nerhadou",
        logoSrc: "/brand/logo.png",
        x: 54.33,
        y: 49.11,
        location: "Europe",
      },
      {
        id: "jp",
        name: "Partner (Asia)",
        logoSrc: "/brand/logo.png",
        x: 78,
        y: 43,
        location: "Asia",
      },
    ],
    []
  );

  const [activeId, setActiveId] = React.useState<string | null>(null);

  const mapSrc = mounted && resolvedTheme === "dark" ? MAP_DARK : MAP_LIGHT;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          {t("partners.logos.title", locale)}
        </h2>

        <div className="relative w-full overflow-hidden rounded-2xl border bg-background shadow-sm">
          <div className="relative w-full aspect-[16/9]">
            {/* Map */}
            <Image
              src={mapSrc}
              alt="World map"
              fill
              className="object-cover"
              priority
              unoptimized
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />

            {/* Pins */}
            {partners.map((p) => (
              <div
                key={p.id}
                className="absolute"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <button
                  type="button"
                  aria-label={p.name}
                  // ✅ footprint-д center anchor ихэнхдээ гоё: -translate-y-1/2
                  className="group relative -translate-x-1/2 -translate-y-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2"
                  onMouseEnter={() => setActiveId(p.id)}
                  onMouseLeave={() =>
                    setActiveId((cur) => (cur === p.id ? null : cur))
                  }
                  onFocus={() => setActiveId(p.id)}
                  onBlur={() =>
                    setActiveId((cur) => (cur === p.id ? null : cur))
                  }
                  onClick={() =>
                    setActiveId((cur) => (cur === p.id ? null : p.id))
                  }
                >
                  {/* ✅ Footprint icon + 2x hover */}
                  <span className="relative block h-9 w-9 transition-transform duration-200 ease-out group-hover:scale-200">
                    {/* glow halo */}
                    <span className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/15 blur-md opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                    <Image
                      src={FOOTPRINT_SRC}
                      alt="footprint icon"
                      fill
                      className="object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]"
                      unoptimized
                    />
                  </span>
                </button>

                {/* Hover card */}
                <AnimatePresence>
                  {activeId === p.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-6 top-0 z-20 w-64 -translate-y-1/2"
                      onMouseEnter={() => setActiveId(p.id)}
                      onMouseLeave={() => setActiveId(null)}
                    >
                      <Card className="shadow-lg">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border bg-white">
                              <Image
                                src={p.logoSrc}
                                alt={`${p.name} logo`}
                                fill
                                className="object-contain p-1"
                                unoptimized
                              />
                            </div>

                            <div className="min-w-0">
                              <div className="font-semibold leading-tight truncate">
                                {p.name}
                              </div>
                              {p.location && (
                                <div className="text-sm text-muted-foreground truncate">
                                  {p.location}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
