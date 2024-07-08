import React from "react";
import EuropeMap from "../components/EuropeMap";
import styles from "../styles/Map.module.css";

const Map = () => {
  return (
    <div className={styles.mapPage}>
      <EuropeMap />
    </div>
  );
};

export default Map;
