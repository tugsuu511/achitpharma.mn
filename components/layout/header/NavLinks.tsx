import Link from "next/link";
import { cn } from "@/lib/utils";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

export type NavItem = { href: string; key: string };

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
  return (
    <>
      {navLinks.map((link) => {
        const active =
          link.href === "/" ? pathname === "/" : !!pathname?.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              active ? "text-primary" : "text-muted-foreground",
              mobile ? "block py-2" : ""
            )}
            onClick={mobile ? onNavigate : undefined}
          >
            {t(link.key, locale)}
          </Link>
        );
      })}
    </>
  );
}
