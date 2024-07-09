import React from "react";
import EuropeMap from "../components/EuropeMap";
import styles from "../styles/Map.module.css";
import world110m from "../data/countries-110m.json";

const Map = () => {
  return (
    <div className={styles.mapPage}>
      <EuropeMap />
    </div>
  );
};

export default Map;
