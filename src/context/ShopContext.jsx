import { createContext, useState } from "react";
import { products } from "../data/ProductData";
import PropTypes from "prop-types";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId, count) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + count,
    }));
  };

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (quantity > 0) {
        newCart[itemId] = quantity;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getCartAmount = () => {
    if (!products.length) return 0;

    const amount = Object.entries(cartItems).reduce(
      (total, [itemId, quantity]) => {
        const item = products.find(
          (product) => String(product.id) === String(itemId)
        );

        if (!item) {
          console.warn(`Product not found for ID: ${itemId}`);
          return total;
        }

        const itemTotal = item.price * quantity;
        console.log(
          `Item ID: ${itemId}, Quantity: ${quantity}, Item Price: ${item.price}, Item Total: ${itemTotal}`
        );

        return total + itemTotal;
      },
      0
    );

    console.log("Cart amount:", amount);
    return amount;
  };

  const value = {
    currency,
    delivery_fee,
    products,
    cartItems,
    addToCart,
    setCartItems,
    updateQuantity,
    getCartAmount,
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
