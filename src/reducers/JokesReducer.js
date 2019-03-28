import {get} from 'lodash';
import { 
    GET_JOKE,
    GET_JOKE_SUCCESS,
    GET_JOKE_FAIL,
    GET_JOKES,
    GET_JOKES_SUCCESS,
    GET_JOKES_FAIL
} from "../actions/JokesType";

const INITIAL_STATE = {
    loading: false,
    error: '',
    jokes: [],
    singleJoke: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_JOKE:
            return {...state, singleJoke: '', loading: true, error: null};
        case GET_JOKE_SUCCESS:
            return {...state, singleJoke: get(action, 'data', {}), loading: false, error: null};
        case GET_JOKE_FAIL:
            return {...state, loading: false, error: action.payload};
        case GET_JOKES:
            return {...state, jokes: [], loading: true, error: null};
        case GET_JOKES_SUCCESS:
            let jokeList = typeof action.data === 'object' ? [action.data] : action.data;
            return {...state, jokes: jokeList, loading: false, error: ''};
        case GET_JOKES_FAIL:
            return {...state, loading: false, error: action};
        default:
            return state;
    }
}