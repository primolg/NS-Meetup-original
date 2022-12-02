import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//functions
import { splitLink, findStop, dateToTime } from "../trainLookup/plannerFunctions";
//other
import {myRequest} from "../../../secretKey"

const TripView = () => {
    const {id} = useParams()
    const tripInfo = splitLink(id)
    const [stationInfo, setStationInfo] = useState(undefined);
    if (stationInfo) {
        console.log(stationInfo)
        console.log(tripInfo)
    }
    useEffect(() => {
        //GET trips
            axios.get(`https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/journey?train=${tripInfo.trainNumber}&dateTime=${tripInfo.dateTime}`, myRequest
            ).then(response => {
                setStationInfo(findStop(response.data.payload.stops, tripInfo.arrivalStation))
            })
    }, [])

    return stationInfo ? (
        <div>
            <h4></h4>
            <h5>Traveler arrives at {dateToTime(stationInfo.arrivals[0].actualTime)} in {stationInfo.stop.name}</h5>
            <h4>Meet up at {dateToTime(stationInfo.arrivals[0].actualTime)} by {tripInfo.locName}</h4>
            <h4>{tripInfo.lat +"," + tripInfo.lng}</h4>
        </div>
    ) : (
        <div>
            loading
        </div>
    )
};

export default TripView;