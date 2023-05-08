import React from "react";
import { Link } from "react-router-dom";

const RealEstateCardsModel = ({ realEstate }) => {
  const {
    id,
    imageUrl,
    title,
    description,
    type,
    purpose,
    bedrooms,
    bathrooms,
    area,
  } = realEstate;

  return (
    <div className="real-estate-card">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          <li>Type: {type}</li>
          <li>Purpose: {purpose}</li>
          <li>Bedrooms: {bedrooms}</li>
          <li>Bathrooms: {bathrooms}</li>
          <li>Area: {area} m²</li>
        </ul>
        <Link to={`/real-estates/${id}`} className="view-more-btn">
          View More
        </Link>
      </div>
    </div>
  );
};

export default RealEstateCardsModel;