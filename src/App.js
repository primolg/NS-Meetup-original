import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Maintenance from "./components/campuses/Maintenance";
import Schedule from "./components/schedules/Schedule";
import HomePage from "./components/campuses/Home";

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
                    </Routes>
                </div>
            </div>
    );
};

export default App;