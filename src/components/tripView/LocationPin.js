import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({name}) => {
    return (
        <div className="pin">
            <Icon icon={locationIcon} className="pin-icon" />
            <p className="pin-text">{name}</p>
        </div>
    )
}


export default LocationPin;

