export interface Product {
    id: string;
    name: string;
    description: string;
    badge: string;
    color: string;
    category: string;
    ageRange: string;
    formFactor: string;
    price?: string;
    imageSrc?: string;
    imageAlt?: string;
    benefits?: string[];
}

export interface ProductDetail {
    id: string;
    // i18n keys
    nameKey: string;
    descriptionKey: string;
    badgeKey: string;
    benefitsKeys: string[];
    imageAltKey?: string;

    // Visuals & Metadata
    price?: string;
    imageSrc?: string;
    color?: string;
    category?: string;
    ageRange?: string;
    formFactor?: string;
}
