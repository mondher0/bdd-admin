"use client";
import "../css/products.css";
import { useDispatch } from "react-redux";
import { editProduct } from "@/store/features/products/products-slice";

const FormControl = ({ displayValue, name, id, type, value }) => {
  const dispatch = useDispatch();
  return (
    <div className="input nom">
      <label htmlFor={id}>{displayValue}</label>
      <input
        type={type}
        id={id}
        placeholder={displayValue}
        value={value}
        onChange={(e) =>
          dispatch(editProduct({ name: name, value: e.target.value }))
        }
      />
    </div>
  );
};

export default FormControl;
