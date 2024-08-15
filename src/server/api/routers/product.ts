import {
  adminProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";
import {
  type ProductRouteInterface,
  productRepositorySchema,
} from "@/server/interfaces/product";
import { productRepository } from "@/server/repositories/product.repository";

export const productRouter = createTRPCRouter({
  getPerStatus: adminProcedure.query(
    async (): Promise<ProductRouteInterface["ProductsPerStatus"]> => {
      const products = await productRepository.getAll();
      const productsPerStatus: ProductRouteInterface["ProductsPerStatus"] = [
        { status: "Crítico", products: [] }, // proporção |quantidadeAtual/quantidadeRecomendada - 1| <= 0,2
        { status: "Regular", products: [] }, // proporção |quantidadeAtual/quantidadeRecomendada - 1| >= 0,2
        { status: "Excedente", products: [] }, // proporção quantidadeAtual/quantidadeRecomendada - 1> 0,2
      ];
      products.forEach((product) => {
        const serializedProduct = {
          id: product.id,
          name: product.name,
          amount: product.currentQuantity,
        };
        if (product.currentQuantity / product.idealQuantity > 0.2)
          return productsPerStatus[2]?.products.push(serializedProduct);
        if (
          Math.abs(product.currentQuantity / product.idealQuantity - 1) <= 0.2
        )
          return productsPerStatus[1]?.products.push(serializedProduct);
        return productsPerStatus[0]?.products.push(serializedProduct);
      });
      return productsPerStatus;
    },
  ),

  getFiltered: protectedProcedure
    .input(productRepositorySchema.getFilteredProps)
    .query(async ({ input }): Promise<ProductRouteInterface["Product"][]> => {
      const filteredProducts = await productRepository.getFiltered(input);
      return filteredProducts;
    }),

  create: adminProcedure
    .input(productRepositorySchema.createProps)
    .mutation(async ({ input }): Promise<ProductRouteInterface["Product"]> => {
      const createdProduct = await productRepository.create(input);
      return createdProduct;
    }),

  update: adminProcedure
    .input(productRepositorySchema.updateProps)
    .mutation(async ({ input }): Promise<ProductRouteInterface["Product"]> => {
      const updatedProduct = await productRepository.update(input);
      return updatedProduct;
    }),

  delete: adminProcedure
    .input(productRepositorySchema.deleteProps)
    .mutation(async ({ input }): Promise<ProductRouteInterface["Product"]> => {
      const deletedProduct = await productRepository.remove(input);
      return deletedProduct;
    }),
});
