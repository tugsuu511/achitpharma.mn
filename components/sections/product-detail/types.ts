export interface Product {
    id: string;

    // i18n keys
    nameKey: string;
    descriptionKey: string;
    badgeKey: string;
    imageAltKey?: string;
    benefitsKeys: string[];

    // Visuals & Metadata
    price?: string;
    imageSrc?: string;
    color?: string;
    category?: string;
    ageRange?: string;
    formFactor?: string;
}
