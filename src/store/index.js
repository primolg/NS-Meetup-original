import {createStore, applyMiddleware, combineReducers} from "redux";
import loggingMiddleWare from 'redux-logger';
import thunk from "redux-thunk";
import campusesReducer from './Campuses';
import studentsReducer from './students';

const rootReducer = combineReducers({
    campuses: campusesReducer,
    students: studentsReducer,
});

export default createStore(
    rootReducer,
    applyMiddleware(thunk, loggingMiddleWare)
);