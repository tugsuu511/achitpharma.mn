"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { CartSummary } from "@/components/cart/CartSummary";
import { useCart, useCartTotals } from "@/lib/cart-store";
import { formatMnt } from "@/lib/money";

export default function CartPage() {
  const items = useCart((s) => s.items);
  const clear = useCart((s) => s.clear);
  const { subtotal } = useCartTotals();

  const isEmpty = items.length === 0;

  return (
    <div className="bg-muted/20 py-12">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Сагс
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Та нэмсэн бүтээгдэхүүнүүдээ эндээс удирдана.
              </p>
            </div>
            {!isEmpty ? (
              <Button type="button" variant="outline" onClick={() => clear()}>
                Сагс хоослох
              </Button>
            ) : null}
          </div>

          {isEmpty ? (
            <div className="rounded-3xl border bg-background p-10 text-center shadow-sm">
              <div className="text-lg font-semibold">Сагс хоосон байна</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Бүтээгдэхүүн нэмээд үргэлжлүүлээрэй.
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/products">Бүтээгдэхүүн үзэх</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItemRow key={item.productId} item={item} />
                ))}
              </div>

              <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
                <CartSummary />
                <div className="rounded-2xl border bg-background p-5 shadow-sm">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Нийт дүн</span>
                    <span>{formatMnt(subtotal)}</span>
                  </div>
                  <div className="mt-4 text-xs text-muted-foreground">
                    Төлбөрийн хэсэг дараа нэмэгдэнэ.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

