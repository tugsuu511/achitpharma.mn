import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";
import type { Product } from "@/types";
import { PRODUCT_IMAGES } from "@/data/product-assets";

export const PRODUCTS_DB: Record<string, Partial<Product>> = {
  "adva-iron": {
    id: "adva-iron",
    price: "45,000₮",
    imageSrc: PRODUCT_IMAGES["adva-iron"],
  },
  "adva-biotics": {
    id: "adva-biotics",
    price: "25,000₮",
    imageSrc: PRODUCT_IMAGES["adva-biotics"],
  },
  aclavcare: {
    id: "aclavcare",
    price: "16,560₮",
    imageSrc: "/products/aclavcare.png",
  },
  mozincare: {
    id: "mozincare",
    price: "16,650₮",
    imageSrc: "/products/mozincare.png",
  },
};

const I18N_PRODUCT_KEYS: Record<string, string> = {
  "adva-iron": "advaIron",
  "adva-biotics": "advaBiotics",
  aclavcare: "aclavcare",
  mozincare: "mozincare",
};

type ResolvedProductDetail = {
  product: Partial<Product>;
  name: string;
  description: string;
  badge: string;
  benefits: string[];
};

export function resolveProductDetail(
  id: string,
  locale: Locale,
): ResolvedProductDetail | null {
  const product = PRODUCTS_DB[id];
  if (!product) {
    return null;
  }

  const i18nKey = product.id ? I18N_PRODUCT_KEYS[product.id] : undefined;

  const name =
    (i18nKey ? t(`products.${i18nKey}.name`, locale) : "") ||
    product.id ||
    "Unknown";
  const description =
    (i18nKey ? t(`products.${i18nKey}.description`, locale) : "") ||
    "Product description unavailable.";
  const badge = (i18nKey ? t(`products.${i18nKey}.badge`, locale) : "") || "Premium";

  const benefits = [
    "Supports daily immunity",
    "Promotes healthy growth",
    "Boosts energy levels",
    "Scientifically formulated",
  ];

  return {
    product,
    name,
    description,
    badge,
    benefits,
  };
}
