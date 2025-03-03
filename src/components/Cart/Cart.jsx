import { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./Cart.module.css";

const CartItem = ({ product, onQuantityChange }) => {
  return (
    <div className={`${styles.cartItem}`}>
<img src={product.image} alt={product.name} width="80" height="80" className={`${styles.productImage}`} />
<div className={`${styles.productDetails}`}>
        <h3 className={`${styles.productName}`}>{product.name}</h3>
        <p className={`${styles.productCode}`}>Product Code: {product.code}</p>
      </div>
      <div className={`${styles.quantityControl}`}>
        <button 
          className={`${styles.quantityBtn}`} 
          onClick={() => onQuantityChange(product.id, product.quantity - 1)}
        >
          -
        </button>
        <span className={`${styles.quantityDisplay}`}>{product.quantity}</span>
        <button 
          className={`${styles.quantityBtn}`} 
          onClick={() => onQuantityChange(product.id, product.quantity + 1)}
        >
          +
        </button>
      </div>
      <p className={`${styles.price}`}>₹ {product.price}</p>
      <p className={`${styles.subtotal}`}>₹ {product.price * product.quantity}</p>
      <button className={`${styles.removeBtn}`}>×</button>
    </div>
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
};

export default function ShoppingCart() {

  const [cart, setCart] = useState([
    { id: 1, name: "LCD with Touch Screen", code: "ET-53675-61832", image: "/images/product1.png", quantity: 1, price: 1809 },
    { id: 2, name: "LCD with Touch Screen", code: "ET-53675-61832", image: "/images/product1.png", quantity: 1, price: 1250 },
  ]);

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  return (
    <div className={`${styles.cartContainer}`}>
      <h2 className={`${styles.cartTitle}`}>Shopping Cart</h2>
      <div className={`${styles.cartHeader}`}>
        <span className={`${styles.headerProduct}`}>Product Details</span>
        <span className={`${styles.headerQuantity}`}>Quantity</span>
        <span className={`${styles.headerPrice}`}>shek laka</span>
        <span className={`${styles.headerSubtotal}`}>Sub Total</span>
      </div>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} onQuantityChange={updateQuantity} />
      ))}
    </div>
  );
}
