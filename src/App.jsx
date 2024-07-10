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
import SearchResultsPage from "./pages/SearchResultsPage"; // Import SearchResultsPage
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BirdForm from "./components/BirdForm";
import "./styles/global.css";

const App = () => {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    fetchBirds();
  }, []);

  const fetchBirds = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/birds`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const responseData = await response.text(); // Read response as text
        console.error("Unexpected response format:", responseData);
        throw new TypeError("Expected JSON response but got something else");
      }

      const data = await response.json();
      setBirds(data);
    } catch (error) {
      console.error("Error fetching birds:", error);
      // Optionally, you could set birds to an empty array or handle the error in another way
      // setBirds([]);
    }
  };

  const handleAddBird = (birdData) => {
    console.log("Adding bird:", birdData);
  };

  const handleClose = () => {
    console.log("Form closed");
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
              <Route path="/main" element={<MainPage birds={birds} />} />
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
                element={<CountryBirds />}
              />
              <Route
                path="/search-results"
                element={<SearchResultsPage birds={birds} />} // Ensure SearchResultsPage is correctly used
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
