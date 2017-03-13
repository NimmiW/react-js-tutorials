/*import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);*/

import { combineReducers, createStore } from "redux";

const userReducer = function(state = {}, action) {
    switch(action.type){
        case 'CHANGE_NAME':{
            //state.name = action.payload; //mutate 
            state = {...state, name: action.payload} //override the name
            break;
        }
        case 'CHANGE_AGE':{
            //state.age = action.payload;
            state = {...state, age: action.payload}
            break;
        }        
    }
    return state;
}

const tweetsReducer = function(state = [], action){
    return state;
}

const reducers = combineReducers({
    user: userReducer, 
    //when user reducer executes, that state will be the 
    //user object in the store
    tweets: tweetsReducer
    //when tweets reducer executes, that state will be the 
    //tweets array in the store
})

/*const store = createStore(reducers, {
    user: {
        name: 'nimmi',
        age: '23'
    },
    tweets: []
});*/   // in this exampe we do not set default values

const store = createStore(reducers);

store.subscribe(() => {
    console.log('store changed',store.getState())
})

store.dispatch({type: 'CHANGE_NAME', payload:'Nimmi'}) //run through reducers
store.dispatch({type: 'CHANGE_AGE', payload:23}) 
store.dispatch({type: 'CHANGE_AGE', payload:24}) 