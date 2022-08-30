import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "../../store/students";

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
                    return (
                        <li key={student.id}>
                        <p>{student.firstName} {student.lastName}</p>
                        <p>GPA: {student.gpa}</p>
                        <img width="100px" src={student.imageUrl}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default AllStudents;

