import {
  adminProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";
import { db } from "@/server/db";
import {
  type ProductRouteInterface,
  productRepositorySchema,
} from "@/server/interfaces/product";
import { ProductRepository } from "@/server/repositories/product.repository";
import type { Response } from "@/server/interfaces/response.interface";

export const productRouter = createTRPCRouter({
  getProductPerStatus: adminProcedure.query(
    async (): Promise<Response<ProductRouteInterface["ProductsPerStatus"]>> => {
      const products = await ProductRepository.getAll();
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
      return { data: productsPerStatus, status: 200 };
    },
  ),

  getFilteredProducts: protectedProcedure
    .input(productRepositorySchema.getFilteredProps)
    .query(
      async ({
        input,
      }): Promise<Response<ProductRouteInterface["Product"][]>> => {
        const filteredProducts = await db.product.findMany({
          where: {
            name: input.name,
            supplier: {
              name: input.supplier,
            },
            category: {
              name: input.category,
            },
          },
        });
        return { data: filteredProducts, status: 200 };
      },
    ),

  createProduct: adminProcedure
    .input(productRepositorySchema.createProps)
    .mutation(
      async ({
        input,
      }): Promise<Response<ProductRouteInterface["Product"]>> => {
        const createdProduct = await db.product.create({
          data: { ...input },
        });
        return { data: createdProduct, status: 200 };
      },
    ),

  updateProduct: adminProcedure
    .input(productRepositorySchema.updateProps)
    .mutation(
      async ({
        input,
      }): Promise<Response<ProductRouteInterface["Product"]>> => {
        const { id, ...data } = input;
        const updatedProduct = await db.product.update({
          where: { id: id },
          data: { ...data },
        });
        return { data: updatedProduct, status: 200 };
      },
    ),

  deleteProduct: adminProcedure
    .input(productRepositorySchema.deleteProps)
    .mutation(
      async ({
        input,
      }): Promise<Response<ProductRouteInterface["Product"]>> => {
        const deletedProduct = await db.product.delete({
          where: {
            id: input.id,
          },
        });
        return { data: deletedProduct, status: 200 };
      },
    ),
});
