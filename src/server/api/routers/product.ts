import {
  adminProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";
import { db } from "@/server/db";
import { productRepositoryInterface } from "@/server/interfaces/product.repository.interface";
import type {
  ProductRouteInterface,
  Response,
} from "@/server/interfaces/product.route.interface";
import { ProductRepository } from "@/server/repositories/product.repository";

export const productRouter = createTRPCRouter({
  getProductPerStatus: adminProcedure.query(
    async (): Promise<Response<ProductRouteInterface["ProductsPerStatus"]>> => {
      try {
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
      } catch (e) {
        return {
          error: "deu alguma merda",
          status: 400,
        };
      }
    },
  ),

  getFilteredProducts: protectedProcedure
    .input(productRepositoryInterface.getFilteredProps)
    .query(
      async ({
        input,
      }): Promise<Response<ProductRouteInterface["Product"][]>> => {
        try {
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
        } catch (e) {
          return {
            error: "deu alguma merda",
            status: 400,
          };
        }
      },
    ),

  createProduct: adminProcedure
    .input(productRepositoryInterface.createProps)
    .mutation(
      async ({
        input,
      }): Promise<Response<ProductRouteInterface["Product"]>> => {
        try {
          const createdProduct = await db.product.create({
            data: { ...input },
          });
          return { data: createdProduct, status: 200 };
        } catch (e) {
          return {
            error: "deu alguma merda",
            status: 400,
          };
        }
      },
    ),

  updateProduct: adminProcedure
    .input(productRepositoryInterface.updateProps)
    .mutation(
      async ({
        input,
      }): Promise<Response<ProductRouteInterface["Product"]>> => {
        try {
          const { id, ...data } = input;
          const updatedProduct = await db.product.update({
            where: { id: id },
            data: { ...data },
          });
          return { data: updatedProduct, status: 200 };
        } catch (e) {
          return {
            error: "deu alguma merda",
            status: 400,
          };
        }
      },
    ),

  deleteProduct: adminProcedure
    .input(productRepositoryInterface.deleteProps)
    .mutation(
      async ({
        input,
      }): Promise<Response<ProductRouteInterface["Product"]>> => {
        try {
          const deletedProduct = await db.product.delete({
            where: {
              id: input.id,
            },
          });
          return { data: deletedProduct, status: 200 };
        } catch (e) {
          return {
            error: "deu alguma merda",
            status: 400,
          };
        }
      },
    ),
});
