import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
//components
import HomePage from "./components/trainLookup/TrainPlanner";
import TripView from "./components/tripView/TripView";
    //below components are scrapped for now, but data might be useful at later stage for individual station search.
import Maintenance from "./components/x-temp-scrapped/Maintenance";
import Schedule from "./components/x-temp-scrapped/Schedule";
import StationScreen from "./components/x-temp-scrapped/StationScreen";


function App(){
    return(
            <div>
                <div className="all-else">
                    <Routes>
                        <Route index path="/" element={<HomePage />} />
                        <Route path="/maintenance" element={<Maintenance />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/station/:stationcode" element={<StationScreen />} />
                        <Route path="/trip/:id" element={<TripView />} />
                    </Routes>
                </div>
            </div>
    );
};

export default App;