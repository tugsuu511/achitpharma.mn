"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { OrderDTO } from "../types";

function money(mnt: number) {
  return new Intl.NumberFormat("mn-MN").format(mnt) + "₮";
}

export function OrderDetailsDialog({ order }: { order: OrderDTO }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Дэлгэрэнгүй
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Захиалга #{order.id.slice(-6)}</DialogTitle>
        </DialogHeader>

        <div className="space-y-2 text-sm">
          <div className="grid grid-cols-3 gap-2">
            <div className="text-muted-foreground">Нэр</div>
            <div className="col-span-2">{order.name}</div>

            <div className="text-muted-foreground">Утас</div>
            <div className="col-span-2">{order.phone}</div>

            <div className="text-muted-foreground">Хаяг</div>
            <div className="col-span-2">{order.address ?? "-"}</div>
          </div>

          <div className="pt-2 font-medium">Items</div>
          <div className="space-y-1">
            {order.items.map((it, idx) => (
              <div key={idx} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate">{it.product.name}</div>
                  <div className="text-xs text-muted-foreground">{it.product.sku ?? "-"}</div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-xs text-muted-foreground">x{it.qty}</div>
                  <div className="font-medium">{money(it.priceMnt * it.qty)}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 flex items-center justify-between border-t">
            <div className="text-muted-foreground">Нийт</div>
            <div className="font-semibold">{money(order.totalMnt)}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
