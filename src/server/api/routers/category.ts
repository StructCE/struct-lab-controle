import { adminProcedure, createTRPCRouter } from "../trpc";
import {
  categoryRepositorySchema,
  type CategoryRouteInterface,
} from "@/server/interfaces/category";
import { categoryRepository } from "@/server/repositories/category.repository";
import type { Response } from "@/server/interfaces/response.interface";
import { ProductRepository } from "@/server/repositories/product.repository";

export const categoryRouter = createTRPCRouter({
  getCategories: adminProcedure
    .input(categoryRepositorySchema.getFilteredProps)
    .query(
      async ({
        input,
      }): Promise<Response<CategoryRouteInterface["Categories"]>> => {
        const { _sum } = await ProductRepository.countTotalProducts();
        const filteredCategories = await categoryRepository.getFiltered(input);
        const serializedCategories: CategoryRouteInterface["Categories"] =
          filteredCategories.map((filteredCategory) => {
            const totalCategoryProducts = filteredCategory.products.reduce(
              (total, product) => total + product.currentQuantity,
              0,
            );
            return {
              name: filteredCategory.name,
              registeredProducts: filteredCategory.products.length,
              proportion: _sum.currentQuantity
                ? totalCategoryProducts / _sum.currentQuantity
                : 0,
              incomeProportion: 0,
            };
          });
        return { data: serializedCategories, status: 200 };
      },
    ),
  createCategory: adminProcedure
    .input(categoryRepositorySchema.createProps)
    .mutation(({ input }) => {}),
});
