import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/BirdCard.module.css";

const BirdCard = ({ bird }) => {
  // Determine image URL
  const imageUrl = bird.image || ""; // Use bird.image if provided, otherwise default to ""

  return (
    <Link to={`/details/${bird.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          {imageUrl && (
            <img src={imageUrl} alt={bird.name} className={styles.cardImage} />
          )}
          <h2 className={styles.cardTitle}>{bird.name}</h2>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.cardText}>{bird.description}</p>
          <div className={styles.cardDetails}>
            <div className={styles.detail}>
              <strong>Scientific Name:</strong>{" "}
              <span className={styles.italic}>{bird.latin_name}</span>
            </div>
            <div className={styles.detail}>
              <strong>Habitat:</strong> {bird.habitat}
            </div>
            <div className={styles.detail}>
              <strong>Order:</strong> {bird.order}
            </div>
            <div className={styles.detail}>
              <strong>Family:</strong> {bird.family}
            </div>
            <div className={styles.detail}>
              <strong>Status:</strong> {bird.status}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

BirdCard.propTypes = {
  bird: PropTypes.shape({
    id: PropTypes.string.isRequired, // Ensure 'id' is included in PropTypes
    name: PropTypes.string.isRequired,
    latin_name: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
    family: PropTypes.string.isRequired,
    habitat: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string, // URL for the bird image
  }).isRequired,
};

export default BirdCard;
