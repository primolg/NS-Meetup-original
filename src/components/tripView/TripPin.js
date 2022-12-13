import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const TripPin = ({text}) => {
    return (
        <div className="pin">
            <Icon icon={locationIcon} className="pin-icon" />
            <p className="pin-text">{text}</p>
        </div>
    )
}


export default TripPin;

