"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

interface ProductFiltersProps {
  locale: Locale;
  search: string;
  category: string;
  ageRange: string;
  formFactor: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onAgeRangeChange: (value: string) => void;
  onFormFactorChange: (value: string) => void;
}

export function ProductFilters({
  locale,
  search,
  category,
  ageRange,
  formFactor,
  onSearchChange,
  onCategoryChange,
  onAgeRangeChange,
  onFormFactorChange,
}: ProductFiltersProps) {
  return (
    <div className="space-y-4 md:space-y-0 md:flex md:gap-4">
      <div className="flex-1">
        <Input
          placeholder={t("productsPage.search.placeholder", locale)}
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full"
        />
      </div>
      <Select value={category} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder={t("productsPage.search.category", locale)} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("productsPage.search.allCategories", locale)}</SelectItem>
          <SelectItem value="iron">{t("products.advaIron.badge", locale)}</SelectItem>
          <SelectItem value="probiotic">{t("products.advaBiotics.badge", locale)}</SelectItem>
          <SelectItem value="health">{t("products.aclavcare.badge", locale)}</SelectItem>
          <SelectItem value="antiemetic">{locale === "mn" ? "Бөөлжилтийн эсрэг" : "Antiemetic"}</SelectItem>
        </SelectContent>
      </Select>
      <Select value={ageRange} onValueChange={onAgeRangeChange}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder={t("productsPage.search.ageRange", locale)} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("productsPage.search.allAges", locale)}</SelectItem>
          <SelectItem value="0-2">0-2 {locale === "mn" ? "нас" : "years"}</SelectItem>
          <SelectItem value="3-5">3-5 {locale === "mn" ? "нас" : "years"}</SelectItem>
          <SelectItem value="6-12">6-12 {locale === "mn" ? "нас" : "years"}</SelectItem>
          <SelectItem value="child">{locale === "mn" ? "Хүүхэд" : "Child"}</SelectItem>
          <SelectItem value="adult">{locale === "mn" ? "Насанд хүрэгч" : "Adult"}</SelectItem>
        </SelectContent>
      </Select>
      <Select value={formFactor} onValueChange={onFormFactorChange}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder={t("productsPage.search.formFactor", locale)} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("productsPage.search.allForms", locale)}</SelectItem>
          <SelectItem value="syrup">{locale === "mn" ? "Сироп" : "Syrup"}</SelectItem>
          <SelectItem value="tablet">{locale === "mn" ? "Хүүсэл" : "Tablet"}</SelectItem>
          <SelectItem value="drops">{locale === "mn" ? "Дусл" : "Drops"}</SelectItem>
          <SelectItem value="odf">ODF</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
