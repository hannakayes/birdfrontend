import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Error404.module.css";

const Error404 = () => {
  return (
    <div>
      <div className={styles.errorPage}>
        <h1>404 - Page Not Found</h1>
      </div>
    </div>
  );
};

export default Error404;
