import type { OrderDTO } from "../types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StatusBadge } from "./StatusBadge";
import { StatusSelect } from "./StatusSelect";
import { OrderDetailsDialog } from "./OrderDetailsDialog";

function money(mnt: number) {
  return new Intl.NumberFormat("mn-MN").format(mnt) + "₮";
}

function fmtDate(d: Date) {
  return new Intl.DateTimeFormat("mn-MN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(d));
}

export default function OrderCard({ order }: { order: OrderDTO }) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="text-base truncate">{order.name}</CardTitle>
            <div className="text-xs text-muted-foreground">{order.phone}</div>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-xs text-muted-foreground">{fmtDate(order.createdAt)}</div>
            <div className="font-semibold whitespace-nowrap">{money(order.totalMnt)}</div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <StatusBadge status={order.status} />
          <StatusSelect orderId={order.id} value={order.status} />
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="pt-4 space-y-2">
        <div className="text-xs text-muted-foreground">Хаяг</div>
        <div className="text-sm">{order.address ?? "-"}</div>

        <div className="pt-2 text-xs text-muted-foreground">Items</div>
        <div className="space-y-1">
          {order.items.slice(0, 3).map((it, idx) => (
            <div key={idx} className="flex items-center justify-between gap-3 text-sm">
              <div className="min-w-0 truncate">
                {it.product.name}
                {it.product.sku ? (
                  <span className="text-xs text-muted-foreground"> • {it.product.sku}</span>
                ) : null}
              </div>
              <div className="shrink-0 text-xs text-muted-foreground">
                x{it.qty} • {money(it.priceMnt * it.qty)}
              </div>
            </div>
          ))}

          {order.items.length > 3 && (
            <div className="text-xs text-muted-foreground">+ {order.items.length - 3} item нэмэгдсэн</div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-end">
        <OrderDetailsDialog order={order} />
      </CardFooter>
    </Card>
  );
}
