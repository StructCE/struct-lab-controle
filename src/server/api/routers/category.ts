import z from "zod";
import { adminProcedure, createTRPCRouter, protectedProcedure } from "../trpc";

export const categoryRouter = createTRPCRouter({
  getCategories: adminProcedure
    .input(z.object({ filter: z.object({}) }))
    .query(() => {}),
  createCategory: adminProcedure
    .input(z.object({ name: z.string(), description: z.string() }))
    .mutation(({ input }) => {}),
});
