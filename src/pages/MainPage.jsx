// MainPage.jsx

import React from "react";
import BirdCard from "../components/BirdCard";
import styles from "../styles/MainPage.module.css";

const MainPage = () => {
  // Mock data (replace with actual data fetching logic)
  const birds = [
    {
      name: "Grey Wagtail",
      latin_name: "Motacilla cinerea",
      order: "PASSERIFORMES",
      family: "Motacillidae",
      habitat: "Streams, rivers, wetlands",
      description:
        "The Grey Wagtail is a small bird with grey upperparts, yellow underparts, and a long, constantly wagging tail. It feeds on insects and is often seen near fast-flowing water.",
      status: "Common",
      image: "/assets/birds/GreyWagtail.jpg", // Adjust image path relative to public or root
    },
    {
      name: "Eurasian Magpie",
      latin_name: "Pica pica",
      order: "PASSERIFORMES",
      family: "Corvidae",
      habitat: "Forests, urban areas",
      description:
        "The Eurasian Magpie is a black and white bird with a long tail and noisy chattering calls. It is omnivorous and adaptable, thriving in a variety of habitats.",
      status: "Common",
      image: "/assets/birds/EurasianMagpie.jpg", // Adjust image path relative to public or root
    },
    {
      name: "Northern Goshawk",
      latin_name: "Accipiter gentilis",
      order: "ACCIPITRIFORMES",
      family: "Accipitridae",
      habitat: "Forests, woodlands",
      description:
        "The Northern Goshawk is a large bird of prey with broad wings and a long tail. They are powerful hunters of birds and mammals, often hunting in dense forests.",
      status: "Common",
      image: "/assets/birds/NorthernGoshawk.jpg",
    },
    {
      name: "Eurasian Bullfinch",
      latin_name: "Pyrrhula pyrrhula",
      order: "PASSERIFORMES",
      family: "Fringillidae",
      habitat: "Woodlands, orchards, parks",
      description:
        "The Eurasian Bullfinch is a stocky bird with a black cap and face, contrasting with a pinkish-red breast and gray back. It feeds mainly on seeds, buds, and berries. During breeding season, males sing a soft, melodious whistle. Eurasian Bullfinches are shy and often seen in pairs or small flocks. They are widespread across Europe and Asia, favoring woodland edges and gardens. Despite habitat loss, they are not currently threatened.",
      status: "Common",
      image: "/assets/birds/EurasianBullfinch.jpg",
    },
    // Add more bird objects as needed
  ];

  return (
    <div className={styles.mainPage}>
      {birds.map((bird, index) => (
        <BirdCard key={index} bird={bird} />
      ))}
    </div>
  );
};

export default MainPage;
