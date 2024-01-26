import React from "react";
import { Button } from "./ui/button";

const ProductsHeader = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="font-bold">Products</h1>
      <Button className="bg-[#3b5f90]">Add Product</Button>
    </div>
  );
};

export default ProductsHeader;
