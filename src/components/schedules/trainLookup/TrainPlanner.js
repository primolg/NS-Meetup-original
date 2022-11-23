import React, {useState, useEffect} from "react";
import axios from "axios";
//components
import TripsList from "./TripsList";
//other
import DatePicker from 'react-datepicker'
import {myRequest} from "../../../../secretKey"
import {timesArray, monthsToNum, timeSorter, dateToTime} from "./plannerFunctions"

const HomePage = () => {
    //time grab
    const date = new Date();
    const time = (date.getHours().toString().length === 1 ? "0" + date.getHours() : date.getHours()) 
                + ":" 
                + (date.getMinutes().toString().length === 1 ? "0"+date.getMinutes() : date.getMinutes());
    //form setters
    const [allStations, setAllStations] = useState(undefined);
    const [selectedDate, setSelectedDate] = useState(date);
    const [selectedTime, setSelectedTime] = useState(time);
    const [arrivalBool, setArrivalBool] = useState(false);
    const [arrivalStation, setArrivalStation] = useState(undefined);
    const [departureStation, setDepartureStation] = useState(undefined);
    const [submitBool, setSubmitBool] = useState(false);
    
    //Testing purposes, delete when done testing single trip features!! these gives the form a default trip search
    if (!departureStation){
        setDepartureStation("AC")
        setArrivalStation("AMR")
    }

    //object to be populated alongside station options in form with station codes 
    //and their full length name. Example: {"Amsterdam Centraal" : "ASD"}
    let stationCodes = {}

    //items to be passed into tripsList
    const lookupItems = {
        "rfcTime": timeSorter(selectedDate, selectedTime),
        "arrivalBool": arrivalBool,
        "stations": allStations,
        "departureStation": departureStation,
        "arrivalStation": arrivalStation,
    }

    //on click to renew tripsList
    //remember to add error msg if params are not filled!
    function setSearchBool () {
        setSubmitBool(false);
        setTimeout(()=>{
            setSubmitBool(true)
        }, 1)
    }

    useEffect(() => {
        axios.get('https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations', myRequest
        ).then(response => {
            setAllStations(response.data.payload)
        })
    }, [])

    if (allStations){
        return (
            <div id="train-planner">
                <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css" />
                <div id="form">
                        <input list="station1" className="station-input" id="departureStation" placeholder="from" onChange={(event)=>{setDepartureStation(stationCodes[event.target.value])}}></input>
                            <datalist id="station1">
                                {allStations.map(station => {
                                    if (station.namen && station.land==="NL"){
                                        stationCodes[station.namen.lang] = station.code
                                        return (
                                            <option key={station.code}>{station.namen.lang}</option>
                                            )
                                        }
                                    })}
                            </datalist>
                        <input list="station2" className="station-input" id="arrivalStation" placeholder="to" onChange={(event)=>{setArrivalStation(stationCodes[event.target.value])}}></input>
                        <datalist id="station2">
                            {allStations.map(station => {
                                if (station.namen && station.land==="NL"){
                                    return (
                                        <option key={station.EVACode}>{station.namen.lang}</option>
                                        )
                                    }
                                })}
                        </datalist>
                    <div className="date-and-time">
                        <select id="time-selector" className="selector" onChange={(event)=>{setSelectedTime(event.target.value)}}>
                            <option>{selectedTime}</option>
                                {timesArray.map(time => {
                                    return (
                                        <option key={time}>{time}</option>
                                        )
                                    })}
                        </select> 
                        <DatePicker className="selector2" selected={selectedDate} onChange={(event)=>{setSelectedDate(event)}}/>
                    </div>
                    <div className="arrival-departure-submit-btn">
                        <div className="dep-arr">
                            <h5 className={arrivalBool ? "selected-arrival-inactive arrivalBoolbtn" : "selected-arrival-active arrivalBoolbtn"} onClick={()=>setArrivalBool(false)}>Departure</h5>
                            <h5 className={arrivalBool ? "selected-arrival-active arrivalBoolbtn" : "selected-arrival-inactive arrivalBoolbtn"} onClick={()=>setArrivalBool(true)}>Arrival</h5>
                        </div>
                        <button className="submit-btn" onClick={setSearchBool}>search</button>
                    </div>
                    
                </div>
                {submitBool ? 
                    <TripsList 
                        prop = {lookupItems}
                    /> :
                    <></>
                }
            </div>   
        );
    } else {
        return (
            <div>
                <h1>loading...</h1>
            </div>
        )
    }
};

export default HomePage;



