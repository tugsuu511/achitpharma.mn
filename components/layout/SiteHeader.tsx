"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./LanguageToggle";

import { cn } from "@/lib/utils";
import { t } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-store";

import { useHeaderBehavior } from "./header/useHeaderBehavior";
import { NavLinks, type NavItem } from "./header/NavLinks";
import { MobileMenu } from "./header/MobileMenu";
import DarkMode from "./header/DarkMode";


export function SiteHeader() {
  const locale = useLocale();
  const pathname = usePathname();

  const {
    sheetOpen,
    setSheetOpen,
    scrolled,
    expanded,
    setExpanded,
    collapsedWidth,
    isCollapsed,
    logoRef,
    closeAll,
    calcCollapsedWidth,
  } = useHeaderBehavior({ scrolledY: 40, collapseDelta: 6 });

  const navLinks = useMemo<NavItem[]>(
    () => [
      { href: "/", key: "nav.home" },
      {
        href: "/about",
        key: "nav.about",
        children: [
          { href: "/contact", key: "nav.contact" },
          { href: "/about/history", key: "nav.history" },
          { href: "/partners", key: "nav.partners" },
        ],
      },
      { href: "/products", key: "nav.products" },
      { href: "/education", key: "nav.education" },
    ],
    []
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div
        className={cn(
          "px-3 sm:px-4",
          "transition-[padding] duration-500 ease-in-out",
          scrolled ? "pt-2" : "pt-4"
        )}
      >
        <div
          className={cn(
            // ✅ dropdown таслагдахгүй
            "mx-auto overflow-visible border shadow-sm",
            "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
            "transition-[width,max-width,border-radius,background-color,box-shadow] duration-500 ease-in-out",
            isCollapsed ? "rounded-full" : "rounded-2xl"
          )}
          style={{
            maxWidth: isCollapsed
              ? collapsedWidth
                ? `${collapsedWidth}px`
                : undefined
              : "1600px",
            width: isCollapsed
              ? collapsedWidth
                ? `${collapsedWidth}px`
                : "fit-content"
              : "100%",
          }}
        >
          <div
            className={cn(
              "flex items-center px-4",
              "transition-[height] duration-500 ease-in-out",
              scrolled ? "h-14" : "h-16"
            )}
          >
            {/* Logo */}
            <Link
              ref={logoRef}
              href="/"
              aria-label={t("header.companyName", locale)}
              className={cn(
                "flex items-center font-bold text-xl",
                "transition-[margin] duration-500 ease-in-out",
                isCollapsed ? "mx-auto" : "mr-6"
              )}
              onClick={(e) => {
                if (!scrolled) return;
                e.preventDefault();
                setExpanded((v) => !v);
              }}
            >
              <Image
                src="/brand/AAU.png"
                alt={t("header.companyName", locale)}
                width={260}
                height={80}
                className={cn(
                  "w-auto transition-[height] duration-500 ease-in-out",
                  scrolled ? "h-9" : "h-12"
                )}
                priority
                onLoad={() => {
                  if (isCollapsed) calcCollapsedWidth();
                }}
              />
            </Link>

            {/* Content */}
            <div
              className={cn(
                "flex items-center justify-between",
                // ✅ collapsed үед л clip хийнэ, бусад үед dropdown гаргана
                isCollapsed ? "overflow-hidden" : "overflow-visible",
                "transition-[width,max-width,opacity,transform] duration-500 ease-in-out",
                isCollapsed
                  ? "w-0 max-w-0 opacity-0 -translate-y-1 scale-95 pointer-events-none"
                  : "w-auto flex-1 max-w-[1400px] opacity-100 translate-y-0 scale-100"
              )}
            >
              {/* Desktop nav */}
              <nav
                className="hidden md:flex flex-1 items-center justify-center space-x-6"
                aria-label="Main navigation"
              >
                <NavLinks navLinks={navLinks} pathname={pathname} locale={locale} />
              </nav>

              {/* Right */}
              <div className="flex items-center gap-2">
                <LanguageToggle />

                <Button asChild size="sm" className="hidden md:inline-flex" onClick={closeAll}>
                  <Link href="/products">{t("header.order", locale)}</Link>
                </Button>

                <DarkMode/>

                <MobileMenu
                  open={sheetOpen}
                  setOpen={setSheetOpen}
                  navLinks={navLinks}
                  pathname={pathname}
                  locale={locale}
                  onNavigate={closeAll}
                />
              </div>
            </div>
          </div>
        </div>

        {expanded && scrolled && (
          <button
            aria-label="Close expanded header"
            className="fixed inset-0 -z-10 cursor-default"
            onClick={() => setExpanded(false)}
          />
        )}
      </div>
    </header>
  );
}
