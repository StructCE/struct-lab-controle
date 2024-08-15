type GetFiltered = {
  id: string;
  name: string;
  registeredProducts: number;
  productsAmount: number;
}[];

type Supplier = {
  id: string;
  name: string;
  contactInfo: string;
};

export type SupplierRouteInterface = {
  GetFiltered: GetFiltered;
  Supplier: Supplier;
};
