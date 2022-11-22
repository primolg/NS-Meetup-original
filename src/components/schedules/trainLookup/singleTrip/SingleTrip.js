import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//components
import TripLegs from "./TripLegs";
//other
import { dateToTime, listLocations, stationSorter } from "../plannerFunctions";
import { myRequest } from "../../../../../secretKey";

const SingleTrip = ({trip, locations}) => {

    // console.log(locations)
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
            </div>
        </div>
    ) : (
        <></>
    )
}


export default SingleTrip;

