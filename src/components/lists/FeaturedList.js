import React, { useEffect, useState } from "react";
import { realEstateAPI } from "../../api/api";
import RealEstateCard from "./RealEstateCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./FeaturedList.css";

const FeaturedList = () => {
  const [featuredEstates, setFeaturedEstates] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchFeaturedEstates = async () => {
      try {
        const estates = await realEstateAPI.fetchAll();
        const featured = estates.filter((estate) => estate.featured === true);
        setFeaturedEstates(featured);
      } catch (error) {
        console.error("Error fetching featured estates:", error);
      }
    };

    fetchFeaturedEstates();
  }, []);

  // Window resize event listener
  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return isMobile ? (
    <Carousel
      autoPlay
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows
      className="carousel"
    >
      {featuredEstates.map((estate) => (
        <div key={estate._id} className="carousel-slider-wrapper">
          <RealEstateCard
            estate={estate}
            cardType="big"
            className="carousel-slide"
          />
        </div>
      ))}
    </Carousel>
  ) : (
    <div className="featured-list">
      {featuredEstates.map((estate) => (
        <RealEstateCard
          key={estate._id}
          estate={estate}
          cardType="medium"
          className="featured-list-item"
        />
      ))}
    </div>
  );
};

export default FeaturedList;