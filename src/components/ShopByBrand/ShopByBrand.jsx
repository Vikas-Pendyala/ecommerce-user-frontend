import "./ShopByBrand.css"
const ShopByBrand = () => {
  return (
    <div>
     <div className="brand-container">
    <h2 className="brand-head">Shop by Brand</h2>
    <button className="explore-btn">Explore</button>
</div>

      <div className="brands">
        <img src="/images/apple.jpg" alt="" />
        <img src="/images/nokia.jpg" alt="" />
        <img src="/images/mi-1.jpg" alt="" />
        <img src="/images/moto.jpg" alt="" />
        <img src="/images/samsung.jpg" alt="" />
        <img src="/images/vivo.jpg" alt="" />
        <img src="/images/iqoo.jpg" alt="" />
      </div>
      
    </div>
  )
}

export default ShopByBrand
