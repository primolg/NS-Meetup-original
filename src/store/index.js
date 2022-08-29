import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";


// function configureStore() {
//     // return createStore(########, applyMiddleware(thunk));
// }

// export default configureStore;
const initialState = [{name:"primo", school:"CCNY"}, {name:'Manegbe', school:"CCNY"}];
const store = createStore((state = initialState, action) => {
    switch(action.type) {
        case 
    }
})