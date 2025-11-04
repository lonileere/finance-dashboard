import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const db = new PrismaClient();

async function main() {
  // Categories
  await db.category.deleteMany();
  await db.category.createMany({
    data: ["Groceries", "Rent", "Transport", "Dining"].map((name) => ({
      name,
    })),
  });
  const catIds = (await db.category.findMany()).map((c) => c.id);

  // Transactions
  const tx = Array.from({ length: 3000 }).map(() => {
    const maybeCat =
      faker.helpers.arrayElement<number | null>([...catIds, null]) ?? undefined;
    return {
      date: faker.date.recent({ days: 180 }),
      amount: faker.number.int({ min: -25000, max: 5000 }), // pennies
      description: faker.commerce.productName(),
      account: faker.finance.accountName(),
      categoryId: maybeCat,
    };
  });

  // Insert (single shot; chunk if you scale up)
  await db.transaction.createMany({ data: tx });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
