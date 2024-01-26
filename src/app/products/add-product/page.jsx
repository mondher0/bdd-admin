import React from "react";
import "../../../css/products.css";
import FormControl from "@/components/FormControl";

const AddProductPage = () => {
  return (
    <>
      <div className="container">
        <p className="font-bold">Add Product</p>
        <div className="form">
          <form>
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
              ></textarea>
            </div>
            <button type="submit" className="add-value submit">
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductPage;
