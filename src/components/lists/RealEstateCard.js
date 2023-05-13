import React from "react";
import { Link } from "react-router-dom";
import "./RealEstateCard.css";

const RealEstateCard = ({ estate, cardType }) => {
  const {
    _id,
    imageUrl = [],
    title,
    type,
    purpose,
    bedrooms,
    bathrooms,
    area,
    address,
  } = estate;

  const mediumCard = (
    <div className="card-medium">
      <img className="card-img" src={imageUrl[0]} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-info">{type}</p>
      <p className="card-info">{purpose}</p>
      <Link to={`/real-estates/${_id}`} className="details-button">
        View Details
      </Link>
    </div>
  );

  const bigCard = (
    <div className="card-big">
      <div className="carousel">
        {imageUrl.map((url, index) => (
          <img key={index} className="carousel-img" src={url} alt={title} />
        ))}
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-info">{type}</p>
      <p className="card-info">{purpose}</p>
      <p className="card-info">{bedrooms}</p>
      <p className="card-info">{bathrooms}</p>
      <p className="card-info">{area}</p>
      <p className="card-info">{address}</p>
      <Link to={`/real-estates/${_id}`} className="details-button">
        View Details
      </Link>
    </div>
  );

  return cardType === "medium" ? mediumCard : bigCard;
};

export default RealEstateCard;