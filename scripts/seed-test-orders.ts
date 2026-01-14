import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const iron = await prisma.product.upsert({
    where: { sku: "ADVA-IRON" },
    update: { name: "Adva-Iron", priceMnt: 45000, isActive: true },
    create: { sku: "ADVA-IRON", name: "Adva-Iron", priceMnt: 45000, isActive: true },
  });

  const biotics = await prisma.product.upsert({
    where: { sku: "ADVA-BIOTICS" },
    update: { name: "Adva-Biotics", priceMnt: 25000, isActive: true },
    create: { sku: "ADVA-BIOTICS", name: "Adva-Biotics", priceMnt: 25000, isActive: true },
  });

  const qtyIron = 1;
  const qtyBiotics = 2;

  const totalMnt = iron.priceMnt * qtyIron + biotics.priceMnt * qtyBiotics;

  const order = await prisma.order.create({
    data: {
      name: "Test Parent",
      phone: "99112233",
      address: "Ulaanbaatar, Sukhbaatar district",
      status: "NEW",
      totalMnt,
      items: {
        create: [
          {
            qty: qtyIron,
            priceMnt: iron.priceMnt,
            product: { connect: { id: iron.id } },
          },
          {
            qty: qtyBiotics,
            priceMnt: biotics.priceMnt,
            product: { connect: { id: biotics.id } },
          },
        ],
      },
    },
    select: { id: true, totalMnt: true },
  });

  console.log("Seed done ✅");
  console.log("Test order created ✅", order);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
