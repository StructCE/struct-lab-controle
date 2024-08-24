import CldImage from "@/components/app/cldImage";
import { CardComponent } from "@/components/cardComponent";
import { cn } from "@/lib/utils";
import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { LuTrash2 } from "react-icons/lu";

type ProductsCardFieldStyledProps = {
  className?: string;
  children: React.ReactNode;
};

function ProductsCardField(props: ProductsCardFieldStyledProps) {
  const style = cn(
    "flex h-full w-full flex-col justify-between",
    props.className,
  );
  return (
    <CardComponent.Field className={style}>
      {props.children}
    </CardComponent.Field>
  );
}

type ProductsCardLabelValueStyledProps = {
  className?: string;
  label: string;
  value: string;
};

function ProductsCardLabelValue(props: ProductsCardLabelValueStyledProps) {
  const style = cn("flex flex-col", props.className);
  return (
    <CardComponent.LabelValue
      className={style}
      label={props.label}
      value={props.value}
    ></CardComponent.LabelValue>
  );
}

type ProductsCardProps = {
  handleEditPress?: () => void;
  handleDeletePress?: () => void;
  productInfo: {
    publicId?: string;
    name: string;
    category: string;
    date: string;
    supplier: string;
    idealAmount: number;
    amount: number;
  };
};

export default function ProductsCard(props: ProductsCardProps) {
  return (
    <CardComponent className="flex h-fit w-[1140px] gap-4">
      <div>
        <CardComponent.Image className="h-[160px] w-[160px]">
          {props.productInfo.publicId && (
            <CldImage
              width={160}
              height={160}
              crop={"fill"}
              alt="*foto"
              src={props.productInfo.publicId}
            ></CldImage>
          )}
        </CardComponent.Image>
      </div>

      <CardComponent.Grid className="flex w-full items-center ">
        <ProductsCardField>
          <ProductsCardLabelValue
            label="Nome do Produto"
            value={props.productInfo.name}
          ></ProductsCardLabelValue>
          <ProductsCardLabelValue
            label="Fornecedor"
            value={props.productInfo.supplier}
          ></ProductsCardLabelValue>
        </ProductsCardField>

        <ProductsCardField>
          <ProductsCardLabelValue
            label="Categoria"
            value={props.productInfo.category}
          ></ProductsCardLabelValue>
          <ProductsCardLabelValue
            label="Quantidade recomendada"
            value={props.productInfo.idealAmount.toString()}
          ></ProductsCardLabelValue>
        </ProductsCardField>

        <ProductsCardField>
          <ProductsCardLabelValue
            label="Data de Fabricação"
            value={props.productInfo.date}
          ></ProductsCardLabelValue>
          <CardComponent.Field className="flex flex-col">
            <CardComponent.Text className="text-secondary">
              Situação de Estoque
            </CardComponent.Text>
            {/* Calcular cor pela proporcao? */}
            <CardComponent.Text className="text-[#34A853]">
              {`${props.productInfo.amount}/${props.productInfo.idealAmount}`}
            </CardComponent.Text>
          </CardComponent.Field>
        </ProductsCardField>

        <ProductsCardField className="w-auto items-end">
          <CardComponent.Button
            handlePress={props.handleEditPress}
            icon={<FaPenToSquare size={20} />}
          >
            Editar
          </CardComponent.Button>
          <CardComponent.Button
            handlePress={props.handleDeletePress}
            icon={<LuTrash2 size={20} />}
          >
            Deletar
          </CardComponent.Button>
        </ProductsCardField>
      </CardComponent.Grid>
    </CardComponent>
  );
}
