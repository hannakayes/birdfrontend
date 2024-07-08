// EuropeMap.jsx

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Link } from "react-router-dom";
import styles from "../styles/Map.module.css";
import world110m from "../data/countries-110m.json";

const EuropeMap = () => {
  const handleRegionClick = (geo) => {
    console.log("Region clicked:", geo.properties.name);
    // Add logic here for navigation or other actions based on region click
  };

  return (
    <div className={styles.mapPage}>
      <div className={styles.mapContainer}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 400,
            center: [15, 54],
          }}
          style={{
            width: "100%",
            height: "500px",
          }}
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
                    onClick={() => handleRegionClick(geo)}
                    style={{
                      default: {
                        fill: "#F8BA4B",
                        outline: "none",
                      },
                      hover: {
                        fill: "#ffee00",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#607D8B",
                        outline: "none",
                      },
                    }}
                  />
                </Link>
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default EuropeMap;
