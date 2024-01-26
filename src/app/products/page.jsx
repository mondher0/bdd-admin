import { DataTableDemo } from "@/components/data-table";
import React from "react";
import { columns } from "./columns";
import { baseUrl } from "@/lib/utils";

const ProductsPage = async ({ searchParams }) => {
  const { page } = searchParams;
  const getProducts = async () => {
    try {
      const response = await fetch(`${baseUrl}products?limit=3&page=${page}`, {
        cache: "no-cache",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  const productsData = await getProducts();
  console.log(productsData);

  return (
    <main className="w-full">
      <h1>Products</h1>
      <DataTableDemo
        columns={columns}
        data={productsData?.products}
        filterConstraint="name"
      />
    </main>
  );
};

export default ProductsPage;
