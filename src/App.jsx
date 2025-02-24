import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ShopByBrand from "./components/ShopByBrand/ShopByBrand";
import ShopByCategories from "./components/ShopByCategories/ShopByCategories";



function App() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <ShopByBrand/>
    <ShopByCategories/>
    <Footer/>
  </div>
  );
}

export default App;
