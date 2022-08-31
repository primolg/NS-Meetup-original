import axios from "axios";

//action types
const SET_STUDENTS = 'SET_STUDENTS';
const SET_SINGLE_STUDENT = 'SET_SINGLE_STUDENT';

// action creators
const _setStudents = (students) => {
    return {
        type: SET_STUDENTS,
        students,
    };
};

const _setSingleStudent = (student) => {
    return {
        type: SET_SINGLE_STUDENT,
        student,
    }
}


export const fetchStudents = (id = 0) => {
    if (id > 0){
        return async (disbatch) => {
            const {data: student} = await axios.get(`/api/students/${id}`);
            disbatch(_setSingleStudent(student))
        }
    } else {
        return async (dispatch) => {
            const { data: students } = await axios.get('/api/students');
            dispatch(_setStudents(students));
        };
    }
};


export default (state = [], action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return action.students;
        case SET_SINGLE_STUDENT:
            return action.student;
        default:
            return state;
    }
};