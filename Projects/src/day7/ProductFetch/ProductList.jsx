import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:3001/products";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
