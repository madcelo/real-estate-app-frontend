import React, { useState } from "react";
import RegisterAndEditForm from "./RegisterAndEditForm";
import "./RegisterRealEstate.css";

const RegisterRealEstate = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    imageUrl: Array(6).fill(""),
    title: "",
    description: "",
    type: "",
    purpose: "",
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    address: "",
    additionalInfo: "",
    featured: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setFormValues({
      imageUrl: Array(6).fill(""),
      title: "",
      description: "",
      type: "",
      purpose: "",
      bedrooms: 0,
      bathrooms: 0,
      area: 0,
      address: "",
      additionalInfo: "",
      featured: false,
    });
    setModalOpen(false);
  };

  const handleSave = (newRealEstate) => {
    alert("Successfully registered new Real Estate");
    setFormValues({
      imageUrl: Array(6).fill(""),
      title: "",
      description: "",
      type: "",
      purpose: "",
      bedrooms: 0,
      bathrooms: 0,
      area: 0,
      address: "",
      additionalInfo: "",
      featured: false,
    });
    setModalOpen(false);
    window.location.reload(); // refresh the page to see the new real estate
  };

  return (
    <div className="register-real-estate">
      <button className="register-real-estate-button" onClick={handleOpenModal}>
        Register a new Real Estate
      </button>
      {isModalOpen && (
        <RegisterAndEditForm
          formValues={formValues}
          onInputChange={handleInputChange}
          onCheckboxChange={handleCheckboxChange}
          onSave={handleSave}
          onClose={handleCloseModal}
          isCreating={true}
        />
      )}
    </div>
  );
};

export default RegisterRealEstate;
