import { adminProcedure, createTRPCRouter } from "../trpc";
import {
  supplierRepositorySchema,
  type SupplierRouteInterface,
} from "@/server/interfaces/supplier";
import { supplierRepository } from "@/server/repositories/supplier.repository";

export const supplierRouter = createTRPCRouter({
  getFiltered: adminProcedure
    .input(supplierRepositorySchema.getFilteredProps)
    .query(
      async ({ input }): Promise<SupplierRouteInterface["GetFiltered"]> => {
        const filteredSuppliers = await supplierRepository.getFiltered(input);
        const serializedSuppliers = filteredSuppliers.map((supplier) => ({
          id: supplier.id,
          name: supplier.name,
          registeredProducts: supplier.products.length,
          productsAmount: supplier.products.reduce(
            (total, product) => total + product.currentQuantity,
            0,
          ),
        }));

        return serializedSuppliers;
      },
    ),

  create: adminProcedure
    .input(supplierRepositorySchema.createProps)
    .mutation(
      async ({ input }): Promise<SupplierRouteInterface["Supplier"]> => {
        return await supplierRepository.create(input);
      },
    ),

  update: adminProcedure
    .input(supplierRepositorySchema.updateProps)
    .mutation(
      async ({ input }): Promise<SupplierRouteInterface["Supplier"]> => {
        return await supplierRepository.update(input);
      },
    ),

  delete: adminProcedure
    .input(supplierRepositorySchema.deleteProps)
    .mutation(
      async ({ input }): Promise<SupplierRouteInterface["Supplier"]> => {
        return await supplierRepository.remove(input);
      },
    ),
});
