import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BirdCard from "../components/BirdCard";
import API_URL from "../helpers/API_URL";
import styles from "../styles/MainPage.module.css";

const MainPage = () => {
  const [birds, setBirds] = useState([]);

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

  return (
    <div className={styles.mainPage}>
      <Link to="/add-bird" className={styles.addBirdButton}>
        Add Bird
      </Link>
      {birds.map((bird) => (
        <BirdCard key={bird.id} bird={bird} />
      ))}
    </div>
  );
};

export default MainPage;
