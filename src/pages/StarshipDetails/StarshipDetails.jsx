import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({});
  let location = useLocation();

  useEffect(() => {
    getDetails(location.state.starship.url).then((starshipData) =>
      setStarshipDetails(starshipData)
    );
  }, []);

  console.log(location.state.starship.url);

  return (
    <div id="detail">
      <h1>Starship Details</h1>
      <h3>Name: {starshipDetails.name}</h3>
      <h3>Model: {starshipDetails.model}</h3>
      <Link to="/starships" id="link-button">Return</Link>
    </div>
  );
};

export default StarshipDetails;
