import React, { useState, useEffect } from "react";
import { realEstateAPI } from "../../api/api";
import RegisterAndEditForm from "../display/RegisterAndEditForm";
import RegisterRealEstate from "../display/RegisterRealEstate";
import "./AdminList.css";

const AdminList = () => {
  const [realEstates, setRealEstates] = useState([]);
  const [selectedRealEstate, setSelectedRealEstate] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function fetchRealEstates() {
      const data = await realEstateAPI.fetchAll();
      setRealEstates(data);
    }

    fetchRealEstates();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this Real Estate?")) {
      await realEstateAPI.deleteById(id);
      setRealEstates(realEstates.filter((realEstate) => realEstate._id !== id));
    }
  };

  const handleEdit = (realEstate) => {
    setSelectedRealEstate(realEstate);
    setModalOpen(true);
  };

  const handleUpdate = (updatedRealEstate) => {
    setRealEstates(
      realEstates.map((realEstate) =>
        realEstate._id === updatedRealEstate._id
          ? updatedRealEstate
          : realEstate
      )
    );
    setSelectedRealEstate(null);
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setSelectedRealEstate(null);
    setModalOpen(false);
  };

  return (
    <div className="container">
      <div className="register-container">
        <RegisterRealEstate />
      </div>
      <h2>Admin Real Estate List</h2>
      {realEstates.length > 0 ? (
        realEstates.map((realEstate) => (
          <div key={realEstate._id} className="info">
            <img src={realEstate.imageUrl[0]} alt={realEstate.title} />
            <h3>{realEstate.title}</h3>
            <button onClick={() => handleEdit(realEstate)}>Edit</button>
            <button
              className="delete"
              onClick={() => handleDelete(realEstate._id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      {isModalOpen && (
        <RegisterAndEditForm
          realEstate={selectedRealEstate}
          onClose={handleCloseModal}
          onUpdate={handleUpdate}
          isCreating={false}
        />
      )}
    </div>
  );
};

export default AdminList;
