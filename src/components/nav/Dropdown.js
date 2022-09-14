import React, {useState, useEffect} from "react";
import axios from "axios";

const Dropdown = ({ submenus }) => {
    const [allStations, setAllStations] = useState(null);

    const myRequest = {
        method: 'GET',
        headers: {
            'X-Host-Override': 'gateway.apiportal.ns.nl',
            'Ocp-Apim-Subscription-Key': 'de3e222ab2c444809fbe2ba4d048df77'
        }
    };
    
    useEffect(() => {
        axios.get('https://gateway.apiportal.ns.nl/places-api/v2/places', myRequest
        ).then(response => {
            setAllStations(response.data.payload[0].locations)
        })
    }, [])
    if (allStations) {
        console.log(allStations)

        return (
            <ul className="dropdown">
                {allStations.map(station => {
                    return (
                        <li key={station.EVACode} className="menu-items">
                            <h5>{station.name}</h5>
                        </li>
                    )
                })}
            </ul>
        );
    } else {
        return (
            <ul className="dropdown">
                <li>loading...</li>
            </ul>

        )
    }
};

export default Dropdown;