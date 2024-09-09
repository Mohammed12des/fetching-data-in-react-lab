import React from "react";
import StarshipCard from "./StarshipCard";

const StarshipList = ({ starships }) => {
  return (
    <div>
      <h2>Starships ({starships.length} results)</h2>
      <div>
        {starships.length > 0 ? (
          starships.map((starship) => (
            <StarshipCard key={starship.name} starship={starship} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default StarshipList;
