import { db } from "../db";
import * as ProductRepositoryInterfaces from "../interfaces/product.repository.interface";
const getAll = async () => await db.product.findMany();

const getOne = async (props: ProductRepositoryInterfaces.GetOneProps) =>
  await db.product.findFirst({ where: { id: props.id } });

const getFiltered = async (
  props: ProductRepositoryInterfaces.GetFilteredProps,
) =>
  await db.product.findMany({
    where: {
      name: props.name,
      category: { name: props.category },
      supplier: { name: props.supplier },
    },
  });

const create = async (props: ProductRepositoryInterfaces.CreateProps) =>
  await db.product.create({ data: { ...props } });

const update = async (props: ProductRepositoryInterfaces.UpdateProps) => {
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

const remove = async (props: ProductRepositoryInterfaces.DeleteProps) =>
  await db.product.delete({ where: { id: props.id } });

export { getOne, getFiltered, getAll, create, update, remove };
