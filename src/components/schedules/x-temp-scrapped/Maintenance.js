import React, { useEffect, useState } from "react";
import axios from "axios";
//other
import {myRequest}  from "../../../../secretKey";

const SinglePage = () => {

    const [data, setData] = useState(null);

    
    useEffect(() => {
        axios.get('https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/disruptions?isActive=false', myRequest
        ).then(response => {
            setData(response.data)
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
                {data.map(item => {
                    //check for maintenence type and lists accordingly
                    if (item.type === "DISRUPTION"){
                        return (
                            <div key={item.id}>
                                <h3>Disruption in {item.title}</h3>
                                <h4>{(item.expectedDuration ? item.expectedDuration.description : 'unknown')}</h4>
                            </div>
                        )
                    } else if (item.type === "CALAMITY"){
                        return (
                            <div key={item.id}>
                                <h3>Calamity in {item.title}</h3>
                                <h4>{item.description}</h4>
                            </div>
                        )
                    } else if (item.type === "MAINTENANCE"){
                        return (
                            <div key={item.id}>
                                <h3>Maintenance in {item.title}</h3>
                                <h4>Vanaf {item.period}</h4>
                            </div>
                        )
                    } 
                })}
            </div>
        );
    }
};


export default SinglePage;

