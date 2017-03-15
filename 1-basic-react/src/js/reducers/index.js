import { combineReducers } from 'redux';

import tweets from './tweetsReducer';
import user from './userReducer'

export default combineReducers({
    tweets: tweets,
    user: user, //this user will be the user we talk as store.user in client.js
})