"use client";
import ProductsCard from "./productsCard";
import { useProductsHandlers } from "./useProductsHandlers";

type ProductsContainerProps = {
  filter: string;
};

export default function ProductsContainer(props: ProductsContainerProps) {
  // const productsInfo = api.product.getFilteredProducts({filter: props.filter})
  const { open, onChange } = useProductsHandlers();
  return (
    <div className="flex flex-col gap-4">
      {productsInfo.map((productInfo, index) => (
        <ProductsCard
          key={index}
          productInfo={productInfo}
          handleEditPress={onChange.edit}
          handleDeletePress={onChange.delete}
        ></ProductsCard>
        // {
        /* <DeleteCard productInfo={productInfo} open={open.delete} onChange={onChange.delete} >
      
        </DeleteCard>
        <EditCard productInfo={productInfo} open={open.edit} onChange={onChange.edit}>
        
        </EditCard>   */
        // }
      ))}
    </div>
  );
}
