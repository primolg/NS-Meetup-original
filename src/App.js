import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Maintenance from "./components/Maintenance";
import Schedule from "./components/schedules/Schedule";
import HomePage from "./components/Home";
import StationScreen from "./components/schedules/StationScreen";

function App(){
    return(
            <div>
                <nav className="navBar">
                    <Link className="nav-links" to="/">home</Link>
                    <Link className="nav-links" to="/maintenance">maintenance</Link>
                    <Link className="nav-links" to="/schedule">schedule</Link>
                </nav>
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