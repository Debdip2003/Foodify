import { createBrowserRouter } from "react-router-dom"; //import createBrowserRouter from react-router-dom

//import the pages
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Offers from "../pages/Offers";
import Wishlist from "../pages/Wishlist";
import Product from "../pages/Product";
import Cart from "../components/Cart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "offers", element: <Offers /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:productId", element: <Product /> },
    ],
  },
]);

export default routes;
