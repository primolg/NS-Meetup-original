import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
//components
import HomePage from "./components/schedules/trainLookup/TrainPlanner";
    //below components are scrapped for now, but data might be useful at later stage for individual station search.
import Maintenance from "./components/schedules/x-temp-scrapped";
import Schedule from "./components/schedules/x-temp-scrapped";
import StationScreen from "./components/schedules/x-temp-scrapped";


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