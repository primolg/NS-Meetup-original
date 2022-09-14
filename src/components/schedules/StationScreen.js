import Departures from "./Departures";
import Arrivals from "./Arrivals";
import React from "react";

const StationScreen = () => {
    return (
        <div className="center-text">
            <Departures />
            <Arrivals />
        </div>
    )
}



export default StationScreen;