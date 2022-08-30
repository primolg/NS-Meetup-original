import axios from "axios";

//action types
const SET_STUDENTS = 'SET_STUDENTS';

// action creators
const _setStudents = (students) => {
    return {
        type: SET_STUDENTS,
        students,
    };
};


export const fetchStudents = () => {
    return async (dispatch) => {
        const { data: students } = await axios.get('/api/students');
        dispatch(_setStudents(students));
    };
};

export default (state = [], action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return action.students;
        default:
            return state;
    }
};