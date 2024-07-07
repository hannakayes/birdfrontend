import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/MainPage.module.css";

const MainPage = () => {
  return (
    <div>
      <div className={styles.mainPage}>
        <h1>Bird List</h1>
        {/* Bird list and habitat filter will go here */}
      </div>
    </div>
  );
};

export default MainPage;
