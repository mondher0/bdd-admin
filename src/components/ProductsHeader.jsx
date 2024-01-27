"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const ProductsHeader = () => {
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="font-bold">Products</h1>
      <Button
        className="bg-[#3b5f90]"
        onClick={() => {
          router.push("/products/add-product");
        }}
      >
        Add Product
      </Button>
    </div>
  );
};

export default ProductsHeader;
