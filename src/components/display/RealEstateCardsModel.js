import React, { useState } from "react";
import api from "../../api/api";
import { Link } from "react-router-dom";

const RealEstateCardsModel = ({ realEstate, isAdmin, onDelete }) => {
  const authToken = localStorage.getItem("authToken");
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/real-estates/${realEstate._id}`, realEstate, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating real estate:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    realEstate[name] = value;
  };

  return (
    <div className="real-estate-card">
      <div className="card-image">
        <img src={realEstate.imageUrl} alt={realEstate.title} />
      </div>
      <div className="card-content">
        {isEditing ? (
          <form onSubmit={handleUpdate}>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              id="imageUrl"
              value={realEstate.imageUrl}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={realEstate.title}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={realEstate.description}
              onChange={handleInputChange}
              required
            />
            {/* Add other input fields as needed */}
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </form>
        ) : (
          <>
            <h3>{realEstate.title}</h3>
            <p>{realEstate.description}</p>
            <ul>
              <li>Type: {realEstate.type}</li>
              <li>Purpose: {realEstate.purpose}</li>
              <li>Bedrooms: {realEstate.bedrooms}</li>
              <li>Bathrooms: {realEstate.bathrooms}</li>
              <li>Area: {realEstate.area} m²</li>
            </ul>
            <Link
              to={`/real-estates/${realEstate._id}`}
              className="view-more-btn"
            >
              View More
            </Link>
            {isAdmin && (
              <div className="admin-actions">
                <button className="edit-btn" onClick={() => setIsEditing(true)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => onDelete(realEstate._id)}
                >
                  Delete
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RealEstateCardsModel;