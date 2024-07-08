import React from "react";
import { useParams } from "react-router-dom"; // Use useParams instead of useRouteMatch
import styles from "../styles/CountryBirds.module.css";

const CountryBirds = () => {
  const { countryName } = useParams(); // Use useParams hook to get route parameters

  // Placeholder content for demonstration
  return (
    <div className={styles.countryBirdsPage}>
      <h2>Birds in {countryName}</h2>
      <p>List of birds found in {countryName} will be displayed here.</p>
    </div>
  );
};

export default CountryBirds;
