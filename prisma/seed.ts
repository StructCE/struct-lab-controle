import { db } from "@/server/db";

async function main() {
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
}

main().catch((e) => {
  console.log(e);
});
