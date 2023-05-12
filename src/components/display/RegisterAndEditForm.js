import React, { useState, useEffect } from "react";
import { realEstateAPI } from "../../api/api";
import "./RegisterAndEditForm.css";

const RegisterAndEditForm = ({
  realEstate,
  onClose,
  onUpdate,
  onSave,
  isCreating,
}) => {
  const [formValues, setFormValues] = useState({
    imageUrl: [],
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

  // Handles image URL field change
  const handleImageUrlChange = (idx) => (evt) => {
    const newImageUrl = formValues.imageUrl.map((url, sidx) => {
      if (idx !== sidx) return url;
      return evt.target.value;
    });
    setFormValues({ ...formValues, imageUrl: newImageUrl });
  };

  // Handles addition of a new image URL field
  const handleAddImageUrl = () => {
    setFormValues({ ...formValues, imageUrl: [...formValues.imageUrl, ""] });
  };

  // Handles removal of an image URL field
  const handleRemoveImageUrl = (idx) => () => {
    setFormValues({
      ...formValues,
      imageUrl: formValues.imageUrl.filter((s, sidx) => idx !== sidx),
    });
  };

  useEffect(() => {
    if (realEstate) {
      setFormValues(realEstate);
    }
  }, [realEstate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (isCreating) {
        response = await realEstateAPI.create(formValues);
        alert("Successfully registered new Real Estate");
        onSave(response); // update the parent component's state with the new real estate
      } else {
        response = await realEstateAPI.updateById(realEstate._id, formValues);
        alert("Successfully updated Real Estate");
        onUpdate(response); // update the parent component's state with the updated real estate
      }
    } catch (error) {
      console.error(error);
      alert("Error updating Real Estate");
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSave}>
        <label>
          Image URLs
          {formValues.imageUrl.map((url, idx) => (
            <div className="imageUrl">
              <input
                type="text"
                placeholder={`Image URL #${idx + 1}`}
                value={url}
                onChange={handleImageUrlChange(idx)}
              />
              <button type="button" onClick={handleRemoveImageUrl(idx)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddImageUrl}>
            Add Image URL
          </button>
        </label>
        <label>
          Title
          <input
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Type
          <input
            name="type"
            value={formValues.type}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Purpose
          <input
            name="purpose"
            value={formValues.purpose}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Bedrooms
          <input
            type="number"
            name="bedrooms"
            value={formValues.bedrooms}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Bathrooms
          <input
            type="number"
            name="bathrooms"
            value={formValues.bathrooms}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Area
          <input
            type="number"
            name="area"
            value={formValues.area}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address
          <input
            name="address"
            value={formValues.address}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Additional Info
          <textarea
            name="additionalInfo"
            value={formValues.additionalInfo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Featured
          <input
            type="checkbox"
            name="featured"
            checked={formValues.featured}
            onChange={handleCheckboxChange}
          />
        </label>
        <button className="cancel" type="button" onClick={onClose}>
          Cancel alterations
        </button>
        <button className="save" type="submit">
          Save alterations
        </button>
      </form>
    </div>
  );
};

export default RegisterAndEditForm;
