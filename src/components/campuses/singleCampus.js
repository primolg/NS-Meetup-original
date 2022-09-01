import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCampuses } from "../../store/Campuses";
import { fetchStudents } from "../../store/students";
import { Link } from "react-router-dom";

const SingleCampus = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    console.log(id)

    const getCampus = useSelector(state => state.campuses);
    const campus = getCampus[0]
    let campusId = undefined

    const getStudents = useSelector(state => state.students);
    const studentList = [];

    useEffect(()=> {
        dispatch(fetchCampuses(id))
        dispatch(fetchStudents())
    }, [])

    if (getCampus.length === 1){
        campusId = getCampus[0].id
    };

    if (campusId) {
        for (let i = 0; i < getStudents.length; i++){
            if (getStudents[i].campusId === campusId){
                studentList.push(getStudents[i])
            }
        }
    }

    return (
        <div>
            <div key={campus.id}>
            <p>{campus.name}, {campus.address}</p>
            <p>{campus.description}</p>
            <img width="100px" src={campus.imageUrl}/>
            <p>students:</p>
            <ul>
                {studentList.length ? (studentList.map((student)=>{
                    return (
                        <li key={student.id}>
                        <Link to={'/students/'+student.id}>{student.firstName}</Link>
                        </li>
                    )
                })) : <li>No Students Found</li>}
            </ul>
            </div>
        </div>
    )
}

export default SingleCampus;

