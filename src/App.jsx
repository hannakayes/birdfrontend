import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import theme from "./styles/theme"; // Adjust path to your theme
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import ContactDetails from "./pages/ContactDetails";
import Error404 from "./pages/Error404";
import Map from "./pages/Map";
import DetailsPage from "./pages/DetailsPage";
import Navbar from "./components/Navbar"; // Adjust path to your Navbar component
import Footer from "./components/Footer";
import "./styles/global.css"; // Ensure global styles are imported

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>; // Render fallback UI
    }

    return this.props.children; // Render children normally
  }
}

const App = () => {
  return (
    <ErrorBoundary>
      <MantineProvider theme={theme}>
        <Router>
          <AppContent />
        </Router>
      </MantineProvider>
    </ErrorBoundary>
  );
};

const AppContent = () => {
  return (
    <div style={{ paddingTop: "80px", paddingBottom: "60px" }}>
      <Navbar showNavbar={false} /> {/* Navbar is initially hidden */}
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactDetails />} />
        <Route path="/map" element={<Map />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
