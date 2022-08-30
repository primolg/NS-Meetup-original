import axios from "axios";

//action types
const SET_CAMPUSES = 'SET_CAMPUSES';

// action creators
const _setCampuses = (campuses) => {
    return {
        type: SET_CAMPUSES,
        campuses,
    };
};

export const fetchCampuses = () => {
    return async (dispatch) => {
        const { data: campuses } = await axios.get('/api/campuses');
        dispatch(_setCampuses(campuses));
    };
};

// export const fetchSingleCampus = () => {
//     return async (dispatch) => {
//         const { data: campus } await axios.get('/api/campuses/')
//     }
// }

export default (state = [], action) => {
    switch (action.type) {
        case SET_CAMPUSES:
            return action.campuses;
        default:
            return state;
    }
};