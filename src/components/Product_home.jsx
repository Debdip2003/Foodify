import { products } from "../data/ProductData";
import ProductItems from "./ProductItems";
import Title from "./Title";

const Product_home = () => {
  return (
    <div className="px-10 py-5">
      {" "}
      {/* Adjusted padding */}
      <div className="text-center py-6 text-3xl">
        <Title text1={"NEW IN"} text2={"MENU"} />
        <p className="text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in
          similique minus
        </p>
      </div>
      {/* Rendering products */}
      <div className="grid grid-cols-5 gap-4 ">
        {products.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Product_home;
