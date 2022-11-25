import React from "react";
//components
import Departures from "./Departures";
import Arrivals from "./Arrivals";

const StationScreen = () => {
    return (
        <div className="schedule-all">
            <Departures />
            <Arrivals />
        </div>
    )
}



export default StationScreen;