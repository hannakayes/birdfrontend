//MainPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import BirdCard from "../components/BirdCard";
import styles from "../styles/MainPage.module.css";

const MainPage = ({ birds }) => {
  return (
    <div className={styles.mainPage}>
      {birds.map((bird, index) => (
        <Link key={index} to={`/details/${bird.id}`} className={styles.cardLink}>
          <BirdCard bird={bird} />
        </Link>
      ))}
    </div>
  );
};

export default MainPage;
