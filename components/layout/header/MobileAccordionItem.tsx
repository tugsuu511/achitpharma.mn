"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

import type { NavItem } from "./NavLinkItem";
import { isActive, underlineActive, underlineBase, underlineInactive } from "./navStyles";

export function MobileAccordionItem({
  item,
  pathname,
  locale,
  expanded,
  onToggle,
  onNavigate,
}: {
  item: NavItem;
  pathname: string | null;
  locale: Locale;
  expanded: boolean;
  onToggle: () => void;
  onNavigate?: () => void;
}) {
  const active = isActive(pathname, item.href);

  return (
    <div className="w-full">
      <button
        type="button"
        className={cn(
          "flex w-full items-center justify-between py-2 text-sm font-medium transition-colors",
          active ? "text-primary" : "text-muted-foreground",
          "hover:text-primary"
        )}
        onClick={onToggle}
        aria-expanded={expanded}
      >
        <span className={cn("relative", underlineBase, active ? underlineActive : underlineInactive)}>
          {t(item.key, locale)}
        </span>
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", expanded && "rotate-180")} />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mt-1 flex flex-col pl-3">
          {item.children?.map((child) => {
            const childActive = isActive(pathname, child.href);
            return (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block w-full py-2 text-sm transition-colors hover:text-primary",
                  childActive ? "text-primary" : "text-muted-foreground"
                )}
                onClick={onNavigate}
              >
                {t(child.key, locale)}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
