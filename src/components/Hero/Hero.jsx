import "./Hero.css";
const Hero = () => {
  return (
    <div className="main-container">
      <div>
        <h1 className="Heading">
          Unlock Your <span className="mobile-span">Mobile’s</span>
        </h1>
        <h1 className="Heading">True Potential</h1>
      </div>

      <div className="hero-container">
        {/* left 1st container */}
        <div className="left-container">
          <div className="para1">
            <p>
              Welcome to 5 Mags, your one-stop destination for all Mobile
              Accessories.
            </p>
          </div>

          <div className="Batttery">
            <img src="/images/battery.png" alt="" />
          </div>
        </div>
        {/* left 2nd container */}

        <div className="second">
          <div className="lens">
            <img src="/images/lens.png" alt="" />
          </div>
          <div className="charger">
            <img src="/images/charger 1.png" alt="" />
          </div>
        </div>
        {/* middle container */}

       <div className="mobile-container">
       <div className="mobile">
        
        <img src="/images/mobile.png" alt="" />
      
      </div>
      <div className="para-hide">
       <p>
            Your ultimate hub for top quality mobile accessories that keep you
            connected, protected, and stylish
          </p>
       </div>
       </div>
        {/* right 2nd container */}
        <div className="right-container">
          <div className="cable">
            <img src="/images/cable.png" alt="" />
          </div>
          <div className="sim-tray">
            <img src="/images/SIM-TRAY.png" alt="" />
          </div>
        </div>

        {/* right 1st container */}

        <div className="last-container">
          <div className="earphones">
            <img src="/images/ear-Phones.png" alt="" />
          </div>
          <div className="para1">
            <p>
              Your ultimate hub for top quality mobile accessories that keep you
              connected, protected, and stylish
            </p>
          </div>
        </div>
      </div>
      <div className="btn">
        <p className="butn">Shop Now</p>
      </div>
    </div>
  );
};

export default Hero;
