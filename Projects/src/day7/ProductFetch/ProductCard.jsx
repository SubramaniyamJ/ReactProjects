import React from "react";
const ProductCard = ({ name, description, price }) => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
};
export default ProductCard;
