import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/BirdDetails.module.css";

const BirdDetails = ({ bird }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bird.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{bird.name}</h2>
      </div>
      <div className={styles.cardBody} style={backgroundImageStyle}>
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
          <div className={styles.detail}>
            <strong>Description:</strong> {bird.description}
          </div>
        </div>
      </div>
    </div>
  );
};

BirdDetails.propTypes = {
  bird: PropTypes.shape({
    name: PropTypes.string.isRequired,
    latin_name: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
    family: PropTypes.string.isRequired,
    habitat: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string, // URL for the bird image (to be implemented later)
  }).isRequired,
};

export default BirdDetails;
