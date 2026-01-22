"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { getLocale, t } from "@/lib/i18n";
import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Locale = "mn" | "en";
const DEFAULT_LOCALE: Locale = "mn";

function subscribeLocale(callback: () => void) {
  window.addEventListener("localechange", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("localechange", callback);
    window.removeEventListener("storage", callback);
  };
}

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: EASE },
  },
};

function LogoLane({
  direction,
  className = "",
}: {
  direction: "left" | "right";
  className?: string;
}) {
  const logos = [{ src: "/brand/AAU.png", alt: "AAU" }];
  const LOGO_REPEAT = 14;

  const animClass =
    direction === "left" ? "footer-marquee-left" : "footer-marquee-right";

  return (
    <div
      className={`relative left-1/2 -translate-x-1/2 w-screen border-b bg-background/40 footer-marquee-mask ${className}`}
    >
      <div className="mx-auto py-3 overflow-hidden">
        <div className={`footer-marquee-track ${animClass}`}>
          {Array.from({ length: 2 }).map((_, loop) => (
            <div key={`${direction}-${loop}`} className="flex items-center gap-10 pr-10">
              {Array.from({ length: LOGO_REPEAT }).map((__, i) => {
                const logo = logos[i % logos.length];
                return (
                  <div
                    key={`${direction}-${loop}-${i}`}
                    className="flex items-center opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={110}
                      height={36}
                      className="h-6 w-auto"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteFooter() {
  const locale = useSyncExternalStore(
    subscribeLocale,
    () => getLocale() as Locale,
    () => DEFAULT_LOCALE
  );

  const navLinks = [
    { href: "/", key: "nav.home" },
    { href: "/about", key: "nav.about" },
    { href: "/products", key: "nav.products" },
    { href: "/education", key: "nav.education" },
    { href: "/partners", key: "nav.partners" },
    { href: "/contact", key: "nav.contact" },
  ];

  return (
    <footer className="w-full border-t bg-muted/50">
      {/* Glow top line */}
      <div className="h-px w-full footer-glow opacity-40 dark:opacity-25" />

      {/* Lane 1: TOP (left direction) */}
      <LogoLane direction="left" />

      {/* Reveal + stagger main footer */}
      <motion.div
        className="container mx-auto px-4 md:px-6 lg:px-8 py-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div variants={item} className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.company", locale)}</h3>
            <p className="text-sm text-muted-foreground">{t("footer.mission", locale)}</p>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.quickLinks", locale)}</h3>
            <nav className="flex flex-col space-y-2" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(link.key, locale)}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.contact", locale)}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                <span className="font-medium">{t("footer.phone", locale)}: </span>
                <span>+976 11 123456</span>
              </div>
              <div>
                <span className="font-medium">{t("footer.email", locale)}: </span>
                <a
                  href="mailto:info@achitpharma.mn"
                  className="hover:text-primary transition-colors"
                >
                  info@achitpharma.mn
                </a>
              </div>
              <div>
                <span className="font-medium">{t("footer.address", locale)}: </span>
                <span>Улаанбаатар хот, ХУД</span>
              </div>
              <p className="text-xs mt-3">{t("footer.workingHours", locale)}</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h3 className="font-semibold text-lg">Social Media</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/AchitAltanUndarga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="https://instagram.com/achit.pharma/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={item}>
          <Separator className="my-8" />
        </motion.div>

        <motion.div variants={item} className="mb-6">
          <p className="text-xs text-muted-foreground text-center">
            {t("footer.disclaimer", locale)}
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>{t("footer.copyright", locale)}</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              {t("footer.privacy", locale)}
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              {t("footer.terms", locale)}
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Lane 2: BOTTOM (right direction) — footer-ийн хамгийн доор */}
      <LogoLane direction="right" className="border-b-0 border-t" />
    </footer>
  );
}
