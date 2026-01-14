"use client";

import * as React from "react";
import type { OrderStatus } from "../types";
import { updateOrderStatus } from "../actions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const OPTIONS: OrderStatus[] = ["NEW", "CONFIRMED", "SHIPPED", "CANCELLED"];

export function StatusSelect({
  orderId,
  value,
}: {
  orderId: string;
  value: OrderStatus;
}) {
  const [pending, startTransition] = React.useTransition();

  return (
    <Select
      value={value}
      onValueChange={(v) =>
        startTransition(async () => {
          await updateOrderStatus(orderId, v as OrderStatus);
        })
      }
      disabled={pending}
    >
      <SelectTrigger className="w-[160px]">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        {OPTIONS.map((s) => (
          <SelectItem key={s} value={s}>
            {s}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
