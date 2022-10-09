import React, {useState, useEffect} from "react";
import DatePicker from 'react-datepicker'
import axios from "axios";
import {myRequest} from "../../../secretKey";
import {timesArray, monthsToNum} from "./plannerFunctions"
import TripsList from "./tripsList";


const HomePage = () => {
    const date = new Date();
    const time = date.getHours()+ ":" + (date.getMinutes().toString().length === 1 ? "0"+date.getMinutes() : date.getMinutes());
    const [allStations, setAllStations] = useState(undefined);
    const [selectedDate, setSelectedDate] = useState(date);
    const [selectedTime, setSelectedTime] = useState(time.length > 4 ? time : "0" + time)
    const [arrivalBool, setArrivalBool] = useState(false)
    const [arrivalStation, setArrivalStation] = useState(undefined)
    const [departureStation, setDepartureStation] = useState(undefined)
    const [submitBool, setSubmitBool] = useState(false)
    let stationCodes = {}

    const lookupItems = {
        "rfcTime": timeSorter(),
        "arrivalBool": arrivalBool,
        "stations": allStations,
        "departureStation": departureStation,
        "arrivalStation": arrivalStation
    }
    
    function setTimeFunc () {
        const timeVal = document.getElementById("timeSelector").value;
        setSelectedTime(timeVal);
    }

    function setDateFunc (date) {
        setSelectedDate(date);
    }

    function setDepartureFunc () {
        const departureVal = document.getElementById("departureStation").value;
        setDepartureStation(stationCodes[departureVal]);
    }

    function setArrivalFunc () {
        const arrivalVal = document.getElementById("arrivalStation").value;
        setArrivalStation(stationCodes[arrivalVal]);
    }

    function setSearchBool () {
        setSubmitBool(false);
        setTimeout(()=>{
            setSubmitBool(true)
        }, 1)
    }

    function timeSorter(){
        return  (
            selectedDate.toString().slice(11,15) 
            + "-" + monthsToNum[selectedDate.toString().slice(4,7)] 
            + "-" + selectedDate.toString().slice(8, 10)
            + "T" + selectedTime
            + ":00Z" 
        )
    }

    useEffect(() => {
        axios.get('https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations', myRequest
        ).then(response => {
            setAllStations(response.data.payload)
        })
    }, [])


    if (allStations){
        return (
            <div>
                <div>
                    <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css" />
                    {/* firstLayer */}
                    <div className="center-text">
                        <h5>Van:</h5>
                        <input list="station1" id="departureStation" onChange={setDepartureFunc}></input>
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
                        <h5>Naar:</h5>
                        <input list="station2" id="arrivalStation" onChange={setArrivalFunc}></input>
                            <datalist id="station2">
                                {allStations.map(station => {
                                    if (station.namen && station.land==="NL"){
                                        stationCodes[station.namen.lang] = station.code
                                        return (
                                            <option key={station.EVACode}>{station.namen.lang}</option>
                                        )
                                    }
                                })}
                            </datalist>  
                    </div>
                    {/* Second Layer */}
                    <div className="center-text">
                        <h5>Tijd van  </h5>
                        <h5 className={arrivalBool ? "selected-arrival-inactive arrivalBoolbtn" : "selected-arrival-active arrivalBoolbtn"} onClick={()=>setArrivalBool(false)}>Vertrek</h5>
                        <h5 className={arrivalBool ? "selected-arrival-active arrivalBoolbtn" : "selected-arrival-inactive arrivalBoolbtn"} onClick={()=>setArrivalBool(true)}>Aankomst</h5>
                        <select id="timeSelector" className="selector" onChange={setTimeFunc}>
                            <option>{selectedTime}</option>
                            {timesArray.map(time => {
                                return (
                                    <option key={time}>{time}</option>
                                )
                            })}
                        </select> 
                        <DatePicker className="selector2" selected={selectedDate} onChange={date => setDateFunc(date)}/>
                        <button onClick={setSearchBool}>submit</button>
                    </div>
                </div>
                <div>
                    {submitBool ? 
                        <TripsList 
                            prop = {lookupItems}
                        /> :
                        <></>
                    }
                </div>
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



