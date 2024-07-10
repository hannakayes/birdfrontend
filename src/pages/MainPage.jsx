import React, { useState, useEffect } from "react";
import BirdCard from "../components/BirdCard";
import styles from "../styles/MainPage.module.css";
import BirdForm from "../components/BirdForm";

const MainPage = () => {
  const [birds, setBirds] = useState([]);
  const [showBirdForm, setShowBirdForm] = useState(false);

  useEffect(() => {
    fetchBirds();
  }, []);

  const fetchBirds = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/birds`);
      const data = await response.json();

      const sortedBirds = data.sort((a, b) => {
        // First, sort by order
        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;

        // If orders are equal, then sort by family
        if (a.family < b.family) return -1;
        if (a.family > b.family) return 1;

        // If orders and families are equal, then sort by name
        return a.name.localeCompare(b.name);
      });

      setBirds(sortedBirds);
    } catch (error) {
      console.error("Error fetching birds:", error);
    }
  };

  const handleAddBird = () => {
    setShowBirdForm(true);
  };

  const handleCloseForm = () => {
    setShowBirdForm(false);
  };

  const addNewBird = async (newBird) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/birds`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBird),
      });

      if (!response.ok) {
        throw new Error("Failed to add bird");
      }

      // Fetch updated list of birds after adding a new bird
      fetchBirds();
      setShowBirdForm(false); // Close the form after successful addition
    } catch (error) {
      console.error("Error adding bird:", error);
    }
  };

  const handleDeleteBird = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/birds/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete bird");
      }

      const updatedBirds = birds.filter((bird) => bird.id !== id);
      setBirds(updatedBirds);
    } catch (error) {
      console.error("Error deleting bird:", error);
    }
  };

  return (
    <div className={styles.mainPage}>
      {birds.map((bird) => (
        <BirdCard key={bird.id} bird={bird} onDelete={handleDeleteBird} />
      ))}
      {showBirdForm && (
        <BirdForm onClose={handleCloseForm} addBird={addNewBird} />
      )}
      <button className={styles.addBirdButton} onClick={handleAddBird}>
        Add Bird
      </button>
    </div>
  );
};

export default MainPage;
