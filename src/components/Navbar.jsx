import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";

const Navbar = ({ showNavbar }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleMouseEnter = () => {
      setVisible(true);
      clearTimeout(timeoutId);
    };

    const handleMouseLeave = () => {
      timeoutId = setTimeout(() => setVisible(false), 5000);
    };

    if (!showNavbar) {
      document.addEventListener("mousemove", handleMouseEnter);
      timeoutId = setTimeout(() => setVisible(false), 5000);
    } else {
      setVisible(true); // Always show navbar on other pages
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseEnter);
      clearTimeout(timeoutId);
    };
  }, [showNavbar]);

  return (
    <nav className={`${styles.navbar} ${visible ? styles.show : ""}`}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/main">Birds</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
