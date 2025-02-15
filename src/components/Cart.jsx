import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaTimes } from "react-icons/fa";
import CartTotal from "./CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { currency, products, cartItems, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = products.find((p) => p._id === itemId);
        if (product) {
          tempData.push({
            _id: itemId,
            name: product.name,
            price: product.price,
            quantity: cartItems[itemId],
            image: product.image[0],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Your Order
      </h2>
      {cartData.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {cartData.map((item) => (
              <div
                key={item._id}
                className="p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-gray-600">
                      {currency}
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    className="w-16 text-center border border-gray-300 rounded-md py-1"
                    onChange={(e) =>
                      updateQuantity(item._id, Number(e.target.value))
                    }
                  />
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => updateQuantity(item._id, 0)}
                  >
                    <FaTimes size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <CartTotal />
      {cartData.length > 0 && (
        <div className="flex justify-end mt-8">
          <button
            className="bg-green-500 text-black px-8 py-3 rounded-md hover:bg-green-600 transition duration-300"
            onClick={() => navigate("/placeorder")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
