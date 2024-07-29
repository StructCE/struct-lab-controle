import { CardComponent } from "@/components/cardComponent";
import { type Product } from "@/lib/interfaces/product";

export default function InitCard({ products }: { products: Product[] }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center p-10">
      <CardComponent style="flex flex-col h-fit w-[378px]">
        <div className="h-fit w-full space-y-2 border-b-2 border-secondary pb-4">
          <CardComponent.Title>
            Produtos em Situação Crítica
          </CardComponent.Title>
          <CardComponent.Field>
            <CardComponent.Text style="text-secondary">
              Quantidade de produtos:
            </CardComponent.Text>
            <CardComponent.Text style="text-primary">3</CardComponent.Text>
          </CardComponent.Field>
        </div>
        <div className="mt-2 h-fit w-full space-y-4">
          {products.map((produto) => {
            return (
              <>
                <CardComponent.Field style="justify-between">
                  <CardComponent.Text>{produto.name}</CardComponent.Text>
                  <CardComponent.Text style={produto?.style}>
                    {`(${produto.amount}) ${produto.color}`}
                  </CardComponent.Text>
                </CardComponent.Field>
              </>
            );
          })}
        </div>
      </CardComponent>
    </div>
  );
}
