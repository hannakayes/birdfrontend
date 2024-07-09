import React from "react";
import { useLocation } from "react-router-dom";
import BirdCard from "../components/BirdCard";
import styles from "../styles/SearchResultsPage.module.css";

const SearchResultsPage = ({ birds }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const filteredBirds = React.useMemo(() => {
    if (!query) return []; // Return empty array if query is falsy

    const lowerCaseQuery = query.toLowerCase();

    return birds.filter((bird) =>
      [
        bird.name.toLowerCase(),
        bird.latin_name.toLowerCase(),
        bird.habitat.toLowerCase(),
      ].some((field) => field.includes(lowerCaseQuery))
    );
  }, [birds, query]);

  return (
    <div className={styles.searchResultsPage}>
      {filteredBirds.length > 0 ? (
        filteredBirds.map((bird) => <BirdCard key={bird.id} bird={bird} />)
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
