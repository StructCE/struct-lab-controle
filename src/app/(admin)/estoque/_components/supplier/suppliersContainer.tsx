import SupplierCard from "./supplierCard";

type SuppliersContainerProps = {
  filter: string;
};

export default function SuppliersContainer(props: SuppliersContainerProps) {
  // const suppliersInfo = api.category.getFilteredsuppliers({filter: props.filter})
  return (
    <div className="grid h-fit w-full grid-cols-3 gap-8">
      {suppliersInfo.map((supplierInfo, index) => (
        <SupplierCard key={index} {...supplierInfo}></SupplierCard>
      ))}
    </div>
  );
}
