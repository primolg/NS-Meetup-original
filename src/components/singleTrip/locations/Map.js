import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react'
//components
import LocationPin from "./LocationPin";
//other
import { mapKey } from "../../../../secretKey";

const Map = ({location, defaultZoom}) => {
    return (
        <div className="map" id={location.address}>
            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: mapKey }}
                    defaultCenter={location}
                    defaultZoom={defaultZoom}
                >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}


export default Map;

