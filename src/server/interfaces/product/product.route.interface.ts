type ProductsPerStatus = {
  status: string;
  products: {
    id: string;
    name: string;
    amount: number;
  }[];
}[];

type Product = {
  id: string;
  name: string;
  unitType: string | null;
  currentQuantity: number;
  idealQuantity: number;
  purchasePrice: number | null;
  manufactureDate: Date;
  categoryId: string;
  supplierId: string;
  publicId: string | null;
};

export type ProductRouteInterface = {
  ProductsPerStatus: ProductsPerStatus;
  Product: Product;
};
