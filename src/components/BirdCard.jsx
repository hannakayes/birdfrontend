import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/BirdCard.module.css";

const BirdCard = ({ bird, onDelete, onToggleFavorite, isFavorite }) => {
  const imageUrl = bird.image || "";
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    onToggleFavorite(bird.id);
  };

  const handleDeleteClick = () => {
    onDelete(bird.id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {imageUrl && (
          <img src={imageUrl} alt={bird.name} className={styles.cardImage} />
        )}
        <h2 className={styles.cardTitle}>{bird.name}</h2>
        <button
          onClick={handleFavoriteClick}
          className={`${styles.favoriteButton} ${favorite ? styles.favoriteActive : ""}`}
        >
          &#x2665; {/* Heart symbol */}
        </button>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardText}>{bird.description}</p>
        <div className={styles.cardDetails}>
          <div className={styles.detail}>
            <strong>Latin Name:</strong>{" "}
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
        <div className={styles.cardButtons}>
          <Link to={`/details/${bird.id}`} className={styles.cardLink}>
            View Details
          </Link>
          <button onClick={handleDeleteClick} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirdCard;
