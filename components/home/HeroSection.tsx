"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

const heroImages = ["/brand/1.jpg", "/brand/2.jpg", "/brand/3.jpg"];

// ✅ Цайралтгүй slide (exit зүүн тийш, enter баруунаас)
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),
  center: { x: "0%" },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
  }),
};

// Swipe мэдрэмж (Framer Motion нийтлэг арга)
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export function HeroSection({ locale }: { locale: Locale }) {
  const phrases = [
    t("hero.headline_1", locale),
    t("hero.headline_2", locale),
    t("hero.headline_3", locale),
  ];

  const total = phrases.length;

  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const imageIndex = slide % heroImages.length;

  const primaryCtas = [
    { label: t("hero.ctaPrimary_1", locale), href: "/products" },
    { label: t("hero.ctaPrimary_2", locale), href: "/partners" },
    { label: t("hero.ctaPrimary_3", locale), href: "/contact" },
  ];

  // ✅ current slide-ын CTA
  const primary = primaryCtas[slide] ?? primaryCtas[0];

  const next = () => {
    setDirection(1);
    setSlide((s) => (s + 1) % total);
  };

  const prev = () => {
    setDirection(-1);
    setSlide((s) => (s - 1 + total) % total);
  };

  const goTo = (idx: number) => {
    if (idx === slide) return;
    setDirection(idx > slide ? 1 : -1);
    setSlide(idx);
  };

  // ✅ Auto: paused үед ажиллахгүй, slide өөрчлөгдөх бүрт таймер reset болно
  useEffect(() => {
    if (paused) return;

    const id = window.setTimeout(() => {
      setDirection(1);
      setSlide((s) => (s + 1) % total);
    }, 5000);

    return () => window.clearTimeout(id);
  }, [slide, total, paused]);

  return (
    <section
      className="relative h-screen min-h-[600px] overflow-hidden bg-background"
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* SLIDE (зураг + overlay + текст бүгд хамт хөдөлнө) */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={slide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
          // ✅ Swipe/Drag
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          style={{ touchAction: "pan-y" }} // vertical scroll зөвшөөрөөд, horizontal drag авна
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            // left swipe => next, right swipe => prev
            if (swipe < -swipeConfidenceThreshold) next();
            else if (swipe > swipeConfidenceThreshold) prev();
          }}
        >
          {/* Background image */}
<div className="absolute inset-0">
  <div className="relative h-full w-full">
    <Image
      src={heroImages[imageIndex]}
      alt="Hero background"
      fill
      sizes="100vw"
      className="object-cover object-center"
      priority={slide === 0}
    />
  </div>
</div>


          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center text-white">
              <div className="space-y-8">
                <div className="h-[120px] md:h-[150px] flex items-center justify-center">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                    {phrases[slide]}
                  </h1>
                </div>

                <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto">
                  {t("hero.subheadline", locale)}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link href={primary.href}>
                      {primary.label}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                {/* Prev/Next */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-white/60 text-white bg-transparent hover:bg-white hover:text-black"
                    onClick={prev}
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Prev
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="border-white/60 text-white bg-transparent hover:bg-white hover:text-black"
                    onClick={next}
                  >
                    Next
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ✅ Dots Indicator (static overlay) */}
      <div className="absolute bottom-30 left-0 right-0 z-30 flex items-center justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => {
          const active = i === slide;
          return (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                "h-2.5 rounded-full transition-all",
                active ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80",
              ].join(" ")}
            />
          );
        })}

        {/* 1/3 text */}
        <div className="ml-3 text-sm text-white/80 tabular-nums">
          {slide + 1}/{total}
        </div>
      </div>
    </section>
  );
}
