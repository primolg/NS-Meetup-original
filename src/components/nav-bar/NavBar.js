import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    function show() {
        document.getElementById('sidebar').classList.toggle('active');
    }

    return (
        <div id="sidebar">
            <div className="toggle-btn" onClick ={show}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="links">
                <Link onClick={show} to="/">Trip Planner</Link>
                <Link onClick={show} to="/maintenance">Maintenance</Link>
                <Link onClick={show} to="/schedule">Schedule</Link>
            </div>
        </div>
    )
}

export default NavBar;