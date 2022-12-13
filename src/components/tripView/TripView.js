import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
//components
import Map from "./../singleTrip/locations/Map";
//functions
import { splitLink, dateToTime, findStop} from "../trainLookup/plannerFunctions";
//other
import {myRequest} from "./../../../secretKey";
import { TailSpin } from "react-loading-icons";


const TripView = () => {
    const {id} = useParams()
    const tripInfo = splitLink(id)
    const [stationInfo, setStationInfo] = useState(undefined);
    const [day, setDay] = useState(undefined);
    const [errorMsg, setErrorMsg] = useState(false);
    const locationInfo = {
        address: tripInfo.locName,
        lat: Number(tripInfo.lat),
        lng: Number(tripInfo.lng),
    };

    useEffect(() => {
        //GET trips
            axios.get(`https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/journey?train=${tripInfo.trainNumber}&dateTime=${tripInfo.dateTime}`, {
                method: 'GET',
                headers: {
                    'X-Host-Override': 'gateway.apiportal.ns.nl',
                    'Ocp-Apim-Subscription-Key': myRequest
                }
            }
            ).then(response => {
                const stop = findStop(response.data.payload.stops, tripInfo.arrivalStation);
                setStationInfo(stop)
                let date = new Date((stop.arrivals[0]?.actualTime ? stop.arrivals[0].actualTime : stop.arrivals[0].plannedTime).slice(0, 10))
                // console.log(stop.arrivals[0])
                setDay(date.toString().slice(0, 10))
            }).catch(error => {
                console.log("Error encountered:", error)
                setErrorMsg(true)
            })
    }, [])
    return stationInfo ? (
        <div id="trip-view">
            <div id="travel-info">
                <h3>Traveler arrives on 
                    <span className="emph-date"> {day} </span>
                    at
                    <span className="emph-date"> {dateToTime(stationInfo.arrivals[0]?.actualTime ? stationInfo.arrivals[0].actualTime : stationInfo.arrivals[0].plannedTime)} </span>
                    on station
                    <span className="emph-date"> {stationInfo.stop.name} </span>
                </h3>
                <br></br>
                <br></br>
                <h3>
                    Meet up at 
                    <span className="emph-date"> {dateToTime(stationInfo.arrivals[0]?.actualTime ? stationInfo.arrivals[0].actualTime : stationInfo.arrivals[0].plannedTime)} </span>
                    by
                    <span className="emph-date"> {tripInfo.locName} </span>
                </h3>
            </div>
            <Map
                location={locationInfo}
                defaultZoom={17}
            />
            <a id="google-link" href={"https://google.com/maps/search/station+" + stationInfo.stop.name + "+" + tripInfo.locName.split(" ").join("+")}>open in google maps</a>
        </div>
    ) : (
        <div id="loading-wheel">
                    {!errorMsg ? <TailSpin stroke="#062655" strokeWidth="2" /> : "error encountered, please try again"}
        </div>
    )
};

export default TripView;