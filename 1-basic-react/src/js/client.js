/*import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);*/

import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
//redux-promise substitutinf thunk or addtion to thunk

const initialState = {
    fetching: false,
    fetched: false,
    friends: [],
    error: null
}

const reducer = function(state = initialState, action) {
 if(action.type == 'FETCH_FRIENDS_START'){
     return {...state, fetching: true};
 }
 if(action.type == 'RECEIVE_FRIENDS'){
     return {
         ...state, 
         fetching: false, 
         fetched:true, 
         friends:action.payload
     };
 }
 if(action.type == 'FETCH_FRIENDS_ERROR'){
     return {...state, fetching: false, error: action.payload};
 }
 return state;
}

const middleware = applyMiddleware(thunk, logger()); // add the middle ware list here

const store = createStore(reducer, 0, middleware);

store.subscribe(() => {
    console.log('store changed',store.getState())
})

//mutiple actions are happening with one async action
store.dispatch((dispatch) => {
    dispatch({type: 'FETCH_FRIENDS_START'}) ;
    //http://rest.learncode.academy/api/learncode/friends
    axios.get('http://rest.learncode.academy/api/learncode/friends')
        .then((reponse) => {
            dispatch({type:'RECEIVE_FRIENDS', payload:response})
        })
        .catch((err) => {
            dispatch({type:'FETCH_FRIENDS_ERROR', payload:err})
        })
    
})
