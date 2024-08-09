import { DataTable } from "@/app/_components/data-table";
import { UsersAction, columns } from "./users-actions-columns";

async function getData(): Promise<UsersAction[]> {
  return [
    {
      id: "1",
      name: "Demétrius Mendes",
      action: "Retirada",
      product: "Arroz",
      product_id: "1",
    },
    // ...
  ];
}

export default async function UsersActionPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
