import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/BirdForm.module.css";

const BirdForm = ({ onClose, addBird }) => {
  const [formData, setFormData] = useState({
    name: "",
    latin_name: "",
    habitat: "",
    description: "",
    image: "",
    family: [],
    order: "",
    status: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMultiSelectChange = (event) => {
    const { name, options } = event.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setFormData({
      ...formData,
      [name]: selectedValues,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBird(formData); // Send new bird data to the MainPage component
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>Add Bird</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Bird Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Latin Name:
            <input
              type="text"
              name="latin_name"
              value={formData.latin_name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Habitat:
            <input
              type="text"
              name="habitat"
              value={formData.habitat}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Family:
            <select
              name="family"
              multiple
              value={formData.family}
              onChange={handleMultiSelectChange}
              required
            >
              {/* Replace with actual options */}
              <option value="Accipitridae">Accipitridae</option>
              <option value="Anatidae">Anatidae</option>
              <option value="Apodidae">Apodidae</option>
              <option value="Caprimulgidae">Caprimulgidae</option>
              <option value="Scolopacidae">Scolopacidae</option>
              
            </select>
          </label>
          <label>
            Order:
            <select
              name="order"
              multiple
              value={formData.order}
              onChange={handleMultiSelectChange}
              required
            >
              {/* Replace with actual options */}
              <option value="PELECANIFORMES">PELECANIFORMES</option>
              <option value="PICIFORMES">PICIFORMES</option>
              <option value="PODICIPEDIFORMES">PODICIPEDIFORMES</option>
              <option value="ACCIPITRIFORMES">ACCIPITRIFORMES</option>
            </select>
          </label>
          <label>
            Status:
            <select
              name="status"
              multiple
              value={formData.status}
              onChange={handleMultiSelectChange}
              required
            >
              {/* Replace with actual options */}
              <option value="Common">Common</option>
              <option value="Vulnerable">Vulnerable</option>
              <option value="Declining">Declining</option>
            </select>
          </label>
          <button type="submit" className={styles.searchButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

BirdForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  addBird: PropTypes.func.isRequired,
};

export default BirdForm;
