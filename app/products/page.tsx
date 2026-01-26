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
import { getProducts } from "@/data/products";
import type { Product } from "@/types";

export default function ProductsPage() {
  const locale = useLocale();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [ageRange, setAgeRange] = useState("all");
  const [formFactor, setFormFactor] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Product data - using centralized product data
  const allProducts: Product[] = useMemo(() => getProducts(locale), [locale]);

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
