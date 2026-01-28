"use client";

import { useLocale } from "@/lib/locale-store";
import { ProductsHero } from "@/components/sections/products/ProductsHero";
import { ProductGrid } from "@/components/sections/products/ProductGrid";
import { ProductsPaginationControls } from "@/components/sections/products/ProductsPaginationControls";
import { useProductsPage } from "@/components/sections/products/useProductsPage";

export default function ProductsPage() {
  const locale = useLocale();

  const {
    currentPage,
    totalPages,
    paginatedProducts,
    filteredCount,
    handlePageChange,
    handlePreviousPage,
    handleNextPage,
  } = useProductsPage(locale, { itemsPerPage: 8 });

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl py-12 md:py-20">
      <ProductsHero locale={locale} />

      <div className="mb-8">
        <ProductGrid
          locale={locale}
          products={paginatedProducts}
          empty={filteredCount === 0}
        />
      </div>

      <ProductsPaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
}
