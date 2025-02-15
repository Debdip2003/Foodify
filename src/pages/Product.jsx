import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaClock, FaLocationArrow } from "react-icons/fa";
import { IconButton } from "@mui/material";
import { Add, Remove, Favorite, ArrowBack } from "@mui/icons-material";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      const item = products.find((item) => item._id === productId);
      if (item) {
        setProductData(item);
        setImage(item.image[0]);
      }
    }
  }, [products, productId]);

  if (!productData) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto grid grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={image}
            alt={productData.name}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div>
          {/* Back & Favorite Icons */}
          <div className="flex justify-between mb-4">
            <IconButton color="default">
              <ArrowBack onClick={() => navigate(-1)} />
            </IconButton>
            <IconButton color="default">
              <Favorite />
            </IconButton>
          </div>

          <h1 className="text-3xl font-bold">{productData.name}</h1>
          <p className="text-green-600 font-semibold text-2xl mt-2">
            {currency} {productData.price}
          </p>

          {/* Quantity Control */}
          <div className="flex items-center mt-4">
            <IconButton
              size="small"
              onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              <Remove />
            </IconButton>
            <span className="mx-4 text-lg font-medium">{count}</span>
            <IconButton
              size="small"
              onClick={() => setCount((prev) => prev + 1)}
            >
              <Add />
            </IconButton>
          </div>

          {/* Product Description */}
          <h3 className="font-semibold text-gray-700 mt-4">Description</h3>
          <p className="text-gray-600 text-lg mt-2">
            {productData.description}
          </p>

          {/* Additional Info (Location & Time) */}
          <div className="mt-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaLocationArrow size={16} />
              <span>236, Char Imly, Bhopal-462016</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaClock size={16} />
              <span>30 Min</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-6 w-full bg-green-600 text-white text-lg py-3 rounded-lg hover:bg-green-700 transition hover:cursor-pointer"
            onClick={() => addToCart(productData._id, count)}
          >
            Add {count} to Cart - ₹ {productData.price * count}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
