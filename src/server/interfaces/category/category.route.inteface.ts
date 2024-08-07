// getCategories => {name: string, productsRegistered: number, proportion: number, incomeProportion: number}

type Categories = {
  name: string;
  registeredProducts: number;
  proportion: number;
  incomeProportion: number;
}[];

type Category = {
  id: string;
  name: string;
  description: string;
};

export type CategoryRouteInterface = {
  Categories: Categories;
  Category: Category;
};
