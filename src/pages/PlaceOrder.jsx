import { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-12 pt-10 sm:pt-14 min-h-[80vh] border-t px-6 sm:px-12">
      {/* Left Side - Delivery Information */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[500px] bg-white p-6 rounded-lg shadow-md">
        <Title text1="DELIVERY" text2="INFORMATION" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="input-style border-2 border-black p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input-style border-2 border-black p-2 rounded-md"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="input-style border-2 border-black p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Street Address"
          className="input-style border-2 border-black p-2 rounded-md"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            className="input-style border-2 border-black p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="State"
            className="input-style border-2 border-black p-2 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Zip Code"
            className="input-style border-2 border-black p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Country"
            className="input-style border-2 border-black p-2 rounded-md"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="input-style border-2 border-black p-2 rounded-md"
        />
      </div>

      {/* Right Side - Cart Total & Payment Method */}
      <div className="flex flex-col w-full sm:max-w-[400px]">
        <CartTotal />

        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <Title text1="PAYMENT" text2="METHOD" />
          <div className="flex flex-col gap-4 mt-4">
            {["stripe", "razorpay", "cod"].map((payMethod) => (
              <div
                key={payMethod}
                className={`flex items-center gap-3 border p-3 cursor-pointer rounded-lg transition ${
                  method === payMethod
                    ? "border-black bg-gray-100 shadow"
                    : "border-gray-300"
                }`}
                onClick={() => setMethod(payMethod)}
              >
                <div
                  className={`w-5 h-5 border rounded-full flex items-center justify-center transition ${
                    method === payMethod
                      ? "border-black bg-black"
                      : "border-gray-400"
                  }`}
                >
                  {method === payMethod && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  )}
                </div>
                <p className="text-gray-700 font-medium">
                  {payMethod === "stripe"
                    ? "Credit/Debit Card"
                    : payMethod === "razorpay"
                    ? "UPI Payment"
                    : "Cash on Delivery"}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full mt-6">
            <button
              className="w-full bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition shadow-md"
              onClick={() => navigate("/orders")}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
