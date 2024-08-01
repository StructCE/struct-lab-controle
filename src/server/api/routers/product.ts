import { z } from "zod";

import {
  adminProcedure,
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const productRouter = createTRPCRouter({
  getProductPerStatus: adminProcedure.query(() => {}),
  getProducts: protectedProcedure
    .input(z.object({ filter: z.object({}) }))
    .query(({ input }) => {}),
  createProduct: adminProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        productCode: z.string(),
        created_at: z.date(),
      }),
    )
    .mutation(({ input }) => {}),
  updateProduct: adminProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        email: z.string().optional(),
        password: z.string().optional(),
        productCode: z.string().optional(),
        created_at: z.date().optional(),
      }),
    )
    .mutation(({ input }) => {}),
  deleteProduct: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => {}),
});
