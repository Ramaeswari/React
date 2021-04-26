import { combineReducers } from "redux";
import CounterReducer from './Counter'

const allReducers = combineReducers({
    counter: CounterReducer
});
export default allReducers;