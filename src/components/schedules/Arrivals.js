import React, { useEffect, useState } from "react";
import axios from "axios";

const Arrivals = () => {

    const [data, setData] = useState(null);

    const myRequest = {
        method: 'GET',
        headers: {
            'X-Host-Override': 'gateway.apiportal.ns.nl',
            'Ocp-Apim-Subscription-Key': 'de3e222ab2c444809fbe2ba4d048df77'
        }
    };
    
    useEffect(() => {
        axios.get('https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/arrivals?station=RAI', myRequest
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
                        <div className={(train.arrivalStatus === "INCOMING" ? "single-train incoming" : "single-train on-station")} key={train.actualDateTime}>
                            <h3>{train.product.longCategoryName} vanaf {train.origin}</h3>
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