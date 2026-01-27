"use client";

import { Button } from "@/components/ui/button";
import { setLocale, type Locale } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-store";

interface LanguageToggleProps {
  onLocaleChange?: (locale: Locale) => void;
}

export function LanguageToggle({ onLocaleChange }: LanguageToggleProps) {
  const locale = useLocale();
  const next: Locale = locale === "mn" ? "en" : "mn";

  const toggleLocale = () => {
    setLocale(next);              // энэ нь өөрөө localechange event цацна
    onLocaleChange?.(next);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLocale}
      aria-label={locale === "mn" ? "Switch to English" : "Монгол хэл рүү шилжих"}
      className="min-w-[60px]"
    >
      {locale === "mn" ? "EN" : "MN"}
    </Button>
  );
}
