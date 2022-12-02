import React, { useState, useEffect } from "react";
//other
import {cutWord} from "../trainLookup/plannerFunctions";

const Locations = ({locations, singleLocation, rerender}) => {
    
    const [meetupLocation, setMeetupLocation] = useState(undefined)

    useEffect(() => {
        if (meetupLocation){
            singleLocation[0] = meetupLocation
            rerender()
        } else {
            setMeetupLocation(locations[0])
        }
    }, [meetupLocation, locations, singleLocation])
    
    return (
        <div id="locations-list">
            {locations.map(location => {
                const [flip, setFlip] = useState(false)
                return (
                    <div key={location.name}>
                        <div className="location" id={location === meetupLocation ? "location" : ""} key={location.name}>
                            <div id="name-checkbox">
                                <div className={"box-check " + (location === meetupLocation ? "checked-box" : "")} onClick={()=>{setMeetupLocation(location)}}></div>
                                <h3>{location.name.length > 22 ? cutWord(location.name, 21) : location.name}</h3>
                            </div>
                            <h3 id="map-flip" onClick={()=>{setFlip(!flip)}}>{flip ? "x" : "+"}</h3>
                        </div>
                            {flip ? <h4>{location.lat}, {location.lng}</h4> : ""}
                    </div>
                )
            })}
        </div>
    )
}


export default Locations;

