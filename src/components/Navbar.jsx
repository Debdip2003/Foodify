import NavbarData from "../data/NavbarData"; //import the navbar data
//import from react icons
import { IoSearch } from "react-icons/io5";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom"; //import from react-router-dom

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between py-5 px-10 font-medium">
      <p className="w-36 text-2xl font-bold">Foodify</p>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {NavbarData.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer flex flex-col items-center gap-1"
          >
            <NavLink
              to={`/${item.path}`}
              className={({ isActive }) =>
                `text-lg ${
                  isActive ? "border-b-2 border-green-500 text-green-500" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <IoSearch className="cursor-pointer text-gray-700 text-xl" />

        <div className="group relative">
          <FaUserCircle className="text-gray-700 text-xl cursor-pointer" />
          <div className="group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md">
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Signup</p>
              <p className="cursor-pointer hover:text-black">Login</p>
            </div>
          </div>
        </div>

        <div className="relative cursor-pointer">
          <FaShoppingCart className="text-gray-700 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
