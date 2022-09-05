import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCampuses } from "../../store/Campuses";
import { fetchStudents } from "../../store/students";
import { Link } from "react-router-dom";
import EditCampus from "./editCampus";
import { changeStudentStatus } from "../../store/students";

const SingleCampus = () => {

    const {id} = useParams();
    const dispatch = useDispatch();

    const getCampus = useSelector(state => state.campuses);
    const campus = getCampus[0];
    let campusId = undefined;

    const getStudents = useSelector(state => state.students);
    const studentList = [];

    useEffect(()=> {
        dispatch(fetchCampuses(id))
        dispatch(fetchStudents())
    }, []);

    if (getCampus.length === 1){
        campusId = getCampus[0].id;
    };

    if (campusId) {
        for (let i = 0; i < getStudents.length; i++){
            if (getStudents[i].campusId === campusId){
                studentList.push(getStudents[i]);
            }
        }
    };

    return (
        <div className="outer-div">
            <div className="left-div">
                <div className="single-item-div" key={campus.id}>
                    <div className="single-item-info">
                        <p className="single-item-name">{campus.name}</p>
                        <p>{campus.address}</p>
                        <p>{campus.description}</p>
                        <p>students:</p>
                        <ul>
                            {studentList.length ? (studentList.map((student)=>{
                                const studentId = student.id
                                const handleSubmit = (evnt) => {
                                    evnt.preventDefault();
                                    dispatch(changeStudentStatus({ studentId }));
                                }
                                
                                return (
                                    <li key={student.id}>
                                    <Link to={'/students/'+student.id}>{student.firstName}   </Link>
                                    <button onClick={handleSubmit} >X</button>
                                    </li>
                                )
                            })) : <li>No Students Found</li>}
                        </ul>   
                    </div>
                    <div className="single-item-img">
                        <img width="100px" src={campus.imageUrl}/>
                    </div>
                </div>
            </div>
            <div className="right-div">
                <div className="creatorDiv">
                    <h4>Edit Campus:</h4>
                    <EditCampus />
                </div>
            </div>
        </div>
    );
};

export default SingleCampus;

