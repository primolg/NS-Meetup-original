import React, {useState, useEffect} from "react";
import axios from "axios";
//other
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import { myRequest } from "../../../../secretKey";
import { minToHrString, dateToTime } from "./plannerFunctions";


const TripsList = ({prop}) => {
    const [trips, setTrips] = useState(undefined);

    //trip sorting options testing
    //will probably just use built in api sorting, with visual indication of transfers
    if (trips){
        console.log(trips);
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
            <div className="trip-list">
                {trips.map(trip => {
                    const travelTime = minToHrString(trip.actualDurationInMinutes);
                    const departureTime = dateToTime(trip.legs[0].origin.plannedDateTime);
                    const arrivalTime = dateToTime(trip.legs[trip.legs.length - 1].destination.plannedDateTime);
                    return (
                        <div className="single-trip" key={trip.idx}>
                            <div className="travel-time">
                                <div>
                                    {departureTime} to {arrivalTime}
                                </div>
                                <div>
                                    {travelTime}
                                </div>
                            </div>
                            <div>
                                transfers: {trip.transfers}
                            </div>
                        </div>
                    )
                })}
            </div>
        ) : (
            <div className="all-cards-container">
                <TailSpin stroke="#0b1d65" strokeWidth="2" />
            </div>
        )
}


export default TripsList;



