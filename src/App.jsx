import React, { useState, useEffect } from "react";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import { fetchStarships } from "./services/starshipService";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    const loadStarships = async () => {
      const data = await fetchStarships();
      setStarships(data);
      setFilteredStarships(data);
    };
    loadStarships();
  }, []);

  const handleSearch = (query) => {
    const results = starships.filter((starship) =>
      starship.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStarships(results);
  };

  return (
    <div>
      <StarshipSearch onSearch={handleSearch} />
      <StarshipList starships={filteredStarships} />
    </div>
  );
};

export default App;
