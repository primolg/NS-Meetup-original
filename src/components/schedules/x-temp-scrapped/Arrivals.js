import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//other
import {myRequest} from "../../../../secretKey"

const Arrivals = () => {
    
    const [data, setData] = useState(null);
    let {stationcode} = useParams()

    useEffect(() => {
        axios.get(`https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/arrivals?station=${stationcode}`, myRequest
        ).then(response => {
            setData(response.data.payload.arrivals)
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
                <h1 className="center-text">Arrivals</h1>
                <br></br>
                {data.map(train => {
                    const arrivalTime = train.actualDateTime.slice(11, 16);
                    return (
                        <div className={(train.arrivalStatus === "INCOMING" ? "single-train incoming" : (train.arrivalStatus === "ON_STATION" ? "single-train on-station": "single-train departed"))} key={train.actualDateTime + train.name}>
                            <h3>{train.product.longCategoryName} uit {train.origin}</h3>
                            <h4>status: {train.cancelled ? 
                                            'Cancelled': 
                                            (train.arrivalStatus === "INCOMING" ? 
                                                `${train.arrivalStatus} om ${arrivalTime}`: 
                                                train.arrivalStatus)} op Spoor {train.plannedTrack}
                            </h4>
                        </div>
                    )
                })}
            </div>
        );
    }
};

export default Arrivals;