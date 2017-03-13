/*import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);*/

import { applyMiddleware, createStore } from "redux";

const reducer = function(state, action) {
 if(action.type == 'INC'){
     return state + action.payload;
 }
 if(action.type == 'DEC'){
     return state - action.payload;
 }
 if(action.type == 'E'){
     return new Error("Error : " , action.payload);
 }
 return state;
}

//logger is a middleware, npm packages are available, but this manual
const logger = (store) => (next) => (action) => {
    // this the middleware code, anithing even, action.type='DEC' :)
    console.log('action fired ', action); 
    //reducers will not execute unless you secify the next in the middleware
    next(action); //reducer call
}

//error is another middleware
const error = (store) => (next) => (action) => {
    try {
        next(action); // tries the reducer function
    } catch(e) {
        console.log('AHHHH I am in the catch clause : ', e);
    }
    
}

const middleware = applyMiddleware(logger,error); // add the middle ware list here

const store = createStore(reducer, 0, middleware);

store.subscribe(() => {
    console.log('store changed',store.getState())
})

store.dispatch({type: 'INC', payload:1}) //run through reducer
store.dispatch({type: 'DEC', payload:1}) 
store.dispatch({type: 'DEC', payload:100}) 
store.dispatch({type: 'INC', payload:1}) 
store.dispatch({type: 'E', payload:'Oops! This is an Error!'}) 