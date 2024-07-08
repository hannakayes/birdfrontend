import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import theme from "./styles/theme"; // Adjust path to your theme
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import ContactDetails from "./pages/ContactDetails";
import Error404 from "./pages/Error404";
import EuropeMap from "./components/EuropeMap"; // Import EuropeMap component
import CountryBirds from "./pages/CountryBirds"; // Import CountryBirds component
import DetailsPage from "./pages/DetailsPage";
import Navbar from "./components/Navbar"; // Adjust path to your Navbar component
import Footer from "./components/Footer";
import "./styles/global.css"; // Ensure global styles are imported

const App = () => {
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
              <Route path="/" element={<StartPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactDetails />} />
              <Route path="/map" element={<EuropeMap />} />
              <Route
                path="/country-birds/:countryName"
                element={<CountryBirds />}
              />
              <Route path="/details/:id" element={<DetailsPage />} />
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
