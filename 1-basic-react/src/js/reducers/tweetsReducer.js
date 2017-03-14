export default function reducer(state={ //default ES6 state 
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
}, action){
    switch(action.type){
        case 'FETCH_TWEETS': {
            return {...state, fetching: true};
        }
        case 'FETCH_TWEETS_REJECTED': {
            return {...state, fetching: false, error: action.payload};
        }
        case 'FETCH_TWEETS_FULFILLED': {
            return {
                ...state, 
                fetching: false,
                fetched: true,
                tweets: action.payload,
            };
        }
        case 'ADD_TWEET': {
            return {
                ...state,
                tweets: [...state.tweets, action.payload],
            };
        }
        //case 'UPDATE_TWEET': {
        //    const {}
        //}
        return state;
    }
}