import axios from "axios";

//action types
const SET_STUDENTS = 'SET_STUDENTS';
const SET_SINGLE_STUDENT = 'SET_SINGLE_STUDENT';
const CREATE_STUDENT = 'CREATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';

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

const _deleteStudent = (student) => {
    return {
        type: DELETE_STUDENT,
        student
    }
}

const _setSingleStudent = (student) => {
    return {
        type: SET_SINGLE_STUDENT,
        student,
    }
}

const _editStudent = (student) => {
    return {
        type: EDIT_STUDENT,
        student,
    }
}

//thunk
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

export const deleteStudent = (student) => {
    const studentId = student.studentId;
    return async (dispatch) => {
        const {data: deleted } = await axios.delete(`/api/students/${studentId}`);
        dispatch(_deleteStudent(deleted));
    }
}

export const editStudent = (student) => {
    const studentId = student.studentId;
    const firstName = student.firstName;
    const lastName = student.lastName;
    const email = student.email;
    return async (dispatch) => {
        const { data: edited } = await axios.put(`/api/students/${studentId}`, {
            firstName,
            lastName,
            email,
        }) 
        dispatch(_editStudent(edited))
    }
}

export default (state = [], action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return action.students;
        case SET_SINGLE_STUDENT:
            return action.student;
        case CREATE_STUDENT:
            return [...state, action.student];
        case DELETE_STUDENT:
            const newState = state.filter(student => 
                student.id !== action.student.id
            )
            return [...newState]
        case EDIT_STUDENT:
            const newEditedState = state.map(student=>
                (student.id === action.student.id ? action.student : student)
            )
            return [...newEditedState];
        default:
            return state;
    }
};