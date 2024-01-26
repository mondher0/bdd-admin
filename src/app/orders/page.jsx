import { DataTableDemo } from "@/components/data-table";
import React from "react";
import { columns } from "./columns";

const OrdersPage = () => {
  const data = [
    {
      id: 5,
      name: "product name 4",
      description: "product description",
      price: 0,
      image: "product image",
      rating: 0,
      stock: 0,
      brand: "product brand",
      category: "product category",
    },
    {
      id: 6,
      name: "product name 5",
      description: "product description",
      price: 0,
      image: "product image",
      rating: 0,
      stock: 0,
      brand: "product brand",
      category: "product category",
    },
  ];
  return (
    <main className="w-full">
      <h1 className="font-bold">Orders</h1>
      <DataTableDemo columns={columns} data={data} filterConstraint="name" />
    </main>
  );
};

export default OrdersPage;
