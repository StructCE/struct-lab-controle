import { z } from "zod";
import { adminProcedure, createTRPCRouter } from "../trpc";

export const supplierRouter = createTRPCRouter({
  getSuppliers: adminProcedure
    .input(z.object({ filter: z.object({}) }))
    .query(() => {}),
  createSupplier: adminProcedure
    .input(z.object({ name: z.string(), contactInfo: z.string() }))
    .mutation(({ input }) => {}),
  deleteSupplier: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => {}),
});
