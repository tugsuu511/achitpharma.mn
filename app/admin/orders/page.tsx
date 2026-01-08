import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import type { OrderDTO } from "./types";
import { OrdersTable } from "./_components/OrdersTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminOrdersPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");
  if (session.user.role !== "ADMIN") redirect("/");

  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    select: {
      id: true,
      createdAt: true,
      name: true,
      phone: true,
      address: true,
      status: true,
      totalMnt: true,
      items: {
        select: {
          qty: true,
          priceMnt: true,
          product: { select: { name: true, sku: true } },
        },
      },
    },
  });

  // Prisma enum/string → OrderDTO статус руу type-safe cast
  const data = orders as unknown as OrderDTO[];

  return (
    <div className="p-6 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Захиалгууд</CardTitle>
        </CardHeader>
        <CardContent>
          <OrdersTable orders={data} />
        </CardContent>
      </Card>
    </div>
  );
}
