import { db } from "../db";
import type { CategoryRepositoryInterface } from "@/server/interfaces/category";

const getAll = async () => await db.category.findMany();

const getOne = async (props: CategoryRepositoryInterface["GetOneProps"]) =>
  await db.category.findFirst({ where: { id: props.id } });

const getFiltered = async (
  props: CategoryRepositoryInterface["GetFilteredProps"],
) =>
  await db.category.findMany({
    where: { name: props.name },
    include: { products: true },
  });

const create = async (props: CategoryRepositoryInterface["CreateProps"]) =>
  await db.category.create({ data: { ...props } });

const update = async (props: CategoryRepositoryInterface["UpdateProps"]) => {
  const { id, ...data } = props;
  const updatedCategory = await db.category.update({
    where: {
      id: id,
    },
    data: {
      ...data,
    },
  });
  return updatedCategory;
};

const remove = async (props: CategoryRepositoryInterface["DeleteProps"]) =>
  await db.category.delete({ where: { id: props.id } });

export const categoryRepository = {
  getAll,
  getOne,
  getFiltered,
  create,
  update,
  remove,
};
