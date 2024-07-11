import React from "react";
import BirdCard from "../components/BirdCard";
import styles from "../styles/FavoriteBirds.module.css";

const FavoriteBirds = ({ birds, favorites, onDelete, onToggleFavorite }) => {
  const favoriteBirds = birds.filter((bird) => favorites.includes(bird.id));

  return (
    <div className={styles.favoriteBirds}>
      <div className={styles.birdsContainer}>
        {favoriteBirds.length > 0 ? (
          favoriteBirds.map((bird) => (
            <div key={bird.id} className="favorite-bird-card">
              <BirdCard
                bird={bird}
                onDelete={onDelete}
                onToggleFavorite={onToggleFavorite}
                isFavorite={favorites.includes(bird.id)}
              />
            </div>
          ))
        ) : (
          <p>No favorite birds selected.</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteBirds;
