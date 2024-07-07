import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerLinks}>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="https://github.com/hannakayes/birdfrontend">GitHub</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
