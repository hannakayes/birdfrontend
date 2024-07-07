import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.aboutPage}>
        <h1>Where is My Bird?!</h1>
        <p>
          Welcome to Where is My Bird?! – your go-to spot for exploring the
          amazing birds of the Western Palearctic!
        </p>
        <p>
          Where is My Bird?! is your passport to discovering the fascinating
          world of birds in our region. Whether you're a curious beginner or a
          seasoned birdwatcher, our platform lets you:
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
          loss and climate change.
        </p>
        <p>
          At Where is My Bird?!, we're passionate about sharing the wonder of
          birds and their crucial role in ecosystems. By making bird info fun
          and accessible, we aim to inspire you to appreciate and protect these
          incredible creatures and their habitats.
        </p>
        <p>
          Join us in exploring, learning, and making a difference for our
          feathered friends and the natural world they inhabit.
        </p>
      </div>
    </div>
  );
};

export default About;
