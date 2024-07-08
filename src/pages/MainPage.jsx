import React, { useState, useEffect } from "react";
import BirdCard from "../components/BirdCard";
import API_URL from "../helpers/API_URL";
import styles from "../styles/MainPage.module.css";
import BirdForm from "../components/BirdForm";

const MainPage = () => {
  const [birds, setBirds] = useState([]);
  const [showBirdForm, setShowBirdForm] = useState(false);

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await fetch(`${API_URL}/birds`);
        const data = await response.json();

        // Sort birds by order and then alphabetically by name
        const sortedBirds = data.sort((a, b) => {
          // First sort by order
          if (a.order < b.order) return -1;
          if (a.order > b.order) return 1;
          // If order is the same, sort by name
          return a.name.localeCompare(b.name);
        });

        setBirds(sortedBirds);
      } catch (error) {
        console.error("Error fetching birds:", error);
      }
    };

    fetchBirds();
  }, []);

  const handleAddBird = () => {
    setShowBirdForm(true);
  };

  const handleCloseForm = () => {
    setShowBirdForm(false);
  };

  // Mock data for families, orders, and statuses (replace with actual data from API or constants)
  const families = ["Family 1", "Family 2", "Family 3"];
  const orders = ["Order 1", "Order 2", "Order 3"];
  const statuses = ["Status 1", "Status 2", "Status 3"];

  return (
    <div className={styles.mainPage}>
      {birds.map((bird) => (
        <BirdCard key={bird.id} bird={bird} />
      ))}
      {showBirdForm && (
        <BirdForm
          onClose={handleCloseForm}
          families={families}
          orders={orders}
          statuses={statuses}
        />
      )}
      <button className={styles.addBirdButton} onClick={handleAddBird}>
        Add Bird
      </button>
    </div>
  );
};

export default MainPage;
