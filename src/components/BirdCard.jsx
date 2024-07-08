//BirdCard.jsx

import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/BirdCard.module.css"; // Adjust the path as per your project structure
import GreyWagtailImage from "../assets/birds/GreyWagtail.jpg";
import EurasianMagpieImage from "../assets/birds/EurasianMagpie.jpg";
import NorthernGoshawkImage from "../assets/birds/NorthernGoshawk.jpg";
import EurasianBullfinchImage from "../assets/birds/EurasianBullfinch.jpg"; // Import the new image

const BirdCard = ({ bird }) => {
  let imageUrl;

  // Determine which image to use based on bird name
  if (bird.name === "Grey Wagtail") {
    imageUrl = GreyWagtailImage;
  } else if (bird.name === "Eurasian Magpie") {
    imageUrl = EurasianMagpieImage;
  } else if (bird.name === "Northern Goshawk") {
    imageUrl = NorthernGoshawkImage;
  } else if (bird.name === "Eurasian Bullfinch") {
    imageUrl = EurasianBullfinchImage; // Assign the new image for Eurasian Bullfinch
  } else {
    // Handle other cases if needed
    imageUrl = ""; // Default or fallback image
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={imageUrl} alt={bird.name} className={styles.cardImage} />
        <h2 className={styles.cardTitle}>{bird.name}</h2>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardText}>{bird.description}</p>
        <div className={styles.cardDetails}>
          <div className={styles.detail}>
            <strong>Scientific Name:</strong> {bird.latin_name}
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
  );
};

BirdCard.propTypes = {
  bird: PropTypes.shape({
    name: PropTypes.string.isRequired,
    latin_name: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
    family: PropTypes.string.isRequired,
    habitat: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default BirdCard;
