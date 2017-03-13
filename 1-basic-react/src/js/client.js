/*import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);*/

import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';

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

const middleware = applyMiddleware(logger()); // add the middle ware list here

const store = createStore(reducer, 0, middleware);

store.subscribe(() => {
    console.log('store changed',store.getState())
})

store.dispatch({type: 'INC', payload:1}) //run through reducer
store.dispatch({type: 'DEC', payload:1}) 
store.dispatch({type: 'DEC', payload:100}) 
store.dispatch({type: 'INC', payload:1}) 
//store.dispatch({type: 'E', payload:'Oops! This is an Error!'}) 