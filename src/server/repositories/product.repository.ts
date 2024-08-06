import { db } from "../db";
import type { ProductRepositoryInterface } from "../interfaces/product.repository.interface";
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
  getOne,
  getFiltered,
  getAll,
  create,
  update,
  remove,
};
