import { createContext } from "react";
import { products } from "../data/ProductData";
import PropTypes from "prop-types";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const value = {
    currency,
    delivery_fee,
    products,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

// Define PropTypes
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
