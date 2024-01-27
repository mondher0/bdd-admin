import React from "react";
import EditProduct from "./EditProduct";
import { baseUrl } from "@/lib/utils";

const EditProductPage = async ({ params }) => {
  const { id } = params;

  // get single product
  const getSingleProduct = async () => {
    try {
      const response = await fetch(`${baseUrl}products/detaills/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const product = await getSingleProduct();
  console.log(product);
  return <EditProduct product={product} />;
};

export default EditProductPage;
