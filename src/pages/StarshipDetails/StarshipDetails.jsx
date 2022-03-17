import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/sw-api';
import { Link } from 'react-router-dom';


const StarshipDetails = () => {
    const [starshipDetails, setStarshipDetails] = useState({})
    let location = useLocation()
    
    useEffect(() => {
        getDetails(location.state.starship.url)
        .then(starshipData => setStarshipDetails(starshipData))
    }, [])

    console.log(location.state.starship.url)

    return ( 
        <>
        <h2>Starship Details</h2>
        <h2>Name: {starshipDetails.name}</h2>
        <h2>Model: {starshipDetails.model}</h2>
        <Link to="/starships">Return</Link>
        </>
     );
}
 
export default StarshipDetails;