import React, {useState, useEffect} from "react";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import axios from "axios";
import { myRequest } from "../../../../secretKey";

import { minToHrString } from "./plannerFunctions";




const TripsList = ({prop}) => {
    const [trips, setTrips] = useState(undefined);
    if (trips){
        console.log('sort by trip length (kinda default?):', trips.sort((a,b) => a.actualDurationInMinutes - b.actualDurationInMinutes));
        console.log('sort by least transfers (trip length secondary):', trips.sort((a,b) => a.transfers - b.transfers).sort((a,b) => a.legs.length - b.legs.length));
    }
    useEffect(() => {
            axios.get(`https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips?fromStation=${prop.departureStation}&toStation=${prop.arrivalStation}&dateTime=${prop.rfcTime}&searchForArrival=${prop.arrivalBool}`, myRequest
            ).then(response => {
            setTrips(response.data.trips)
            })
    }, [])

        return trips ? (
            <div>
                <ul>
                {trips.map(trip => {
                    const time = minToHrString(trip.actualDurationInMinutes)
                    return (
                        <li key={trip.idx}>trip {trip.idx} duurt : {time}</li>
                    )
                })}
                </ul>
            </div>
        ) : (
            <div className="all-cards-container">
                <TailSpin stroke="#0b1d65" strokeWidth="2" />
            </div>
        )
}


export default TripsList;



