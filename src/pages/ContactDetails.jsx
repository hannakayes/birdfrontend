import React from "react";
import styles from "../styles/ContactDetails.module.css";
import logo from "../assets/logo_name.png"; // Adjust the path to your logo

const ContactDetails = () => {
  const email = "contact@whereismybird.com";
  const subject = encodeURIComponent("Hello, where is my bird?!");

  const handleClick = (event) => {
    event.preventDefault();
    window.open(`mailto:${email}?subject=${subject}`, "_blank");
  };

  return (
    <div>
      <div className={styles.contactPage}>
        <img src={logo} alt="Company Logo" className={styles.logo} />
        <h1>Get in touch!</h1>
        <p>
          <a
            href={`mailto:${email}?subject=${subject}`}
            onClick={handleClick}
            className={styles.emailLink}
          >
            {email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
