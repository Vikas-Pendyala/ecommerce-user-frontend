import styles from "./ShopByCategories.module.css";

const ShopByCategories = () => {
  return (
    <div>
       <div className={`${styles.brandContainer}`}>
    <h2 className={`${styles.brandHead}`}>Shop by Categories</h2>
    <button className={`${styles.exploreBtn}`}>Explore</button>
</div>
<div className={`${styles.Display}`}>
<img src="/images/display.jpg" alt="" />
<img src="/images/display.jpg" alt="" />
<img src="/images/display.jpg" alt="" />
<img src="/images/display.jpg" alt="" />
<img src="/images/display.jpg" alt="" />
<img src="/images/display.jpg" alt="" />
<img src="/images/display.jpg" alt="" />
<img src="/images/display.jpg" alt="" />
<img src="/images/display.jpg" alt="" />
<img src="/images/display.jpg" alt="" />

</div>
    </div>
  )
}

export default ShopByCategories;
