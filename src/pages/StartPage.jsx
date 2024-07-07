import React from "react";
import SearchBar from "../components/SearchBar";
import styles from "../styles/StartPage.module.css";
import Navbar from "../components/Navbar";
import logoName from "../assets/logo_name.png";

const StartPage = () => {
  return (
    <div className={styles.startPage}>
      <Navbar showNavbar={false} />
      <div className={styles.content}>
        <img src={logoName} alt="Logo" className={styles.logo} />
        <SearchBar className={styles.searchBar} />
      </div>
    </div>
  );
};

export default StartPage;
