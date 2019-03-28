
import { combineReducers } from 'redux';
import AdviceReducer from './AdviceReducer';
import JokeReducer from './JokesReducer';

export default combineReducers({
    advice: AdviceReducer,
    joke: JokeReducer
})