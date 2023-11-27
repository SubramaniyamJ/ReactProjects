import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
const FilterOptions = () => {
  const { state, dispatch } = useContext(ProductContext);
  const handlePriceChange = (e, type) => {
    dispatch({
      type: "SET_PRICE_RANGE",
      payload: { ...state.priceRange, [type]: e.target.value },
    });
  };
  return (
    <div>
      <h2>Filter Options</h2>
      <label>Min Price:</label>
      <input
        type="number"
        value={state.priceRange.min}
        onChange={(e) => handlePriceChange(e, "min")}
      />
      <label>Max Price:</label>
      <input
        type="number"
        value={state.priceRange.max}
        onChange={(e) => handlePriceChange(e, "max")}
      />
    </div>
  );
};
export default FilterOptions;
