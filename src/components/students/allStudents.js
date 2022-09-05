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
        <div className="outer-div">
            <div className="left-div">
                <h1 className="list-title">Students</h1>
                    {students.map((student) => {
                        const studentLink = `/students/${student.id}`

                        const handleDelete = (evnt) => {
                            const studentId = student.id
                            evnt.preventDefault();
                            dispatch(deleteStudent({ studentId }))
                        }

                        return (
                            <div className="list-item" key={student.id}>
                                <div className="name-img">
                                    <Link className='text-link' to={studentLink}>{student.firstName} {student.lastName}</Link>
                                    <img className="profile-images" src={student.imageUrl}/>
                                </div>
                                <div className="delete-button">
                                    <button onClick={handleDelete}>x</button>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className="right-div">
                <h4>Add Student</h4>
                <CreateStudent />
            </div>
        </div>
    );
};

export default AllStudents;

