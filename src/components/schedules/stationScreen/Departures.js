import React, { useEffect, useState } from "react";
import axios from "axios";
import secretKey from "../../../secretKey"
import { useParams } from "react-router-dom";

const Departures = () => {

    const [data, setData] = useState(null);
    let {stationcode} = useParams();

    const myRequest = {
        method: 'GET',
        headers: {
            'X-Host-Override': 'gateway.apiportal.ns.nl',
            'Ocp-Apim-Subscription-Key': secretKey
        }
    };
    
    useEffect(() => {
        axios.get(`https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?station=${stationcode}`, myRequest
        ).then(response => {
            setData(response.data.payload.departures)
        })
    }, [])

    if (data === null) {
        return (
            <div className="center-text">
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1 className="center-text">Departures</h1>
                <br></br>
                {data.map(train => {

                    const departureTime = train.actualDateTime.slice(11, 16);
                    const routeStations = train.routeStations.map(item => item.mediumName)
                    return (
                        <div className={(train.departureStatus === "INCOMING" ? "single-train incoming" : (train.departureStatus === "ON_STATION" ? "single-train on-station": "single-train departed"))} key={train.actualDateTime + train.name}>
                            <h3>{train.product.longCategoryName} richting {train.direction}</h3>
                            <h4>status: {train.cancelled ? 
                                            'Cancelled': 
                                            (train.departureStatus === "INCOMING" ? 
                                                `${train.departureStatus} at ${departureTime}`: 
                                                train.departureStatus)} op Spoor {train.plannedTrack}
                            </h4>
                            <h4>stops: {routeStations.join(', ')}</h4>
                        </div>
                    )
                })}
            </div>
        );
    }
};


export default Departures;