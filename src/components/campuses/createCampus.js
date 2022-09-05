import React, { useState } from "react";
import { createCampus } from "../../store/Campuses";
import { useDispatch } from "react-redux";

const CreateCampus = () => {
    const dispatch = useDispatch();

    const [ campusName, setCampusName ] = useState('');
    const [ campusAddress, setCampusAddress ] = useState('');

    const handleChangeName = event => {
        setCampusName(event.target.value);
    };

    const handleChangeAddress = event => {
        setCampusAddress(event.target.value);
    };
    
    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        dispatch(createCampus({ campusName, campusAddress }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <br></br>
            <input name="campusName" value={campusName} onChange={ handleChangeName } placeholder="name"/>
            <br></br>
            <br></br>
            <label>Address:</label>
            <br></br>
            <input name="campusAddress" value={campusAddress} onChange={ handleChangeAddress } placeholder="address"/>
            <br></br>
            <br></br>
            <button type='submit'>Submit</button>
            <br></br>
            <br></br>
        </form>
    );
}

export default CreateCampus;