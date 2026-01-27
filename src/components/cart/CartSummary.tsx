"use client";

import { useCartTotals } from "@/lib/cart-store";
import { formatMnt } from "@/lib/money";

export function CartSummary() {
  const { itemCount, subtotal } = useCartTotals();

  return (
    <div className="rounded-2xl border bg-background p-5 shadow-sm">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Нийт бараа</span>
        <span>{itemCount}</span>
      </div>
      <div className="mt-3 flex items-center justify-between text-base font-semibold">
        <span>Дүн</span>
        <span>{formatMnt(subtotal)}</span>
      </div>
    </div>
  );
}

