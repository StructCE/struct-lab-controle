import { CardComponent } from "@/components/cardComponent";

type InitCardProps = {
  products: {
    name: string;
    amount: number;
    color: string;
    colorStyle: string;
  }[];
};

export default function InitCard(props: InitCardProps) {
  return (
    <div className="flex h-screen w-screen items-center justify-center p-10">
      <CardComponent className="flex h-fit w-[378px] flex-col">
        <div className="h-fit w-full space-y-2 border-b-2 border-secondary pb-4">
          <CardComponent.Title>
            Produtos em Situação Crítica
          </CardComponent.Title>
          <CardComponent.LabelValue
            label="Quantidade de Produtos"
            value={props.products.length.toString()}
          ></CardComponent.LabelValue>
        </div>
        <div className="mt-2 h-fit w-full space-y-4">
          {props.products.map((produto) => {
            return (
              <>
                <CardComponent.Field className="justify-between">
                  <CardComponent.Text>{produto.name}</CardComponent.Text>
                  <CardComponent.Text className={produto?.colorStyle}>
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
