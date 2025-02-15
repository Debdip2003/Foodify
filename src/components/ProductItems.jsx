import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductItems = ({ id, image, name, price, category }) => {
  const { currency } = useContext(ShopContext);
  console.log(category);

  return (
    <Link
      to={`/product/${id}`}
      className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden cursor-pointer"
    >
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={image[0]}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          alt={name}
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex gap-2 justify-start items-center mb-4">
          <p
            className={`h-4 w-4 rounded-full ${
              category?.trim().toLowerCase() === "veg"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          ></p>
          <span className="text-sm text-gray-700">{category}</span>
        </div>
        <p className="text-gray-800 font-semibold text-lg truncate">{name}</p>
        <p className="text-green-600 font-bold text-md">
          {currency}
          {price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItems;

// Define PropTypes
ProductItems.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};
