// getCategories => {name: string, productsRegistered: number, proportion: number, incomeProportion: number}

type Categories = {
  name: string;
  registeredProducts: number;
  proportion: number;
  incomeProportion: number;
}[];

export type CategoryRouteInterface = {
  Categories: Categories;
};
