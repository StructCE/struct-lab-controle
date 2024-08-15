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
      quantity_change: 10,
      created_at: "01/08/2024",
    },
    {
      id: "2",
      name: "Weldo Junior",
      action: "Entrada",
      product: "Arroz",
      product_id: "1",
      quantity_change: 5,
      created_at: "01/08/2024",
    },
  ];
}

export default async function StockHistory() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
