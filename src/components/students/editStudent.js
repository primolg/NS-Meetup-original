import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStudents } from "../../store/students";
import { editStudent } from "../../store/students";

const EditStudent = () => {
    const dispatch = useDispatch();

    //Retrieving Campus
    const {id} = useParams();
    const getStudent = useSelector(state => state.students);
    const student = getStudent[0];
    let studentId = undefined;

    useEffect(()=> {
        dispatch(fetchStudents(id))
    }, []);

    if (getStudent.length === 1){
        studentId = getStudent[0].id;
    };

    //Retrieving and submitting form inputs
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');

    const handleChangeFirstName = event => {
        setFirstName(event.target.value);
    };
    const handleChangeLastName = event => {
        setLastName(event.target.value);
    };

    const handleChangeEmail = event => {
        setEmail(event.target.value);
    };
    
    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        dispatch(editStudent({ studentId, firstName, lastName, email }));
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>Student First Name:</label>
            <input name="studentFirstName" value={firstName} onChange={ handleChangeFirstName } placeholder={student.firstName}/>
            <br></br>
            <br></br>
            <label>Student Last Name:</label>
            <input name="studentLastName" value={lastName} onChange={ handleChangeLastName } placeholder={student.lastName}/>
            <br></br>
            <br></br>
            <label>Email Address:</label>
            <input name="studentEmail" value={email} onChange={ handleChangeEmail } placeholder={student.email}/>
            <br></br>
            <br></br>
            <button type='submit'>Submit</button>
            <br></br>
            <br></br>
        </form>
    );
};

export default EditStudent;
