//StartPage.jsx
import React from "react";
import SearchBar from "../components/SearchBar";
import styles from "../styles/StartPage.module.css";
import logoName from "../assets/logo_name.png";

const StartPage = () => {
  return (
    <div className={styles.startPage}>
      <div className={styles.content}>
        <img src={logoName} alt="Logo" className={styles.logo} />
        <SearchBar />
      </div>
    </div>
  );
};

export default StartPage;
