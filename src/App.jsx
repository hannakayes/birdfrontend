import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import theme from "./styles/theme";
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import ContactDetails from "./pages/ContactDetails";
import Error404 from "./pages/Error404";
import Map from "./pages/Map";
import CountryBirds from "./pages/CountryBirds";
import DetailsPage from "./pages/DetailsPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BirdForm from "./components/BirdForm";
import FavoriteBirds from "./pages/FavoriteBirds"; // Adjust import path if needed
import "./styles/global.css";

const App = () => {
  const [birds, setBirds] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchBirds();
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const fetchBirds = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/birds`);
      const data = await response.json();

      const sortedBirds = data.sort((a, b) => {
        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;
        if (a.family < b.family) return -1;
        if (a.family > b.family) return 1;
        return a.name.localeCompare(b.name);
      });

      setBirds(sortedBirds);
    } catch (error) {
      console.error("Error fetching birds:", error);
    }
  };

  const handleToggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleAddBird = (birdData) => {
    console.log("Adding bird:", birdData);
  };

  const handleClose = () => {
    console.log("Form closed");
  };

  const handleDeleteBird = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/birds/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Failed to delete bird");
      }

      const updatedBirds = birds.filter((bird) => bird.id !== id);
      setBirds(updatedBirds);

      if (favorites.includes(id)) {
        const updatedFavorites = favorites.filter((favId) => favId !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }
    } catch (error) {
      console.error("Error deleting bird:", error);
    }
  };

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
              <Route
                path="/"
                element={<StartPage birds={birds} fetchBirds={fetchBirds} />}
              />
              <Route
                path="/main"
                element={
                  <MainPage
                    birds={birds}
                    fetchBirds={fetchBirds}
                    favorites={favorites}
                    onToggleFavorite={handleToggleFavorite}
                  />
                }
              />
              <Route
                path="/add-bird"
                element={
                  <BirdForm onClose={handleClose} addBird={handleAddBird} />
                }
              />
              <Route
                path="/details/:id"
                element={<DetailsPage birds={birds} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactDetails />} />
              <Route path="/map" element={<Map />} />
              <Route
                path="/country-birds/:countryName"
                element={<CountryBirds birds={birds} />}
              />
              <Route
                path="/search-results"
                element={<SearchResultsPage birds={birds} />}
              />
              <Route
                path="/favorite-birds"
                element={
                  <FavoriteBirds
                    birds={birds}
                    favorites={favorites}
                    onDelete={handleDeleteBird}
                    onToggleFavorite={handleToggleFavorite}
                  />
                }
              />
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
