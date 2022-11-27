import React, { useState } from "react";
//components
import TripLegs from "./TripLegs";
import Locations from "./Locations";

const SingleTrip = ({trip, locations}) => {

    const [singleLocation] = useState([locations[0]]);
    const [tripLink, setTripLink] = useState(undefined);
    //to close slide out component when clicked outside of component.

    function show() {
        document.getElementById('background-fade').classList.toggle('active')
        setTimeout(()=>{
            document.getElementById('single-trip').classList.toggle('active');
            setTripLink(undefined);
        }, 200
        );
    }


    function createLink(trip, location){
        console.log(trip, location[0])
        const link = "localhost.com/"
        setTripLink(link)
    }


    return trip ? (
        <div id="single-trip">
            <div onClick={show} id="background-fade"></div>
            <div id="sidebar">
                <TripLegs 
                    tripLegs = {trip.legs}
                />
                <Locations
                    locations = {locations}
                    singleLocation = {singleLocation}
                />
                {tripLink ? 
                <h3>{tripLink}</h3>: 
                <button onClick={()=>{createLink(trip, singleLocation)}}>hehe</button> }
            </div>
        </div>
    ) : (
        <></>
    )
}


export default SingleTrip;