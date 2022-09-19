import React, {useState, useEffect} from "react";
import DatePicker from 'react-datepicker'
import axios from "axios";
import secretKey from "../../../secretKey";
import timesArray from "./timeTable"


const HomePage = () => {
    const date = new Date();
    const time = date.getHours()+ ":" + (date.getMinutes().toString().length === 1 ? "0"+date.getMinutes() : date.getMinutes());
    const [allStations, setAllStations] = useState(["loading.."]);
    const [selectedDate, setSelectedDate] = useState(date);
    const [selectedTime, setSelectedTime] = useState(time)
    const [arrivalBool, setArrivalBool] = useState(false)
    const stationCodes = {}
    const timesArray = []

    for (let i = 0; i < 24; i++){
        timesArray.push(i + ":00", i + ":15", i + ":30", i + ":45")
    }

    function setTimeFunc () {
        const timeVal = document.getElementById("timeSelector").value;
        console.log(timeVal)
    }

    function setArrivalTrue (){
        setArrivalBool(true)
    }

    function setArrivalFalse (){
        setArrivalBool(false)
    }

    const myRequest = {
        method: 'GET',
        headers: {
            'X-Host-Override': 'gateway.apiportal.ns.nl',
            'Ocp-Apim-Subscription-Key': secretKey
        }
    };
    
    useEffect(() => {
        axios.get('https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations', myRequest
        ).then(response => {
            setAllStations(response.data.payload)
        })
    }, [])

    if (allStations.length){
        return (
            <div>
                <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css" />
                {/* firstLayer */}
                <div className="center-text">
                    <h5>Van:</h5>
                    <input list="station1"></input>
                        <datalist id="station1">
                            {allStations.map(station => {
                                if (station.namen && station.land==="NL"){
                                    stationCodes[station.namen.lang] = station.code
                                    return (
                                        <option key={station.EVACode}>{station.namen.lang}</option>
                                    )
                                }
                            })}
                        </datalist>
                    <h5>Naar:</h5>
                    <input list="station2"></input>
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
                    <h5 className={arrivalBool ? "selected-arrival-inactive arrivalBoolbtn" : "selected-arrival-active arrivalBoolbtn"} onClick={setArrivalFalse}>Vertrek</h5>
                    <h5 className={arrivalBool ? "selected-arrival-active arrivalBoolbtn" : "selected-arrival-inactive arrivalBoolbtn"} onClick={setArrivalTrue}>Aankomst</h5>
                    <select id="timeSelector" className="selector" onChange={setTimeFunc}>
                        <option>{selectedTime}</option>
                        {timesArray.map(time => {
                            return (
                                <option key={time}>{time}</option>
                            )
                        })}
                    </select> 
                    <DatePicker className="selector2" selected={selectedDate} onChange={date => setSelectedDate(date)}/></div>
            </div>
        
        );
    } else {
        console.log("loading")
        return (
            <div>
                <h1>loading...</h1>
            </div>
        )
    }
};

export default HomePage;



