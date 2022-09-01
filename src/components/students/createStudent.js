import React, { useState } from "react";
import { createStudent } from "../../store/students";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CreateStudent = () => {
    const dispatch = useDispatch();

    const [ studentFirstName, setstudentFirstName ] = useState('');
    const [ studentLastName, setstudentLastName ] = useState('');
    const [ studentEmail, setstudentEmail ] = useState('');

    const handleChangeFirstName = event => {
        setstudentFirstName(event.target.value);
    };

    const handleChangeLastName = event => {
        setstudentLastName(event.target.value);
    };
    
    const handleChangeEmail = event => {
        setstudentEmail(event.target.value);
    };

    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        dispatch(createStudent({ studentFirstName, studentLastName, studentEmail }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Student First Name:</label>
            <input name="studentFirstName" value={studentFirstName} onChange={ handleChangeFirstName } placeholder="first name"/>
            <br></br>
            <br></br>
            <label>Student Last Name:</label>
            <input name="studentLasstName" value={studentLastName} onChange={ handleChangeLastName } placeholder="last name"/>
            <br></br>
            <br></br>
            <label>Student Email:</label>
            <input name="studentEmail" value={studentEmail} onChange={ handleChangeEmail } placeholder="email"/>
            <br></br>
            <br></br>
            <button type='submit'>Submit</button>
            <br></br>
            <br></br>
        </form>
    );
}

export default CreateStudent;