import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/BirdForm.module.css";

const BirdForm = ({ onClose, families, orders, statuses }) => {
  const [formData, setFormData] = useState({
    name: "",
    latin_name: "",
    habitat: "",
    description: "",
    image: "",
    family: [],
    order: [],
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
    // Handle form submission logic (e.g., send data to backend)
    // After submission, close the form
    onClose();
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
              {families.map((family) => (
                <option key={family} value={family}>
                  {family}
                </option>
              ))}
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
              {orders.map((order) => (
                <option key={order} value={order}>
                  {order}
                </option>
              ))}
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
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
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
  families: PropTypes.arrayOf(PropTypes.string).isRequired,
  orders: PropTypes.arrayOf(PropTypes.string).isRequired,
  statuses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BirdForm;
