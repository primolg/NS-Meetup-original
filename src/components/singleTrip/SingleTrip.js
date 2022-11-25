import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//components
import TripLegs from "./TripLegs";
import Locations from "./Locations";

const SingleTrip = ({trip, locations}) => {

    function myFunction(){
        // Get the text field
        let copyText = document.getElementById("myInput").prototype;
        // Select the text field
        console.log(copyText)
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value)
        // Alert the copied text
        alert("Copied the text: " + copyText.value);
    }
    let singleLocation = [locations[0]];
    //to close slide out component when clicked outside of component.
    
    function show() {
        document.getElementById('background-fade').classList.toggle('active')
        setTimeout(()=>{
            document.getElementById('single-trip').classList.toggle('active');
        }, 200
        );
    }
    
    return trip ? (
        <div id="single-trip">
            <div onClick={show} id="background-fade"></div>
            <div id="sidebar">
                <TripLegs 
                    tripLegs = {trip.legs}
                />
                <Locations
                    locations = {locations}
                    singleLocation = {singleLocation}
                />
                <input id="textt">textt</input>
                <button onClick={() => {console.log(document.getElementById("textt"))}}>Copy text</button>
            </div>
        </div>
    ) : (
        <></>
    )
}


export default SingleTrip;

//navigator.clipboard.writeText(document.getElementById("textt"))
