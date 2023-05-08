import React from "react";
import Banner from "../display/Banner";
import RealEstatesList from "../lists/RealEstatesList";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <RealEstatesList isHomePage={true} />
    </div>
  );
};

export default HomePage;