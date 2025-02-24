import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/logo.jpg" alt="5Mags Logo" className="logo" />
          <p>
            5 Mags is specialist in Mobile phone spare parts, and accessories.
            We provide a one-stop solution for all your mobile spare parts and
            accessories across India.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Buyers Protection</li>
              <li>Business Enquiry</li>
              <li>Contact Us</li>
              <li>Warranty Info</li>
              <li>Shipping Information</li>
              <li>Jobs</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>My Account</h3>
            <ul>
              <li>My Account</li>
              <li>My Orders</li>
              <li>Track your order</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return & Exchange</li>
              <li>My Wishlist</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <div className="social-icons">
              <FaPhoneAlt />
              <FaWhatsapp />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
