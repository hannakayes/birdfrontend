import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BirdDetails from "../components/BirdDetails"; // Ensure correct import path
import API_URL from "../helpers/API_URL"; // Import your API_URL

const DetailsPage = () => {
  const { id } = useParams();
  const [bird, setBird] = useState(null);

  useEffect(() => {
    const fetchBird = async () => {
      try {
        const response = await fetch(`${API_URL}/birds/${id}`);
        const data = await response.json();
        setBird(data);
      } catch (error) {
        console.error(`Error fetching bird with ID ${id}:`, error);
      }
    };

    fetchBird();
  }, [id]);

  if (!bird) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }

  return <BirdDetails bird={bird} />;
};

export default DetailsPage;
