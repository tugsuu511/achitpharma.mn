"use client";

import { useState, useMemo } from "react";
import { useLocale } from "@/lib/locale-store";
import { ProductsHero } from "@/components/sections/products/ProductsHero";
import { ProductFilters } from "@/components/sections/products/ProductFilters";
import { ProductGrid } from "@/components/sections/products/ProductGrid";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { t } from "@/lib/i18n";

interface Product {
  id: string;
  name: string;
  description: string;
  badge: string;
  color: string;
  category: string;
  ageRange: string;
  formFactor: string;
}

export default function ProductsPage() {
  const locale = useLocale();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [ageRange, setAgeRange] = useState("all");
  const [formFactor, setFormFactor] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Product data - using existing product structure
  const allProducts: Product[] = [
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

  // Filter products
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch =
        search === "" ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || product.category === category;
      const matchesAgeRange = ageRange === "all" || product.ageRange === ageRange;
      const matchesFormFactor = formFactor === "all" || product.formFactor === formFactor;

      return matchesSearch && matchesCategory && matchesAgeRange && matchesFormFactor;
    });
  }, [search, category, ageRange, formFactor, allProducts]);

  // Paginate products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl py-12 md:py-20">
      <ProductsHero locale={locale} />

      <div className="mb-8">
        <ProductFilters
          locale={locale}
          search={search}
          category={category}
          ageRange={ageRange}
          formFactor={formFactor}
          onSearchChange={(value) => {
            setSearch(value);
            handleFilterChange();
          }}
          onCategoryChange={(value) => {
            setCategory(value);
            handleFilterChange();
          }}
          onAgeRangeChange={(value) => {
            setAgeRange(value);
            handleFilterChange();
          }}
          onFormFactorChange={(value) => {
            setFormFactor(value);
            handleFilterChange();
          }}
        />
      </div>

      <div className="mb-8">
        <ProductGrid
          locale={locale}
          products={paginatedProducts}
          empty={filteredProducts.length === 0}
        />
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
