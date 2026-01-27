"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { CartItem } from "@/lib/cart-store";
import { useCart } from "@/lib/cart-store";
import { formatMnt } from "@/lib/money";

type CartItemRowProps = {
  item: CartItem;
};

export function CartItemRow({ item }: CartItemRowProps) {
  const add = useCart((s) => s.add);
  const decrement = useCart((s) => s.decrement);
  const remove = useCart((s) => s.remove);

  const lineTotal = item.unitPrice * item.qty;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-background p-4 shadow-sm md:flex-row md:items-center">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-muted">
          {item.imageSrc ? (
            <Image
              src={item.imageSrc}
              alt={item.name}
              fill
              className="object-contain p-2"
              sizes="64px"
            />
          ) : (
            <div className="h-full w-full" />
          )}
        </div>

        <div className="min-w-0">
          <div className="truncate text-base font-semibold">{item.name}</div>
          <div className="mt-1 text-sm text-muted-foreground">
            {formatMnt(item.unitPrice)}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-wrap items-center gap-3 md:justify-end">
        <div className="flex items-center gap-2 rounded-full border px-2 py-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => decrement(item.productId)}
            aria-label="Тоог бууруулах"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <div className="w-8 text-center text-sm font-semibold">{item.qty}</div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() =>
              add(
                {
                  productId: item.productId,
                  name: item.name,
                  unitPrice: item.unitPrice,
                  imageSrc: item.imageSrc,
                },
                1,
              )
            }
            aria-label="Тоог нэмэх"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="min-w-[110px] text-right">
          <div className="text-xs text-muted-foreground">Нийт</div>
          <div className="text-base font-semibold">{formatMnt(lineTotal)}</div>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-9 w-9"
          onClick={() => remove(item.productId)}
          aria-label="Мөр устгах"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

