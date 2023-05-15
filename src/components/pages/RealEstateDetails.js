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
    additionalInfo,
  } = estate;

  return (
    <div className="real-estate-details">
      <h2 className="real-estate-details__title">{title}</h2>
      <div className="real-estate-details__images">
        <img
          src={imageUrl[mainImageIndex]}
          alt={title}
          className="real-estate-details__images__main"
        />
        <div className="real-estate-details__images__thumbnails">
          {imageUrl.map((url, index) =>
            url ? (
              <img
                key={index}
                src={url}
                alt={title}
                className="real-estate-details__images__thumbnails__item"
                onClick={() => setMainImageIndex(index)}
              />
            ) : null
          )}
        </div>
      </div>
      <div className="real-estate-details__details">
        <p className="real-estate-details__details__description">{type}</p>
        <p className="real-estate-details__details__description">
          {purpose}
        </p>{" "}
        <p>{bedrooms}</p>
        <p className="real-estate-details__details__description">{bedrooms}</p>
        <p className="real-estate-details__details__description">{bathrooms}</p>
        <p className="real-estate-details__details__description">{area}</p>
        <p className="real-estate-details__details__description">{address}</p>
        <p className="real-estate-details__details__description">
          {additionalInfo}
        </p>
      </div>
    </div>
  );
}

export default RealEstateDetails;