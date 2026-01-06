import { Badge } from "@/components/ui/badge";
import type { OrderStatus } from "../types";

export function StatusBadge({ status }: { status: OrderStatus }) {
  switch (status) {
    case "NEW":
      return <Badge variant="secondary">NEW</Badge>;
    case "CONFIRMED":
      return <Badge>CONFIRMED</Badge>;
    case "SHIPPED":
      return <Badge variant="outline">SHIPPED</Badge>;
    case "CANCELLED":
      return <Badge variant="destructive">CANCELLED</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}
