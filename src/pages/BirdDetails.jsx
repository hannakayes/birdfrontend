import React from "react";
import BirdCard from "../components/BirdCard";

const BirdDetails = ({ birds, id }) => {
  const bird = birds.find((bird) => bird.id.toString() === id);

  if (!bird) {
    return <div>Bird not found</div>;
  }

  return (
    <div>
      <h1>Bird Details</h1>
      <BirdCard bird={bird} />
    </div>
  );
};

export default BirdDetails; // Make sure to export default here
