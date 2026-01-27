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

export type ProductDetail = Product; // Alias for backward compatibility if needed

