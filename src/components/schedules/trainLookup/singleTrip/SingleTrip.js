import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//components
import TripLegs from "./TripLegs";
import Locations from "./Locations";

const SingleTrip = ({trip, locations}) => {

    //to close slide out component when clicked outside of component.
    function show() {
        document.getElementById('background-fade').classList.toggle('active')
        setTimeout(()=>{
            document.getElementById('single-trip').classList.toggle('active');
        }, 200
        );
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
                />
            </div>
        </div>
    ) : (
        <></>
    )
}


export default SingleTrip;

