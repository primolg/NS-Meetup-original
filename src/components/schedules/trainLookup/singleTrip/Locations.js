import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//other
import { listLocations } from "../plannerFunctions";

const Locations = ({locations}) => {

    //splits trip legs into main and side stops.
    let legs;
    if (tripLegs) legs = stationSorter(tripLegs)
    
    return (
        <div>
                    
        </div>
    )
}


export default Locations;

