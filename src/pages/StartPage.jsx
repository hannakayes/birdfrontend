import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import styles from "../styles/StartPage.module.css";
import logoName from "../assets/logo_name.png";

const StartPage = ({ birds, fetchBirds }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className={styles.startPage}>
      <div className={styles.content}>
        <img src={logoName} alt="Logo" className={styles.logo} />
        <SearchBar
          birds={birds}
          fetchBirds={fetchBirds}
          setSearchResults={setSearchResults}
        />
      </div>
    </div>
  );
};

export default StartPage;
