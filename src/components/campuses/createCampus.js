import React, { useState } from "react";
import { createCampus } from "../../store/Campuses";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CreateCampus = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ campusName, setCampusName ] = useState('vu');
    const [ campusAddress, setCampusAddress ] = useState('amsterdam');

    const handleChangeName = event => {
        setCampusName(event.target.value);
    };

    const handleChangeAddress = event => {
        setCampusAddress(event.target.value);
    };
    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        dispatch(createCampus({ campusName, campusAddress }));
        navigate('/campuses')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Campus Name:</label>
            <input name="campusName" value={campusName} onChange={ handleChangeName } placeholder="name"/>

            <label>Campus Address:</label>
            <input name="campusAddress" value={campusAddress} onChange={ handleChangeAddress } placeholder="address"/>

            <button type='submit'>Submit</button>
            <Link to='/'>Cancel</Link>
        </form>
    );
}

export default CreateCampus;