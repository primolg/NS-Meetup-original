import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react'
//components
import TripPin from "./TripPin";
//other
import { mapKey } from "../../../secretKey";

const TripMap = ({location}) => {
    return (
        <div className="map">
            <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: mapKey }}
                defaultCenter={location}
                defaultZoom={16}
            >
                <TripPin
                    text={location.address}
                />
            </GoogleMapReact>
            </div>
        </div>
    )
}


export default TripMap;

