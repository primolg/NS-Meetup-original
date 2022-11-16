import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
//components
import Maintenance from "./components/Maintenance";
import Schedule from "./components/schedules/stationScreen/Schedule";
import HomePage from "./components/schedules/trainLookup/TrainPlanner";
import StationScreen from "./components/schedules/stationScreen/StationScreen";


function App(){
    return(
            <div>
                <div className="all-else">
                    <Routes>
                        <Route index path="/" element={<HomePage />} />
                        <Route path="/maintenance" element={<Maintenance />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/station/:stationcode" element={<StationScreen />} />
                    </Routes>
                </div>
            </div>
    );
};

export default App;