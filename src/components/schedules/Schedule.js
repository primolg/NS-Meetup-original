import React, {useEffect, useState} from "react";
import axios from "axios";
import secretKey from "../../secretKey";

const Schedule = () => {

    const [stationOptions, setStationOptions] = useState("amsterdam");
    const [allStations, setAllStations] = useState([]);

        const myRequest = {
            method: 'GET',
            headers: {
                'X-Host-Override': 'gateway.apiportal.ns.nl',
                'Ocp-Apim-Subscription-Key': secretKey
            }
        };
    
    useEffect(() => {
        if(stationOptions){
            axios.get(`https://gateway.apiportal.ns.nl/places-api/v2/places?type=stationV2&q=${stationOptions}`, myRequest
            ).then(response => {
            setAllStations(response.data.payload[0].locations)
            })
        }
    }, [stationOptions])

    function stationSetter(){
        setStationOptions(document.getElementById('stationInput').value)
    }

    if (stationOptions){
        console.log(allStations)
        return (
            <div>
                <div>
                    <input id="stationInput"></input> 
                    <button onClick={stationSetter} type="submit">search</button>
                </div>
                <div>
                    {allStations.map(station=>{
                        return(
                            <a key={station.EVACode} href={"/station/"+station.stationCode}>
                                <div className="station-results">
                                    <p>Station {station.name}, {station.land}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        );
    } else {
        //PRE SEARCH
        return (
            <div>
                <div>
                    <input id="stationInput"></input> 
                    <button onClick={stationSetter} type="submit">search</button>
                </div>
            </div>
        )
    };
};


export default Schedule;



