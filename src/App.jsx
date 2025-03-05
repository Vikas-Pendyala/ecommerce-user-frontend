import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { CartProvider } from './components/context/CartContext'
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function Layout() {
  return (
    <CartProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </CartProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/products", element: <Products /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
