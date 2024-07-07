import React from "react";
import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
  return (
    <input
      type="text"
      id="searchInput" // Add an id attribute
      placeholder="Find your favorite feathered friends..."
      className={styles.searchBar}
    />
  );
};

export default SearchBar;
