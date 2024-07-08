import React from "react";
import { useParams } from "react-router-dom";
import BirdDetails from "./BirdDetails"; // Correct import path

const DetailsPage = ({ birds }) => {
  const { id } = useParams();
  return <BirdDetails birds={birds} id={id} />;
};

export default DetailsPage;
