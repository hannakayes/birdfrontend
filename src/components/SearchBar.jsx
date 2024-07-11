import React, { useState, useEffect } from "react";
import styles from "../styles/SearchBar.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ birds, fetchBirds, setSearchResults }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (!term) {
      setSuggestions([]);
      return;
    }

    const filteredSuggestions = birds.filter(
      (bird) =>
        bird.name.toLowerCase().includes(term.toLowerCase()) ||
        bird.latin_name.toLowerCase().includes(term.toLowerCase())
    );
    setSuggestions(filteredSuggestions.slice(0, 5));
  };

  // Commenting out the search button logic
  /*
  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
      setSearchResults([]);
      navigate("/error");
      return;
    }

    const filteredResults = birds.filter(
      (bird) =>
        bird.name.toLowerCase().includes(term) ||
        bird.latin_name.toLowerCase().includes(term)
    );

    setSearchResults(filteredResults);

    const exactMatch = filteredResults.find(
      (bird) =>
        bird.name.toLowerCase() === term ||
        bird.latin_name.toLowerCase() === term
    );

    if (exactMatch) {
      navigate(`/details/${exactMatch.id}`);
    } else if (filteredResults.length > 0) {
      navigate("/search-results");
    } else {
      navigate("/error");
    }
  };
  */

  const handleSuggestionClick = (birdId) => {
    navigate(`/details/${birdId}`);
    setSearchTerm("");
    setSuggestions([]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Uncomment to handle search on Enter key press
      // handleSearch();
    }
  };

  useEffect(() => {
    fetchBirds();
  }, [fetchBirds]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        id="searchInput"
        placeholder="Search birds by name or species!"
        className={styles.searchBar}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      {/* Commenting out the search button */}
      {/* 
      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button>
      */}
      {suggestions.length > 0 && searchTerm && (
        <ul className={styles.suggestions}>
          {suggestions.map((bird) => (
            <li
              key={bird.id}
              className={styles.suggestion}
              onClick={() => handleSuggestionClick(bird.id)}
            >
              {bird.name} ({bird.latin_name})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
