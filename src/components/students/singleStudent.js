import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStudents } from '../../store/students';
import { fetchCampuses } from "../../store/Campuses";
import { Link } from "react-router-dom";
import EditStudent from "./editStudent";

const SingleStudent = () => {

    const {id} = useParams();
    const dispatch = useDispatch();

    const getStudent = useSelector(state => state.students);
    const student = getStudent[0];

    const getCampus = useSelector(state => state.campuses);
    let campusName = "No campus found.";
    let campusId = ''
    
    useEffect(()=> {
        dispatch(fetchStudents(id));
        dispatch(fetchCampuses());
    }, [])

    getCampus.map((campus) => {
        if (campus.id === student.campusId){
            campusName = campus.name;
            campusId = campus.id;
        }
    })

    return (
        <div>
            <div key={student.id}>
            <p>{student.lastName}, {student.firstName}</p>
            <img width="100px" src={student.imageUrl} />
            <p>GPA: {student.gpa}</p>
            <p>Contact: {student.email}</p>
            <p>Campus: <Link to={'/campuses/'+ campusId}>{campusName}</Link></p>
            </div>
            <div className="creatorDiv">
                <h4>Edit Student:</h4>
                <EditStudent />
            </div>
        </div>
    )
}

export default SingleStudent;

