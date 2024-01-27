"use client";
import "../../../css/products.css";
import FormControl from "@/components/FormControl";
import {
  addProduct,
  editProduct,
} from "@/store/features/products/products-slice";
import { useDispatch, useSelector } from "react-redux";

const AddProductPage = () => {
  const dispatch = useDispatch();
  const {
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
  return (
    <>
      {error && alert(error)}
      <div className="container">
        <p className="font-bold">Add Product</p>
        <div className="form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addProduct({
                  name,
                  price,
                  description,
                  image,
                  stock,
                  brand,
                  category,
                }),
              );
            }}
          >
            <FormControl
              displayValue="Name"
              type="text"
              name="name"
              id="name"
            />
            <FormControl
              displayValue="Price"
              type={"number"}
              name={"price"}
              id={"price"}
            />
            <FormControl
              displayValue="Stock"
              type={"number"}
              name={"stock"}
              id={"stock"}
            />
            <FormControl
              displayValue="Brand"
              type={"text"}
              name={"brand"}
              id={"brand"}
            />
            <FormControl
              displayValue="Category"
              type={"text"}
              name={"category"}
              id={"category"}
            />
            <div className="input nom">
              <label htmlFor="img">Image</label>
              <div className="rounded-[12px] border border-gray-300 outline-none  pl-4">
                <input
                  className="opacity-0"
                  type="file"
                  id="img"
                  name="nom"
                  placeholder="price"
                />
              </div>
            </div>
            <div className="input livraison">
              <label htmlFor="livraison">Description</label>
              <textarea
                name="livraison"
                id="livraison"
                cols="30"
                rows="10"
                placeholder="Description de la livraison"
                onChange={(e) =>
                  dispatch(
                    editProduct({ name: "description", value: e.target.value }),
                  )
                }
              ></textarea>
            </div>
            <button type="submit" className="add-value submit">
              {loading ? "Loading..." : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductPage;
