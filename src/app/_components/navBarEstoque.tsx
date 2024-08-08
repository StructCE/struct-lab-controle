import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export function NavBarEstoque() {
  return (
    <div className="mx-28">
      <h1 className="text-2xl pb-9 font-semibold">Controle de Estoque</h1>
      <Tabs className="">
        <TabsList className="w-full rounded-none flex justify-start items-baseline border-b-2 bg-transparent text-base font-bold pl-0">
          <TabsTrigger value="Produtos" className="rounded-none pb-2 px-12  data-[state=active]:border-b-4 data-[state=active]:border-black">
            Produtos
          </TabsTrigger>
          <TabsTrigger value="Categorias" className=" rounded-none pb-2 px-12 data-[state=active]:border-b-4 data-[state=active]:border-black">
            Categorias
          </TabsTrigger>
          <TabsTrigger value="Fornecedores" className="rounded-none pb-2 px-12 data-[state=active]:border-b-4 data-[state=active]:border-black">
            Fornecedores
          </TabsTrigger>
        </TabsList>


        <TabsContent value="Produtos">Produtos</TabsContent>
        <TabsContent value="Categorias">Categorias</TabsContent>
        <TabsContent value="Fornecedores">Fornecedores</TabsContent>
      </Tabs>
    </div>
  );
}
