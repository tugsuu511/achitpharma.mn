// lib/locale-store.ts
import { useSyncExternalStore } from "react";
import { getLocale } from "@/lib/i18n";

export type Locale = "mn" | "en";
const DEFAULT_LOCALE: Locale = "mn";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  window.addEventListener("localechange", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("localechange", callback);
    window.removeEventListener("storage", callback);
  };
}

export function useLocale(): Locale {
  return useSyncExternalStore(
    subscribe,
    () => (getLocale() as Locale) ?? DEFAULT_LOCALE,
    () => DEFAULT_LOCALE
  );
}
