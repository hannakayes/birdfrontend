import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/ContactDetails.module.css";

const ContactDetails = () => {
  return (
    <div>
      <div className={styles.contactPage}>
        <h1>Contact Us</h1>
        <p>Email: contact@whereismybird.com</p>
      </div>
    </div>
  );
};

export default ContactDetails;
