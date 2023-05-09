import React, { useState } from "react";
import axios from "axios";

const RealEstateRegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    imageUrl: "",
    title: "",
    description: "",
    type: "",
    purpose: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    address: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/real-estates", formData);
      onRegister(response.data);
    } catch (error) {
      console.error("Error registering real estate:", error);
    }
  };

  return (
    <form className="real-estate-register-form" onSubmit={handleSubmit}>
      <label htmlFor="imageUrl">Image URL</label>
      <input
        type="url"
        name="imageUrl"
        id="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RealEstateRegisterForm;