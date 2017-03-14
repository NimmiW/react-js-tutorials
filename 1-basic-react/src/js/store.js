import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'edux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware)   //createStore(reducer, 0, middleware);