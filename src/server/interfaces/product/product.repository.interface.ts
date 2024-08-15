import { z } from "zod";

const getOneProps = z.object({
  id: z.string(),
});

type GetOneProps = z.infer<typeof getOneProps>;

const getFilteredProps = z.object({
  name: z.string(),
  category: z.string(),
  supplier: z.string(),
});

type GetFilteredProps = z.infer<typeof getFilteredProps>;

const updateProps = z.object({
  id: z.string(),
  name: z.string().optional(),
  currentQuantity: z.number().optional(),
  idealQuantity: z.number().optional(),
  manufactureDate: z.date().optional(),
  categoryId: z.string().optional(),
  supplierId: z.string().optional(),
  publicId: z.string().optional(),
});

const countTotalProductsProps = z.object({
  name: z.string(),
});

type CountTotalProductsProps = z.infer<typeof countTotalProductsProps>;

type UpdateProps = z.infer<typeof updateProps>;

const createProps = z.object({
  name: z.string(),
  currentQuantity: z.number(),
  idealQuantity: z.number(),
  manufactureDate: z.date(),
  categoryId: z.string(),
  supplierId: z.string(),
  publicId: z.string(),
});

type CreateProps = z.infer<typeof createProps>;

const deleteProps = z.object({
  id: z.string(),
});

type DeleteProps = z.infer<typeof deleteProps>;

export type ProductRepositoryInterface = {
  GetOneProps: GetOneProps;
  GetFilteredProps: GetFilteredProps;
  CountTotalProductsProps: CountTotalProductsProps;
  UpdateProps: UpdateProps;
  CreateProps: CreateProps;
  DeleteProps: DeleteProps;
};

export const productRepositorySchema = {
  getOneProps,
  getFilteredProps,
  countTotalProductsProps,
  updateProps,
  createProps,
  deleteProps,
};
