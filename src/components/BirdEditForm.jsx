import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/BirdForm.module.css";

const BirdEditForm = ({ onClose, updateBird }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    latin_name: "",
    habitat: "",
    description: "",
    image: "",
    family: "",
    order: "",
    status: "",
  });

  useEffect(() => {
    const fetchBird = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/birds/${id}`
        );
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching bird details:", error);
      }
    };

    fetchBird();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStatusChange = (event) => {
    setFormData({
      ...formData,
      status: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/birds/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update bird");
      }

      updateBird(formData); // Update the bird in the state
      navigate(`/details/${id}`);
    } catch (error) {
      console.error("Error updating bird:", error);
    }
  };

  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>Edit Bird</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Bird Name"
            required
          />
          <input
            type="text"
            name="latin_name"
            value={formData.latin_name}
            readOnly
          />
          <input type="text" name="habitat" value={formData.habitat} readOnly />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            required
          />
          <input type="text" name="family" value={formData.family} readOnly />
          <input type="text" name="order" value={formData.order} readOnly />
          <select
            name="status"
            value={formData.status}
            onChange={handleStatusChange}
            required
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="endangered">Common</option>
            <option value="vulnerable">Declining</option>
            <option value="least concern">Vulnerable</option>
          </select>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.searchButton}>
              Submit
            </button>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BirdEditForm;
