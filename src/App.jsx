import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ShopByBrand from "./components/ShopByBrand/ShopByBrand";
import ShopByCategories from "./components/ShopByCategories/ShopByCategories";
import LandingPage from './components/LandingPage/LandingPage';
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This renders the matched child route */}
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> }, // '/' will render <Hero/>
      {
        path: "/shop",
        element: <ShopByBrand />,
      },
      {
        path: "/cat",
        element: <ShopByCategories/>,
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path:"/cart",
        element: <Cart/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
