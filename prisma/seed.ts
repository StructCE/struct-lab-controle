// import { db } from "@/server/db";

// async function main() {
//   const adminUsers = await db.user.createMany({
//     data: [
//       {
//         email: "matheusnf@struct.unb.br",
//         emailVerified: new Date(),
//         isAdmin: true,
//         name: "Matheus das Neves Fernandes",
//       },
//     ],
//   });
//   console.log(adminUsers);
// }

// main().catch((e) => {
//   console.log(e);
// });

import { db } from "@/server/db";

async function main() {
  // Create admin user
  const adminUsers = await db.user.createMany({
    data: [
      {
        email: "matheusnf@struct.unb.br",
        emailVerified: new Date(),
        isAdmin: true,
        name: "Matheus das Neves Fernandes",
      },
    ],
  });
  console.log(adminUsers);

  // Create categories
  const categories = await db.category.createMany({
    data: [
      {
        id: "category-1",
        name: "Beverages",
        description: "Drinks and liquid refreshments",
      },
      {
        id: "category-2",
        name: "Snacks",
        description: "Light meals and quick bites",
      },
    ],
  });
  console.log(categories);

  // Create suppliers
  const suppliers = await db.supplier.createMany({
    data: [
      {
        id: "supplier-1",
        name: "Supplier A",
        contactInfo: "contact@supplier-a.com",
      },
      {
        id: "supplier-2",
        name: "Supplier B",
        contactInfo: "contact@supplier-b.com",
      },
    ],
  });
  console.log(suppliers);

  // Create products
  const products = await db.product.createMany({
    data: [
      {
        id: "product-1",
        name: "Coca Cola",
        unitType: "L",
        currentQuantity: 100,
        idealQuantity: 200,
        purchasePrice: 150, // Assuming the price is in cents
        manufactureDate: new Date("2024-01-01"),
        categoryId: "category-1",
        supplierId: "supplier-1",
        publicId: "prod-cc",
      },
      {
        id: "product-2",
        name: "Chips",
        unitType: "kg",
        currentQuantity: 50,
        idealQuantity: 100,
        purchasePrice: 300,
        manufactureDate: new Date("2024-02-01"),
        categoryId: "category-2",
        supplierId: "supplier-2",
        publicId: "prod-chips",
      },
    ],
  });
  console.log(products);
}

main().catch((e) => {
  console.log(e);
});
