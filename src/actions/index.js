import {GET_ADVICE, GET_ADVICE_SUCCESS, GET_ADVICE_FAIL} from './AdviceType';
import {
    GET_JOKE, 
    GET_JOKE_SUCCESS, 
    GET_JOKE_FAIL,
    GET_JOKES, 
    GET_JOKES_SUCCESS, 
    GET_JOKES_FAIL
} from './JokesType';

import JokeService from "../services/JokeService";
import AdviceService from "../services/AdviceService";

export const getDadJokes = (search) => async (dispatch) => {
    dispatch({type: GET_JOKES});

    JokeService.getDadJokes(search)
        .then(payload => {
            dispatch({type: GET_JOKES_SUCCESS, data: payload});
        })
        .then(payload => {
            dispatch({type: GET_JOKES_FAIL, data: payload});
        })
};

export const getDadJoke = (search) => async (dispatch) => {
    dispatch({type: GET_JOKE});

    JokeService.getDadJokes(search)
        .then(payload => {
            dispatch({type: GET_JOKE_SUCCESS, data: payload});
        })
        .then(payload => {
            dispatch({type: GET_JOKE_FAIL, payload});
        })
};

export const getDadJokeByID = (id) => async (dispatch) => {
    dispatch({type: GET_JOKE});

    JokeService.getDadJokeByID(id)
        .then(payload => {
            dispatch({type: GET_JOKE_SUCCESS, data: payload});
        })
        .then(payload => {
            dispatch({type: GET_JOKE_FAIL, payload});
        })
};

export const getGeekJoke = () => async (dispatch) => {
    dispatch({type: GET_JOKE});
    
    JokeService.getGeekJoke()
        .then(payload => {
            dispatch({type: GET_JOKE_SUCCESS, data: payload});
        })
        .then(payload => {
            dispatch({type: GET_JOKE_FAIL, payload});
        })
};

export const getAdvice = () => async (dispatch) => {
    dispatch({type: GET_ADVICE});

    AdviceService.getAdvice()
        .then(payload => {
            dispatch({type: GET_ADVICE_SUCCESS, data: payload});
        })
        .then(payload => {
            dispatch({type: GET_ADVICE_FAIL, payload});
        })
};