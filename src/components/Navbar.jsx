import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
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
