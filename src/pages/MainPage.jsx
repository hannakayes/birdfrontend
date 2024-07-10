import React, { useState, useEffect } from "react";
import BirdCard from "../components/BirdCard";
import styles from "../styles/MainPage.module.css";
import BirdForm from "../components/BirdForm";

const MainPage = ({ birds, fetchBirds, favorites, onToggleFavorite }) => {
  const [showBirdForm, setShowBirdForm] = useState(false);

  

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

      
      fetchBirds();
      setShowBirdForm(false); 
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
      fetchBirds(); 
    } catch (error) {
      console.error("Error deleting bird:", error);
    }
  };

  return (
    <div className={styles.mainPage}>
      {birds.map((bird) => (
        <BirdCard
          key={bird.id.toString()}
          bird={bird}
          onDelete={handleDeleteBird}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.includes(bird.id)}
        />
      ))}
      {showBirdForm && <BirdForm onClose={handleCloseForm} addBird={addNewBird} />}
      <button className={styles.addBirdButton} onClick={handleAddBird}>
        Add Bird
      </button>
    </div>
  );
};

export default MainPage;
