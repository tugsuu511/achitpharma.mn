"use client";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { getLocale, t } from "@/lib/i18n";
import { useSyncExternalStore } from "react";

type Locale = "mn" | "en";
const DEFAULT_LOCALE: Locale = "mn";

function subscribeLocale(callback: () => void) {
  // locale солих custom event
  window.addEventListener("localechange", callback);


  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("localechange", callback);
    window.removeEventListener("storage", callback);
  };
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
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.company", locale)}</h3>
            <p className="text-sm text-muted-foreground">
              {t("footer.mission", locale)}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
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
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
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
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/AchitAltanUndarga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/achitpharma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="mb-6">
          <p className="text-xs text-muted-foreground text-center">
            {t("footer.disclaimer", locale)}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{t("footer.copyright", locale)}</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              {t("footer.privacy", locale)}
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              {t("footer.terms", locale)}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
