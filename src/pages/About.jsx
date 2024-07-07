import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.aboutPage}>
        <h1>Birds are cool.</h1>
        <p>
          <b>Where is My Bird?!</b> is your go-to spot for exploring the amazing
          birds of the Western Palearctic!
        </p>
        <p>
          Consider this web database your passport to discovering the
          fascinating world of birds in your region. Whether you're a curious
          beginner or a seasoned birdwatcher, our platform lets you:
        </p>
        <ul className={styles.features}>
          <li>
            Search and Explore: Dive into detailed info about a wide variety of
            bird species.
          </li>
          <li>
            Favorites: Keep track of your favorite birds for quick access.
          </li>
          <li>Map It Out: Locate birds on our interactive map.</li>
          <li>
            Add Your Birds: Got a bird sighting we missed? Add it to our growing
            database!
          </li>
        </ul>
        <p>
          Birds aren't just pretty feathers and melodies; they're essential for
          keeping our world in balance. They help with things like spreading
          seeds, eating pests, and pollinating plants. However, the loss of
          biodiversity is putting many bird species at risk. In Europe alone,
          over 20% of bird species are on the decline, and several hundred
          species are listed on Europe's Red List due to threats like habitat
          loss and climate change.*
        </p>
        <p>
          At <b>Where is My Bird?!</b>, we're passionate about sharing the
          wonder of birds and their crucial role in ecosystems. By making bird
          info fun and accessible, we aim to inspire you to appreciate and
          protect these incredible creatures and their habitats.
        </p>
        <p>
          Join us in exploring, learning, and making a difference for our
          feathered friends and the natural world they inhabit.
        </p>
        <p className={styles.smallText}>
          *Birds need your help as their natural habitats get smaller by the
          day. If you want to make sure that we can all listen to their unique
          songs in the future, consider supporting organizations dedicated to
          the protection of nature and biodiversity such as{" "}
          <a
            href="https://www.iucn.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IUCN
          </a>
          ,{" "}
          <a
            href="https://en.nabu.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NABU
          </a>
          ,{" "}
          <a
            href="https://www.ofb.gouv.fr/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            OFB
          </a>
          ,{" "}
          <a
            href="https://fundacion-biodiversidad.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fundación Biodiversidad
          </a>
          ,{" "}
          <a
            href="https://www.acdb.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACDB
          </a>{" "}
          and{" "}
          <a
            href="https://networknature.eu/ridb"
            target="_blank"
            rel="noopener noreferrer"
          >
            many others
          </a>{" "}
          in your local area.
        </p>
      </div>
    </div>
  );
};

export default About;
