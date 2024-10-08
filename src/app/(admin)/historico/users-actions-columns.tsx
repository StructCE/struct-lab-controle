"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type UsersAction = {
  id: string;
  name: string;
  action: "Retirada" | "Entrada" | "Criar" | "Editar";
  product: string;
  product_id: string;
  quantity_change: number;
  created_at: string;
};

export const columns: ColumnDef<UsersAction>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Ação",
  },
  {
    accessorKey: "product",
    header: "Nome do Produto",
  },
  {
    accessorKey: "product_id",
    header: "Id do Produto",
  },
  {
    accessorKey: "quantity_change",
    header: "Quantidade",
  },
  {
    accessorKey: "created_at",
    header: "Data",
  },
];
