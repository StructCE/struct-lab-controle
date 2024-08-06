import { db } from "../db";
import type { ProductRepositoryInterface } from "../interfaces/product";

const getAll = async () => await db.product.findMany();

const getOne = async (props: ProductRepositoryInterface["GetOneProps"]) =>
  await db.product.findFirst({ where: { id: props.id } });

const getFiltered = async (
  props: ProductRepositoryInterface["GetFilteredProps"],
) =>
  await db.product.findMany({
    where: {
      name: props.name,
      category: { name: props.category },
      supplier: { name: props.supplier },
    },
  });

const countTotalProducts = async (
  props?: ProductRepositoryInterface["CountTotalProductsProps"],
) =>
  await db.product.aggregate({
    where: { name: props?.name },
    _sum: { currentQuantity: true },
  });

const create = async (props: ProductRepositoryInterface["CreateProps"]) =>
  await db.product.create({ data: { ...props } });

const update = async (props: ProductRepositoryInterface["UpdateProps"]) => {
  const { id, ...data } = props;
  const updatedProduct = await db.product.update({
    where: {
      id: id,
    },
    data: {
      ...data,
    },
  });
  return updatedProduct;
};

const remove = async (props: ProductRepositoryInterface["DeleteProps"]) =>
  await db.product.delete({ where: { id: props.id } });

export const ProductRepository = {
  getAll,
  getOne,
  getFiltered,
  countTotalProducts,
  create,
  update,
  remove,
};
