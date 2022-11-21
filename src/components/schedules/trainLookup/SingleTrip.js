import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//other
import { dateToTime, listLocations, stationSorter } from "./plannerFunctions";
import { myRequest } from "../../../../secretKey";

const SingleTrip = ({trip, locations}) => {

    //splits trip legs into main and side stops.
    let tripLegs;
    if (trip) tripLegs = stationSorter(trip.legs)

    //to close slide out component when clicked outside of component.
    function show() {
        document.getElementById('background-fade').classList.toggle('active')
        setTimeout(()=>{
            document.getElementById('single-trip').classList.toggle('active');
        }, 200
        );
    }
    if (trip) console.log(trip.legs);
    return tripLegs ? (
        <div id="single-trip">
            <div onClick={show} id="background-fade"></div>
            <div id="sidebar">
                <div id="trip-legs">
                    {tripLegs.mainStops.map(station => {
                        const inBetweenStations = tripLegs.sideStops.splice(0, 1);
                        return (
                            <div key={station.name}>
                                <h3>{station.name} {station?.plannedDepartureDateTime ? dateToTime(station.plannedDepartureDateTime) : dateToTime(station.plannedArrivalDateTime)}</h3>
                                {inBetweenStations.length ? 
                                    <div className="inbetween-stations">
                                        {inBetweenStations[0].map(tinyStation => {
                                            //add "no in between alternative"
                                            return (
                                                <h5 key={tinyStation.name}>{tinyStation.name} {dateToTime(tinyStation.plannedDepartureDateTime)}</h5>
                                            )
                                        })}
                                    </div> :
                                    <></>}
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

