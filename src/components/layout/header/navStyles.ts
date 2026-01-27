export const underlineBase =
  "relative inline-block " +
  "after:content-[''] after:absolute after:left-0 after:h-[2px] " +
  "after:bg-current after:rounded-full " +
  "after:w-0 after:transition-[width] after:duration-700 after:ease-out " +
  "after:bottom-[-6px]";

export const underlineInactive = "hover:after:w-full";
export const underlineActive = "after:w-full";

export function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}
