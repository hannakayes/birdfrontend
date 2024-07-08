import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import theme from "./styles/theme";
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import ContactDetails from "./pages/ContactDetails";
import Error404 from "./pages/Error404";
import Map from "./pages/Map";
import DetailsPage from "./pages/DetailsPage"; // Correct import path
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";

const App = () => {
  const birds = [
    {
      id: "0",
      name: "Grey Wagtail",
      latin_name: "Motacilla cinerea",
      order: "PASSERIFORMES",
      family: "Motacillidae",
      habitat: "Streams, rivers, wetlands",
      description:
        "The Grey Wagtail is a small bird with grey upperparts, yellow underparts, and a long, constantly wagging tail. It feeds on insects and is often seen near fast-flowing water.",
      status: "Common",
      image: "/assets/birds/GreyWagtail.jpg",
    },
    {
      id: "1",
      name: "Eurasian Magpie",
      latin_name: "Pica pica",
      order: "PASSERIFORMES",
      family: "Corvidae",
      habitat: "Forests, urban areas",
      description:
        "The Eurasian Magpie is a black and white bird with a long tail and noisy chattering calls. It is omnivorous and adaptable, thriving in a variety of habitats.",
      status: "Common",
      image: "/assets/birds/EurasianMagpie.jpg",
    },
    {
      id: "2",
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
      id: "3",
      name: "Eurasian Bullfinch",
      latin_name: "Pyrrhula pyrrhula",
      order: "PASSERIFORMES",
      family: "Fringillidae",
      habitat: "Woodlands, orchards, parks",
      description:
        "The Eurasian Bullfinch is a stocky bird with a black cap and face, contrasting with a pinkish-red breast and gray back. It feeds mainly on seeds, buds, and berries.",
      status: "Common",
      image: "/assets/birds/EurasianBullfinch.jpg",
    },
  ];

  return (
    <MantineProvider theme={theme}>
      <Router>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar />
          <div style={{ flex: 1, overflowY: "auto" }}>
            <Routes>
              <Route path="/" element={<StartPage birds={birds} />} />
              <Route path="/main" element={<MainPage birds={birds} />} />
              <Route path="/details/:id" element={<DetailsPage birds={birds} />} /> {/* Ensure correct path */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactDetails />} />
              <Route path="/map" element={<Map />} />
              <Route path="/error" element={<Error404 />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </MantineProvider>
  );
};

export default App;
