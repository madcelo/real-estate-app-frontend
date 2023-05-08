import React from "react";
import bannerImage from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Real Estate Banner" />
      <div className="banner-content">
        <h1>Welcome to Real Estate</h1>
        <p>Find your dream home and explore the finest properties</p>
      </div>
    </div>
  );
};

export default Banner;