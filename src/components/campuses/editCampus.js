import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCampuses } from "../../store/Campuses";
import { editCampus } from "../../store/Campuses";

const EditCampus = () => {
    const dispatch = useDispatch();

    //Retrieving Campus
    const {id} = useParams();
    const getCampus = useSelector(state => state.campuses);
    const campus = getCampus[0];
    let campusId = undefined;

    useEffect(()=> {
        dispatch(fetchCampuses(id))
    }, [])

    if (getCampus.length === 1){
        campusId = getCampus[0].id
    };

    //Retrieving and submitting form inputs
    const [ name, setName ] = useState('');
    const [ address, setAddress ] = useState('');

    const handleChangeName = event => {
        setName(event.target.value);
    };

    const handleChangeAddress = event => {
        setAddress(event.target.value);
    };
    
    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        dispatch(editCampus({ campusId, name, address }));

    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Campus Name:</label>
            <input name="campusName" value={name} onChange={ handleChangeName } placeholder={campus.name}/>
            <br></br>
            <br></br>
            <label>Campus Address:</label>
            <input name="campusAddress" value={address} onChange={ handleChangeAddress } placeholder={campus.address}/>
            <br></br>
            <br></br>
            <button type='submit'>Submit</button>
            <br></br>
            <br></br>
        </form>
    );
}

export default EditCampus;
