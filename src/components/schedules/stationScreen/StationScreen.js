import Departures from "./Departures";
import Arrivals from "./Arrivals";
import React from "react";

const StationScreen = () => {
    return (
        <div className="schedule-all">
            <Departures />
            <Arrivals />
        </div>
    )
}



export default StationScreen;