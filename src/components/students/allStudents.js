import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "../../store/students";
import { Link } from "react-router-dom";
import CreateStudent from "./createStudent";
import { deleteStudent } from "../../store/students";


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

                    const handleDelete = (evnt) => {
                        const studentId = student.id
                        evnt.preventDefault();
                        dispatch(deleteStudent({ studentId }))
                    }

                    return (
                        <div key={student.id}>
                        <Link to={studentLink}>{student.firstName} {student.lastName}</Link>
                        <img width="100px" src={student.imageUrl}/>
                        <button onClick={handleDelete}>x</button>
                        </div>
                    );
                })}
            </ul>
            <div className="creatorDiv">
                <h4>Create New Student:</h4>
                <CreateStudent />
            </div>
        </div>
    )
}

export default AllStudents;

