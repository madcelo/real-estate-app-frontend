import React, { useEffect, useState } from "react";
import api from "../../api/api";
import RealEstateCard from "../components/RealEstateCard";
import RealEstateRegisterForm from "../components/RealEstateRegisterForm";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [realEstates, setRealEstates] = useState([]);
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchRealEstates = async () => {
      try {
        const response = await api.get("/api/real-estates", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setRealEstates(response.data);
      } catch (error) {
        console.log("Error fetching real estates", error);
      }
    };

    fetchRealEstates();
  }, [authToken]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/real-estates/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setRealEstates(realEstates.filter((realEstate) => realEstate._id !== id));
    } catch (error) {
      console.error("Error deleting real estate:", error);
    }
  };

  const handleRegister = (newRealEstate) => {
    setRealEstates([...realEstates, newRealEstate]);
  };

  return (
    <div className="admin-page-container">
      <div className="admin-page-header">
        <h1>Admin Dashboard</h1>
        <Link to="/register-real-estate" className="register-btn">
          Register a New Real Estate Product
        </Link>
        <RealEstateRegisterForm onRegister={handleRegister} />
      </div>
      <div className="real-estate-list">
        {realEstates.map((realEstate) => (
          <RealEstateCard
            key={realEstate._id}
            realEstate={realEstate}
            isAdmin={true}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
