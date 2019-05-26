import { createStore, applyMiddleware } from 'redux';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';

//initial state - global:
const initialState = {
    initialStateProp : 1
};

//SPECIFIC REDUCERS:


//cat reducer:

const catReducerInitialState = {
    catName : 'Initial cat name'
}

function catReducer(state = catReducerInitialState, action){
    switch(action.type){
        case 'CHANGE_CAT_NAME':
            console.log("CHANGED CAT NAME");
            return{
                ...state,
                catName: action.payload.newName
            };
        case 'ADD_CAT_AGE':
            console.log("ADD CAT AGE");
            return{
                ...state,
                age: action.payload.age
            };
        default:
            return state;
    
    }
}

//----------------------------------------------------------------

//dog reducer:

const dogReducerInitialState = {
    dogName : 'Initial dog name'
}

function dogReducer(state = dogReducerInitialState, action){
    switch(action.type){
        case 'CHANGE_DOG_NAME':
            console.log("CHANGED DOG NAME");
            return{
                ...state,
                dogName: action.payload.newName
            };
        case 'ADD_DOG_AGE':
            console.log("INSERTED DOG AGWe");
            return{
                ...state,
                age: action.payload.age
            };
        default:
            return state;
    
    }
}

//----------------------------------------------------------------

//combine the reducers:

const rootReducer = combineReducers({
    catReducer: catReducer,
    dogReducer: dogReducer
})



const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;