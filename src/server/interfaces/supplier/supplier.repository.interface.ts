import { z } from "zod";

const getOneProps = z.object({
  id: z.string(),
});

type GetOneProps = z.infer<typeof getOneProps>;

const getFilteredProps = z.object({
  name: z.string(),
});

type GetFilteredProps = z.infer<typeof getFilteredProps>;

const updateProps = z.object({
  id: z.string(),
  name: z.string().optional(),
  contactInfo: z.string().optional(),
});

type UpdateProps = z.infer<typeof updateProps>;

const createProps = z.object({
  name: z.string(),
  contactInfo: z.string(),
});

type CreateProps = z.infer<typeof createProps>;

const deleteProps = z.object({
  id: z.string(),
});

type DeleteProps = z.infer<typeof deleteProps>;

export type SupplierRepositoryInterface = {
  GetOneProps: GetOneProps;
  GetFilteredProps: GetFilteredProps;
  UpdateProps: UpdateProps;
  CreateProps: CreateProps;
  DeleteProps: DeleteProps;
};

export const supplierRepositorySchema = {
  getOneProps,
  getFilteredProps,
  updateProps,
  createProps,
  deleteProps,
};
