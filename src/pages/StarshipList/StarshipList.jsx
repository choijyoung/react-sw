import React, { useState, useEffect } from 'react';
import { getStarship } from '../../services/sw-api';
import { Link } from 'react-router-dom';



const StarshipList = () => {
    const [starshipList, setStarshipList] = useState([])

    useEffect(() => {
        getStarship()
        .then(starshipList => setStarshipList(starshipList.results))
    })
    
 
    return ( 
        <>
        <h3>This is a list of all Starships</h3>
        {starshipList.length ?
        <>
            {starshipList.map((starship, idx) => (
                <div key={idx}>
                    <Link to="/starship" state={{ starship }}>
                        {starship.name}
                    </Link><br />
                </div>
            ))}
        </>
        :
        <>
            <h2>Loading starships..</h2>
        </>}
     </>    
     );
}
 
export default StarshipList;