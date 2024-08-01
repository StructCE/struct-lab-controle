import { CardComponent } from "@/components/cardComponent";

type CategoryCardProps = {
  categoryName: string;
  registeredProducts: number;
  productsProportion: string;
  income: string;
};

export default function CategoryCard(props: CategoryCardProps) {
  return (
    <CardComponent className="h-auto w-full flex-col gap-4">
      <CardComponent.Title>{props.categoryName}</CardComponent.Title>
      <CardComponent.Field className="mb-4 flex-col">
        <CardComponent.LabelValue
          label="Produtos Cadastrados:"
          value={props.registeredProducts.toString()}
        ></CardComponent.LabelValue>
        <CardComponent.LabelValue
          label="Quantidade de produtos(em %):"
          value={props.productsProportion}
        ></CardComponent.LabelValue>
        <CardComponent.LabelValue
          label="Receita da Categoria(em %):"
          value={props.income}
        ></CardComponent.LabelValue>
      </CardComponent.Field>
    </CardComponent>
  );
}
