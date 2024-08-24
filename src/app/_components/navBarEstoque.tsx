"use client";
import { type SetStateAction, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Filtro } from "./filtro";
import { SearchBar } from "./searchBar";
import { BtnRegister } from "./btnRegister";

export function NavBarEstoque() {
  // Estado para armazenar o valor da aba ativa
  const [tabValue, setTabValue] = useState("Produtos");

  // Função para atualizar o valor da aba ativa
  const handleTabChange = (value: SetStateAction<string>) => {
    setTabValue(value);
  };

  return (
    <div className="mx-28">
      <h1 className="pb-9 text-2xl font-semibold">Controle de Estoque</h1>
      <Tabs value={tabValue} onValueChange={handleTabChange}>
        <TabsList className="mb-9 flex w-full items-baseline justify-start rounded-none border-b-2 bg-transparent pl-0 text-base font-bold">
          <TabsTrigger
            value="Produtos"
            className="rounded-none px-12 pb-2 data-[state=active]:border-b-4 data-[state=active]:border-black"
          >
            Produtos
          </TabsTrigger>
          <TabsTrigger
            value="Categorias"
            className="rounded-none px-12 pb-2 data-[state=active]:border-b-4 data-[state=active]:border-black"
          >
            Categorias
          </TabsTrigger>
          <TabsTrigger
            value="Fornecedores"
            className="rounded-none px-12 pb-2 data-[state=active]:border-b-4 data-[state=active]:border-black"
          >
            Fornecedores
          </TabsTrigger>
        </TabsList>
        <div className="flex">
          <Filtro value={"ddd"}>ffff</Filtro>
          <div className="mb-6 ml-7 flex w-full items-center justify-between">
            <SearchBar placeholder={tabValue} />
            <BtnRegister>{tabValue}</BtnRegister>
          </div>
        </div>
        <TabsContent value="Produtos">Produtos</TabsContent>
        <TabsContent value="Categorias">Categorias</TabsContent>
        <TabsContent value="Fornecedores">Fornecedores</TabsContent>
      </Tabs>
    </div>
  );
}
