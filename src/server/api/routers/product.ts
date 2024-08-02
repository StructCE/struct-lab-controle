import { z } from "zod";
import {
  adminProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";
import { db } from "@/server/db";

export const productRouter = createTRPCRouter({
  getProductPerStatus: adminProcedure.query(async () => {
    const res: ProductsPerStatus = [];
    const products = await db.product.findMany();
    return res;
  }),

  getFilteredProducts: protectedProcedure
    .input(
      z.object({
        filter: z.object({
          name: z.string(),
          supplier: z.string(),
          category: z.string(),
        }),
      }),
    )
    .query(async ({ input }) => {
      const { filter } = input;
      const filteredProducts = await db.product.findMany({
        where: {
          name: filter.name,
          supplier: {
            name: filter.supplier,
          },
          category: {
            name: filter.category,
          },
        },
      });
      return filteredProducts;
    }),

  createProduct: adminProcedure
    .input(
      z.object({
        name: z.string(),
        productCode: z.string(),
        categoryId: z.string(),
        supplierId: z.string(),
        currentQuantity: z.number(),
        idealQuantity: z.number(),
        manufactureDate: z.date(),
        publicId: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const createdProduct = await db.product.create({
        data: { ...input },
      });
      return createdProduct;
    }),

  updateProduct: adminProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        productCode: z.string().optional(),
        categoryId: z.string().optional(),
        supplierId: z.string().optional(),
        currentQuantity: z.number().optional(),
        idealQuantity: z.number().optional(),
        manufactureDate: z.date().optional(),
        publicId: z.string().optional().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      const updatedProduct = await db.product.update({
        where: { id: id },
        data: { ...data },
      });
      return updatedProduct;
    }),

  deleteProduct: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const deletedProduct = await db.product.delete({
        where: {
          id: input.id,
        },
      });
      return deletedProduct;
    }),
});

type ProductsPerStatus = {
  status: string;
  products: {
    id: string;
    name: string;
    amount: number;
  };
}[];

type Product = {
  id: string;
  name: string;
  currentQuantity: number;
  idealQuantity: number;
  manufactureDate: Date;
  categoryId: string;
  supplierId: string;
  publicId: string | null;
};
