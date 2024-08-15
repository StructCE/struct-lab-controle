import { db } from "../db";
import type { SupplierRepositoryInterface } from "@/server/interfaces/supplier";

const getAll = async () => await db.supplier.findMany();

const getOne = async (props: SupplierRepositoryInterface["GetOneProps"]) =>
  await db.supplier.findFirst({
    where: { id: props.id },
    include: { products: true },
  });

const getFiltered = async (
  props: SupplierRepositoryInterface["GetFilteredProps"],
) =>
  await db.supplier.findMany({
    where: { name: props.name },
    include: { products: true },
  });

const create = async (props: SupplierRepositoryInterface["CreateProps"]) =>
  await db.supplier.create({ data: { ...props } });

const update = async (props: SupplierRepositoryInterface["UpdateProps"]) => {
  const { id, ...data } = props;
  const updatedsupplier = await db.supplier.update({
    where: {
      id: id,
    },
    data: {
      ...data,
    },
  });
  return updatedsupplier;
};

const remove = async (props: SupplierRepositoryInterface["DeleteProps"]) =>
  await db.supplier.delete({ where: { id: props.id } });

export const supplierRepository = {
  getAll,
  getOne,
  getFiltered,
  create,
  update,
  remove,
};
