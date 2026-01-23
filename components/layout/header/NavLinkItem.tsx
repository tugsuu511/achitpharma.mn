"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

import { underlineBase, underlineActive, underlineInactive, isActive } from "./navStyles";

export type NavItem = {
  href: string;
  key: string;
  children?: NavItem[];
};

export function NavLinkItem({
  href,
  labelKey,
  pathname,
  locale,
  mobile,
  onNavigate,
}: {
  href: string;
  labelKey: string;
  pathname: string | null;
  locale: Locale;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const active = isActive(pathname, href);

  return (
    <Link
      href={href}
      className={cn(
        mobile ? "block w-full py-2" : "inline-flex items-center h-10 px-1",
        "text-sm font-medium leading-none transition-colors hover:text-primary",
        active ? "text-primary" : "text-muted-foreground"
      )}
      onClick={mobile ? onNavigate : undefined}
    >
      <span className={cn("relative", underlineBase, active ? underlineActive : underlineInactive)}>
        {t(labelKey, locale)}
      </span>
    </Link>
  );
}
