import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/CountryBirds.module.css";

const CountryBirds = ({ birds }) => {
  const { countryName } = useParams();

  // Ensure birds is defined before attempting to filter it
  if (!birds) {
    return <p>Loading...</p>;
  }

  // Filter birds based on the countryName
  const countryBirds = birds.filter((bird) =>
    bird.countries.includes(countryName)
  );

  return (
    <div className={styles.countryBirdsPage}>
      <h2>Look at all those pretty birds that live in {countryName}!</h2>
      {countryBirds.length > 0 ? (
        <ul>
          {countryBirds.map((bird) => (
            <li key={bird.id}>
              <Link to={`/details/${bird.id}`}>
                {bird.name} (
                <span className={styles.italic}>{bird.latin_name}</span>)
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bird data available for {countryName}.</p>
      )}

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
