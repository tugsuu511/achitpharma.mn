import type { OrderDTO } from "../types";
import { StatusBadge } from "./StatusBadge";
import { StatusSelect } from "./StatusSelect";
import { OrderDetailsDialog } from "./OrderDetailsDialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function fmtDate(d: Date) {
  return new Intl.DateTimeFormat("mn-MN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(d));
}

function money(mnt: number) {
  return new Intl.NumberFormat("mn-MN").format(mnt) + "₮";
}

export function OrdersTable({ orders }: { orders: OrderDTO[] }) {
  return (
    <div className="rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Огноо</TableHead>
            <TableHead>Захиалагч</TableHead>
            <TableHead>Утас</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Нийт</TableHead>
            <TableHead className="text-right">Үйлдэл</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((o) => (
            <TableRow key={o.id}>
              <TableCell className="whitespace-nowrap">{fmtDate(o.createdAt)}</TableCell>
              <TableCell className="font-medium">{o.name}</TableCell>
              <TableCell className="whitespace-nowrap">{o.phone}</TableCell>

              <TableCell className="space-y-2">
                <StatusBadge status={o.status} />
                <div>
                  <StatusSelect orderId={o.id} value={o.status} />
                </div>
              </TableCell>

              <TableCell className="text-right whitespace-nowrap">{money(o.totalMnt)}</TableCell>

              <TableCell className="text-right">
                <OrderDetailsDialog order={o} />
              </TableCell>
            </TableRow>
          ))}

          {orders.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-sm text-muted-foreground py-10">
                Захиалга алга байна.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
