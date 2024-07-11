import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BirdDetails from "../components/BirdDetails";
import styles from "../styles/DetailsPage.module.css"; // Import your CSS module for styling

const DetailsPage = () => {
  const { id } = useParams();
  const [bird, setBird] = useState(null);

  useEffect(() => {
    const fetchBird = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/birds/${id}`
        );
        const data = await response.json();
        setBird(data);
      } catch (error) {
        console.error(`Error fetching bird with ID ${id}:`, error);
      }
    };

    fetchBird();
  }, [id]);

  if (!bird) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={styles.detailsPage}>
      <div
        className={styles.detailsPageBackground}
        style={{ backgroundImage: `url(${bird.image})` }}
      />
      <div className={styles.detailsPageContent}>
        <BirdDetails bird={bird} />
        <div className={styles.backButton}>
          <Link to="/main" className={styles.backLink}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
