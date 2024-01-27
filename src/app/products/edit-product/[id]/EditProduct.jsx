"use client";
import "../../../../css/products.css";
import FormControl from "@/components/FormControl";
import {
  editProduct,
  setProduct,
  updateProduct,
} from "@/store/features/products/products-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditProduct = ({ product }) => {
  const {
    id,
    name,
    price,
    description,
    image,
    stock,
    brand,
    category,
    error,
    loading,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProduct(product?.product));
  }, []);
  return (
    <>
      {error && alert(error)}
      <div className="container">
        <p className="font-bold">Edit Product</p>
        <div className="form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                updateProduct({
                  name,
                  price,
                  description,
                  image,
                  stock,
                  brand,
                  category,
                  id,
                }),
              );
            }}
          >
            <FormControl
              displayValue="Name"
              type="text"
              name="name"
              id="name"
              value={name}
            />
            <FormControl
              displayValue="Price"
              type={"number"}
              name={"price"}
              id={"price"}
              value={price}
            />
            <FormControl
              displayValue="Stock"
              type={"number"}
              name={"stock"}
              id={"stock"}
              value={stock}
            />
            <FormControl
              displayValue="Brand"
              type={"text"}
              name={"brand"}
              id={"brand"}
              value={brand}
            />
            <FormControl
              displayValue="Category"
              type={"text"}
              name={"category"}
              id={"category"}
              value={category}
            />
            <div className="input nom">
              <label htmlFor="img">Image link</label>
              <input
                type="text"
                id="img"
                name="nom"
                placeholder="price"
                value={image}
                onChange={(e) => {
                  dispatch(
                    editProduct({ name: "image", value: e.target.value }),
                  );
                }}
              />
            </div>
            <div className="input livraison">
              <label htmlFor="livraison">Description</label>
              <textarea
                name="livraison"
                id="livraison"
                cols="30"
                rows="10"
                placeholder="Description de la livraison"
                value={description}
                onChange={(e) =>
                  dispatch(
                    editProduct({ name: "description", value: e.target.value }),
                  )
                }
              ></textarea>
            </div>
            <button type="submit" className="add-value submit">
              {loading ? "Loading..." : "Edit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
