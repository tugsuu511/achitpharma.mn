"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageToggle } from "./LanguageToggle";

import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useLocale, type Locale } from "@/lib/locale-store";

type NavItem = { href: string; key: string };

function NavLinks({
  navLinks,
  pathname,
  locale,
  mobile = false,
  onNavigate,
}: {
  navLinks: NavItem[];
  pathname: string | null;
  locale: Locale;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return !!pathname?.startsWith(href);
  };

  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive(link.href) ? "text-primary" : "text-muted-foreground",
            mobile ? "block py-2" : ""
          )}
          onClick={mobile ? onNavigate : undefined}
        >
          {t(link.key, locale)}
        </Link>
      ))}
    </>
  );
}

export function SiteHeader() {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks: NavItem[] = [
    { href: "/", key: "nav.home" },
    { href: "/about", key: "nav.about" },
    { href: "/products", key: "nav.products" },
    { href: "/education", key: "nav.education" },
    { href: "/partners", key: "nav.partners" },
    { href: "/contact", key: "nav.contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl"
          aria-label={t("header.companyName", locale)}
        >
          <Image
            src="/brand/AAU.png"
            alt={t("header.companyName", locale)}
            width={260}
            height={80}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-6"
          aria-label="Main navigation"
        >
          <NavLinks navLinks={navLinks} pathname={pathname} locale={locale} />
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <LanguageToggle />

          {/* CTA */}
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/products">{t("header.order", locale)}</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>{t("header.companyName", locale)}</SheetTitle>
              </SheetHeader>

              <nav
                className="mt-8 flex flex-col space-y-4"
                aria-label="Mobile navigation"
              >
                <NavLinks
                  navLinks={navLinks}
                  pathname={pathname}
                  locale={locale}
                  mobile
                  onNavigate={() => setOpen(false)}
                />

                <Button asChild className="mt-4" onClick={() => setOpen(false)}>
                  <Link href="/products">{t("header.order", locale)}</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
