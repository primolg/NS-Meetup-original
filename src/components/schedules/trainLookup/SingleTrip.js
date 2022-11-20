import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//other
import { dateToTime } from "./plannerFunctions";
import { myRequest } from "../../../../secretKey";

const SingleTrip = ({trip, locations}) => {

    console.log(trip, locations)

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
                <div id="trip-legs">
                    <h2>{trip.legs[0].stops[0].name} {dateToTime(trip.legs[0].stops[0].plannedDepartureDateTime)}</h2>
                    {trip.legs.map(leg => {
                        return (
                            <div key={leg.idx}>
                                {leg.stops.map(stop => {
                                    return (
                                        <h5 key={stop.uicCode}>{stop.name} {stop.plannedDepartureDateTime ? dateToTime(stop.plannedDepartureDateTime) : dateToTime(stop.plannedArrivalDateTime)}</h5>
                                        )
                                    })}
                                <h2>{leg.stops[leg.stops.length - 1].name} {leg.stops[leg.stops.length - 1].plannedDepartureDateTime ? dateToTime(leg.stops[leg.stops.length - 1].plannedDepartureDateTime) : dateToTime(leg.stops[leg.stops.length - 1].plannedArrivalDateTime)}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    ) : (
        <></>
    )
}


export default SingleTrip;

