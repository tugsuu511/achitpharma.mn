import { Product } from "@/components/sections/product-detail/types";
import { PRODUCT_IMAGES } from "@/data/product-assets";

export const PRODUCT_DETAILS: Product[] = [
    {
        id: "adva-iron",
        nameKey: "products.advaIron.name",
        descriptionKey: "products.advaIron.description",
        badgeKey: "products.advaIron.badge",
        imageAltKey: "products.advaIron.imageAlt",
        benefitsKeys: [
            "products.advaIron.benefits.0",
            "products.advaIron.benefits.1",
            "products.advaIron.benefits.2",
            "products.advaIron.benefits.3",
        ],
        price: "45,000₮",
        imageSrc: PRODUCT_IMAGES["adva-iron"],
        color: "rose",
    },
    {
        id: "adva-biotics",
        nameKey: "products.advaBiotics.name",
        descriptionKey: "products.advaBiotics.description",
        badgeKey: "products.advaBiotics.badge",
        imageAltKey: "products.advaBiotics.imageAlt",
        benefitsKeys: [
            "products.advaBiotics.benefits.0",
            "products.advaBiotics.benefits.1",
            "products.advaBiotics.benefits.2",
        ],
        price: "25,000₮",
        imageSrc: PRODUCT_IMAGES["adva-biotics"],
        color: "cyan",
    },
    {
        id: "aclavcare",
        nameKey: "products.aclavcare.name",
        descriptionKey: "products.aclavcare.description",
        badgeKey: "products.aclavcare.badge",
        imageAltKey: "products.aclavcare.imageAlt",
        benefitsKeys: [
            "products.aclavcare.benefits.0",
            "products.aclavcare.benefits.1",
            "products.aclavcare.benefits.2",
        ],
        price: "16,560₮",
        imageSrc: "/products/aclavcare.png",
        color: "blue",
    },
    {
        id: "mozincare",
        nameKey: "products.mozincare.name",
        descriptionKey: "products.mozincare.description",
        badgeKey: "products.mozincare.badge",
        imageAltKey: "products.mozincare.imageAlt",
        benefitsKeys: [
            "products.mozincare.benefits.0",
            "products.mozincare.benefits.1",
            "products.mozincare.benefits.2",
        ],
        price: "16,650₮",
        imageSrc: "/products/mozincare.png",
        color: "orange",
    },
];

export function getProductById(id: string): Product | undefined {
    return PRODUCT_DETAILS.find((p) => p.id === id);
}
