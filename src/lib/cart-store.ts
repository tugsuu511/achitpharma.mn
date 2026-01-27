"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  productId: string;
  name: string;
  unitPrice: number;
  qty: number;
  imageSrc?: string;
};

type CartState = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  decrement: (productId: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      add: (item, qty = 1) => {
        const safeQty = Math.max(1, Math.trunc(qty));
        const existing = get().items.find((i) => i.productId === item.productId);

        if (existing) {
          set({
            items: get().items.map((i) =>
              i.productId === item.productId ? { ...i, qty: i.qty + safeQty } : i,
            ),
          });
          return;
        }

        set({
          items: [...get().items, { ...item, qty: safeQty }],
        });
      },

      remove: (productId) => {
        set({
          items: get().items.filter((i) => i.productId !== productId),
        });
      },

      setQty: (productId, qty) => {
        const safeQty = Math.max(1, Math.trunc(qty));
        set({
          items: get().items.map((i) => (i.productId === productId ? { ...i, qty: safeQty } : i)),
        });
      },

      decrement: (productId) => {
        const item = get().items.find((i) => i.productId === productId);
        if (!item) return;

        const nextQty = item.qty - 1;
        if (nextQty <= 0) {
          get().remove(productId);
          return;
        }

        get().setQty(productId, nextQty);
      },

      clear: () => {
        set({ items: [] });
      },
    }),
    {
      name: "achitpharma-cart",
    },
  ),
);

export function useCartTotals() {
  const items = useCart((s) => s.items);

  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);

  // TODO: During checkout, always re-fetch prices on the server and re-calculate totals.
  // Never trust client totals or unit prices for order creation.
  const total = subtotal;

  return { itemCount, subtotal, total };
}

