import type { OrderDTO } from "../types";
import OrderCard from "./OrderCard";

export default function OrdersList({ orders }: { orders: OrderDTO[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {orders.map((o) => (
        <OrderCard key={o.id} order={o} />
      ))}

      {orders.length === 0 && (
        <div className="text-sm text-muted-foreground">Захиалга алга байна.</div>
      )}
    </div>
  );
}
