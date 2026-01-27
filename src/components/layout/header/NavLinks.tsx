"use client";

import { useState } from "react";
import type { Locale } from "@/lib/locale-store";

import { NavLinkItem, type NavItem } from "./NavLinkItem";
import { DesktopDropdownItem } from "./DesktopDropdownItem";
import { MobileAccordionItem } from "./MobileAccordionItem";

export function NavLinks({
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
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <>
      {navLinks.map((item) => {
        const hasChildren = !!item.children?.length;

        // Mobile accordion
        if (mobile && hasChildren) {
          const expanded = openKey === item.key;
          return (
            <MobileAccordionItem
              key={item.key}
              item={item}
              pathname={pathname}
              locale={locale}
              expanded={expanded}
              onToggle={() => setOpenKey((k) => (k === item.key ? null : item.key))}
              onNavigate={onNavigate}
            />
          );
        }

        // Desktop dropdown
        if (!mobile && hasChildren) {
          return (
            <DesktopDropdownItem
              key={item.key}
              item={item}
              pathname={pathname}
              locale={locale}
            />
          );
        }

        // Normal link
        return (
          <NavLinkItem
            key={item.href}
            href={item.href}
            labelKey={item.key}
            pathname={pathname}
            locale={locale}
            mobile={mobile}
            onNavigate={onNavigate}
          />
        );
      })}
    </>
  );
}
export type { NavItem } from "./NavLinkItem";
