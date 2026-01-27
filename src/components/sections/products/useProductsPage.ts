"use client";

import { useMemo, useState } from "react";

import { getProducts } from "@/data/products";
import type { Locale } from "@/lib/locale-store";
import type { Product } from "@/types";

type UseProductsPageOptions = {
  itemsPerPage?: number;
};

export function useProductsPage(
  locale: Locale,
  options: UseProductsPageOptions = {},
) {
  const itemsPerPage = options.itemsPerPage ?? 8;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [ageRange, setAgeRange] = useState("all");
  const [formFactor, setFormFactor] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const allProducts: Product[] = useMemo(() => getProducts(locale), [locale]);

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

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const resetToFirstPage = () => setCurrentPage(1);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    resetToFirstPage();
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    resetToFirstPage();
  };

  const handleAgeRangeChange = (value: string) => {
    setAgeRange(value);
    resetToFirstPage();
  };

  const handleFormFactorChange = (value: string) => {
    setFormFactor(value);
    resetToFirstPage();
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  };

  return {
    search,
    category,
    ageRange,
    formFactor,
    currentPage,
    totalPages,
    paginatedProducts,
    filteredCount: filteredProducts.length,
    handleSearchChange,
    handleCategoryChange,
    handleAgeRangeChange,
    handleFormFactorChange,
    handlePageChange,
    handlePreviousPage,
    handleNextPage,
  };
}
