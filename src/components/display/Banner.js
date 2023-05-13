import React from "react";
import bannerImage from "../../assets/images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img
        className="banner-image"
        src={bannerImage}
        alt="Real Estate Banner"
      />
      <div className="banner-content-container">
        <h1 className="banner-heading">Welcome to Real Estate</h1>
        <p className="banner-text">
          Find your dream home and explore the finest properties
        </p>
      </div>
    </div>
  );
};

export default Banner;