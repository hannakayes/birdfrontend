import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Link } from "react-router-dom";
import styles from "../styles/Map.module.css";
import world110m from "../data/countries-110m.json";

const EuropeMap = () => {
  return (
    <div className={styles.mapContainer}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 400,
          center: [15, 54],
        }}
        className={styles.map}
      >
        <Geographies geography={world110m}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Link
                key={geo.rsmKey}
                to={`/country-birds/${geo.properties.name}`}
                className={styles.geographyLink}
              >
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#F8BA4B",
                      outline: "none",
                      stroke: "#FFFFFF",
                      strokeWidth: 0.75,
                    },
                    hover: {
                      fill: "#ffee00",
                      outline: "none",
                      stroke: "#FFFFFF",
                      strokeWidth: 0.75,
                    },
                    pressed: {
                      fill: "#000000",
                      outline: "none",
                      stroke: "#FFFFFF",
                      strokeWidth: 0.75,
                    },
                  }}
                />
              </Link>
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default EuropeMap;
