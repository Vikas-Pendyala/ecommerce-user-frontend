import styles from "./Products.module.css";
import { RxStarFilled } from "react-icons/rx";
import { FaRupeeSign } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { FaTruckFast } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import Reviews from "./Reviews";
const Products = () => {
  return (
    <div className="">
      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.leftContainer}`}>
          <div className={`${styles.leftCont}`}>
            <div className={`${styles.leftProducts}`}>
              <img src="/images/product1.png" alt="" />
              <img src="/images/product2.png" alt="" />
              <img src="/images/product1.png" alt="" />
              <img src="/images/product2.png" alt="" />
              <img src="/images/product1.png" alt="" />
            </div>
            <div className={`${styles.mobileContainer}`}>
              <img className={`${styles.imageContainer}`} src="/images/product3.png" alt=""/>
            </div>
          </div>
          <div className={`${styles.aboutItem}`}>
            <p className={`${styles.aboutTitle}`}>About The Item</p>

            <div className={`${styles.para1}`}>
              <p>
                The display screen for the Galaxy S21 features a 6.2-inch
                Dynamic AMOLED 2X panel with a resolution of 2400x1080 pixels,
                delivering vibrant colors, deep blacks, and sharp details. It
                supports a 120Hz refresh rate for smooth scrolling and
                animations and it&apos;s protected by Corning Gorilla Glass
                Victus, offering enhanced durability against scratches and
                drops. The screen also includes an integrated ultrasonic
                fingerprint sensor for secure and fast unlocking.
              </p>
            </div>
            
          </div>
          <div className={`${styles.ratingsCont}`}>
              <p className={`${styles.aboutTitle}`}>Ratings</p>
              <div className={`${styles.ratingss}`}>
                <div className={`${styles.rating}`}>
                  <h2>5</h2>
                  <RxStarFilled className={`${styles.goldStar}`} />
                  <div className={`${styles.ratingContainer}`}>
                    <div className={`${styles.blueRating5}`}></div>
                  </div>
                </div>

                <div className={`${styles.rating}`}>
                  <h2>4</h2>
                  <RxStarFilled className={`${styles.goldStar}`} />
                  <div className={`${styles.ratingContainer}`}>
                    <div className={`${styles.blueRating4}`}></div>
                  </div>
                </div>

                <div className={`${styles.rating}`}>
                  <h2>3</h2>
                  <RxStarFilled className={`${styles.goldStar}`} />
                  <div className={`${styles.ratingContainer}`}>
                    <div className={`${styles.blueRating3}`}></div>
                  </div>
                </div>

                <div className={`${styles.rating}`}>
                  <h2>2</h2>
                  <RxStarFilled className={`${styles.goldStar}`} />
                  <div className={`${styles.ratingContainer}`}>
                    <div className={`${styles.blueRating2}`}></div>
                  </div>
                </div>

                <div className={`${styles.rating}`}>
                  <h2>1</h2>
                  <RxStarFilled className={`${styles.goldStar}`} />
                  <div className={`${styles.ratingContainer}`}>
                    <div className={`${styles.blueRating1}`}></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className={`${styles.rightContainer}`}>
          <p className={`${styles.paraTitle}`}>Display Screen for Galaxy S21</p>
          <div className={`${styles.stars}`}>
            <h2>4.0</h2>
            <RxStarFilled className={`${styles.goldStar}`} />
            <RxStarFilled className={`${styles.goldStar}`} />
            <RxStarFilled className={`${styles.goldStar}`} />
            <RxStarFilled className={`${styles.goldStar}`} />
            <RxStarFilled className={`${styles.silverStar}`} />
            <p className={`${styles.paraReviews}`}>2 Reviews</p>
          </div>
          <div className={`${styles.cost}`}>
            <FaRupeeSign className={`${styles.rupee}`} />
            <p className={`${styles.mrp}`}>1,809</p>
          </div>
          <p className={`${styles.procode}`}>
            Product Code :
            <span className={`${styles.code}`}>ET-53675-61832</span>
          </p>
          <div className={`${styles.btns}`}>
            <div className={`${styles.addToWishlist}`}>Add to Wishlist</div>
            <div className={`${styles.addToCart}`}>Add to Cart</div>
          </div>
          <div className={`${styles.iconsContainer}`}>
            <div className={`${styles.warranty}`}>
            <div className={`${styles.award}`}>
              <FaAward className={`${styles.icon}`} />
              <p className={`${styles.iconContent}`}>One Year Warranty</p>
            </div>
            <div className={`${styles.award}`}>
              <SiTicktick className={`${styles.icon}`}/>
              <p className={`${styles.iconContent}`}>Quality Guaranteed</p>
            </div>
            </div>
            <div className={`${styles.warranty}`}>
            <div className={`${styles.award}`}>
            <FaTruckFast className={`${styles.icon}`}/>
              <p className={`${styles.iconContent}`}>Free Delivery</p>
            </div>
            <div className={`${styles.award}`}>
            <MdVerified className={`${styles.icon}`}/>
              <p className={`${styles.iconContent}`}>5 Mags Verified</p>
            </div>
            </div>
          </div>
          <div className="">
          <div className={`${styles.deliveryContainer}`}>
      <h2 className={`${styles.deliveryTitle}`}>Delivery Options</h2>
      <div className={`${styles.inputContainer}`}>
        <input
          type="text"
          placeholder="Check"
          className={`${styles.pincodeInput}`}
        />
        <button className={`${styles.checkButton}`}>Check</button>
      </div>
      <ul className={`${styles.deliveryList}`}>
        <li>
        <FaCheck className={`${styles.checkIcon}`} />
          <span className={`${styles.textContent}`}>100% Original Products</span>
        </li>
        <li>
          <FaCheck className={`${styles.checkIcon}`} />
          <span className={`${styles.textContent}`}>Pay on delivery might be available</span>
        </li>
        <li>
          <FaCheck className={`${styles.checkIcon}`} />
          <span className={`${styles.textContent}`}>Easy 14 days returns and exchanges</span>
        </li>
      </ul>
    </div>
      <Reviews/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
