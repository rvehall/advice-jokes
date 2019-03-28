import {get} from 'lodash';
import { GET_ADVICE, GET_ADVICE_SUCCESS, GET_ADVICE_FAIL } from "../actions/AdviceType";

const INITIAL_STATE = {
    loading: false,
    error: null,
    pieceOfAdvice: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ADVICE:
            return {...state, pieceOfAdvice: {}, loading: true, error: null};
        case GET_ADVICE_SUCCESS:
            return {...state, pieceOfAdvice: get(action, 'data.slip', {}), loading: false, error: null};
        case GET_ADVICE_FAIL:
            return {...state, loading: false, error: action.payload};

        default:
            return state;
    }
}