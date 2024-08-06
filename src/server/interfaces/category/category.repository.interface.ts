import { z } from "zod";

const getOneProps = z.object({
  id: z.string(),
});

type GetOneProps = z.infer<typeof getOneProps>;

const getFilteredProps = z.object({
  name: z.string(),
});

type GetFIlteredProps = z.infer<typeof getFilteredProps>;

const createProps = z.object({
  name: z.string(),
  description: z.string(),
});

type CreateProps = z.infer<typeof createProps>;

const updateProps = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
});

type UpdateProps = z.infer<typeof updateProps>;

const deleteProps = z.object({
  id: z.string(),
});

type DeleteProps = z.infer<typeof deleteProps>;

export type CategoryRepositoryInterface = {
  GetOneProps: GetOneProps;
  GetFilteredProps: GetFIlteredProps;
  CreateProps: CreateProps;
  UpdateProps: UpdateProps;
  DeleteProps: DeleteProps;
};

export const categoryRepositorySchema = {
  getOneProps,
  getFilteredProps,
  createProps,
  updateProps,
  deleteProps,
};
