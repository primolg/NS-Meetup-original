import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//components


const TripView = () => {
    const {id} = useParams()
    return(
            <div>
                <h1>{id}</h1>
            </div>
    );
};

export default TripView;