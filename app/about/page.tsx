"use client";

import { t } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-store";

export default function AboutPage() {
  const locale = useLocale();

  return <div>{t("nav.about", locale)}</div>;
}
