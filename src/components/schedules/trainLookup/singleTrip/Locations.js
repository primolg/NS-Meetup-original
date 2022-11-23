import React, { useState } from "react";
//other
const Locations = ({locations}) => {
    
    const [meetupLocation, setMeetupLocation] = useState(undefined)
    
    console.log(meetupLocation)
    return (
        <div id="locations-list">
            {locations.map(location => {
                const [flip, setFlip] = useState(false)
                return (
                    <div key={location.name}>
                        <div className="location" key={location.name}>
                            <button className={location === meetupLocation ? "checked-box" : ""} onClick={()=>{setMeetupLocation(location)}}>__</button>
                            <h3>{location.name}</h3>
                            <button onClick={()=>{setFlip(!flip)}}>{flip ? "-" : "+"}</button>
                        </div>
                            {flip ? <h4>{location.lat}, {location.lng}</h4> : ""}
                    </div>
                )
            })}
        </div>
    )
}


export default Locations;

