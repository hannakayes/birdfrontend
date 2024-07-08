import React from "react";
import { useParams, Link } from "react-router-dom"; // Import Link and useParams
import styles from "../styles/CountryBirds.module.css";

const CountryBirds = () => {
  const { countryName } = useParams(); // Use useParams hook to get route parameters

  // Placeholder content for demonstration
  return (
    <div className={styles.countryBirdsPage}>
      <h2>Look at all those pretty birds that live in {countryName}!</h2>
      <p>List of birds found in {countryName} will be displayed here.</p>

      {/* Back to Map button */}
      <div className={styles.backButton}>
        <Link to="/map" className={styles.backLink}>
          Back to Map
        </Link>
      </div>
    </div>
  );
};

export default CountryBirds;
