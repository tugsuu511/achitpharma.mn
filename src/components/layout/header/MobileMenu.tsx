import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import { NavLinks, type NavItem } from "./NavLinks";

export function MobileMenu({
  open,
  setOpen,
  navLinks,
  pathname,
  locale,
  onNavigate,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  navLinks: NavItem[];
  pathname: string | null;
  locale: Locale;
  onNavigate: () => void;
}) {
  return (
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

        <nav className="mt-8 flex flex-col space-y-4" aria-label="Mobile navigation">
          <NavLinks
            navLinks={navLinks}
            pathname={pathname}
            locale={locale}
            mobile
            onNavigate={onNavigate}
          />

          <Button asChild className="mt-4" onClick={onNavigate}>
            <Link href="/products">{t("header.order", locale)}</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
