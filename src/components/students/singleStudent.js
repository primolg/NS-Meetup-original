import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStudents } from '../../store/students';

const SingleStudent = () => {

    const {id} = useParams();
    const student = useSelector(state => state.students);
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(fetchStudents(id))
    }, [])


    // full name, email, image, and gpa

    return (
        <div>
            {student.map((student) => {
                    return (
                        <div key={student.id}>
                        <p>{student.lastName}, {student.firstName}</p>
                        <img width="100px" src={student.imageUrl} />
                        <p>gpa: {student.gpa}</p>
                        <p>contact: {student.email}</p>
                        </div>
                    );
                })}
        </div>
    )
}

export default SingleStudent;

