import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductContext";
const ProductList = () => {
  const { state, dispatch } = useContext(ProductContext);
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.priceRange, dispatch]);
  return (
    <div>
      <h2>Product List</h2>
      {state.filteredProducts.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
