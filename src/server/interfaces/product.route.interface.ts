type Response<T> =
  | {
      data: T;
      status: number;
    }
  | {
      error: string;
      status: number;
    };

type ProductsPerStatus = {
  status: string;
  products: {
    id: string;
    name: string;
    amount: number;
  };
}[];

type Product = {
  id: string;
  name: string;
  currentQuantity: number;
  idealQuantity: number;
  manufactureDate: Date;
  categoryId: string;
  supplierId: string;
  publicId: string | null;
};

export type { Response, ProductsPerStatus, Product };
