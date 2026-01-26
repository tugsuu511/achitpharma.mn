export interface Product {
    id: string;
    name: string;
    description: string;
    badge: string;
    color: string;
    category: string;
    ageRange: string;
    formFactor: string;
    price?: string; // Unified from ProductDetail
    imageSrc?: string; // Unified from ProductDetail/Grid
    imageAlt?: string; // Unified from Grid
    benefits?: string[]; // For detail page
}

export type ProductDetail = Product; // Alias for backward compatibility if needed
