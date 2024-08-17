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
      {
        email: "kaleb.henrique@struct.unb.br",
        emailVerified: new Date(),
        isAdmin: true,
        name: "Kaleb Henrique",
      },
      {
        email: "weldo.silva@struct.unb.br",
        emailVerified: new Date(),
        isAdmin: false,
        name: "Weldo Gonçalves da Silva Junior",
      },
    ],
  });
  console.log(adminUsers);
}

main().catch((e) => {
  console.log(e);
});
