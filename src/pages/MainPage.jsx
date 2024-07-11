import React, { useState } from "react";
import BirdCard from "../components/BirdCard";
import styles from "../styles/MainPage.module.css";
import BirdForm from "../components/BirdForm";

const MainPage = ({ birds, fetchBirds, favorites, onToggleFavorite }) => {
  const [showBirdForm, setShowBirdForm] = useState(false);
  const [filter, setFilter] = useState("");
  const [filterType, setFilterType] = useState("family");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false); // for clear buttons tracking 

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

      fetchBirds();
    } catch (error) {
      console.error("Error deleting bird:", error);
    }
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    setIsFilterActive(value !== "" || filterType !== "family"); // for hide the clear button, each one should track the activity
  };

  const handleFilterTypeChange = (e) => {
    const value = e.target.value;
    setFilterType(value);
    setIsFilterActive(value !== "" || filter !== ""); 
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const clearFilter = () => {
    setFilter("");
    setFilterType("family");
    setIsFilterActive(false); 
  };

  const filteredBirds = birds.filter((bird) => {
    if (!filter) return true;
    const birdFamily = bird.family;
    const birdOrder = bird.order;
    if (filterType === "family" && typeof birdFamily === "string") {
      return birdFamily.toLowerCase() === filter.toLowerCase();
    }
    if (filterType === "order" && typeof birdOrder === "string") {
      return birdOrder.toLowerCase() === filter.toLowerCase();
    }
    return false;
  });

  return (
    <div className={styles.mainPage}>
      <div className={styles.filterContainer}>
        <button onClick={toggleDropdown}>Filter</button>
        {showDropdown && (
          <div className={styles.dropdown}>
            <label htmlFor="filter-type">Filter by:</label>
            <select
              id="filter-type"
              onChange={handleFilterTypeChange}
              value={filterType}
            >
              <option value="family">Family</option>
              <option value="order">Order</option>
            </select>
            <label htmlFor="filter-value">
              {filterType === "family" ? "Family:" : "Order:"}
            </label>
            <select
              id="filter-value"
              onChange={handleFilterChange}
              value={filter}
            >
              <option value="">Select {filterType}</option>
              {filterType === "family" && (
                <>
                  <option value="Accipitridae">Accipitridae</option>
              <option value="Alcedinidae">Alcedinidae</option>
              <option value="Anatidae">Anatidae</option>
              <option value="Apodidae">Apodidae</option>
              <option value="Ardeidae">Ardeidae</option>
              <option value="Caprimulgidae">Caprimulgidae</option>
              <option value="Certhiidae">Certhiidae</option>
              <option value="Charadriidae">Charadriidae</option>
              <option value="Ciconiidae">Ciconiidae</option>
              <option value="Columbidae">Columbidae</option>
              <option value="Corvidae">Corvidae</option>
              <option value="Cuculidae">Cuculidae</option>
              <option value="Falconidae">Falconidae</option>
              <option value="Fringillidae">Fringillidae</option>
              <option value="Haematopodidae">Haematopodidae</option>
              <option value="Hirundinidae">Hirundinidae</option>
              <option value="Laniidae">Laniidae</option>
              <option value="Locustellidae">Locustellidae</option>
              <option value="Meropidae">Meropidae</option>
              <option value="Motacillidae">Motacillidae</option>
              <option value="Muscicapidae">Muscicapidae</option>
              <option value="Oriolidae">Oriolidae</option>
              <option value="Panuridae">Panuridae</option>
              <option value="Paridae">Paridae</option>
              <option value="Phasianidae">Phasianidae</option>
              <option value="Phylloscopidae">Phylloscopidae</option>
              <option value="Picidae">Picidae</option>
              <option value="Podicipedidae">Podicipedidae</option>
              <option value="Prunellidae">Prunellidae</option>
              <option value="Regulidae">Regulidae</option>
              <option value="Remizidae">Remizidae</option>
              <option value="Scolopacidae">Scolopacidae</option>
              <option value="Sittidae">Sittidae</option>
              <option value="Sturnidae">Sturnidae</option>
              <option value="Sylviidae">Sylviidae</option>
              <option value="Troglodytidae">Troglodytidae</option>
              <option value="Turdidae">Turdidae</option>
              <option value="Upupidae">Upupidae</option>
                </>
              )}
              {filterType === "order" && (
                <>
                  <option value="ACCIPITRIFORMES">ACCIPITRIFORMES</option>
              <option value="ANSERIFORMES">ANSERIFORMES</option>
              <option value="BUCEROTIFORMES">BUCEROTIFORMES</option>
              <option value="CAPRIMULGIFORMES">CAPRIMULGIFORMES</option>
              <option value="CHARADRIIFORMES">CHARADRIIFORMES</option>
              <option value="CICONIIFORMES">CICONIIFORMES</option>
              <option value="COLUMBIFORMES">COLUMBIFORMES</option>
              <option value="CORACIIFORMES">CORACIIFORMES</option>
              <option value="CUCULIFORMES">CUCULIFORMES</option>
              <option value="FALCONIFORMES">FALCONIFORMES</option>
              <option value="GRUIFORMES">GRUIFORMES</option>
              <option value="PELECANIFORMES">PELECANIFORMES</option>
              <option value="PICIFORMES">PICIFORMES</option>
              <option value="PODICIPEDIFORMES">PODICIPEDIFORMES</option>
              <option value="PROCELLARIIFORMES">PROCELLARIIFORMES</option>
                </>
              )}
            </select>
          </div>
        )}
        {isFilterActive && (
          <button onClick={clearFilter}>Clear Filter</button>
        )}
      </div>
      {filteredBirds.map((bird) => (
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
