import React from "react";
import "../css/products.css";

const FormControl = ({ displayValue, name, id, type }) => {
  return (
    <div className="input nom">
      <label htmlFor={id}>{displayValue}</label>
      <input type={type} id={id} placeholder={displayValue} />
    </div>
  );
};

export default FormControl;
