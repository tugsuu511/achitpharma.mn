import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.upsert({
    where: { sku: "ADVA-IRON" },
    update: { name: "Adva-Iron", priceMnt: 45000, isActive: true },
    create: { sku: "ADVA-IRON", name: "Adva-Iron", priceMnt: 45000, isActive: true },
  });

  await prisma.product.upsert({
    where: { sku: "ADVA-BIOTICS" },
    update: { name: "Adva-Biotics", priceMnt: 25000, isActive: true },
    create: { sku: "ADVA-BIOTICS", name: "Adva-Biotics", priceMnt: 25000, isActive: true },
  });

  console.log("Seed done ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
