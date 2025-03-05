import styles from "./Navbar.module.css";
import { useState } from "react";
import { useCart } from "../context/CartContext"; // Import the context

import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaSliders } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  // Calculate total cart items
  // const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={`${styles.listContainer}`}>
      <div className={`${styles.navbarWrapper} `}>
        <div className={`${styles.navbar} `}>
          <div>
            <img src="/images/logo.jpg" alt="Logo" style={{ width: "100px" }} />
          </div>
          {/* Navbar components  */}
          <div className={`${styles.navbarComponents}`}>
            {/* Search bar */}
            <div className={`${styles.searchBar}`}>
              <div className={`${styles.searchIcon}`}>
                <IoSearch />
              </div>
              <input type="text" placeholder="Search..." />
              <div className={`${styles.filterIcon}`}>
                <FaSliders />
              </div>
            </div>
            {/* Shopping cart */}
            <div className={`${styles.iconsContainer}`}>
              <TiShoppingCart className={`${styles.shoppingCart}`} />
              {cartCount > 0 && (
                <div className={`${styles.cartCount}`}>{cartCount}</div>
              )}
            </div>
            <div className={`${styles.iconsContainer}`}>
              <FaRegHeart className={`${styles.shoppingCart}`} />
              <div className={`${styles.wishlistCount}`}>1</div>
            </div>
            <div className={`${styles.iconsContainer}`}>
              <IoMdPerson className={`${styles.shoppingCart}`} />
            </div>
          </div>
        </div>
        {/* Bottom Navigation (Visible on Small Screens) */}
        <div className={`${styles.bottomNav}`}>
          <div className={`${styles.iconsContainer}`}>
            <TiShoppingCart className={`${styles.shoppingCart}`} />
            {cartCount > 0 && (
              <div className={`${styles.cartCount}`}>{cartCount}</div>
            )}
          </div>



          <div className={`${styles.iconsContainer}`}>
            <FaRegHeart className={`${styles.shoppingCart}`} />
            <div className={`${styles.wishlistCount}`}>1</div>
          </div>
          <div className={`${styles.iconsContainer}`}>
            <IoMdPerson className={`${styles.shoppingCart}`} />
          </div>
        </div>
      </div>

      <div className={styles.topBar}>
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <GiHamburgerMenu />
        </div>
        <ul className={menuOpen ? styles.showMenu : styles.topBarMenu}>
          <li>Home</li>
          <li>About Us</li>
          <li>Categories</li>
          <li>Track Order</li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
