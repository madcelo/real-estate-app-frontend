import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { realEstateAPI } from "../../api/api";
import "./RealEstateDetails.css";

function RealEstateDetails() {
  const { id } = useParams();
  const [estate, setEstate] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0); // New state

  useEffect(() => {
    const fetchEstate = async () => {
      try {
        const fetchedEstate = await realEstateAPI.fetchById(id);
        setEstate(fetchedEstate);
      } catch (error) {
        console.error("Failed to fetch estate: ", error);
      }
    };

    fetchEstate();
  }, [id]);

  if (!estate) {
    return <div>Loading...</div>;
  }

  const {
    imageUrl = [],
    title,
    type,
    purpose,
    bedrooms,
    bathrooms,
    area,
    address,
    additionalInfo
  } = estate;

  return (
    <div className="real-estate-details">
      <h2>{title}</h2>
      <div className="image-container">
        <img
          src={imageUrl[mainImageIndex]}
          alt={title}
          className="main-image"
        />
        <div className="thumbnail-container">
          {imageUrl.map((url, index) =>
            url ? (
              <img
                key={index}
                src={url}
                alt={title}
                className="thumbnail"
                onClick={() => setMainImageIndex(index)}
              />
            ) : null
          )}
        </div>
      </div>
      <p>{type}</p>
      <p>{purpose}</p>
      <p>{bedrooms}</p>
      <p>{bathrooms}</p>
      <p>{area}</p>
      <p>{address}</p>
      <p>{additionalInfo}</p>
    </div>
  );
}

export default RealEstateDetails;
