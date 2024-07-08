//SearchBar.jsx
import React, { useState, useEffect } from "react";
import styles from "../styles/SearchBar.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ birds }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle input change
  const handleInputChange = (event) => {
    const term = event.target.value.trim();
    setSearchTerm(term);
  };

  const handleSearch = () => {
    const exactMatch = searchResults.find(
      (bird) => bird.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (exactMatch) {
      navigate(`/details/${exactMatch.id}`);
    } else if (searchResults.length > 0) {
      navigate(`/details/${searchResults[0].id}`);
    } else {
      navigate("/error");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const filterResults = (term) => {
    if (!birds) {
      return;
    }

    const filteredResults = birds.filter(
      (bird) =>
        bird.name.toLowerCase().includes(term.toLowerCase()) ||
        bird.latin_name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  useEffect(() => {
    filterResults(searchTerm);
  }, [birds, searchTerm]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        id="searchInput"
        placeholder="Search birds by name or species..."
        className={styles.searchBar}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button>
      <ul>
        {searchResults.map((bird) => (
          <li key={bird.id}>
            {bird.name} - {bird.latin_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

