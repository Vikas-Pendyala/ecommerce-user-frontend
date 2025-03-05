import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Cart.module.css";
import { useCart } from "../context/CartContext";
const CartItem = ({ product, onQuantityChange, onRemove }) => {
  return (
    <tr className={styles.cartItem}>
      <td className={styles.productDetails}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <div>
          <span className={styles.productName}>{product.name}</span>
          <br />
          <span className={styles.productCode}>Product Code: {product.code}</span>
        </div>
      </td>
      <td className={styles.quantityColumn}>
        <div className={styles.quantityControl}>
          <button className={styles.quantityBtn} onClick={() => onQuantityChange(product.id, product.quantity - 1)}>
            -
          </button>
          <span className={styles.quantityDisplay}>{product.quantity}</span>
          <button className={styles.quantityBtn} onClick={() => onQuantityChange(product.id, product.quantity + 1)}>
            +
          </button>
        </div>
      </td>
      <td className={styles.price}>₹ {product.price.toFixed(2)}</td>
      <td className={styles.subtotal}>₹ {(product.price * product.quantity).toFixed(2)}</td>
      <td>
        <button className={styles.removeBtn} onClick={() => onRemove(product.id)}>×</button>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default function ShoppingCart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "LCD with Touch Screen",
      code: "LCD12345",
      image: "/images/product1.png",
      quantity: 1,
      price: 1809,
    },
    {
      id: 2,
      name: "LCD with Touch Screen",
      code: "LCD54321",
      image: "/images/product1.png",
      quantity: 1,
      price: 1250,
    },
    {
      id: 3,
      name: "LCD with Touch Screen",
      code: "LCD12345",
      image: "/images/product1.png",
      quantity: 1,
      price: 1809,
    },
    {
      id: 4,
      name: "LCD with Touch Screen",
      code: "LCD54321",
      image: "/images/product1.png",
      quantity: 1,
      price: 1250,
    },
    
  ]);

  const { setCartCount} = useCart();

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartCount((prevCount) => prevCount + 1)
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const deliveryCharges = 75;
  const totalAmount = (parseFloat(getSubtotal()) + deliveryCharges).toFixed(2);

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartContainer}>
        <h2 className={styles.cartTitle}>Shopping Cart</h2>
        <table className={styles.cartTable}>
          <thead>
            <tr className={styles.cartHeader}>
              <th>Product Details</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Sub Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <CartItem key={product.id} product={product} onQuantityChange={updateQuantity} onRemove={removeItem} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Summary Section */}
      <div className={styles.orderSummary}>
        <h3>Order Summary</h3>
        <hr />

        <div className={styles.shippingAddress}>
          <h4>Shipping Address</h4>
          <p>
            House No. 27, Sector 9 <br />
            Rajendra Nagar <br />
            Ghaziabad, Uttar Pradesh 201001 <br />
            India
          </p>
          <a href="#" className={styles.changeAddress}>Change Address</a>
        </div>

        <hr />

        <div className={styles.orderDetails}>
          <div className={styles.row}>
            <span>Sub Total</span>
            <span>₹ {getSubtotal()}</span>
          </div>
          <div className={styles.row}>
            <span>Delivery Charges</span>
            <span>₹ {deliveryCharges}</span>
          </div>
          <div className={`${styles.row} ${styles.total}`}>
            <span>Total</span>
            <span>₹ {totalAmount}</span>
          </div>
        </div>

        <hr />

        {/* Additional Data Section */}
        <div className={styles.additionalInfo}>
          <div className={styles.row}>
            <span>Estimated Delivery - </span>
            <span> - March 10, 2025</span>
          </div>
          <div className={styles.row}>
            <span>Payment Method</span>
            <span>Credit Card</span>
          </div>
        </div>

        <button className={styles.checkoutBtn}>Check Out</button>
      </div>
    </div>
  );
}
