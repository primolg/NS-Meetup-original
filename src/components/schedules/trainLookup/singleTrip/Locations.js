import React, { useState } from "react";
//other
const Locations = ({locations}) => {
    
    const [coordinates, setCoordinates] = useState(undefined)
    console.log(coordinates)
    return (
        <div id="locations-list">
            {locations.map(location => {
                const [flip, setFlip] = useState(false)
                return (
                    <div key={location.name}>
                        <button onClick={()=>{setCoordinates(location.lat + "-" + location.lng)}}> </button>
                        <h3>{location.name}</h3>
                        <button onClick={()=>{setFlip(!flip)}}>+</button>
                        {flip ? <h4>{location.lat}, {location.lng}</h4> : ""}
                    </div>
                )
            })}
        </div>
    )
}


export default Locations;

