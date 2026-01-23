"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

import type { NavItem } from "./NavLinkItem";
import {
  underlineBase,
  underlineActive,
  underlineInactive,
  isActive,
} from "./navStyles";

export function DesktopDropdownItem({
  item,
  pathname,
  locale,
}: {
  item: NavItem;
  pathname: string | null;
  locale: Locale;
}) {
  const active = isActive(pathname, item.href);

  return (
    <div className="relative group">
      {/* Trigger */}
      <Link
        href={item.href}
        className={cn(
          "inline-flex items-center gap-1 h-10 px-1",
          "text-sm font-medium leading-none transition-colors hover:text-primary",
          active ? "text-primary" : "text-muted-foreground",
        )}
      >
        <span
          className={cn(
            "relative",
            underlineBase,
            active ? underlineActive : underlineInactive,
          )}
        >
          {t(item.key, locale)}
        </span>

        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:rotate-180" />
      </Link>

      {/* Dropdown */}
      <div
        className={cn(
          "absolute left-1/2 top-full z-[60] mt-3 w-56 -translate-x-1/2",
          "rounded-xl border bg-background/95 backdrop-blur shadow-lg",

          // hover bridge
          "before:content-[''] before:absolute before:left-0 before:right-0 before:top-[-12px] before:h-3",

          // fade only (no slide)
          "opacity-0 pointer-events-none",
          "transition-opacity duration-200 ease-out delay-200",
          "group-hover:opacity-100 group-hover:pointer-events-auto group-hover:delay-0",
          "group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:delay-0",
        )}
      >
        <ul className="py-2">
          {item.children?.map((child) => {
            const childActive = isActive(pathname, child.href);
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={cn(
                    "group/item flex items-center justify-between",
                    "mx-2 my-1 rounded-lg px-3 py-2 text-sm",
                    "transition-[background-color,color,transform] duration-150 ease-out",
                    "hover:bg-primary/10 hover:text-primary hover:translate-x-0.5",
                    "focus:bg-primary/10 focus:text-primary focus:outline-none",
                    childActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80",
                  )}    
                >
                  {t(child.key, locale)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
