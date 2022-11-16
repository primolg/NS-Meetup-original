import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SingleTrip = ({prop}) => {
    console.log(prop)

    function show() {
        document.getElementById('sidebar').classList.toggle('active');
    }
    
    return (
        <div id="sidebar">
            <div onClick={show} className="toggle-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="links">
                hello
            </div>
        </div>
    )
}


export default SingleTrip;

