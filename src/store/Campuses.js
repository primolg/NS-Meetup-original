import axios from "axios";

//action types
const SET_CAMPUSES = 'SET_CAMPUSES';
const SET_SINGLE_CAMPUS = 'SET_SINGLE_CAMPUS'
const CREATE_CAMPUS = 'CREATE_CAMPUS';

// action creators
const _setCampuses = (campuses) => {
    return {
        type: SET_CAMPUSES,
        campuses,
    };
};

const _createCampus = (campus) => {
    return {
        type: CREATE_CAMPUS,
        campus,
    }
}

const _setSingleCampus = (campus) => {
    return {
        type: SET_SINGLE_CAMPUS,
        campus,
    }
}

//thunk

export const fetchCampuses = (id) => {
    if (id == undefined){
        return async (dispatch) => {
            const { data: campuses } = await axios.get('/api/campuses');
            dispatch(_setCampuses(campuses));
        };
    } else {
        return async (dispatch) => {
            const {data: campus} = await axios.get(`/api/campuses/${id}`);
            dispatch(_setSingleCampus(campus))
        }
    }
};

export const createCampus = (campus) => {
    const campusName = campus.campusName;
    const campusAddress = campus.campusAddress;
    return async (dispatch) => {
        const { data: created } = await axios.post('/api/campuses', {
            name: campusName,
            address: campusAddress,
        });
        dispatch(_createCampus(created));
    };
};

export default (state = [], action) => {
    switch (action.type) {
        case SET_CAMPUSES:
            return action.campuses;
        case SET_SINGLE_CAMPUS:
            return action.campus;
        case CREATE_CAMPUS:
            return [...state, action.campus];
        default:
            return state;
    }
};