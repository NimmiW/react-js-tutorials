//this could be used as follows in any js
//import * as user from '../userActions'
//user.setUserName('Nimmi')
//if you want to import one action in a component
//import { setUserName } from '../userActions'

export function fetchUser() {
    return {
        type: 'FETCH_USER_FULFILLED',
        payload: {
            name: 'Nimmi',
            age: 35
        }
    }
}

export function setUserName(name) {
    return {
        type: 'SET_USER_NAME',
        payload: name,
    }
}

export function setUserAge(age) {
    return {
        type: 'SET_USER_AGE',
        payload: age,
    }
}