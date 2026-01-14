import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";



const OrderSchema = z.object({
  name: z.string().min(1).max(100),
  phone: z.string().min(6).max(30),
  address: z.string().max(300).optional(),
  note: z.string().max(2000).optional(),
  items: z
    .array(
      z.object({
        productId: z.string().min(1),
        qty: z.number().int().min(1).max(999),
      })
    )
    .min(1),
});


// POST /api/orders
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = OrderSchema.parse(body);

    // Fetch products to validate + get prices
    const products = await prisma.product.findMany({
      where: {
        id: { in: data.items.map((i) => i.productId) },
        isActive: true,
      },
      select: { id: true, priceMnt: true },
    });

    const priceMap = new Map(products.map((p) => [p.id, p.priceMnt]));

    // Validate all requested items exist
    for (const item of data.items) {
      if (!priceMap.has(item.productId)) {
        return NextResponse.json(
          { ok: false, error: "INVALID_PRODUCT", productId: item.productId },
          { status: 400 }
        );
      }
    }

    const totalMnt = data.items.reduce(
      (sum, i) => sum + (priceMap.get(i.productId) ?? 0) * i.qty,
      0
    );

    const order = await prisma.order.create({
      data: {
        name: data.name,
        phone: data.phone,
        address: data.address,
        note: data.note,
        totalMnt,
        status: "NEW",
        items: {
          create: data.items.map((i) => ({
            productId: i.productId,
            qty: i.qty,
            priceMnt: priceMap.get(i.productId)!,
          })),
        },
      },
      select: { id: true, totalMnt: true, status: true, createdAt: true },
    });

    return NextResponse.json({ ok: true, order });
  } catch  {
    return NextResponse.json({ ok: false, error: "BAD_REQUEST" }, { status: 400 });
  }
}

export async function GET() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    select: {
      id: true,
      name: true,
      phone: true,
      address: true,
      status: true,
      totalMnt: true,
      createdAt: true,
      items: {
        select: {
          qty: true,
          priceMnt: true,
          product: { select: { sku: true, name: true } },
        },
      },
    },
  });

  return NextResponse.json({ ok: true, orders });
}

