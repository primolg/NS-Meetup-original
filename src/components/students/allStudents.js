import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "../../store/students";
import { Link } from "react-router-dom";

const AllStudents = () => {
    const students = useSelector(state => state.students);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchStudents())
    }, [])


    return (
        <div>
            <h1>Students:</h1>
            <ul>
                {students.map((student) => {
                    const studentLink = `/students/${student.id}`
                    return (
                        <div key={student.id}>
                        <Link to={studentLink}>{student.firstName} {student.lastName}</Link>
                        <img width="100px" src={student.imageUrl}/>
                        </div>
                    );
                })}
            </ul>
        </div>
    )
}

export default AllStudents;

