import { t } from "@/lib/i18n";
import { Locale } from "@/types";
import { ResolvedProduct } from "@/types";

export const getProducts = (locale: Locale): ResolvedProduct[] => [
    {
        id: "adva-iron",
        name: t("products.advaIron.name", locale),
        description: t("products.advaIron.description", locale),
        badge: t("products.advaIron.badge", locale),
        color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
        category: "iron",
        ageRange: "3-5",
        formFactor: "syrup",
    },
    {
        id: "adva-biotics",
        name: t("products.advaBiotics.name", locale),
        description: t("products.advaBiotics.description", locale),
        badge: t("products.advaBiotics.badge", locale),
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        category: "probiotic",
        ageRange: "0-2",
        formFactor: "drops",
    },
    {
        id: "aclavcare",
        name: t("products.aclavcare.name", locale),
        description: t("products.aclavcare.description", locale),
        badge: t("products.aclavcare.badge", locale),
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        category: "health",
        ageRange: "6-12",
        formFactor: "tablet",
    },
    {
        id: "mozincare",
        name: t("products.mozincare.name", locale),
        description: t("products.mozincare.description", locale),
        badge: t("products.mozincare.badge", locale),
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
        category: "health",
        ageRange: "3-5",
        formFactor: "syrup",
    },
];
