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
      <img src={imageUrl[0]} alt={title} />
      <h2>{title}</h2>
      <p>{type}</p>
      <p>{purpose}</p>
      <Link to={`/real-estates/${_id}`} className="details-button">
        View Details
      </Link>{" "}
    </div>
  );

  const bigCard = (
    <div className="card-big">
      <div className="carousel">
        {imageUrl.map((url, index) => (
          <img key={index} src={url} alt={title} />
        ))}
      </div>
      <h2>{title}</h2>
      <p>{type}</p>
      <p>{purpose}</p>
      <p>{bedrooms}</p>
      <p>{bathrooms}</p>
      <p>{area}</p>
      <p>{address}</p>
      <Link to={`/real-estates/${_id}`} className="details-button">
        View Details
      </Link>{" "}
    </div>
  );

  return cardType === "medium" ? mediumCard : bigCard;
};

export default RealEstateCard;