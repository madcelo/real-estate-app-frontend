import React, { useEffect, useState } from "react";
import api from "../../api/api";
import RealEstateCardsModel from "../display/RealEstateCardsModel";

const RealEstatesList = ({ isHomePage }) => {
  const [realEstates, setRealEstates] = useState([]);
  const [viewCount, setViewCount] = useState(isHomePage ? 3 : undefined);

  useEffect(() => {
    const fetchRealEstates = async () => {
      const response = await api.get("/real-estates");
      setRealEstates(response.data);
    };

    fetchRealEstates();
  }, []);

  const handleViewMore = () => {
    if (viewCount === 3) {
      setViewCount(6);
    } else {
      setViewCount(undefined);
    }
  };

  return (
    <div className="real-estates-list">
      <h2>Last Estates Added</h2>
      <div className="cards-container">
        {realEstates.slice(0, viewCount).map((realEstate) => (
          // eslint-disable-next-line no-undef
          <RealEstateCardsModel key={realEstate._id} realEstate={realEstate} />
        ))}
      </div>
      {isHomePage && (
        <button onClick={handleViewMore}>
          {viewCount === 3 || viewCount === 6
            ? "View More"
            : "See all Real Estates"}
        </button>
      )}
    </div>
  );
};

export default RealEstatesList;