import { DataTableDemo } from "@/components/data-table";
import React from "react";
import { columns } from "./columns";
import { baseUrl } from "@/lib/utils";
import ProductsHeader from "@/components/ProductsHeader";

const ProductsPage = async ({ searchParams }) => {
  const { page } = searchParams;
  const getProducts = async () => {
    try {
      const response = await fetch(`${baseUrl}products?limit=200&page=0`, {
        cache: "no-cache",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  const productsData = await getProducts();

  return (
    <main className="w-full">
      <ProductsHeader />
      <DataTableDemo
        columns={columns}
        data={productsData?.products}
        filterConstraint="name"
      />
    </main>
  );
};

export default ProductsPage;
