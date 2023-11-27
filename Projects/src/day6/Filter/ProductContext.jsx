import React, { createContext, useReducer, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import axios from "axios";
const initialState = {
  categories: [],
  products: [],
  filteredProducts: [],
  priceRange: { min: 0, max: 1000 },
};
const productReducer = (state, action) => {
  let min, max, filtered;
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case "SET_PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "FILTER_PRODUCTS":
      min = state.priceRange.min;
      max = state.priceRange.max;
      filtered = state.products.filter(
        (product) => product.price >= min && product.price <= max
      );
      return { ...state, filteredProducts: filtered };
    default:
      return state;
  }
};
const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const fetchCategories = async () => {
    try {
      const response = await axios.get("API_ENDPOINT/categories");
      dispatch({ type: "SET_CATEGORIES", payload: response.data });
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchProducts = async () => {
    try {
      const response = await axios.get("API_ENDPOINT/products");
      dispatch({ type: "SET_PRODUCTS", payload: response.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { ProductProvider, ProductContext };
