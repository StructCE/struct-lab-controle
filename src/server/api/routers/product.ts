import {
  adminProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";
import { db } from "@/server/db";
import {
  productRepositoryInterface,
  ProductRepositoryInterface,
} from "@/server/interfaces/product.repository.interface";
import type {
  ProductRouteInterface,
  Response,
} from "@/server/interfaces/product.route.interface";

export const productRouter = createTRPCRouter({
  getProductPerStatus: adminProcedure.query(
    async (): Promise<Response<ProductRouteInterface["ProductsPerStatus"]>> => {
      try {
        const products = await db.product.findMany();
        return { data: products, status: 200 };
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
