import React, {useState, useEffect} from "react";
import axios from "axios";
//components
import SingleTrip from "./SingleTrip";
//other
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import { myRequest } from "../../../../secretKey";
import { minToHrString, dateToTime, dateToTimeNum} from "./plannerFunctions";


const TripsList = ({prop}) => {
    const [trips, setTrips] = useState(undefined);
    const [currentTrip, setCurrentTrip] = useState(undefined);
    const [stationLocations, setStationLocations] = useState(undefined);

    /*
    trip sorting options testing
    will probably just use built in api sorting, with visual indication of transfers

    if (trips){
        console.log(trips);
        console.log('sort by trip length :', trips.sort((a,b) => a.actualDurationInMinutes - b.actualDurationInMinutes));
        console.log('sort by least transfers (trip length secondary):', trips.sort((a,b) => a.transfers - b.transfers).sort((a,b) => a.legs.length - b.legs.length));
        console.log('sort by departure time (default?)', trips.sort((a,b) => dateToTimeNum(a.legs[0].origin.plannedDateTime) - dateToTimeNum(b.legs[0].origin.plannedDateTime)));
    }
    */

    function show (idx) {
        trips[idx].arrivalStationCode = prop.arrivalStation;
        setCurrentTrip(trips[idx]);
        //Making this function async messed with the initial css show animation, but timeout seems to do the trick. Better solution out there?
        setTimeout(()=>{
            document.getElementById('single-trip').classList.toggle('active');
            setTimeout(()=>{
                document.getElementById('background-fade').classList.toggle('active')
            }, 300
            )
        }, 1);
    }
    
    useEffect(() => {
            axios.get(`https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips?fromStation=${prop.departureStation}&toStation=${prop.arrivalStation}&dateTime=${prop.rfcTime}&searchForArrival=${prop.arrivalBool}`, myRequest
            ).then(response => {
            setTrips(response.data.trips)
            })
            axios.get(`https://gateway.apiportal.ns.nl/places-api/v2/places?limit=150&radius=1000&lang=nl&details=false&station_code=${prop.arrivalStation}`, myRequest
            ).then(response => {
                setStationLocations(response.data.payload);
            })
    }, [])

        return trips ? (
            <div className="trip-list">
                <div>
                    <SingleTrip 
                        trip={currentTrip}
                        locations={stationLocations}
                    />
                </div>
                {trips.map(trip => {
                    const travelTime = minToHrString(trip.actualDurationInMinutes);
                    const departureTime = dateToTime(trip.legs[0].origin.plannedDateTime);
                    const arrivalTime = dateToTime(trip.legs[trip.legs.length - 1].destination.plannedDateTime);
                    return (
                            <div onClick={()=> show(trip.idx)} className="single-trip" key={trip.idx}>
                                <div className="travel-time">
                                    <div>
                                        {departureTime} - {arrivalTime}
                                    </div>
                                    <div>
                                        {travelTime}
                                    </div>
                                </div>
                                <div className="travel-time">
                                    <div>
                                        {trip.transfers} {trip.transfers === 1 ? " transfer" : " transfers"} 
                                    </div>
                                </div>
                            </div>
                    )
                })}
            </div>
        ) : (
            <div id="loading-wheel">
                <TailSpin stroke="#062655" strokeWidth="2" />
            </div>
        )
}


export default TripsList;



