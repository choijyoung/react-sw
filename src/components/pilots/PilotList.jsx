import React, { useState } from 'react';
import { getPilots } from '../../services/sw-api';

const Pilots = (props) => {
    const [pilotList, setPilotList] = useState([])
    const pilotUrls = props.pilot
    


    getPilots(pilotUrls).then(pilots => setPilotList(pilots))
  return (
    <>
        {pilotList.length ?
         <>
         {pilotList.map(pilot =>
            <div key={pilot.name}>
                <h3>{pilot.name}</h3>
            </div>
            )}
        </>
        :
        <>
        <h3>There are no pilots</h3>
        </>
      }
    </>
  );
};

export default Pilots;
