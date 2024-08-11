import { adminProcedure, createTRPCRouter } from "../trpc";
import {
  categoryRepositorySchema,
  type CategoryRouteInterface,
} from "@/server/interfaces/category";
import { categoryRepository } from "@/server/repositories/category.repository";
import { productRepository } from "@/server/repositories/product.repository";

export const categoryRouter = createTRPCRouter({
  getFiltered: adminProcedure
    .input(categoryRepositorySchema.getFilteredProps)
    .query(async ({ input }): Promise<CategoryRouteInterface["Categories"]> => {
      const { _sum } = await productRepository.countTotalProducts();
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
            incomeProportion: 0, // nao ha precificacao ainda
          };
        });
      return serializedCategories;
    }),

  create: adminProcedure
    .input(categoryRepositorySchema.createProps)
    .mutation(
      async ({ input }): Promise<CategoryRouteInterface["Category"]> => {
        const createdCategory = await categoryRepository.create(input);
        return createdCategory;
      },
    ),

  update: adminProcedure
    .input(categoryRepositorySchema.updateProps)
    .mutation(
      async ({ input }): Promise<CategoryRouteInterface["Category"]> => {
        const updatedCategory = await categoryRepository.update(input);
        return updatedCategory;
      },
    ),

  delete: adminProcedure
    .input(categoryRepositorySchema.deleteProps)
    .mutation(
      async ({ input }): Promise<CategoryRouteInterface["Category"]> => {
        const deletedCategory = await categoryRepository.remove(input);
        return deletedCategory;
      },
    ),
});
