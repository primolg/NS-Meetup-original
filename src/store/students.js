import axios from "axios";

//action types
const SET_STUDENTS = 'SET_STUDENTS';
const SET_SINGLE_STUDENT = 'SET_SINGLE_STUDENT';
const CREATE_STUDENT = 'CREATE_STUDENT';

// action creators
const _setStudents = (students) => {
    return {
        type: SET_STUDENTS,
        students,
    };
};

const _createStudent = (student) => {
    return {
        type: CREATE_STUDENT,
        student,
    }
}

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

export const createStudent = (student) => {
    const studentFirstName = student.studentFirstName;
    const studentLastName = student.studentLastName;
    const studentEmail = student.studentEmail;
    return async (dispatch) => {
        const { data: created } = await axios.post('/api/students', {
            firstName: studentFirstName,
            lastName: studentLastName,
            email: studentEmail,
        });
        dispatch(_createStudent(created));
    };
};


export default (state = [], action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return action.students;
        case SET_SINGLE_STUDENT:
            return action.student;
        case CREATE_STUDENT:
            return [...state, action.student];
        default:
            return state;
    }
};