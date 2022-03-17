import React, { useEffect, useState } from "react";

const Pilots = (props) => {
    const [pilotList, setPilotList] = useState([])
    const pilotUrls = props.pilot
    
    async function getPilots(urls) {
        const promises = urls.map(url => fetch(url).then(res => res.json()))
        const pilotObjects = await Promise.all(promises)
        return pilotObjects
      }

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
