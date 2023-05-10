import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";

const EstatesDetails = () => {
  const { id } = useParams();
  const [estateDetails, setEstateDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/real-estates/${id}`);
        setEstateDetails(response.data);
      } catch (error) {
        console.error("Error fetching estate details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!estateDetails) {
    return <div>Loading...</div>;
  }

  const {
    imageUrl,
    title,
    description,
    type,
    purpose,
    bedrooms,
    bathrooms,
    area,
    address,
    images,
    additionalInfo,
  } = estateDetails;

  return (
    <div className="estate-details">
      <h2>{title}</h2>
      <div className="estate-images">
        <img src={imageUrl} alt={title} />
        {images.map((img, index) => (
          <img key={index} src={img} alt={`${title} ${index + 1}`} />
        ))}
      </div>
      <p>{description}</p>
      <ul>
        <li>Type: {type}</li>
        <li>Purpose: {purpose}</li>
        <li>Bedrooms: {bedrooms}</li>
        <li>Bathrooms: {bathrooms}</li>
        <li>Area: {area} m²</li>
        <li>Address: {address}</li>
      </ul>
      <div className="additional-info">
        <h3>Additional Information</h3>
        <p>{additionalInfo}</p>
      </div>
    </div>
  );
};

export default EstatesDetails;