import React, { useState, useEffect } from "react";
//components
import Map from "./Map";
//other
import {cutWord} from "../../trainLookup/plannerFunctions";

const Locations = ({locations, singleLocation, rerender}) => {
    const [meetupLocation, setMeetupLocation] = useState(undefined)
    const [activeMap, setActiveMap] = useState(undefined)
    
    console.log(activeMap)
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
                const locationInfo = {
                    address: location.name,
                    lat: location.lat,
                    lng: location.lng,
                  };

                return (
                    <div key={location.name}>
                        <div className="location" id={location === meetupLocation ? "location" : ""} key={location.name}>
                            <div id="name-checkbox">
                                <div className={"box-check " + (location === meetupLocation ? "checked-box" : "")} onClick={()=>{setMeetupLocation(location)}}></div>
                                <h3>{location.name.length > 22 ? cutWord(location.name, 21) : location.name}</h3>
                            </div>
                            {activeMap === location.name ?
                            <h3 id="map-flip" onClick={(event)=>{event.preventDefault(), setFlip(false), setActiveMap(undefined)}}>-</h3>
                            : <h3 id="map-flip" onClick={()=>{setFlip(true), setActiveMap(location.name)}}>+</h3>
                            }
                        </div>
                        {activeMap === location.name ? 
                            <Map 
                                location={locationInfo}
                            />
                            : <></>
                        }
                    </div>
                )
            })}
        </div>
    )
}


export default Locations;

