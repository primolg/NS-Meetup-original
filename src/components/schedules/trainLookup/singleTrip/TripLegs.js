import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//other
import { dateToTime, stationSorter } from "../plannerFunctions";

const TripLegs = ({tripLegs}) => {

    //splits trip legs into main and side stops.
    let legs;
    if (tripLegs) legs = stationSorter(tripLegs)
    
    return legs ? (
        <div id="trip-legs">
                    {legs.mainStops.map(station => {
                        const inBetweenStations = legs.sideStops.splice(0, 1);
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
    ) : (
        <></>
    )
}


export default TripLegs;

