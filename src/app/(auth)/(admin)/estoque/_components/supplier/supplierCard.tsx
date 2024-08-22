import { CardComponent } from "@/components/cardComponent";

type SupplierCardProps = {
  supplierName: string;
  registeredProducts: number;
  productsProportion: string;
};

export default function SupplierCard(props: SupplierCardProps) {
  return (
    <CardComponent className="h-auto w-full flex-col gap-4">
      <CardComponent.Title>{props.supplierName}</CardComponent.Title>
      <CardComponent.Field className="mb-4 flex-col">
        <CardComponent.LabelValue
          label="Produtos Cadastrados:"
          value={props.registeredProducts.toString()}
        ></CardComponent.LabelValue>
        <CardComponent.LabelValue
          label="Quantidade de produtos(em %):"
          value={props.productsProportion}
        ></CardComponent.LabelValue>
      </CardComponent.Field>
    </CardComponent>
  );
}
