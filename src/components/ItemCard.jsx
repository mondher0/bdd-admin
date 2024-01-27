import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
      <div className="w-1/3 h-full">
        <img src={item.image} alt={item.name} className="w-full h-full" />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
          <p className="text-gray-700 mb-2">Price: ${item.price}</p>
          <p className="text-gray-700">Quantity: {item.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
