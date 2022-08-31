import axios from "axios";

//action types
const SET_CAMPUSES = 'SET_CAMPUSES';
const SET_SINGLE_CAMPUS = 'SET_SINGLE_CAMPUS'

// action creators
const _setCampuses = (campuses) => {
    return {
        type: SET_CAMPUSES,
        campuses,
    };
};

const _setSingleCampus = (campus) => {
    return {
        type: SET_SINGLE_CAMPUS,
        campus,
    }
}

export const fetchCampuses = (id = 0) => {
    if (id > 0){
        return async (dispatch) => {
            const {data: campus} = await axios.get(`/api/campuses/${id}`);
            dispatch(_setSingleCampus(campus))
        }
    } else {
        return async (dispatch) => {
            const { data: campuses } = await axios.get('/api/campuses');
            dispatch(_setCampuses(campuses));
        };
    }
};


export default (state = [], action) => {
    switch (action.type) {
        case SET_CAMPUSES:
            return action.campuses;
        case SET_SINGLE_CAMPUS:
            return action.campus;
        default:
            return state;
    }
};