import React from "react";
import BirdCard from "../components/BirdCard";
import styles from "../styles/FavoriteBirds.module.css"; 

const FavoriteBirds = ({ birds, favorites, onDelete, onToggleFavorite }) => {
  const favoriteBirds = birds.filter((bird) => favorites.includes(bird.id));

  return (
    <div className={styles.favoriteBirds}>
      <h2>Favorite Birds</h2>
      {favoriteBirds.length > 0 ? (
        favoriteBirds.map((bird) => (
          <BirdCard
            key={bird.id}
            bird={bird}
            onDelete={onDelete}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.includes(bird.id)}
          />
        ))
      ) : (
        <p>No favorite birds selected.</p>
      )}
    </div>
  );
};

export default FavoriteBirds;
